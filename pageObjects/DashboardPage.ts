import{Locator,Page} from '@playwright/test';

export class DashboardPage{

    readonly page:Page;
    readonly title: Promise<string>;    
    readonly pageText: Locator;    
    readonly mobileMenu: Locator;

    constructor(page:Page) {
        this.page = page;
        this.title =  page.title();
        this.mobileMenu = page.locator("li[class*='level0 nav-1']>a");
        this.pageText = page.locator("h2");
    }

    async getTitle(){
        return await this.title;
    }

    async getPageText(){
        return await this.pageText.textContent();
    }

    async clickOnMobilePage(){
        await this.mobileMenu.click();
    }
}
