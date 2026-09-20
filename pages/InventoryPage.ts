import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly cartBadge: Locator;
  readonly cartIcon: Locator;
  readonly sortDropdown: Locator;
  readonly productPrices: Locator;
  readonly menuButton: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartBadge = page.getByTestId('shopping-cart-badge');
    this.cartIcon = page.getByTestId('shopping-cart-link');
    this.sortDropdown = page.getByTestId('product-sort-container');
    this.productPrices = page.locator('.inventory_item_price');
    this.menuButton = page.getByRole('button', { name: 'Open Menu' });
    this.logoutLink = page.getByTestId('logout-sidebar-link');
  }

  // Dynamic: works for ANY product, not just backpack
  addProductToCart(productName: string) {
    const slug = productName.toLowerCase().replace(/\s+/g, '-');
    return this.page.getByTestId(`add-to-cart-${slug}`).click();
  }

  removeProductFromCart(productName: string) {
    const slug = productName.toLowerCase().replace(/\s+/g, '-');
    return this.page.getByTestId(`remove-${slug}`).click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async sortBy(option: string) {
    await this.sortDropdown.selectOption(option);
  }

  async getAllPrices(): Promise<number[]> {
    const priceTexts = await this.productPrices.allTextContents();
    return priceTexts.map(p => parseFloat(p.replace('$', '')));
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}