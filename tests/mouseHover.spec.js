import { test, expect } from '@playwright/test';

test('Mouse hover test', async ({ page }) => {
//   await page.goto('https://www.qapractice.com/practice-ecommerece-website');

//   await page.getByTestId("ecom-category-electronics").hover();

await page.goto('https://practice.expandtesting.com/upload');

await page.locator("#fileInput").setInputFiles("C:\\Users\\amirt\\OneDrive\\Desktop\\kaleemPic.jpeg");

await page.waitForTimeout(5000)

await page.locator("#fileSubmit").click();

await page.waitForTimeout(5000)
})