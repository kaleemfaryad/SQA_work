# Playwright Automation Framework

Automated test framework built with **Playwright + TypeScript**, covering UI and API testing for [saucedemo.com](https://www.saucedemo.com/), a demo e-commerce site. Built as a hands-on project to practice real-world SQA Automation Engineering skills — not just individual test scripts, but a structured, maintainable framework.

![Playwright Tests](https://github.com/kaleemfaryad/SQA_work/actions/workflows/playwright.yml/badge.svg)

## Features

- Page Object Model (POM) architecture for maintainable, reusable code
- Data-driven testing using external JSON test data
- End-to-end UI test coverage: login, cart, checkout, sorting
- API test coverage: GET, POST, PUT, DELETE with positive and negative cases
- CI/CD integration via GitHub Actions — tests run automatically on every push
- Test tagging (`@smoke` / `@regression`) for selective test execution
- HTML reporting (Allure reporter configured)

## Tech Stack

- [Playwright](https://playwright.dev/) — browser and API automation
- TypeScript
- GitHub Actions — CI/CD pipeline
- Allure Report

## Project Structure

```
playwright-automation-framework/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── tests/
│   ├── ui/
│   │   ├── login.spec.ts
│   │   ├── cart.spec.ts
│   │   └── checkout.spec.ts
│   └── api/
│       └── users.spec.ts
├── test-data/
│   └── users.json
├── playwright.config.ts
├── package.json
└── README.md
```

## How to Run

Install dependencies:
```bash
npm install
```

Run the full suite:
```bash
npx playwright test
```

Run only smoke tests:
```bash
npx playwright test --grep "@smoke"
```

Run only regression tests:
```bash
npx playwright test --grep "@regression"
```

View the last HTML report:
```bash
npx playwright show-report
```

## Test Coverage

**UI Tests**
- Login (data-driven — valid and invalid credentials)
- Add single/multiple products to cart
- Remove product from cart
- Product sorting (price low-to-high) — verified against independently sorted data, not just UI state
- Full checkout flow: login → add to cart → checkout → fill shipping info → verify order total → confirm order

**API Tests**
- Get single user (positive case)
- Get non-existent user (negative case — 404)
- Create user (POST)
- Update user (PUT)
- Delete user (DELETE)

## CI/CD

Every push and pull request to `main` automatically triggers the full test suite via GitHub Actions. Test reports (including screenshots, videos, and traces on failure) are uploaded as workflow artifacts.

[View latest runs →](https://github.com/kaleemfaryad/SQA_work/actions)

## What I Learned / Challenges

- Debugged a CI failure caused by a hardcoded local file path (`C:\Users\...`) in a file-upload test — fixed by storing test fixtures inside the repo and referencing them with relative paths via Node's `path` module, so tests run identically on any machine, including CI.
- Fixed locator timeouts caused by a mismatch between Playwright's default `data-testid` attribute lookup and the site's actual `data-test` attribute — resolved via the `testIdAttribute` config option.
- Structured page objects to be reusable and parameterized (e.g., `addProductToCart(productName)` works for any product instead of being hardcoded to one).
- Practiced writing assertions that verify actual logic (e.g., independently re-sorting prices in JavaScript and comparing to the UI's sorted order) rather than just checking that no errors occurred.

## Author

**Kaleem Faryad**
Aspiring SQA Automation Engineer | Playwright | TypeScript
