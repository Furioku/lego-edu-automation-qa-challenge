import { When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import * as productsPrice from "../../helper/test-data/productsListPrice.json"
import HelperPage from "../../helper/helperFunctions";
import CartPage from "../../pages/cartPage";
import CheckoutPage from "../../pages/checkoutPage";

setDefaultTimeout(60 * 1000 * 2)

let helperPage: HelperPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;

When('User clicks Checkout', async function () {
    checkoutPage = new CheckoutPage(fixture.page);
    helperPage = new HelperPage(fixture.page);
    cartPage = new CartPage(fixture.page);
    await helperPage.pressBtn(cartPage.Locators.checkoutBtn);
});

Then('User should be redirected to the checkout page', async function () {
    await helperPage.assertPage(checkoutPage.Locators.checkoutPageSubHeader);
});

When('User enters a valid shipping address', async function () {
    await checkoutPage.enterShippingInfo(process.env.FIRST_NAME, process.env.LAST_NAME, process.env.ZIP);
});

When('Clicks Continue button', async function () {
    await helperPage.pressBtn(checkoutPage.Locators.continueBtn);    
});

Then('User should be redirected to the payment page', async function () {
    await helperPage.assertPage(checkoutPage.Locators.paymentInfo);
});

Then('User should be able to see correct item, item price, tax amount, and total price to payment', async function () {
    await checkoutPage.verifyPaymentInfo(cartPage.Locators.firstItemInCart, "Sauce Labs Backpack", productsPrice.Backpackcarry)
});

When('User press finish button', async function () {
    await helperPage.pressBtn(checkoutPage.Locators.finishBtn);    
});

Then('User is able to see order confirmation', async function () {
    await helperPage.assertPage(checkoutPage.Locators.orderFinishSubHeader);
    await helperPage.assertPage(checkoutPage.Locators.finishLableImg);
    await helperPage.assertPage(checkoutPage.Locators.confirmTxt);
});