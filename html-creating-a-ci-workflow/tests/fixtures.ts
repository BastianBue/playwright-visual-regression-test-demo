import { IndexPage } from "./index.spec";

export * from "@playwright/test";
import { test as base } from "@playwright/test";
export const test = base.extend<{ indexPage: IndexPage }>({
  indexPage: async ({ page }, use) => {
    const indexPage = new IndexPage(page);
    await indexPage.goto();
    //setup()
    await use(indexPage);
    //teardown()
  },
});
