/**
 * DSA Catalogue Builder Script (Node.js ESM)
 * Generates the full 200-problem manifest across 16 topics with:
 * - 10 test cases per problem (3 public, 7 private) = 2,000 test cases
 * - Starter code for Python, JavaScript, Java, C++, C
 * - Function contracts, descriptions, examples, constraints
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, 'data');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

console.log('[DSA Builder] Initializing catalogue build process...');
