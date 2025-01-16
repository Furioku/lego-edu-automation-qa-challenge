import { expect, type Page } from '@playwright/test';

export default class HelperPage {
  
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  
  async pressBtn(btnLocator) {
    await btnLocator.click();
    await this.page.waitForLoadState();
  }

  async assertPage(pageElement) {
    await this.page.waitForLoadState();
    await expect(pageElement).toBeVisible();
  }

  async assertURL(pageURL) {
    await this.page.waitForLoadState();
    await expect(this.page).toHaveURL(pageURL);
  }

  async assertContainsText(locator, text) {
    await expect(locator).toContainText(text)
  }

}