import { Page, Locator, ElementHandle } from "@playwright/test";

export class MobilePage {
  readonly page: Page;
  readonly title: Promise<string>;
  readonly productName: Locator;
  readonly waitingSelector: Promise<ElementHandle>;
  readonly selectTag: Locator;

  constructor(page: Page) {
    this.title = page.title();
    this.productName = page.locator(".product-name>a");
    this.waitingSelector = page.waitForSelector(".category-description.std");
    this.selectTag = page.locator("select[title='Sort By']").nth(1);
  }

  async getTitle() {
    return await this.title;
  }

  async waitForSelector() {
    return await this.waitingSelector;
  }

  async isProductSortedByName() {
    await this.waitForSelector();
    let productNameArrBeforeSort = new Array();
    productNameArrBeforeSort = await this.productName.allTextContents();
    await this.selectTag.selectOption(
      "http://live.techpanda.org/index.php/mobile.html?dir=asc&order=name"
    );
    let productNameArrAfterSort = new Array();
    productNameArrAfterSort = await this.productName.allTextContents();
    
    return JSON.stringify(productNameArrBeforeSort.sort()) === JSON.stringify(productNameArrAfterSort);
  }
}
