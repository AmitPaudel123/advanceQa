import { test, expect } from "@playwright/test";

test("upload file test", async ({ page }) => {
  await page.goto("https://demoqa.com/upload-download", {
    waitUntil: "domcontentloaded",
  });
  await page.locator("#uploadFile").setInputFiles("tests/ui/assets/amit.png");

  await expect(page.locator("#uploadedFilePath")).toContainText(/amit.png/i);
});
