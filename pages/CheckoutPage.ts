import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  // Step One - info form
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly zipInput: Locator;
  readonly continueButton: Locator;

  // Step Two - overview
  readonly itemTotal: Locator;
  readonly tax: Locator;
  readonly total: Locator;
  readonly finishButton: Locator;

  // Complete
  readonly confirmationMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstNameInput = page.getByTestId('firstName');
    this.lastNameInput = page.getByTestId('lastName');
    this.zipInput = page.getByTestId('postalCode');
    this.continueButton = page.getByTestId('continue');

    this.itemTotal = page.getByTestId('subtotal-label');
    this.tax = page.getByTestId('tax-label');
    this.total = page.getByTestId('total-label');
    this.finishButton = page.getByTestId('finish');

    this.confirmationMessage = page.getByTestId('complete-header');
  }

  async fillShippingInfo(firstName: string, lastName: string, zip: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.zipInput.fill(zip);
    await this.continueButton.click();
  }

  async getTotalAmount(): Promise<number> {
    const text = await this.total.textContent(); // e.g. "Total: $32.39"
    return parseFloat(text!.replace('Total: $', ''));
  }

  async finishOrder() {
    await this.finishButton.click();
  }
}