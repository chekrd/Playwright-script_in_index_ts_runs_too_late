import {
  devices,
  PlaywrightTestConfig,
} from '@playwright/experimental-ct-react';

const config: PlaywrightTestConfig = {
  testMatch: '**/*.uitest.tsx',
  testDir: './',
  use: {
    ctPort: 3100,
    ctCacheDir: './node_modules/.cache/playwright',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
};

export default config;
