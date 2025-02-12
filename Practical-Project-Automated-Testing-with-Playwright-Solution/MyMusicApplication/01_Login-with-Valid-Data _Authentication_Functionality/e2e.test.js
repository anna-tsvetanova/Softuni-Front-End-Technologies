describe("authentication", () => {
        test("register with valid data", async () => {
            await page.goto(host);
            await page.click("//a[@href='/register']");
            await page.waitForSelector("//form");
            await page.locator("//input[@name='password']").fill(user.password);
            await page.locator("//input[@class='conf-pass']").fill(user.confirmPass);
            await page.click("//button[text()='Register']");

            await expect(page.locator("//a[@href='/logout']")).toBeVisible(); 
            expect(page.url()).toBe(host + '/');

        });
    });
