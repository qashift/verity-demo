import { defineConfig } from "@playwright/test";

/** Serves ./public on :4321 and runs the specs against it. */
export default defineConfig({
  testDir: "./tests",
  reporter: "list",
  use: { baseURL: "http://localhost:4321" },
  webServer: {
    command: "npm run serve",
    url: "http://localhost:4321",
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
