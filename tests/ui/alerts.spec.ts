import { test, expect } from "@playwright/test";

test.describe("Alert Dialog Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/alerts");
  });

  test("should display an alert when the button is clicked", async ({
    page,
  }) => {
    page.on("dialog", async (dialog) => {
      expect(dialog.type()).toBe("alert");
      expect(dialog.message()).toBe("You clicked a button");
      await dialog.accept();
    });
    await page.getByRole("button", { name: "Click me" }).first().click();
  });

  test("should display a confirm dialog", async ({ page }) => {
    page.on("dialog", async (dialog) => {
      expect(dialog.type()).toBe("confirm");
      expect(dialog.message()).toBe("Do you confirm action?");
      await dialog.accept();
    });
    await page.getByRole("button", { name: "Click me" }).nth(2).click();
  });

  test("should display a prompt dialog", async ({ page }) => {
    page.on("dialog", async (dialog) => {
      expect(dialog.type()).toBe("prompt");
      expect(dialog.message()).toBe("Please enter your name");
      await dialog.accept("Playwright");
    });
    await page.getByRole("button", { name: "Click me" }).nth(3).click();
  });
});
