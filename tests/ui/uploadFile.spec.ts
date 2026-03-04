import { test, expect } from "@playwright/test";
import path from "node:path";

test("upload file test", async ({ page }) => {
  await page.goto("https://demoqa.com/upload-download", {
    waitUntil: "domcontentloaded",
  });
  await page
    .locator("#uploadFile")
    .setInputFiles("C:/Users/AMIT/Desktop/amit.png");

  await expect(page.locator("#uploadedFilePath")).toContainText(/amit.png/i);
});
