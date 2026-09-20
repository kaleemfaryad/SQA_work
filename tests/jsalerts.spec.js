const {test,expect} = require('@playwright/test');

test("handle JS Alerts", async function({page}){
  
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async (dialog) => {

        expect(dialog.type()).toBe('alert');

        expect(dialog.message()).toBe('I am a JS Alert');
        console.log(dialog.message());
        await dialog.accept();
    });
    
    await page.locator("button[onclick='jsAlert()']").click();

        await page.waitForTimeout(5000)
})
    test("handle JS Confirm", async function({page}){
  
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async (dialog) => {

        expect(dialog.type()).toBe('confirm');

        expect(dialog.message()).toBe('I am a JS Confirm');
        console.log(dialog.message());
        await dialog.accept();
    });
    
    await page.locator("button[onclick='jsConfirm()']").click();

        await page.waitForTimeout(5000)
}) 

    test("handle JS Prompt", async function({page}){
  
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async (dialog) => {

        expect(dialog.type()).toBe('prompt');

        expect(dialog.message()).toBe('I am a JS prompt');
        console.log(dialog.message());
        await dialog.accept("Kaleem");
    });
    
    await page.locator("button[onclick='jsPrompt()']").click();

    await page.waitForTimeout(5000)
})

    
