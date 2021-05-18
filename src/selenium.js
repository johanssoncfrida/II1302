/**
* A simple Selenium test to show that the page with 
* id = "root" is displayed from the index.html file.
* Before you can run this test you need to add Geckodriver
* in your PATH in system variables.
*/
const webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');

const driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://localhost:3000').then(()=>{
  const root = driver.findElement(By.id("root"));
    if(root.isDisplayed())
      console.log("Test success, page is displayed!");
}).catch((e)=>{
    console.log("Error, " + e)
})

