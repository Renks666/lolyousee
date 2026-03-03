import { access, copyFile, mkdir, readdir, rm } from 'node:fs/promises';
import path from 'node:path';

const rootDir = process.cwd();
const sourceDir = path.join(rootDir, 'content');
const targetDir = path.join(rootDir, 'public', 'content');

async function exists(dirPath) {
  try {
    await access(dirPath);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const hasSource = await exists(sourceDir);
  if (!hasSource) {
    console.warn('[sync-content] Source directory not found:', sourceDir);
    return;
  }

  await rm(targetDir, { recursive: true, force: true });
  await mkdir(targetDir, { recursive: true });

  const entries = await readdir(sourceDir, { withFileTypes: true });
  const jsonFiles = entries.filter((entry) => entry.isFile() && entry.name.endsWith('.json'));

  await Promise.all(
    jsonFiles.map((entry) =>
      copyFile(path.join(sourceDir, entry.name), path.join(targetDir, entry.name))
    )
  );

  console.log(`[sync-content] Copied ${jsonFiles.length} file(s) to public/content`);
}

main().catch((error) => {
  console.error('[sync-content] Failed:', error);
  process.exitCode = 1;
});
