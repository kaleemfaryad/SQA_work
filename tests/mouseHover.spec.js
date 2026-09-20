import { test, expect } from '@playwright/test';
import path from 'path';
test('Mouse hover test', async ({ page }) => {
//   await page.goto('https://www.qapractice.com/practice-ecommerece-website');

//   await page.getByTestId("ecom-category-electronics").hover();

await page.goto('https://practice.expandtesting.com/upload');

const filePath = path.resolve(__dirname, '../test-data/kaleemPic.jpeg');

await page.locator("#fileInput").setInputFiles(filePath);

await page.waitForTimeout(5000)

await page.locator("#fileSubmit").click();

await page.waitForTimeout(5000)
})