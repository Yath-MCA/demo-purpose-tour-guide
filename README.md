# UI Test SPA

This is a single-page application built with React and Vite, designed to serve as a UI test harness for automation testing.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Running the App

1. Install the dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. To build the application for production:
   ```bash
   npm run build
   ```

---

## Supported Test Scenarios

This application is designed to act as a test harness for the following UI test scenarios:

1. **Verify normal button click:** Ensure a standard button triggers the expected UI or state change.
2. **Verify dropdown opens:** Ensure clicking a dropdown toggle correctly displays the dropdown menu.
3. **Verify logout button visibility inside dropdown:** Ensure the logout button is present and visible once the dropdown is opened.
4. **Verify slide panel open:** Ensure clicking the trigger opens the side/slide panel correctly.
5. **Verify slide panel close:** Ensure the slide panel can be closed using its close button or by clicking outside.
6. **Verify message toggle visibility:** Ensure toggling a message component correctly shows or hides the associated message content.

---

## How to Run Playwright Tests

Currently, Playwright is not installed in the dependencies by default. To set up and run Playwright tests, follow these steps:

### 1. Install Playwright

If Playwright is not already initialized in your project, run the init command. This will set up the necessary Playwright configuration files, a `tests/` directory, and install the required browsers.

```bash
npm init playwright@latest
```
*During initialization, you can choose TypeScript or JavaScript, add a GitHub Action workflow, and install Playwright browsers.*

### 2. Running the Tests

Once installed, you can execute the Playwright tests using the following commands:

* **Run all tests in headless mode (default):**
  ```bash
  npx playwright test
  ```

* **Run tests with the UI Mode (highly recommended for debugging):**
  ```bash
  npx playwright test --ui
  ```

* **Run tests with a headed browser (to visually see the browser running):**
  ```bash
  npx playwright test --headed
  ```

* **Run a specific test file:**
  ```bash
  npx playwright test tests/example.spec.ts
  ```

* **Run tests in a specific browser (e.g., only Chromium):**
  ```bash
  npx playwright test --project=chromium
  ```

### 3. Viewing the HTML Report

Playwright automatically generates an HTML report after a test run. To view it, use:

```bash
npx playwright show-report
```
