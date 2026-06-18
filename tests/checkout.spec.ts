import { test, expect } from "@playwright/test";

// Exercises: src/checkout (mapped for diff-aware Quick check in Verity).
test("add to cart and place an order", async ({ page }) => {
  await test.step("load the shop", async () => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Verity Demo Shop" })).toBeVisible();
    await expect(page.getByTestId("cart-count")).toHaveText("0");
  });

  await test.step("add the product to the cart", async () => {
    await page.getByRole("button", { name: "Add Indigo T-Shirt to cart" }).click();
    await expect(page.getByTestId("cart-count")).toHaveText("1");
  });

  await test.step("complete checkout", async () => {
    await page.getByRole("button", { name: "Place order" }).click();
    await expect(page.getByRole("status")).toHaveText("Order placed — thank you!");
  });
});
