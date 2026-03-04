import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
test("Web table features testing", async ({ page }) => {
  await page.goto("https://demoqa.com/webtables");

  //testing edit and delete functionality
  const aldenRow = page.locator("tbody tr").filter({ hasText: "Alden" });
  const editBtn2 = aldenRow.getByTitle("Edit");
  const dltBtn2 = aldenRow.getByTitle("Delete");
  //edit
  await editBtn2.click();
  await expect(page.getByRole("dialog").locator(".modal-header")).toContainText(
    "Registration Form",
  );
  await page.getByPlaceholder("Last Name").fill("Paudel");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(aldenRow).toContainText("Paudel");

  //delete
  await dltBtn2.click();
  await expect(aldenRow).toBeHidden();

  //add random 15 data
  //   const users = [
  //     {

  //     }];
});
