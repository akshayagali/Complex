const { Builder, By } = require("selenium-webdriver");

async function testDockerApp() {
    const driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get("http://localhost:5000");
        console.log("Test 1: Application opened - PASS");

        const body = await driver.findElement(By.tagName("body"));
        const text = await body.getText();

        if (text.includes("Hello")) {
            console.log("Test 2: Expected text found - PASS");
        } else {
            console.log("Test 2: Expected text not found - FAIL");
            process.exitCode = 1;
        }

        const currentURL = await driver.getCurrentUrl();
        if (currentURL === "http://localhost:5000/") {
            console.log("Test 3: URL verification - PASS");
        } else {
            console.log("Test 3: URL verification - FAIL");
            console.log("Actual URL:", currentURL);
            process.exitCode = 1;
        }

        if (text.includes("Hello Students! This application is running inside Docker")) {
            console.log("Test 4: Complete message verified - PASS");
        } else {
            console.log("Test 4: Complete message verification - FAIL");
            process.exitCode = 1;
        }

        await new Promise(resolve => setTimeout(resolve, 10000));
    } catch (error) {
        console.error("Testing error:", error.message);
        process.exitCode = 1;
    } finally {
        await driver.quit();
    }
}

testDockerApp();
