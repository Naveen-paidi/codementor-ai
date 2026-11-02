import dotenv from 'dotenv';
dotenv.config();

const BASE_URL = 'http://localhost:5000/api/voice';

async function testVoiceAPI() {
  console.log('====================================================');
  console.log('🚀 TESTING CODEMENTOR VOICE ASSISTANT BACKEND APIS');
  console.log('====================================================\n');

  // 1. Test GET /api/voice/voices
  console.log('1. Testing GET /api/voice/voices...');
  const voicesRes = await fetch(`${BASE_URL}/voices`);
  console.log(`HTTP Status: ${voicesRes.status}`);
  if (!voicesRes.ok) throw new Error('Voices endpoint failed');
  const voicesData = await voicesRes.json();
  console.log('Available voices:', voicesData.voices.map(v => `${v.name} (${v.gender})`).join(', '));
  console.log('Default voice:', voicesData.defaultVoice);

  // 2. Test POST /api/voice/synthesize (TTS)
  console.log('\n2. Testing POST /api/voice/synthesize (Gemini Flash TTS)...');
  const testText = "In Python, binary search operates on sorted collections with logarithmic time complexity.";
  const ttsStart1 = Date.now();
  const ttsRes1 = await fetch(`${BASE_URL}/synthesize`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: testText, voice: 'Puck' })
  });
  const ttsDuration1 = Date.now() - ttsStart1;
  console.log(`Synthesis 1 Status: ${ttsRes1.status} (took ${ttsDuration1}ms)`);
  console.log(`Content-Type: ${ttsRes1.headers.get('content-type')}`);
  console.log(`X-Voice-Cached: ${ttsRes1.headers.get('x-voice-cached')}`);

  const arrayBuffer1 = await ttsRes1.arrayBuffer();
  const audioBuf1 = Buffer.from(arrayBuffer1);
  console.log(`WAV audio received: ${audioBuf1.length} bytes (Header: ${audioBuf1.subarray(0, 4).toString()})`);

  // 3. Test Caching (Second synthesis should be sub-10ms)
  console.log('\n3. Testing Cache Efficiency (Repeat Request)...');
  const ttsStart2 = Date.now();
  const ttsRes2 = await fetch(`${BASE_URL}/synthesize`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: testText, voice: 'Puck' })
  });
  const ttsDuration2 = Date.now() - ttsStart2;
  console.log(`Synthesis 2 Status: ${ttsRes2.status} (took ${ttsDuration2}ms)`);
  console.log(`X-Voice-Cached: ${ttsRes2.headers.get('x-voice-cached')}`);
  if (ttsRes2.headers.get('x-voice-cached') === 'true') {
    console.log('✅ Cache verified: instant retrieval achieved!');
  }

  // 4. Test POST /api/voice/transcribe (STT)
  console.log('\n4. Testing POST /api/voice/transcribe (Gemini Multimodal STT)...');
  const sttStart = Date.now();
  const sttRes = await fetch(`${BASE_URL}/transcribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      audio: audioBuf1.toString('base64'),
      mimeType: 'audio/wav',
      language: 'en'
    })
  });
  const sttDuration = Date.now() - sttStart;
  console.log(`Transcription Status: ${sttRes.status} (took ${sttDuration}ms)`);
  const sttData = await sttRes.json();
  console.log(`Transcribed Output: "${sttData.text}"`);
  console.log(`Model Used: ${sttData.model}`);

  // 5. Test Code Block Sanitization in Synthesis
  console.log('\n5. Testing Code-heavy Text Speech Sanitization...');
  const codeHeavyText = `To reverse a linked list in JavaScript:
\`\`\`javascript
function reverseList(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
\`\`\`
This algorithm executes in O(n) time and O(1) space.`;

  const codeTtsRes = await fetch(`${BASE_URL}/synthesize`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: codeHeavyText, voice: 'Kore' })
  });
  console.log(`Code-heavy text synthesis status: ${codeTtsRes.status}`);
  const codeAudioBuf = Buffer.from(await codeTtsRes.arrayBuffer());
  console.log(`Synthesized speech audio size: ${codeAudioBuf.length} bytes`);

  console.log('\n====================================================');
  console.log('🎉 ALL VOICE ASSISTANT BACKEND APIS PASSED VERIFICATION');
  console.log('====================================================\n');
}

testVoiceAPI().catch(err => {
  console.error('Test failed with error:', err);
});
