const { test, describe, beforeEach, afterEach, beforeAll, afterAll, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const host = 'http://localhost:3000';

let browser;
let context;
let page;

let user = {
    email : "",
    password : "123456",
    confirmPass : "123456",
};

let petName = "";

describe("e2e tests", () => {
    beforeAll(async () => {
        browser = await chromium.launch();
    });

    afterAll(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        context = await browser.newContext();
        page = await context.newPage();
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    describe("authentication", () => {
        test("registration with valid data", async () => {
            //Arrange
            await page.goto(host);
            await page.click("//a[@href='/register']");
            await page.waitForSelector("//form");

            //Act
            let random = Math.floor(Math.random() * 1000);
            user.email = `email_${random}@abv.bg`;

            await page.locator("//input[@id='email']").fill(user.email);
            await page.locator("//input[@id='password']").fill(user.password);
            await page.locator("//input[@id='repeatPassword']").fill(user.confirmPass);
            await page.click("//button[text()='Register']");

            //Assert
            if(page.locator("//a[@href='/logout']").isVisible())
            {
                await expect(page.locator("//a[@href='/logout']")).toBeVisible();
                expect(page.url()).toBe(host + "/");
            }
            else (
                test.fail()
            )
        })

        test 
    })

    describe("navbar", () => {
        // TODO
    });

    describe("CRUD", () => {
        // TODO
    });
});
