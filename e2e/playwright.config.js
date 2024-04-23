// @ts-check
const { devices } = require('@playwright/test')

const config = {
  reporter: 'line',
  use: {
    baseURL: 'http://localhost:2200',
    headless: false
  },
  projects: [
    {
      name: 'Mobile Android',
      use: {
        ...devices['Pixel 2']
      }
    },
    {
      name: 'edge',
      use: {
        ...devices['Desktop Edge']
      }
    }
  ],
  snapshotDir: './',
  outputDir: './tests/'
}

module.exports = config
