import { DocumentIngestionService } from './services/rag/documentIngestion.js';
import { classifyQuery } from './services/rag/queryClassifier.js';
import { hybridRetrieve } from './services/rag/hybridRetrieval.js';
import { RAGOrchestrator } from './services/rag/ragOrchestrator.js';
import { vectorStore } from './services/rag/vectorStore.js';
import { studentTools } from './services/rag/tools/studentTools.js';
import { analyticsTools } from './services/rag/tools/analyticsTools.js';

async function runTests() {
  console.log('=== STARTING CODE MENTOR RAG SYSTEM TESTS ===\n');

  // Test 1: Ingestion & Knowledge Base Initialization
  console.log('--- TEST 1: Initializing Knowledge Base ---');
  const t0 = Date.now();
  const initRes = await DocumentIngestionService.initializeKnowledgeBase(true);
  console.log('Initialization Result:', initRes);
  console.log('Total Documents in store:', vectorStore.getAllDocuments().length);
  console.log('Total Chunks in store:', vectorStore.getAllChunks().length);
  console.log(`Ingestion completed in ${Date.now() - t0} ms\n`);

  // Test 2: Domain Classification
  console.log('--- TEST 2: Domain Classification & Guardrails ---');
  const testQueries = [
    { q: 'How do I cook biryani?', expectedInScope: false, expectedCat: 'OUT_OF_SCOPE' },
    { q: 'What is the latest cricket score?', expectedInScope: false, expectedCat: 'OUT_OF_SCOPE' },
    { q: 'Write a birthday invitation letter for my friend', expectedInScope: false, expectedCat: 'OUT_OF_SCOPE' },
    { q: 'Explain binary search algorithm', expectedInScope: true, expectedCat: 'CS_KNOWLEDGE' },
    { q: 'What is polymorphism in Java?', expectedInScope: true, expectedCat: 'CS_KNOWLEDGE' },
    { q: 'How do React hooks like useState work?', expectedInScope: true, expectedCat: 'CS_KNOWLEDGE' },
    { q: 'Explain operating system deadlocks and Coffman conditions', expectedInScope: true, expectedCat: 'CS_KNOWLEDGE' },
    { q: 'How do I prepare for a Java technical interview?', expectedInScope: true, expectedCat: 'INTERVIEW_PREPARATION' },
    { q: 'How can I build a restaurant management system in Java?', expectedInScope: true, expectedCat: 'CS_KNOWLEDGE' },
    { q: 'Which courses have I enrolled in?', expectedInScope: true, expectedCat: 'STUDENT_PROGRESS' },
    { q: 'What should I learn next based on my progress?', expectedInScope: true, expectedCat: 'STUDENT_RECOMMENDATION' },
    { q: 'How many students are registered across the platform?', expectedInScope: true, expectedCat: 'ADMIN_ANALYTICS' }
  ];

  let passedClassifications = 0;
  for (const item of testQueries) {
    const startC = Date.now();
    const res = await classifyQuery(item.q);
    const latency = Date.now() - startC;
    const ok = res.inScope === item.expectedInScope;
    if (ok) passedClassifications++;
    console.log(`[${ok ? 'PASS' : 'FAIL'}] "${item.q}" -> InScope: ${res.inScope} (expected: ${item.expectedInScope}), Category: ${res.category}, Latency: ${latency}ms`);
  }
  console.log(`Classification Accuracy: ${passedClassifications}/${testQueries.length}\n`);

  // Test 3: Hybrid Retrieval Quality
  console.log('--- TEST 3: Hybrid Retrieval (Vector + Keyword RRF) ---');
  const retrievalQueries = [
    { q: 'HashMap collision treeify threshold java', language: 'java' },
    { q: 'React useState useEffect virtual dom', language: 'javascript' },
    { q: 'Binary search algorithm divide and conquer', language: null },
    { q: 'ACID properties transaction normalization database', language: null },
    { q: 'Deadlock coffman circular wait operating system', language: null }
  ];

  for (const item of retrievalQueries) {
    const ret = await hybridRetrieve(item.q, { filterLanguage: item.language, limit: 3 });
    console.log(`Query: "${item.q}" -> Retrieved ${ret.chunks.length} chunks in ${ret.latencyMs}ms`);
    ret.chunks.forEach((c, idx) => {
      console.log(`  [Chunk ${idx + 1}] ${c.title} | Score: ${c.hybridScore?.toFixed(4)} | Source: ${c.sourceName}`);
    });
  }
  console.log('');

  // Test 4: End-to-End Orchestrator (Out-Of-Scope vs In-Scope)
  console.log('--- TEST 4: Full Orchestrator End-to-End ---');

  // 4A: Out of scope prompt (biryani)
  console.log('Testing Biryani Query:');
  const biryaniRes = await RAGOrchestrator.processQuery({
    message: 'Can you give me a recipe to cook Hyderabadi chicken biryani?'
  });
  console.log('Biryani response:', biryaniRes.answer);
  console.log('Telemetry:', biryaniRes.telemetry);

  // 4B: In-scope technical query
  console.log('\nTesting In-Scope CS Query (Binary Search):');
  const bsRes = await RAGOrchestrator.processQuery({
    message: 'Explain binary search algorithm and show its implementation.'
  });
  console.log('Binary search answer preview:', bsRes.answer?.slice(0, 300) + '...');
  console.log('Sources cited count:', bsRes.sources?.length);
  bsRes.sources?.forEach(s => console.log('  Source:', s.title, '(', s.sourceName, ')'));
  console.log('Telemetry:', bsRes.telemetry);

  // 4C: Student progress query
  console.log('\nTesting Student Progress Query:');
  const progRes = await RAGOrchestrator.processQuery({
    message: 'Which courses have I enrolled in and how many DSA problems have I solved?',
    user: { id: 'a3f83c5f-d851-4e15-b196-d68476583113', role: 'user' }
  });
  console.log('Student Progress response preview:', progRes.answer?.slice(0, 300) + '...');
  console.log('Sources cited:', progRes.sources?.map(s => s.title));
  console.log('Telemetry:', progRes.telemetry);

  // 4D: Admin Analytics query
  console.log('\nTesting Admin Analytics Query:');
  const adminRes = await RAGOrchestrator.processQuery({
    message: 'How many students are registered and which courses are most popular?',
    user: { id: '79d9f130-d7c3-4583-a6c4-19c77bad5ef4', role: 'super_admin' }
  });
  console.log('Admin Analytics response preview:', adminRes.answer?.slice(0, 300) + '...');
  console.log('Telemetry:', adminRes.telemetry);

  console.log('\n=== ALL RAG SUITE TESTS EXECUTED ===');
  process.exit(0);
}

runTests().catch(err => {
  console.error('Fatal test error:', err);
  process.exit(1);
});

