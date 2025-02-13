test("logout from the application", async ()=> {
            //Arrange
            await page.goto(host);
            await page.click("//a[@href='/login']");
            await page.waitForSelector("//form");

            await page.fill("//input[@name='email']", user.email);
            await page.fill("//input[@id='password']", user.password);
            await page.click("//button[text()='Login']");

            //Act
            await page.click("//a[text()='Logout']");

            //asserts
            await expect(page.locator("//a[text()='Login']")).toBeVisible();
            expect(page.url()).toBe(host + "/")
        })
