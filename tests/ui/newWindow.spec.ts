import { test, expect } from "@playwright/test";

test("Handle new window", async ({ page }) => {
  await page.goto("https://demoqa.com/browser-windows", {
    waitUntil: "domcontentloaded",
  });

  const windowBtn = page.getByRole("button", {
    name: "New Window",
    exact: true,
  });
  const [newWindow] = await Promise.all([
    page.context().waitForEvent("page"),
    windowBtn.click(),
  ]);

  await newWindow.waitForLoadState();
  await expect(newWindow).toHaveURL("https://demoqa.com/sample");
  await expect(newWindow.locator("#sampleHeading")).toContainText(
    "This is a sample page",
  );
});
