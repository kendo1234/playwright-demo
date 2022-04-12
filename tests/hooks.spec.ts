import { test, expect } from "@playwright/test";

test.describe("use hooks", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });

  test("my test", async ({ page }) => {
    await expect(page).toHaveURL("https://playwright.dev/");
  });
});
