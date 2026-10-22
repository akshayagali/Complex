const { Builder, By, until } = require("selenium-webdriver");

async function testGoogle() {
    const driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get("https://www.google.com");
        console.log("Page Title:", await driver.getTitle());

        const searchBox = await driver.findElement(By.name("q"));
        await searchBox.sendKeys("Selenium WebDriver");
        await searchBox.sendKeys("\n");

        await driver.wait(until.titleContains("Selenium"), 10000);
        console.log("Test Passed");
    } catch (error) {
        console.log("Test Failed:", error.message);
        process.exitCode = 1;
    } finally {
        await driver.quit();
    }
}

testGoogle();
