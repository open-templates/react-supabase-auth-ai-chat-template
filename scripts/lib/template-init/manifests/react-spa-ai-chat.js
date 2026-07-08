import { COMMON_MANIFEST } from './common.js';

/** @type {[string, string][]} */
export const REACT_SPA_AI_CHAT_MANIFEST = [
  ...COMMON_MANIFEST.filter(([from]) => from !== 'INSTRUCTIONS.md'),
  ['package.json', 'package.json'],
  ['README.md', 'README.md'],
  ['INSTRUCTIONS.md', 'INSTRUCTIONS.md'],
  ['index.html', 'index.html'],
];
