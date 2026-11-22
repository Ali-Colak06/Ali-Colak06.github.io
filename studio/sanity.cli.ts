import { defineCliConfig } from 'sanity/cli';
import { dataset, projectId } from './environment.ts';

export default defineCliConfig({
  api: { projectId, dataset },
  studioHost: 'ali-colak-portfolio',
  deployment: {
    appId: 'nfpnpz95u0px82sfn3bmjhq7',
    autoUpdates: false,
  },
});
