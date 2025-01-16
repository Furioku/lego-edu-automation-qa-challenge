import { expect, type Page } from '@playwright/test';
import { fixture } from "../hooks/pageFixture";

export default class CartPage {
  
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  Locators = {
    yourCartHeader: fixture.page.getByText('Your Cart'),
    firstItemInCart: fixture.page.locator('//div[@class="cart_item"][1]'),
    removeFirstItemBtn: fixture.page.locator('//button[@class="btn_secondary cart_button"][1]'),
    backpackInCart: fixture.page.getByRole('link', { name: 'Sauce Labs Backpack' }),
    cartIconCounter: fixture.page.locator('//span[@class="fa-layers-counter shopping_cart_badge"]'),
    checkoutBtn: fixture.page.getByRole('link', { name: 'CHECKOUT' }),
  }

  async productPresentInCart(productName, productDiscription: string, productPrice: string) {
    await expect(this.Locators.firstItemInCart).toContainText(productName);
    await expect(this.Locators.firstItemInCart).toContainText(productDiscription);
    await expect(this.Locators.firstItemInCart).toContainText(productPrice);
  }

  async assertItemRemoved() {
    await expect(this.Locators.backpackInCart).toHaveCount(0);
  }

  async assertCartIconDoesNotDisplayItemsPresent() {
    await expect(this.Locators.cartIconCounter).toHaveCount(0);
  }

}