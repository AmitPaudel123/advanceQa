import { uiFixture } from "../fixtures/uiFixture/auth.spec";
import { expect } from "@playwright/test";

uiFixture("Add to cart updated", async ({ login }) => {
  await expect(login).toHaveURL("https://www.saucedemo.com/inventory.html");
});
