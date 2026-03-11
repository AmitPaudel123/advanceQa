import { test, expect } from "@playwright/test";
import { loginPage } from "./pages/loginPage";
test.describe("Login Form Test", () => {
  const pageLink = "https://demoqa.com/automation-practice-form";

  test.skip("Visibility testing of form element", async ({ page }) => {
    const login = new loginPage(page);
    await page.goto(pageLink, { waitUntil: "domcontentloaded" });
    await expect(login.fname).toBeVisible();
    await expect(login.lname).toBeVisible();
    await expect(login.state).toBeEnabled();
    await expect(login.city).toBeVisible();
  });

  test.skip("False Login Test", async ({ page }) => {
    const login = new loginPage(page);
    await page.goto(pageLink, { waitUntil: "domcontentloaded" });
    await login.submit.click();
    await expect(page.locator(".modal-content .modal-header")).toContainText(
      "Thanks for submitting the form",
    );
  });

  test("success login test", async ({ page }) => {
    const login = new loginPage(page);
    await page.goto(pageLink, { waitUntil: "domcontentloaded" });

    await login.login(
      "Amit",
      "Paudel",
      "amitpaudel2023@gmail.com",
      "9814879921",
      "1/2/2026",
      "tests/ui/assets/amit.png",
    );
    await expect(page.locator(".modal-content .modal-header")).toContainText(
      "Thanks for submitting the form",
    );
  });
});
