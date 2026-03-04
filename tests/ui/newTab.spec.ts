import { test, expect } from "@playwright/test";

test("Handle new tab", async ({ page }) => {
  await page.goto("https://demoqa.com/browser-windows", {
    waitUntil: "domcontentloaded",
  });
  const newTabBtn = page.getByRole("button", { name: "New Tab" });
  const [newTab] = await Promise.all([
    page.context().waitForEvent("page"),
    newTabBtn.click(),
  ]);

  await newTab.waitForLoadState();
  await expect(newTab.locator("#sampleHeading")).toContainText(
    "This is a sample page",
  );
});
