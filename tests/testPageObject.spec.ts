// example.spec.ts
import { test, expect } from "@playwright/test";
import { BasePage } from "./pages/basePage";

test.only("Use playwrights spin on page object model to do a quick check", async ({
  page,
}) => {
  const homePage = new BasePage(page);
  await homePage.goto();
  await homePage.checkInfoLink();
});
