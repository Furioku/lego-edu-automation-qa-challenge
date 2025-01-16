import { expect, type Page } from '@playwright/test';
import { fixture } from "../hooks/pageFixture";

export default class LoginPage {
  
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  Locators = {
    userNameInput: fixture.page.locator('//input[@data-test="username"]'),
    passwordInput: fixture.page.locator('//input[@data-test="password"]'),
    logInBtn: fixture.page.locator('//input[@id="login-button"]'),
    errorMsg: fixture.page.locator('//h3[@data-test="error"]'),
  }

  async navigateToPage(pageUrl) {
    await this.page.goto(pageUrl);
    await this.page.waitForLoadState();
  }

  async enterLoginCredentials(username, password) {
    await this.Locators.userNameInput.click();
    await this.Locators.userNameInput.fill(username);
    await this.Locators.passwordInput.click();
    await this.Locators.passwordInput.fill(password);
    await expect(this.Locators.userNameInput).toHaveValue(username);
    await expect(this.Locators.passwordInput).toHaveValue(password);
  }

  async assertErrorMsgText(errorType: string) {
    await expect(this.Locators.errorMsg).toBeVisible();
    await expect(this.Locators.errorMsg).toContainText(errorType);
  }

}