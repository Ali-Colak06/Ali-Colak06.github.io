import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';

const require = createRequire(import.meta.url);
console.log('Compilation only: no real Sanity project or content connection is being verified.');
const cli = join(dirname(require.resolve('sanity/package.json')), 'bin', 'sanity');
const result = spawnSync(process.execPath, [cli, 'build'], {
  cwd: new URL('../', import.meta.url),
  env: { ...process.env, SANITY_STUDIO_BUILD_ONLY: 'true' },
  stdio: 'inherit',
});
if (result.error) throw result.error;
process.exit(result.status ?? 1);
