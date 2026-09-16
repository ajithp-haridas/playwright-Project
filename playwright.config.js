// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout:50*1000,
  expect:{
    timeout:50*1000
  },
  retries:1,
 // workers:2,
  //fullyParallel:true,
 
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  
  projects:[
    {
    name:'chromeProject',
    use: {
   headless:false,
   screenshot:'only-on-failure',
   video:"retain-on-failure",
   trace:"retain-on-failure",
   browserName:'chromium'
  },
    },
    {
      name:'firefoxProject',
      use: {
   headless:false,
   screenshot:'only-on-failure',
   video:"retain-on-failure",
   trace:"retain-on-failure",
   browserName:'firefox'
  },
    },

    {
      name:'webKitProject',
      use: {
   headless:false,
   screenshot:'only-on-failure',
   video:"retain-on-failure",
   trace:"retain-on-failure",
   browserName:'webkit'
  },
    }
  ]

  /* Configure projects for major browsers */
 

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

