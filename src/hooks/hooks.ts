import { BeforeAll, AfterAll, Before, After } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "@playwright/test";
import { fixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    getEnv();
    browser = await invokeBrowser();
});

Before(async function () {
    context = await browser.newContext();
    const page = await context.newPage();
    fixture.page = page;
});

After(async function () {
    await fixture.page.close();
    await context.close();
});

AfterAll(async () => {
    await browser.close();
}); 