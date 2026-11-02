import { useState, useRef, useEffect, useCallback } from 'react';
import { api } from '../services/api.js';

/**
 * useVoiceAssistant Hook
 * ----------------------
 * Manages client-side microphone recording (STT) and Gemini TTS audio playback.
 * Strictly adheres to provider separation:
 * - Gemini API: Exclusively for Speech-to-Text and Text-to-Speech.
 * - OpenRouter API: Handled independently by the chat/mentor services.
 */
export function useVoiceAssistant({ onTranscription, onAutoSubmit } = {}) {
  // Voice Input States
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [voiceInputError, setVoiceInputError] = useState(null);

  // Voice Output States
  const [playingMessageId, setPlayingMessageId] = useState(null);
  const [playbackStatus, setPlaybackStatus] = useState('idle'); // 'idle' | 'synthesizing' | 'playing' | 'paused' | 'error'
  const [playbackError, setPlaybackError] = useState(null);

  // User Voice Preferences (persisted in localStorage)
  const [preferredVoice, setPreferredVoiceState] = useState(() => {
    return localStorage.getItem('codementor_voice_pref') || 'Puck';
  });
  const [autoSpeak, setAutoSpeakState] = useState(() => {
    return localStorage.getItem('codementor_autospeak') === 'true';
  });
  const [handsFree, setHandsFreeState] = useState(() => {
    return localStorage.getItem('codementor_handsfree') === 'true';
  });
  const [useNativeSTT, setUseNativeSTTState] = useState(() => {
    return localStorage.getItem('codementor_native_stt') === 'true';
  });

  // Audio & Media Refs
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const mediaStreamRef = useRef(null);
  const timerRef = useRef(null);
  const audioElementRef = useRef(null);
  const currentAudioUrlRef = useRef(null);
  const recognitionRef = useRef(null);

  // Preference Setters with localStorage persistence
  const setPreferredVoice = useCallback((voice) => {
    setPreferredVoiceState(voice);
    localStorage.setItem('codementor_voice_pref', voice);
  }, []);

  const setAutoSpeak = useCallback((enabled) => {
    setAutoSpeakState(enabled);
    localStorage.setItem('codementor_autospeak', String(enabled));
  }, []);

  const setHandsFree = useCallback((enabled) => {
    setHandsFreeState(enabled);
    localStorage.setItem('codementor_handsfree', String(enabled));
  }, []);

  const setUseNativeSTT = useCallback((enabled) => {
    setUseNativeSTTState(enabled);
    localStorage.setItem('codementor_native_stt', String(enabled));
  }, []);

  // Cleanup helper for media stream tracks
  const stopMediaTracks = useCallback(() => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => {
        try {
          track.stop();
        } catch (_) {}
      });
      mediaStreamRef.current = null;
    }
  }, []);

  // Cleanup helper for audio playback resources
  const cleanupAudioPlayback = useCallback(() => {
    if (audioElementRef.current) {
      try {
        audioElementRef.current.pause();
        audioElementRef.current.currentTime = 0;
        audioElementRef.current.src = '';
      } catch (_) {}
      audioElementRef.current = null;
    }
    if (currentAudioUrlRef.current) {
      try {
        URL.revokeObjectURL(currentAudioUrlRef.current);
      } catch (_) {}
      currentAudioUrlRef.current = null;
    }
    setPlayingMessageId(null);
    setPlaybackStatus('idle');
  }, []);

  // Stop recording timer
  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Component unmount cleanup
  useEffect(() => {
    return () => {
      stopMediaTracks();
      cleanupAudioPlayback();
      stopTimer();
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (_) {}
      }
    };
  }, [stopMediaTracks, cleanupAudioPlayback, stopTimer]);

  /**
   * Determine best supported MIME type for browser audio recording
   */
  const getSupportedMimeType = () => {
    if (typeof MediaRecorder === 'undefined') return '';
    const types = [
      'audio/webm;codecs=opus',
      'audio/webm',
      'audio/ogg;codecs=opus',
      'audio/mp4'
    ];
    for (const type of types) {
      if (MediaRecorder.isTypeSupported(type)) {
        return type;
      }
    }
    return '';
  };

  /**
   * Start Voice Recording
   */
  const startRecording = useCallback(async () => {
    setVoiceInputError(null);

    // Optional fast-path: Native browser speech recognition if explicitly enabled
    if (useNativeSTT && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      try {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onstart = () => {
          setIsRecording(true);
          setRecordingDuration(0);
          timerRef.current = setInterval(() => {
            setRecordingDuration((d) => d + 1);
          }, 1000);
        };

        recognition.onresult = (event) => {
          const transcript = Array.from(event.results)
            .map((result) => result[0].transcript)
            .join('');
          if (onTranscription) {
            onTranscription(transcript);
          }
        };

        recognition.onerror = (event) => {
          console.warn('[VoiceAssistant] Native STT error:', event.error);
          setVoiceInputError(`Speech recognition error: ${event.error}`);
          setIsRecording(false);
          stopTimer();
        };

        recognition.onend = () => {
          setIsRecording(false);
          stopTimer();
        };

        recognitionRef.current = recognition;
        recognition.start();
        return;
      } catch (err) {
        console.warn('[VoiceAssistant] Fallback to Gemini STT recording:', err.message);
      }
    }

    // Default High-Accuracy Path: MediaRecorder + Gemini Multimodal STT
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Microphone audio recording is not supported by your browser.');
      }

      // Request microphone stream
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          sampleRate: 24000,
          echoCancellation: true,
          noiseSuppression: true
        }
      });

      mediaStreamRef.current = stream;
      audioChunksRef.current = [];

      const mimeType = getSupportedMimeType() || 'audio/webm';
      const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);

      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };

      recorder.onstop = async () => {
        stopMediaTracks();
        stopTimer();
        setIsRecording(false);

        const chunks = audioChunksRef.current;
        if (!chunks || chunks.length === 0) {
          return;
        }

        const audioBlob = new Blob(chunks, { type: recorder.mimeType || 'audio/webm' });

        // Skip empty or tiny audio recordings (< 1500 bytes)
        if (audioBlob.size < 1500) {
          setVoiceInputError('No speech detected. Please hold the mic and speak.');
          return;
        }

        setIsTranscribing(true);
        try {
          // Convert Blob to Base64
          const reader = new FileReader();
          const base64Promise = new Promise((resolve, reject) => {
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
          });
          reader.readAsDataURL(audioBlob);
          const dataUrl = await base64Promise;

          // Call backend Gemini STT endpoint
          const result = await api.transcribeAudio({
            audio: dataUrl,
            mimeType: audioBlob.type || 'audio/webm',
            language: 'en'
          });

          if (result?.success && result?.text) {
            const recognizedText = result.text.trim();
            if (onTranscription) {
              onTranscription(recognizedText);
            }
            if (handsFree && onAutoSubmit) {
              onAutoSubmit(recognizedText);
            }
          } else if (result?.text === '') {
            setVoiceInputError('Could not recognize any spoken words. Please speak clearly.');
          } else {
            setVoiceInputError(result?.error || 'Transcription failed. Please try again.');
          }
        } catch (transcribeErr) {
          console.error('[VoiceAssistant] Transcription error:', transcribeErr);
          setVoiceInputError(transcribeErr.message || 'Speech recognition service error.');
        } finally {
          setIsTranscribing(false);
        }
      };

      recorder.onerror = (err) => {
        console.error('[VoiceAssistant] MediaRecorder error:', err);
        setVoiceInputError('Audio recording error occurred.');
        setIsRecording(false);
        stopTimer();
        stopMediaTracks();
      };

      mediaRecorderRef.current = recorder;
      recorder.start(250); // Collect slice every 250ms
      setIsRecording(true);
      setRecordingDuration(0);

      // Start recording duration timer
      timerRef.current = setInterval(() => {
        setRecordingDuration((prev) => {
          // Max recording limit: 60 seconds
          if (prev >= 60) {
            stopRecording();
            return prev;
          }
          return prev + 1;
        });
      }, 1000);
    } catch (err) {
      console.error('[VoiceAssistant] Microphone access error:', err);
      let message = 'Could not access microphone.';
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        message = 'Microphone permission was denied. Please allow microphone access in your browser settings.';
      } else if (err.name === 'NotFoundError') {
        message = 'No microphone device was detected on your computer.';
      }
      setVoiceInputError(message);
      setIsRecording(false);
      stopTimer();
      stopMediaTracks();
    }
  }, [useNativeSTT, onTranscription, handsFree, onAutoSubmit, stopMediaTracks, stopTimer]);

  /**
   * Stop Voice Recording and trigger transcription
   */
  const stopRecording = useCallback(() => {
    if (recognitionRef.current && isRecording) {
      try {
        recognitionRef.current.stop();
      } catch (_) {}
      setIsRecording(false);
      stopTimer();
      return;
    }

    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      try {
        mediaRecorderRef.current.stop();
      } catch (e) {
        console.warn('[VoiceAssistant] Stop error:', e.message);
      }
    }
  }, [isRecording, stopTimer]);

  /**
   * Cancel Recording without transcribing
   */
  const cancelRecording = useCallback(() => {
    stopTimer();
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.ondataavailable = null;
      mediaRecorderRef.current.onstop = null;
      try {
        mediaRecorderRef.current.stop();
      } catch (_) {}
    }
    stopMediaTracks();
    audioChunksRef.current = [];
    setIsRecording(false);
    setIsTranscribing(false);
    setVoiceInputError(null);
  }, [stopTimer, stopMediaTracks]);

  /**
   * Synthesize and Play Message Audio (Gemini TTS)
   */
  const speakMessage = useCallback(async (messageId, text) => {
    if (!text || typeof text !== 'string') return;

    // If already playing this message, toggle pause/resume
    if (playingMessageId === messageId) {
      if (playbackStatus === 'playing') {
        pauseAudio();
        return;
      } else if (playbackStatus === 'paused') {
        resumeAudio();
        return;
      }
    }

    // Stop and clean up any previously playing audio
    cleanupAudioPlayback();

    setPlayingMessageId(messageId);
    setPlaybackStatus('synthesizing');
    setPlaybackError(null);

    try {
      // Fetch synthesized WAV audio blob from Gemini TTS endpoint
      const audioBlob = await api.synthesizeSpeech({
        text,
        voice: preferredVoice
      });

      const audioUrl = URL.createObjectURL(audioBlob);
      currentAudioUrlRef.current = audioUrl;

      const audio = new Audio(audioUrl);
      audioElementRef.current = audio;

      audio.onplay = () => {
        setPlaybackStatus('playing');
      };

      audio.onpause = () => {
        if (audioElementRef.current?.ended) {
          cleanupAudioPlayback();
        } else {
          setPlaybackStatus('paused');
        }
      };

      audio.onended = () => {
        cleanupAudioPlayback();
      };

      audio.onerror = (e) => {
        console.error('[VoiceAssistant] Audio playback error:', e);
        setPlaybackError('Failed to play synthesized audio.');
        cleanupAudioPlayback();
      };

      await audio.play();
    } catch (err) {
      console.error('[VoiceAssistant] Synthesis error:', err);
      setPlaybackError(err.message || 'Speech synthesis failed.');
      cleanupAudioPlayback();
    }
  }, [playingMessageId, playbackStatus, preferredVoice, cleanupAudioPlayback]);

  /**
   * Pause Active Audio
   */
  const pauseAudio = useCallback(() => {
    if (audioElementRef.current && !audioElementRef.current.paused) {
      audioElementRef.current.pause();
      setPlaybackStatus('paused');
    }
  }, []);

  /**
   * Resume Paused Audio
   */
  const resumeAudio = useCallback(() => {
    if (audioElementRef.current && audioElementRef.current.paused) {
      audioElementRef.current.play().then(() => {
        setPlaybackStatus('playing');
      }).catch((err) => {
        console.error('[VoiceAssistant] Resume error:', err);
      });
    }
  }, []);

  /**
   * Stop Active Audio Playback
   */
  const stopAudio = useCallback(() => {
    cleanupAudioPlayback();
  }, [cleanupAudioPlayback]);

  return {
    // Voice Input (STT)
    isRecording,
    isTranscribing,
    recordingDuration,
    voiceInputError,
    startRecording,
    stopRecording,
    cancelRecording,

    // Voice Output (TTS)
    playingMessageId,
    playbackStatus,
    playbackError,
    speakMessage,
    pauseAudio,
    resumeAudio,
    stopAudio,

    // Settings & Preferences
    preferredVoice,
    setPreferredVoice,
    autoSpeak,
    setAutoSpeak,
    handsFree,
    setHandsFree,
    useNativeSTT,
    setUseNativeSTT
  };
}

export default useVoiceAssistant;
