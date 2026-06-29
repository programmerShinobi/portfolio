import { expect, test } from '@playwright/test';

// Requires `npx playwright install` (browsers). Not run in default CI.
test('home renders and navigates to a case study, deep-link does not 404', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

  // Navigate to the spotlight case study.
  await page.getByRole('link', { name: /read case study/i }).first().click();
  await expect(page).toHaveURL(/\/case-studies\//);

  // Deep-link / refresh should still render the app (SPA fallback).
  await page.reload();
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

test('toggles persist across reload', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('radio', { name: 'ID' }).click();
  await page.reload();
  await expect(page.getByRole('radio', { name: 'ID' })).toHaveAttribute('aria-checked', 'true');
});
