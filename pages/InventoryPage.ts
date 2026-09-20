import {Page, Locator} from '@playwright/test';

export class InventoryPage{
  readonly page: Page;
  readonly item: Locator;
  readonly AddtoCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.item = page.locator('#add-to-cart-sauce-labs-backpack');
    this.AddtoCartButton = page.locator('.shopping_cart_badge');
  }
 
  async goto(){
    await this.page.goto('https://www.saucedemo.com/');
  }
  async addToCart() {
    await this.item.click();
  }

}