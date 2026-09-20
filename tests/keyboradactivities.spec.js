const {test,expect} = require('@playwright/test');

test("Verify Keyboard Activities", async function({page}){

    await page.goto("https://www.google.com/");

    await page.locator("[jsname='RNNXgb']").type("Playwright Testing");

    await page.waitForSelector("[role='presentation']")

    const suggestions = await page.$$("[role='presentation']")
    
    for (let i = 0; i < suggestions.length; i++) {

        const suggestionText = await suggestions[i].textContent();
        
        if (suggestionText.includes("course")) {
        
            await suggestions[i].click();
        
            console.log("Clicked on suggestion: " + suggestionText);
        
            break;
        }

    }

    await page.waitForTimeout(5000)

})