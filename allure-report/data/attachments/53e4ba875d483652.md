# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dropdown.spec.js >> Verify dropdown
- Location: tests\dropdown.spec.js:3:1

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://www.qapractice.com/practice-forms
Call log:
  - navigating to "https://www.qapractice.com/practice-forms", waiting until "load"

```

# Test source

```ts
  1  | const {test, expect} = require('@playwright/test');
  2  | 
  3  | test("Verify dropdown", async function({page}){
  4  | 
> 5  | await page.goto("https://www.qapractice.com/practice-forms")
     |            ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://www.qapractice.com/practice-forms
  6  | 
  7  | // await page.locator("#forms-country").selectOption({label: "India"})
  8  | 
  9  | // await page.locator("#forms-title").selectOption({value: "Ms."})
  10 | 
  11 | // await page.locator("#forms-first-name").fill("Test")
  12 | 
  13 | // await page.locator("#forms-last-name").fill("One")
  14 | 
  15 | // await page.locator("#forms-dob").fill("2005-08-12")
  16 | 
  17 | // await page.locator("#forms-doj").fill("12/12/2024")
  18 | 
  19 | // await page.locator("#forms-phone-code").selectOption({value: "+91"})
  20 | 
  21 | // await page.locator("#forms-phone-number").fill("3134932435")
  22 | 
  23 | let countries = await page.$("#forms-country")
  24 | 
  25 | let countryOptions = await countries.$$("option")
  26 | 
  27 | for(let i=0; i<countryOptions.length; i++){
  28 |  
  29 |     let country = await countryOptions[i].textContent()
  30 | 
  31 |     console.log("Country is: "+country)
  32 | }
  33 | 
  34 | 
  35 | 
  36 | 
  37 | 
  38 | 
  39 | 
  40 | 
  41 | 
  42 | 
  43 | 
  44 | 
  45 | await page.waitForTimeout(5000)
  46 | 
  47 | })
```