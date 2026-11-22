const configuredProjectId = process.env.SANITY_STUDIO_PROJECT_ID?.trim();
const scaffoldOnly = process.env.SANITY_STUDIO_BUILD_ONLY === 'true';

if (!configuredProjectId && !scaffoldOnly) {
  throw new Error(
    'Set SANITY_STUDIO_PROJECT_ID in studio/.env before using Studio. ' +
    'For compilation without a real project, use npm run build:scaffold.',
  );
}

// The explicit scaffold command compiles only; this is not a real project ID.
export const projectId = scaffoldOnly ? 'scaffold' : configuredProjectId!;
export const dataset = 'production';
