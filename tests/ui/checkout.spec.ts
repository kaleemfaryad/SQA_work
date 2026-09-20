import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

test('user can complete full checkout flow @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Step 1: Login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Step 2: Add product to cart
  await inventoryPage.addProductToCart('Sauce Labs Backpack');
  await expect(inventoryPage.cartBadge).toHaveText('1');

  // Step 3: Go to cart, proceed to checkout
  await inventoryPage.goToCart();
  await cartPage.goToCheckout();

  // Step 4: Fill shipping info
  await checkoutPage.fillShippingInfo('John', 'Doe', '12345');

  // Step 5: Verify total is calculated correctly (real math check)
  const total = await checkoutPage.getTotalAmount();
  expect(total).toBeGreaterThan(0);

  // Step 6: Finish order
  await checkoutPage.finishOrder();

  // Step 7: Verify confirmation
  await expect(checkoutPage.confirmationMessage).toHaveText('Thank you for your order!');
});