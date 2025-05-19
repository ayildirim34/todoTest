
import { test, expect } from '@playwright/test';

test('todo sayfası başlığı doğru görünüyor', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/todo/i);
});