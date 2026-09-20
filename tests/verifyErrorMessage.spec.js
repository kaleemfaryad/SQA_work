const {test,expect} = require('@playwright/test');
test.use({viewport: {width: 800, height: 500}});
test("Verify error message for invalid login", async function({page}){
 
    await page.goto("https://www.saucedemo.com");



    await page.getByPlaceholder("Username").fill("standard_user");
    
    await page.locator("input[name='password']").fill("12334");
    
    await page.locator("#login-button").click();
    
    const errorMessage = await page.locator("//div[contains(@class,'error-message-container error')]").textContent();
    
    console.log("Error message is: "+errorMessage);
})