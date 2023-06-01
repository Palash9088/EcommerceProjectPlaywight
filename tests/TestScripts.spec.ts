import { test, expect } from "@playwright/test";
import { DashboardPage } from "../pageObjects/DashboardPage";
import { MobilePage } from "../pageObjects/MobilePage";

test.beforeEach(async ({ page }) => {
  await page.goto("http://live.techpanda.org/index.php/");
});

test("Test Case 1", async ({ page }) => {
  const dashboardPageObj = new DashboardPage(page);
  expect(await dashboardPageObj.getTitle()).toEqual("Home page");
  console.log(await dashboardPageObj.getPageText());
  expect(await dashboardPageObj.getPageText()).toContain("demo");
  await dashboardPageObj.clickOnMobilePage();

  const mobilePageObj = new MobilePage(page);
  expect(await mobilePageObj.getTitle()).toEqual("Mobile");
  expect(await mobilePageObj.isProductSortedByName()).toBeTruthy();
});
test.only("test case 2", async ({page}) => {
  const dashboardPageObj = new DashboardPage(page);
  await dashboardPageObj.clickOnMobilePage();
  console.log(await dashboardPageObj.getSonyXperiaProductPrice());
});
