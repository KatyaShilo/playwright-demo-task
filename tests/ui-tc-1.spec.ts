import { test, expect } from '@playwright/test';

test('Test Case 1', async ({ page }) => {
  const servicesLocator = page.locator('#main-menu > ul > li:nth-child(3)');
  const automationLocator = page.locator('div [data-levelname="level2"] > ul > li:nth-child(4)');
  const allowCookiesButton = page.getByRole('button', { name: 'Allow all cookies' });

  await page.goto('https://www.sogeti.com/');
  await allowCookiesButton.click();
  await servicesLocator.click();
  await automationLocator.click();
  await expect(page.locator('h1')).toContainText('Automation');
  await servicesLocator.hover();
  await expect(servicesLocator).toHaveClass(/selected/);
  await expect(automationLocator).toHaveClass(/selected/);
  await page.close();  
});

