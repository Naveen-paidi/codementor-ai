/**
 * Voice Service (Gemini STT & TTS)
 * --------------------------------
 * Dedicated strictly to speech operations:
 * 1. Speech-to-Text (STT): Converts spoken audio to text via Gemini Multimodal.
 * 2. Text-to-Speech (TTS): Synthesizes OpenRouter-generated text via Gemini Flash TTS.
 *
 * NOTE: OpenRouter handles all text reasoning, chatbot responses, and code reviews.
 * Gemini is NEVER used for chatbot answers or general text generation.
 */

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In-memory audio cache + optional disk persistence
const AUDIO_CACHE = new Map();
const CACHE_DIR = path.resolve(__dirname, '../cache/audio');

// Ensure cache directory exists
try {
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
  }
} catch (e) {
  console.warn('[VoiceService] Could not initialize audio cache directory:', e.message);
}

// Supported Gemini models for voice operations
const STT_MODELS = ['gemini-3-flash-preview', 'gemini-3.5-flash', 'gemini-3.8-flash'];
const TTS_MODELS = ['gemini-3.8-flash-tts', 'gemini-2.5-flash-preview-tts', 'gemini-3.1-flash-tts-preview'];

// Supported voices for Gemini Flash TTS
export const SUPPORTED_VOICES = [
  { id: 'Puck', name: 'Puck', gender: 'Neutral / Engaging', description: 'Clear, modern, tech-focused' },
  { id: 'Charon', name: 'Charon', gender: 'Deep / Authoritative', description: 'Deep, calm, professional tutor' },
  { id: 'Kore', name: 'Kore', gender: 'Warm / Friendly', description: 'Warm, encouraging, natural cadence' },
  { id: 'Fenrir', name: 'Fenrir', gender: 'Energetic', description: 'Crisp, fast, dynamic voice' },
  { id: 'Aoede', name: 'Aoede', gender: 'Melodic / Gentle', description: 'Gentle, expressive, patient instructor' }
];

/**
 * Convert 16-bit linear PCM buffer into a valid standard WAV audio buffer
 * by prepending a 44-byte RIFF/WAVE header.
 *
 * @param {Buffer} pcmBuffer - Raw PCM audio bytes from Gemini TTS
 * @param {number} sampleRate - Sample rate in Hz (default 24000)
 * @param {number} numChannels - Channel count (default 1 = mono)
 * @param {number} bitDepth - Bits per sample (default 16)
 * @returns {Buffer} Valid WAV audio file buffer
 */
export function pcmToWav(pcmBuffer, sampleRate = 24000, numChannels = 1, bitDepth = 16) {
  const byteRate = (sampleRate * numChannels * bitDepth) / 8;
  const blockAlign = (numChannels * bitDepth) / 8;
  const header = Buffer.alloc(44);

  // RIFF Chunk Descriptor
  header.write('RIFF', 0);
  header.writeUInt32LE(36 + pcmBuffer.length, 4);
  header.write('WAVE', 8);

  // "fmt " sub-chunk
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16); // Subchunk1Size (16 for PCM)
  header.writeUInt16LE(1, 20); // AudioFormat (1 = PCM)
  header.writeUInt16LE(numChannels, 22); // NumChannels
  header.writeUInt32LE(sampleRate, 24); // SampleRate
  header.writeUInt32LE(byteRate, 28); // ByteRate
  header.writeUInt16LE(blockAlign, 32); // BlockAlign
  header.writeUInt16LE(bitDepth, 34); // BitsPerSample

  // "data" sub-chunk
  header.write('data', 36);
  header.writeUInt32LE(pcmBuffer.length, 40);

  return Buffer.concat([header, pcmBuffer]);
}

/**
 * Format markdown and code for speech synthesis without changing the visible UI text.
 * Replaces long code blocks and symbols with clear spoken announcements.
 *
 * @param {string} rawText - Full response text from OpenRouter
 * @returns {string} Sanitized, speech-friendly text
 */
export function sanitizeTextForSpeech(rawText) {
  if (!rawText || typeof rawText !== 'string') return '';

  let text = rawText;

  // Replace multi-line code blocks with speech-friendly announcements
  // e.g. ```python def binary_search(...) ... ``` -> "[Code snippet in python provided on screen]"
  text = text.replace(/```([a-zA-Z0-9_+#-]*)\s*([\s\S]*?)```/g, (match, lang) => {
    const language = lang ? lang.trim() : 'code';
    return ` Here is a ${language} code example displayed in your chat. `;
  });

  // Replace inline code blocks `variableName` -> variableName
  text = text.replace(/`([^`]+)`/g, '$1');

  // Remove markdown headers (# Header) -> Header
  text = text.replace(/^#+\s*(.*)$/gm, '$1. ');

  // Remove markdown bold/italic (**text**, *text*, __text__)
  text = text.replace(/\*\*([^*]+)\*\*/g, '$1');
  text = text.replace(/\*([^*]+)\*/g, '$1');
  text = text.replace(/__([^_]+)__/g, '$1');

  // Replace markdown links [title](url) -> title
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

  // Replace markdown blockquotes
  text = text.replace(/^>\s*/gm, '');

  // Replace bullet points with pauses
  text = text.replace(/^[\*\-\+]\s+/gm, ' ');

  // Clean excessive whitespace and newlines
  text = text.replace(/\n+/g, ' ').replace(/\s{2,}/g, ' ').trim();

  // Limit speech synthesis length to ~1200 characters for responsive first-audio
  if (text.length > 1500) {
    const truncated = text.substring(0, 1500);
    const lastPeriod = truncated.lastIndexOf('.');
    if (lastPeriod > 500) {
      text = truncated.substring(0, lastPeriod + 1) + ' You can read the complete explanation on screen.';
    } else {
      text = truncated + '... Full response is visible on screen.';
    }
  }

  return text;
}

/**
 * Transcribe spoken audio via Gemini Multimodal Speech-to-Text.
 *
 * @param {Object} options
 * @param {string} options.audioBase64 - Base64 encoded audio
 * @param {string} options.mimeType - MIME type (e.g. 'audio/webm', 'audio/wav', 'audio/mp3')
 * @param {string} [options.language] - Optional expected language
 * @returns {Promise<{ text: string, latencyMs: number, model: string }>}
 */
export async function transcribeAudio({ audioBase64, mimeType = 'audio/webm', language = 'en' }) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || !apiKey.trim()) {
    throw new Error('Gemini API key is not configured in backend environment.');
  }

  if (!audioBase64 || typeof audioBase64 !== 'string') {
    throw new Error('Audio payload is missing or invalid.');
  }

  // Clean base64 string if it includes data URI prefix (data:audio/webm;base64,...)
  const cleanBase64 = audioBase64.includes(',') ? audioBase64.split(',')[1] : audioBase64;

  // Normalize mimeType: Gemini multimodal accepts audio/wav, audio/mp3, audio/webm, audio/ogg, audio/aac
  let normalizedMimeType = mimeType.split(';')[0].trim().toLowerCase();
  if (!normalizedMimeType.startsWith('audio/')) {
    normalizedMimeType = 'audio/webm';
  }

  const prompt = `Transcribe the spoken audio verbatim into clean, accurately punctuated text.
CRITICAL: Preserve all programming terms, algorithm names, and syntax identifiers precisely as spoken (for example: useState, useEffect, HashMap, binary search, O(log n), Spring Boot, Node.js, Python, JavaScript, async/await, Docker, SQL, API).
Output ONLY the transcription. Do not add quotes, introductory phrases, explanations, or commentary.`;

  const requestBody = {
    contents: [
      {
        parts: [
          {
            inlineData: {
              mimeType: normalizedMimeType,
              data: cleanBase64
            }
          },
          {
            text: prompt
          }
        ]
      }
    ]
  };

  const startTime = Date.now();
  let lastError = null;

  // Try supported STT models with fallback
  for (const model of STT_MODELS) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 18000); // 18s timeout

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        const errText = await res.text();
        console.warn(`[VoiceService] Model ${model} returned ${res.status}:`, errText.substring(0, 200));
        lastError = new Error(`Gemini STT (${model}) failed with status ${res.status}`);
        continue; // Try next model
      }

      const data = await res.json();
      const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (rawText !== undefined) {
        const latencyMs = Date.now() - startTime;
        return {
          text: rawText.trim(),
          latencyMs,
          model
        };
      }
    } catch (err) {
      console.warn(`[VoiceService] Model ${model} failed:`, err.message);
      lastError = err;
    }
  }

  throw lastError || new Error('Speech recognition service was unable to transcribe the audio.');
}

/**
 * Synthesize speech from text via Gemini Flash TTS.
 * Converts raw PCM output to browser-playable WAV audio buffer.
 *
 * @param {Object} options
 * @param {string} options.text - Response text to convert to speech
 * @param {string} [options.voice] - Prebuilt voice name ('Puck', 'Charon', 'Kore', 'Fenrir', 'Aoede')
 * @returns {Promise<{ audioBuffer: Buffer, contentType: string, cached: boolean, latencyMs: number }>}
 */
export async function synthesizeSpeech({ text, voice = 'Puck' }) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || !apiKey.trim()) {
    throw new Error('Gemini API key is not configured in backend environment.');
  }

  if (!text || typeof text !== 'string' || !text.trim()) {
    throw new Error('Text to synthesize is required.');
  }

  // Validate voice name
  const validVoice = SUPPORTED_VOICES.some(v => v.id.toLowerCase() === voice.toLowerCase())
    ? voice
    : 'Puck';

  // Sanitize text for speech (code fences announced, markdown stripped)
  const speechText = sanitizeTextForSpeech(text);
  if (!speechText) {
    throw new Error('No synthesizable text after processing.');
  }

  // Compute stable cache key using SHA-256
  const cacheKey = crypto.createHash('sha256').update(`${validVoice}:${speechText}`).digest('hex');

  // Check in-memory cache
  if (AUDIO_CACHE.has(cacheKey)) {
    return {
      audioBuffer: AUDIO_CACHE.get(cacheKey),
      contentType: 'audio/wav',
      cached: true,
      latencyMs: 1
    };
  }

  // Check disk cache
  const diskPath = path.join(CACHE_DIR, `${cacheKey}.wav`);
  try {
    if (fs.existsSync(diskPath)) {
      const buffer = fs.readFileSync(diskPath);
      AUDIO_CACHE.set(cacheKey, buffer);
      return {
        audioBuffer: buffer,
        contentType: 'audio/wav',
        cached: true,
        latencyMs: 5
      };
    }
  } catch (e) {
    // Disk read failed, proceed to synthesize
  }

  const startTime = Date.now();
  let lastError = null;

  // Request body for Gemini Flash TTS
  const requestBody = {
    contents: [
      {
        parts: [{ text: speechText }]
      }
    ],
    generationConfig: {
      responseModalities: ['AUDIO'],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: {
            voiceName: validVoice
          }
        }
      }
    }
  };

  for (const model of TTS_MODELS) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 20000); // 20s timeout

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        const errText = await res.text();
        console.warn(`[VoiceService] TTS Model ${model} returned ${res.status}:`, errText.substring(0, 200));
        lastError = new Error(`Gemini TTS (${model}) failed with status ${res.status}`);
        continue;
      }

      const data = await res.json();
      const rawPcmBase64 = data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

      if (!rawPcmBase64) {
        const finishReason = data.candidates?.[0]?.finishReason;
        console.warn(`[VoiceService] TTS Model ${model} finished without audio (${finishReason})`);
        lastError = new Error(`TTS model did not return audio data (${finishReason || 'unknown'})`);
        continue;
      }

      const pcmBuffer = Buffer.from(rawPcmBase64, 'base64');
      // Convert 24kHz 16-bit linear PCM to standard browser-playable WAV
      const wavBuffer = pcmToWav(pcmBuffer, 24000, 1, 16);
      const latencyMs = Date.now() - startTime;

      // Store in memory cache (cap size at 100 entries to prevent memory leak)
      if (AUDIO_CACHE.size > 100) {
        const firstKey = AUDIO_CACHE.keys().next().value;
        AUDIO_CACHE.delete(firstKey);
      }
      AUDIO_CACHE.set(cacheKey, wavBuffer);

      // Persist to disk cache asynchronously
      try {
        fs.writeFile(diskPath, wavBuffer, (err) => {
          if (err) console.warn('[VoiceService] Disk cache write failed:', err.message);
        });
      } catch (e) {
        // Disk write failed, ignore
      }

      return {
        audioBuffer: wavBuffer,
        contentType: 'audio/wav',
        cached: false,
        latencyMs
      };
    } catch (err) {
      console.warn(`[VoiceService] TTS Model ${model} failed:`, err.message);
      lastError = err;
    }
  }

  throw lastError || new Error('Speech synthesis service was unable to generate audio.');
}
