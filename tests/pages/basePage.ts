// playwright-dev-page.ts
import { expect, Locator, Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;
  readonly informationLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.informationLink = page.locator(
      "body > div.L3eUgb > div.o3j99.n1xJcf.Ne6nSd > a:nth-child(2)",
      {
        hasText: "About",
      }
    );
  }

  async goto() {
    await this.page.goto("https://www.google.co.uk/");
  }

  async checkInfoLink() {
    await expect(this.informationLink).toBeVisible();
  }
}
