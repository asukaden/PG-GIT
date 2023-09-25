/* eslint-disable prettier/prettier */
import { devices, LaunchOptions } from '@playwright/test';
const browserOptions: LaunchOptions = {
  slowMo: 0,
  args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
  firefoxUserPrefs: {
    'media.navigator.streams.fake': true,
    'media.navigator.permission.disabled': true,
  },
  headless: true,
};

export const config = {
  browsers: ['chromium'],
  //  browsers: ['chromium', 'firefox', 'webkit'],
  // browsers: ['ChromiumBrowser', 'FirefoxBrowser', 'WebKitBrowser'],
  // process.env.BROWSER || 'chromium' || 'firefox' || 'webkit',
  browserOptions,

  //BASE_URL: 'http://localhost:3000/app/home',
  BASE_URL: 'https://front.questionnaire.ip-poc.com/app/home',
  //BASE_URL: 'https://front.ip-poc.com',
  SERVER_OS:'Windows',
  MeetingName: 'AneeshChannelNew1',
  User1Name: 'jithin',
  User2Name: 'Anita',
  compilerOptions: {
    outDir: 'dist',
  },

  IMG_THRESHOLD: { threshold: 0.4 },
  // BASE_API_URL: 'https://catfact.ninja/',
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    contextOptions: {
      recordVideo: {
        dir: '../screenshots',
      },
    },
    headless: false,
    video: 'on',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],
};
