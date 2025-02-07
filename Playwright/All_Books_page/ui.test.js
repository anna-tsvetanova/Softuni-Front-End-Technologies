const { test, expect } = require ('@playwright/test');

test('Verify "All Books" link is visible', async ({page}) => {
    
    //Act
    await page.goto('http://localhost:3000');

    await page.waitForSelector('nav.navbar');

    const allBooksLink = await page.locator('a[href="/catalog"]');

    const isAllBooksLinkVisible = await allBooksLink.isVisible();

    // Assert
    expect(isAllBooksLinkVisible).toBe(true)

})
