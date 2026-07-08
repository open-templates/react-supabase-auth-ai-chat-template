#!/usr/bin/env node

import { initFromTemplate } from './lib/template-init/index.js';
import { REACT_SPA_MANIFEST } from './lib/template-init/manifests/react-spa.js';
import { printHelp } from './lib/template-init/parse-args.js';
import { brandHeader, error as printError } from './lib/template-init/terminal.js';

const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) {
  brandHeader('react supabase auth template');
  printHelp('react-supabase-auth-template');
  process.exit(0);
}

initFromTemplate({
  manifest: REACT_SPA_MANIFEST,
  includePackageName: false,
  includeAuthorStep: true,
  includeBundler: true,
  defaultBundler: 'bun',
  templateLabel: 'react supabase auth template',
  authorStep: {
    stepTitle: 'maintainer (Git owner)',
    selectMessage: 'How should we set the package maintainer?',
    acceptLabel: 'Accept detected Git owner',
  },
  scriptsCleanup: 'all',
  extraReplacements: [['paired-repo-name', 'cf-hono-supabase-api-template']],
  nextSteps: 'bun install, cp .env.example .env.local, then bun run dev',
}).catch((err) => {
  printError(`Init failed: ${err.message}`);
  process.exit(1);
});
