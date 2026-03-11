import { test, expect } from "@playwright/test";
import fs from "fs";
test("Download file", async ({ page }) => {
  await page.goto("https://demoqa.com/upload-download");

  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("button", { name: "Download" }).click(),
  ]);
  //   const path = await download.path();
  //   console.log(path);
  await download.saveAs("tests/ui/assets/downloadedFile.txt");
  await expect(
    fs.existsSync("tests/ui/assets/downloadedFile.txt"),
  ).toBeTruthy();
});
