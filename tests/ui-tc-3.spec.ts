import { test, expect } from '@playwright/test';

test('Test Case 3', async ({ page }) => {
  const allowCookiesButton = page.getByRole('button', { name: 'Allow all cookies' });
  const worldwideMenu = page.getByLabel('Worldwide', { exact: true });
  const countryList = page.locator('#country-list-id');
  const belgiumCountry = page.locator('#country-list-id li:nth-child(1) a');
  const finlandCountry = page.locator('#country-list-id li:nth-child(2) a');
  const franceCountry = page.locator('#country-list-id li:nth-child(3) a');
  const germanyCountry = page.locator('#country-list-id li:nth-child(4) a');
  const irelandCountry = page.locator('#country-list-id li:nth-child(5) a');
  const luxembourgCountry = page.locator('#country-list-id li:nth-child(6) a');
  const netherlandsCountry = page.locator('#country-list-id li:nth-child(7) a');
  const norwayCountry = page.locator('#country-list-id li:nth-child(8) a');
  const spainCountry = page.locator('#country-list-id li:nth-child(9) a');
  const swedenCountry = page.locator('#country-list-id li:nth-child(10) a');
  const ukCountry = page.locator('#country-list-id li:nth-child(11) a');
  const usaCountry = page.locator('#country-list-id li:nth-child(12) a');

  await page.goto('https://www.sogeti.com/');
  await allowCookiesButton.click();
  await worldwideMenu.click();
  await expect(countryList).toBeVisible();
  await expect(await belgiumCountry.getAttribute('href')).toContain('https://www.sogeti.be/');
  await expect(await finlandCountry.getAttribute('href')).toContain('https://www.sogeti.fi/');
  await expect(await franceCountry.getAttribute('href')).toContain('https://www.fr.sogeti.com/');
  await expect(await germanyCountry.getAttribute('href')).toContain('https://www.sogeti.de/');
  await expect(await irelandCountry.getAttribute('href')).toContain('https://www.sogeti.ie/');
  await expect(await luxembourgCountry.getAttribute('href')).toContain('https://www.sogeti.lu/');
  await expect(await netherlandsCountry.getAttribute('href')).toContain('https://www.sogeti.nl/');
  await expect(await norwayCountry.getAttribute('href')).toContain('https://www.sogeti.no/');
  await expect(await spainCountry.getAttribute('href')).toContain('https://www.sogeti.es/');
  await expect(await swedenCountry.getAttribute('href')).toContain('https://www.sogeti.se/');
  await expect(await ukCountry.getAttribute('href')).toContain('https://www.uk.sogeti.com/');
  await expect(await usaCountry.getAttribute('href')).toContain('https://www.us.sogeti.com/');

  await page.close();  
});