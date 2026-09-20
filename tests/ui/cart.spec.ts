import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';

test.describe('Cart functionality', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('user can add a product to cart @smoke', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addProductToCart('Sauce Labs Backpack');

    await expect(inventoryPage.cartBadge).toHaveText('1');
  });

  test('user can add multiple products to cart @regression', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.addProductToCart('Sauce Labs Bike Light');

    await expect(inventoryPage.cartBadge).toHaveText('2');
  });

  test('user can remove a product from cart @regression', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await expect(inventoryPage.cartBadge).toHaveText('1');

    await inventoryPage.removeProductFromCart('Sauce Labs Backpack');
    await expect(inventoryPage.cartBadge).toBeHidden(); // badge disappears when cart is empty
  });
  
  test('products can be sorted price low to high @regression', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await inventoryPage.sortBy('lohi'); // saucedemo's actual option value for low-to-high

  const prices = await inventoryPage.getAllPrices();
  const sortedPrices = [...prices].sort((a, b) => a - b);

  expect(prices).toEqual(sortedPrices);
});
});