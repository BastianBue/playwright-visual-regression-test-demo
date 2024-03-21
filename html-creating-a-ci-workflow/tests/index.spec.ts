import { test, expect, Locator, Page } from "./fixtures";

test("should have a screenshot", { tag: "@visual" }, async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveScreenshot({ fullPage: true });
});

test(
  "should show submission success in a new page",
  { tag: "@visual" },
  async ({ indexPage }) => {
    const submitPage = await indexPage.createMessageAndProceed();
    await expect(submitPage).toHaveScreenshot({ fullPage: true });
  }
);

export class IndexPage {
  private readonly inputName: Locator;
  private readonly inputEmail: Locator;
  private readonly inputMessage: Locator;
  private readonly submitButton: Locator;

  constructor(public readonly page: Page) {
    this.inputName = this.page.locator('input[name="Name"]');
    this.inputMessage = this.page.locator('input[name="Message"]');
    this.inputEmail = this.page.locator('input[name="Email"]');
    this.submitButton = this.page.getByRole("button", { name: "Send" });
  }

  async goto() {
    await this.page.goto("/");
  }

  async createMessageAndProceed(): Promise<Page> {
    await this.inputName.click();
    await this.inputName.fill("Bastian Büld");
    await this.inputEmail.click();
    await this.inputEmail.fill("b.bueld@gmx.de");
    await this.inputMessage.click();
    await this.inputMessage.fill("I love this presentation");
    const submitPagePromise = this.page.waitForEvent("popup");
    await this.submitButton.click();
    return await submitPagePromise;
  }
}
