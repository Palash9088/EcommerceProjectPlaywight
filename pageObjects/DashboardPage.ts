import { Locator, Page } from "@playwright/test";

export class DashboardPage {
  readonly page: Page;
  readonly title: Promise<string>;
  readonly pageText: Locator;
  readonly mobileMenu: Locator;
  readonly productPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.title();
    this.mobileMenu = page.locator("li[class*='level0 nav-1']>a");
    this.pageText = page.locator("h2");
    this.productPrice = page.locator("span[id='product-price-1']>span");
  }

  async getTitle() {
    return await this.title;
  }

  async getPageText() {
    return await this.pageText.textContent();
  }

  async clickOnMobilePage() {
    await this.mobileMenu.click();
  }

/*   async getSonyXperiaProductPrice():Promise<void> {
    let hello =await this.productPrice.textContent();
    parseFloat(hello?.replace("$", ""));
  }

  async getSonyXperiaProductPrices(): Promise<number> {
    let hello = await this.productPrice.textContent();
    return parseFloat(hello?.replace("$", ""));
  }
  async getSonyXperiaProductPricess(): Promise<number> {
    const hello = await this.productPrice.textContent();
    return parseFloat(hello?.replace("$", ""));
  } */
  async getSonyXperiaProductPrice(): Promise<number> {
    let hello = await this.productPrice.textContent();
    const price = parseFloat(hello!.replace("$", ""));
    return price;
  }
}
