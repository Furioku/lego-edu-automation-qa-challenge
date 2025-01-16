import { When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import * as productsDiscription from "../../helper/test-data/productsListDescription.json"
import * as productsPrice from "../../helper/test-data/productsListPrice.json"
import HelperPage from "../../helper/helperFunctions";
import CartPage from "../../pages/cartPage";

setDefaultTimeout(60 * 1000 * 2)

let helperPage: HelperPage;
let cartPage: CartPage;

Then('User is on Cart page', async function () {
    helperPage = new HelperPage(fixture.page);
    cartPage = new CartPage(fixture.page);
    await helperPage.assertPage(cartPage.Locators.yourCartHeader);
    await helperPage.assertURL(process.env.CART_PAGE_URL);
});

Then('The product should be added to the cart', async function () {
    await cartPage.productPresentInCart("Sauce Labs Backpack", productsDiscription.Backpackcarry, productsPrice.Backpackcarry);
});

When('User clicks "Remove" on a first product in the cart', async function () {
    await helperPage.pressBtn(cartPage.Locators.removeFirstItemBtn);
});

Then('The product should be removed from the cart', async function () {
    await cartPage.assertItemRemoved();
});

Then('The cart icon should show the updated product count', async function () {
    await cartPage.assertCartIconDoesNotDisplayItemsPresent();
});