import { expect, type Page } from '@playwright/test';
import { fixture } from "../hooks/pageFixture";

export default class CheckoutPage {
  
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  Locators = {
    checkoutPageSubHeader: fixture.page.getByText('Checkout: Your Information'),
    firstNameInput: fixture.page.locator('[data-test="firstName"]'),
    lastNameInput: fixture.page.locator('[data-test="lastName"]'),
    zipInput: fixture.page.locator('[data-test="postalCode"]'),
    continueBtn: fixture.page.getByRole('button', { name: 'CONTINUE' }),
    paymentInfo: fixture.page.getByText('Payment Information:'),
    taxLabel: fixture.page.locator('//div[@class="summary_tax_label"]'),
    totalPriceLabel: fixture.page.locator('//div[@class="summary_total_label"]'),
    finishBtn: fixture.page.getByRole('link', { name: 'FINISH' }),
    orderFinishSubHeader: fixture.page.getByText('Finish'),
    finishLableImg: fixture.page.locator('#checkout_complete_container').getByRole('img'),
    confirmTxt: fixture.page.getByText('THANK YOU FOR YOUR ORDER Your'),
  }

  async enterShippingInfo(firstName, lastName, zip) {
    await this.Locators.firstNameInput.click();
    await this.Locators.firstNameInput.fill(firstName);
    await this.Locators.lastNameInput.click();
    await this.Locators.lastNameInput.fill(lastName);
    await this.Locators.zipInput.click();
    await this.Locators.zipInput.fill(zip);
    await expect(this.Locators.firstNameInput).toHaveValue(firstName);
    await expect(this.Locators.lastNameInput).toHaveValue(lastName);
    await expect(this.Locators.zipInput).toHaveValue(zip);
  }

  async verifyPaymentInfo(itemLocator, itemName, itemPrice) {
    await expect(itemLocator).toContainText(itemName);
    await expect(itemLocator).toContainText(itemPrice);
    let itemPriceNum = +itemPrice;
    let taxPrice = itemPriceNum*0.08005;
    let totalPrice = itemPriceNum + taxPrice;
    await expect(this.Locators.taxLabel).toContainText(taxPrice.toFixed(2).toString());
    await expect(this.Locators.totalPriceLabel).toContainText(totalPrice.toFixed(2).toString());
  }
}