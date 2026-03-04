import { test as base, Page } from "@playwright/test";

type uiAuth = {
  login: Page;
};
export const uiFixture = base.extend<uiAuth>({
  login: async ({ page }, use) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();
    await page.waitForURL("https://www.saucedemo.com/inventory.html");
    await use(page);
  },
});
