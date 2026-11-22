import { defineCliConfig } from 'sanity/cli';
import { dataset, projectId } from './environment.ts';

export default defineCliConfig({
  api: { projectId, dataset },
});
