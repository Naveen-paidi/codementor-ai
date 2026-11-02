/**
 * OpenRouter AI Client
 * --------------------
 * High-performance, resilient AI integration utilizing the OpenRouter REST API:
 * https://openrouter.ai/api/v1/chat/completions
 *
 * All requests are processed server-side with strict credential isolation.
 * Keys are never leaked to client runtimes or error payloads.
 */

const OPENROUTER_ENDPOINT = 'https://openrouter.ai/api/v1/chat/completions';
const DEFAULT_MODEL = process.env.OPENROUTER_MODEL || 'meta-llama/llama-3.3-70b-instruct';
const FALLBACK_MODEL = 'google/gemini-2.5-flash';

/**
 * Check if OpenRouter is configured with an API key.
 */
export function isOpenRouterConfigured() {
  const key = process.env.OPENROUTER_API_KEY;
  return Boolean(key && typeof key === 'string' && key.trim().length > 0);
}

/**
 * Get configured model name.
 */
export function getOpenRouterModel() {
  return process.env.OPENROUTER_MODEL || DEFAULT_MODEL;
}

/**
 * Internal raw requester to OpenRouter REST API with timeout & retry.
 */
async function sendOpenRouterRequest(messages, options = {}, attemptFallback = true) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey || !apiKey.trim()) {
    throw new Error('OpenRouter API key is not configured in backend environment.');
  }

  const model = options.model || (attemptFallback ? (process.env.OPENROUTER_MODEL || DEFAULT_MODEL) : FALLBACK_MODEL);
  const temperature = typeof options.temperature === 'number' ? options.temperature : 0.4;
  const maxTokens = options.maxTokens || options.maxOutputTokens || 2048;

  const payload = {
    model,
    messages,
    temperature,
    max_tokens: maxTokens
  };

  if (options.responseFormat) {
    payload.response_format = options.responseFormat;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), options.timeoutMs || 45000);

  try {
    const res = await fetch(OPENROUTER_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey.trim()}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:5173',
        'X-Title': 'Programming Learning Platform',
        'User-Agent': 'ProgrammingLearningPlatform/1.0'
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    const responseText = await res.text();
    let data;
    try {
      data = JSON.parse(responseText);
    } catch {
      data = { error: { message: responseText } };
    }

    if (!res.ok) {
      const statusCode = res.status;
      const errMsg = data?.error?.message || 'Unknown upstream error';
      console.warn(`[OpenRouter HTTP ${statusCode}] Model: ${model} - ${errMsg}`);

      // Attempt fallback if primary model returned 404, 503, or 400
      if (attemptFallback && model !== FALLBACK_MODEL && (statusCode === 404 || statusCode === 503 || statusCode === 400)) {
        console.log(`[OpenRouter] Retrying request with fallback model (${FALLBACK_MODEL})...`);
        return await sendOpenRouterRequest(messages, { ...options, model: FALLBACK_MODEL }, false);
      }

      if (statusCode === 401) {
        throw new Error('Invalid OpenRouter API credentials. Please verify your OPENROUTER_API_KEY.');
      } else if (statusCode === 402) {
        throw new Error('Insufficient OpenRouter credits to complete AI request.');
      } else if (statusCode === 429) {
        throw new Error('AI request rate limit reached. Please wait a moment and try again.');
      } else {
        throw new Error(`AI service returned status ${statusCode}: ${errMsg}`);
      }
    }

    if (!data || typeof data !== 'object' || !Array.isArray(data.choices) || data.choices.length === 0) {
      throw new Error('AI service returned a malformed response structure.');
    }

    const content = data.choices[0]?.message?.content;
    if (content === undefined || content === null || (typeof content === 'string' && !content.trim())) {
      throw new Error('AI model returned an empty completion response.');
    }

    return String(content).trim();
  } catch (err) {
    clearTimeout(timeoutId);

    if (err.name === 'AbortError') {
      throw new Error('AI service request timed out after 45 seconds. Please try again.');
    }

    // If fetch failed at socket level and we can retry with fallback
    if (attemptFallback && model !== FALLBACK_MODEL) {
      try {
        console.warn('[OpenRouter] Network failure, attempting fallback model...');
        return await sendOpenRouterRequest(messages, { ...options, model: FALLBACK_MODEL }, false);
      } catch (fallbackErr) {
        throw new Error(fallbackErr?.message || 'Unable to connect to OpenRouter AI service.');
      }
    }

    throw err;
  }
}

/**
 * Normalise input prompt or message array into OpenRouter messages format.
 */
function normalizeMessages(promptOrMessages, systemInstruction) {
  const messages = [];

  if (systemInstruction && typeof systemInstruction === 'string' && systemInstruction.trim()) {
    messages.push({ role: 'system', content: systemInstruction.trim() });
  }

  if (Array.isArray(promptOrMessages)) {
    messages.push(...promptOrMessages);
  } else if (typeof promptOrMessages === 'string' && promptOrMessages.trim()) {
    messages.push({ role: 'user', content: promptOrMessages.trim() });
  } else {
    throw new Error('Prompt or messages must be a non-empty string or array.');
  }

  return messages;
}

/**
 * Generate regular text completion via OpenRouter.
 */
export async function generateText(promptOrMessages, options = {}) {
  const messages = normalizeMessages(promptOrMessages, options.systemInstruction);
  return await sendOpenRouterRequest(messages, options);
}

/**
 * Generate structured JSON completion via OpenRouter.
 */
export async function generateJSON(promptOrMessages, options = {}) {
  const jsonOptions = {
    ...options,
    temperature: typeof options.temperature === 'number' ? options.temperature : 0.2,
    responseFormat: { type: 'json_object' }
  };

  const messages = normalizeMessages(promptOrMessages, options.systemInstruction);

  // Ensure system or user instruction emphasizes pure JSON output
  const hasJsonKeyword = messages.some(m => String(m.content).toLowerCase().includes('json'));
  if (!hasJsonKeyword) {
    messages.unshift({
      role: 'system',
      content: 'You must respond ONLY with a valid, parseable JSON object matching the requested schema. Do not include markdown codeblocks or conversational filler.'
    });
  }

  const rawText = await sendOpenRouterRequest(messages, jsonOptions);

  try {
    return JSON.parse(rawText);
  } catch {
    // Strip markdown fences ```json ... ``` if present
    const cleaned = rawText
      .replace(/^```json\s*/i, '')
      .replace(/^```\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim();

    try {
      return JSON.parse(cleaned);
    } catch (parseErr) {
      console.error('[OpenRouter] Failed to parse JSON response:', rawText);
      throw new Error(`AI returned invalid JSON format: ${parseErr.message}`);
    }
  }
}

/**
 * Alias methods for backward compatibility with existing agent imports
 */
export const isGeminiConfigured = isOpenRouterConfigured;
export const getGeminiModel = getOpenRouterModel;

export default {
  isOpenRouterConfigured,
  getOpenRouterModel,
  generateText,
  generateJSON,
  isGeminiConfigured,
  getGeminiModel
};
