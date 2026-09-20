const {test, expect} = require('@playwright/test');

test("Verify dropdown", async function({page}){

await page.goto("https://www.qapractice.com/practice-forms")

// await page.locator("#forms-country").selectOption({label: "India"})

// await page.locator("#forms-title").selectOption({value: "Ms."})

// await page.locator("#forms-first-name").fill("Test")

// await page.locator("#forms-last-name").fill("One")

// await page.locator("#forms-dob").fill("2005-08-12")

// await page.locator("#forms-doj").fill("12/12/2024")

// await page.locator("#forms-phone-code").selectOption({value: "+91"})

// await page.locator("#forms-phone-number").fill("3134932435")

let countries = await page.$("#forms-country")

let countryOptions = await countries.$$("option")

for(let i=0; i<countryOptions.length; i++){
 
    let country = await countryOptions[i].textContent()

    console.log("Country is: "+country)
}












await page.waitForTimeout(5000)

})