const {test,expect} = require('@playwright/test');

test("Valid login", async function({page}){
 
    await page.goto("https://www.saucedemo.com");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.locator("input[name='password']").fill("secret_sauce");
    await page.locator("#login-button").click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    await page.locator("#react-burger-menu-btn").click();
    await page.locator("#logout_sidebar_link").click();
    await expect(page).toHaveURL("https://www.saucedemo.com/");
})