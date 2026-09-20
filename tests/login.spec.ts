import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import users from '../test-data/users.json';

for (const user of users) {
  const tag = user.expected === 'success' ? '@smoke' : '@regression';

  test(`login test for ${user.username} ${tag}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(user.username, user.password);

    if (user.expected === 'success') {
      await expect(page).toHaveURL(/inventory\.html/);
    } else {
      await expect(page.locator('[data-test="error"]')).toBeVisible();
    }
  });
}
