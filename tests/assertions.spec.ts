import { test, expect } from "@playwright/test";

test("assertion overview", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(page).toHaveTitle(/Playwright/);

  await expect(page.locator("text=Get Started").first()).toHaveAttribute(
    "href",
    "/docs/intro"
  );

  await page.click("text=Get Started");
  await expect(page.locator("text=Introduction").first()).toBeVisible();
});
