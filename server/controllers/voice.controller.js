/**
 * Voice Controller
 * ----------------
 * API handlers for Speech-to-Text (STT) and Text-to-Speech (TTS).
 * Strict separation: Only handles voice audio conversion via Gemini.
 * Never generates chatbot text, code reviews, or explanations.
 */

import {
  transcribeAudio,
  synthesizeSpeech,
  SUPPORTED_VOICES
} from '../services/voice.service.js';

/**
 * POST /api/voice/transcribe
 * Accepts audio data and returns transcribed text.
 */
export async function handleTranscribe(req, res, next) {
  try {
    const { audio, mimeType = 'audio/webm', language = 'en' } = req.body;

    if (!audio || typeof audio !== 'string' || !audio.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Audio data is required as a base64 encoded string.'
      });
    }

    // Limit audio payload to 12MB base64 (~9MB raw audio)
    if (audio.length > 16 * 1024 * 1024) {
      return res.status(413).json({
        success: false,
        error: 'Audio payload exceeds maximum size limit (10MB).'
      });
    }

    const result = await transcribeAudio({
      audioBase64: audio,
      mimeType,
      language
    });

    res.json({
      success: true,
      text: result.text,
      latencyMs: result.latencyMs,
      model: result.model
    });
  } catch (error) {
    console.error('[VoiceController] Transcription error:', error.message);
    const statusCode = error.message.includes('API key') ? 401
      : (error.message.includes('429') || error.message.includes('quota') ? 429 : 502);

    res.status(statusCode).json({
      success: false,
      error: error.message || 'Speech recognition failed.',
      text: ''
    });
  }
}

/**
 * POST /api/voice/synthesize
 * Accepts text and returns WAV audio buffer for browser playback.
 */
export async function handleSynthesize(req, res, next) {
  try {
    const { text, voice = 'Puck' } = req.body;

    if (!text || typeof text !== 'string' || !text.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Text to synthesize is required.'
      });
    }

    if (text.length > 5000) {
      return res.status(400).json({
        success: false,
        error: 'Text length exceeds maximum allowed limit (5000 characters).'
      });
    }

    const result = await synthesizeSpeech({
      text: text.trim(),
      voice
    });

    res.set({
      'Content-Type': result.contentType || 'audio/wav',
      'Content-Length': result.audioBuffer.length,
      'Cache-Control': 'public, max-age=86400',
      'X-Voice-Cached': result.cached ? 'true' : 'false',
      'X-Voice-Latency-Ms': String(result.latencyMs)
    });

    res.send(result.audioBuffer);
  } catch (error) {
    console.error('[VoiceController] Synthesis error:', error.message);
    const statusCode = error.message.includes('API key') ? 401
      : (error.message.includes('429') || error.message.includes('quota') ? 429 : 502);

    res.status(statusCode).json({
      success: false,
      error: error.message || 'Speech synthesis failed.'
    });
  }
}

/**
 * GET /api/voice/voices
 * Returns list of available voice configurations.
 */
export async function getVoices(req, res) {
  res.json({
    success: true,
    voices: SUPPORTED_VOICES,
    defaultVoice: 'Puck'
  });
}
