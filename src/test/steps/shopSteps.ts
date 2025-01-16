import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import LoginPage from "../../pages/loginPage";
import * as productsDiscription from "../../helper/test-data/productsListDescription.json"
import * as productsPrice from "../../helper/test-data/productsListPrice.json"
import ShopPage from "../../pages/shopPage";
import HelperPage from "../../helper/helperFunctions";

setDefaultTimeout(60 * 1000 * 2)

let loginPage: LoginPage;
let shopPage: ShopPage;
let helperPage: HelperPage;

Given('User navigates to the products page', async function () {
    loginPage = new LoginPage(fixture.page);
    shopPage = new ShopPage(fixture.page);
    helperPage = new HelperPage(fixture.page);
    await loginPage.navigateToPage(process.env.PRODUCTS_PAGE_URL);
});

Then('Assert user is on products page', async function () {
    await helperPage.assertPage(shopPage.Locators.backpackItem);
    await helperPage.assertURL(process.env.PRODUCTS_PAGE_URL);
});

Then('User is able to see 6 products on the page', async function () {
    await shopPage.assertProductItemPresentOnPage(shopPage.Locators.backpackItem);
    await shopPage.assertProductItemPresentOnPage(shopPage.Locators.bikeLightItem);
    await shopPage.assertProductItemPresentOnPage(shopPage.Locators.boltTShirtItem);
    await shopPage.assertProductItemPresentOnPage(shopPage.Locators.jacketItem);
    await shopPage.assertProductItemPresentOnPage(shopPage.Locators.onesieItem);
    await shopPage.assertProductItemPresentOnPage(shopPage.Locators.redTShirtItem);
});

Then('All products have correct discription attached', async function () {
    await shopPage.assertProductsContainCorrectData(shopPage.Locators.backpackItem, productsDiscription.Backpackcarry);
    await shopPage.assertProductsContainCorrectData(shopPage.Locators.bikeLightItem, productsDiscription.BikeLight);
    await shopPage.assertProductsContainCorrectData(shopPage.Locators.boltTShirtItem, productsDiscription.BoltTShirt);
    await shopPage.assertProductsContainCorrectData(shopPage.Locators.jacketItem, productsDiscription.FleeceJacket);
    await shopPage.assertProductsContainCorrectData(shopPage.Locators.onesieItem, productsDiscription.Onesie);
    await shopPage.assertProductsContainCorrectData(shopPage.Locators.redTShirtItem, productsDiscription.RedTShirt);
});

Then('All products have correct price assigned', async function () {
    await shopPage.assertProductsContainCorrectData(shopPage.Locators.backpackItem, productsPrice.Backpackcarry);
    await shopPage.assertProductsContainCorrectData(shopPage.Locators.bikeLightItem, productsPrice.BikeLight);
    await shopPage.assertProductsContainCorrectData(shopPage.Locators.boltTShirtItem, productsPrice.BoltTShirt);
    await shopPage.assertProductsContainCorrectData(shopPage.Locators.jacketItem, productsPrice.FleeceJacket);
    await shopPage.assertProductsContainCorrectData(shopPage.Locators.onesieItem, productsPrice.Onesie);
    await shopPage.assertProductsContainCorrectData(shopPage.Locators.redTShirtItem, productsPrice.RedTShirt);
});

When('User clicks on a product', async function () {
    await helperPage.pressBtn(shopPage.Locators.backpackItemDetailsBtn);
});

Then('User is on a specific product page', async function () {
    await helperPage.assertPage(shopPage.Locators.productDetailsImg);
});

Then('User should see detailed information about the product, including price, description, and image', async function () {
    await shopPage.assertProductPageContainsElements();
});

When('User press on the Back button', async function () {
    await helperPage.pressBtn(shopPage.Locators.backBtn)
});

When('User clicks the Add to Cart button', async function () {
    await helperPage.pressBtn(shopPage.Locators.addToCartBackpackBtn);
});

Then('The cart icon should show product count as 1', async function () {
    await shopPage.assertCartItemsCount();
});

When('User clicks on Cart button', async function () {
    await helperPage.pressBtn(shopPage.Locators.cartIconCounter);
});