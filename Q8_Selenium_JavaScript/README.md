# Q8 — Write a JavaScript program and test it using Selenium

This follows the supplied Week 10/11 lab PDF: Node.js, JavaScript, Selenium WebDriver, and Chrome.

## Prerequisites
- Node.js and npm installed
- Google Chrome installed
- Internet access for the Google search used in this example

## Procedure (Windows PowerShell / Command Prompt)
1. Open a terminal in this folder.
2. Initialize the Node project and install Selenium:
   ```powershell
   npm init -y
   npm install selenium-webdriver
   ```
3. Run the test:
   ```powershell
   node test.js
   ```
4. Observe Chrome opening Google, searching for `Selenium WebDriver`, checking the page title, and closing.

## Expected result
The terminal prints a page title and `Test Passed` when the resulting title contains `Selenium`. The exact title can vary. If Chrome, network access, or Selenium's browser-driver setup fails, the terminal prints an error and exits with a failure status.

## Main Selenium commands
- `new Builder().forBrowser("chrome").build()` creates a Chrome WebDriver session.
- `driver.get()` opens a URL.
- `findElement(By.name("q"))` locates Google's search box.
- `sendKeys()` enters a search query and presses Enter.
- `driver.wait(until.titleContains(...))` waits for the expected title condition.
- `driver.quit()` closes the browser session.
