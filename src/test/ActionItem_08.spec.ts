import { test, expect, Page } from '@playwright/test'

//any variable can be defined with let or const
let page:Page

//create beforeAll function to define only one instance of the page
test.beforeAll(async({browser}) => {
    page = await browser.newPage()
})

test("tc001_payBillTool @smoke",async() => {
    //print put steps to the console (sys.out in java)
    console.log("Navigating to Nationwide home page")
    //navigate to Nationwide home page
    await page.goto("https://www.nationwide.com")
    //thread.sleep
    await page.waitForTimeout(2000)
    //click on pay business bill
    await page.locator("xpath = //*[@name='custom-account-dropdown']").selectOption("Pay a business bill")
    //scroll into the element so that it is accessible for us to click on it
    await page.locator("xpath = //*[id='custom-account-dropdown-submit").scrollIntoViewIfNeeded()
    await page.locator("xpath = //*[id='custom-account-dropdown-submit").click()
    
})