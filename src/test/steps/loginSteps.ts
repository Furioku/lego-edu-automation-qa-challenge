import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import LoginPage from "../../pages/loginPage";
import * as errorTypeData from "../../helper/test-data/errorsList.json"
import HelperPage from "../../helper/helperFunctions";
import ShopPage from "../../pages/shopPage";

setDefaultTimeout(60 * 1000 * 2)

let loginPage: LoginPage;
let shopPage: ShopPage;
let helperPage: HelperPage;


Given('User navigates to the application', async function () {
    loginPage = new LoginPage(fixture.page);
    shopPage = new ShopPage(fixture.page);
    helperPage = new HelperPage(fixture.page);
    await loginPage.navigateToPage(process.env.BASEURL);
});

Then('User is on login page', async function () {
    await helperPage.assertPage(loginPage.Locators.userNameInput);
    await helperPage.assertPage(loginPage.Locators.passwordInput);
    await helperPage.assertURL(process.env.BASEURL);
});

Given('User enter correct username and password', async function () {
    await loginPage.enterLoginCredentials(process.env.USER_NAME, process.env.PASSWORD)
});

Given('User enters correct username and invalid password', async function () {
    await loginPage.enterLoginCredentials(process.env.USER_NAME, process.env.INVALID_PASSWORD)
});

Given('User enters locked out username and correct password', async function () {
    await loginPage.enterLoginCredentials(process.env.LOCKED_USER_NAME, process.env.PASSWORD)
});

When('User click on login button', async function () {
    await helperPage.pressBtn(loginPage.Locators.logInBtn);
});

Then('User should see Incorrect password error message', async function () {
    await loginPage.assertErrorMsgText(errorTypeData.invalidPasswordText);
});

Then('User should remain on the login page', async function () {
    await helperPage.assertPage(loginPage.Locators.userNameInput);
});

Then('User should see Locked out user error message', async function () {
    await loginPage.assertErrorMsgText(errorTypeData.lockedUserText);
});

Then('Assert user logged in successfully', async function () {
    await helperPage.assertPage(shopPage.Locators.backpackItem);
    await helperPage.assertURL(process.env.PRODUCTS_PAGE_URL);
});

When('User clicks the navigation menu button', async function () {
    await helperPage.pressBtn(shopPage.Locators.menuNavigatorBtn);
});

When('User clicks Logout button', async function () {
    await helperPage.pressBtn(shopPage.Locators.logOutBtn);
});