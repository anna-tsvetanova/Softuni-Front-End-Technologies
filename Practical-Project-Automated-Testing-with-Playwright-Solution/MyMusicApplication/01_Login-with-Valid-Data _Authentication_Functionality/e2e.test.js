test("login with valid data", async () => {
            //Arrange
            await page.goto(host);
            await page.click("//a[@href='/login']");
            await page.waitForSelector("//form");

            //Act
            await page.fill("//input[@name='email']", user.email);
            await page.fill("//input[@id='password']", user.password);
            await page.click("//button[text()='Login']");

            //Asserts
            await expect(page.locator("//a[text()='Logout']")).toBeVisible();
            expect(page.url()).toBe(host + "/");
        })
