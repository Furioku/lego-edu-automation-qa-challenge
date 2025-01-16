import { expect, type Page } from '@playwright/test';
import { fixture } from "../hooks/pageFixture";

export default class ShopPage {
  
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  Locators = {
    menuNavigatorBtn: fixture.page.getByRole('button', { name: 'Open Menu' }),
    logOutBtn: fixture.page.getByRole('link', { name: 'Logout' }),
    productLabel: fixture.page.locator('//div[@class="product_label"]'),
    backpackItem: fixture.page.locator('.inventory_item').first(),
    bikeLightItem: fixture.page.locator('.inventory_list > div:nth-child(2)'),
    boltTShirtItem: fixture.page.locator('.inventory_list > div:nth-child(3)'),
    jacketItem: fixture.page.locator('div:nth-child(4)'),
    onesieItem: fixture.page.locator('div:nth-child(5)'),
    redTShirtItem: fixture.page.locator('div:nth-child(6)'),
    backpackItemDetailsBtn: fixture.page.getByRole('link', { name: 'Sauce Labs Backpack' }),
    productDetailsImg: fixture.page.getByRole('img'),
    productImgContainer: fixture.page.locator('//img[@class="inventory_details_img"]'),
    productNameContainer: fixture.page.locator('//div[@class="inventory_details_name"]'),
    productDescriptionContainer: fixture.page.locator('//div[@class="inventory_details_desc"]'),
    productPriceContainer: fixture.page.locator('//div[@class="inventory_details_price"]'),
    backBtn: fixture.page.getByRole('button', { name: '<- Back' }),
    addToCartBackpackBtn: fixture.page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button'),
    cartIconCounter: fixture.page.locator('//span[@class="fa-layers-counter shopping_cart_badge"]'),
  }

  async assertProductItemPresentOnPage(itemLocator) {
    await expect(itemLocator).toBeVisible();
  }

  async assertProductsContainCorrectData(itemLocator, itemDescription: string) {
    await expect(itemLocator).toBeVisible();
    await expect(itemLocator).toContainText(itemDescription);
  }

  async assertProductPageContainsElements() {
    await expect(this.Locators.productImgContainer).toBeVisible();
    await expect(this.Locators.productNameContainer).toBeVisible();
    await expect(this.Locators.productDescriptionContainer).toBeVisible();
    await expect(this.Locators.productPriceContainer).toBeVisible();
    await expect(this.Locators.productPriceContainer).toContainText("$");
  }

  async assertCartItemsCount() {
    await expect(this.Locators.cartIconCounter).toBeVisible();
    let itemsNumberTxt = await this.Locators.cartIconCounter.textContent();
    let itemsNumber = +itemsNumberTxt;
    expect(itemsNumber).toBeGreaterThan(0);
  }

}