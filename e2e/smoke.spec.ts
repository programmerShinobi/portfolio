import { expect, test } from '@playwright/test';

// Runs in CI on PRs via .github/workflows/e2e.yml; locally needs `npx playwright install`.

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

test('header nav scrolls to the section (desktop)', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('navigation').getByRole('button', { name: 'Work' }).click();
  // Wait for the smooth scroll to settle: #work ends up just under the sticky header.
  await page.waitForFunction(
    () => {
      const el = document.getElementById('work');
      return !!el && Math.abs(el.getBoundingClientRect().top) < 140;
    },
    undefined,
    { timeout: 5000 },
  );
});

test.describe('mobile (390px)', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('hamburger menu opens and nav scrolls', async ({ page }) => {
    await page.goto('/');
    // Desktop nav is hidden; open the mobile menu.
    await page.getByRole('button', { name: 'Open menu' }).click();
    const menu = page.locator('#mobile-menu');
    await expect(menu.getByRole('button', { name: 'About' })).toBeVisible();
    await menu.getByRole('button', { name: 'About' }).click();
    // Menu closes and the page smooth-scrolls to #about (can be a long scroll on phones).
    await page.waitForFunction(
      () => {
        const el = document.getElementById('about');
        return !!el && Math.abs(el.getBoundingClientRect().top) < 160;
      },
      undefined,
      { timeout: 6000 },
    );
  });

  test('no horizontal overflow on phones', async ({ page }) => {
    await page.goto('/');
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(0);
  });
});
