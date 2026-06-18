import { test, expect } from "@playwright/test";

// Exercises: src/home (mapped for diff-aware Quick check in Verity).
test("home page renders its primary content", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Verity Demo Shop" })).toBeVisible();
  await expect(page.getByRole("button", { name: /add .* to cart/i })).toBeVisible();
});
