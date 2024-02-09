import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('UI Test Case 2', async ({ page }) => {
  const servicesLocator = page.locator('#main-menu > ul > li:nth-child(3)');
  const automationLocator = page.locator('div [data-levelname="level2"] > ul > li:nth-child(4)');
  const allowCookiesButton = page.getByRole('button', { name: 'Allow all cookies' });
  const contactUsLocator = page.getByText('Contact us:');
  const firstNameLocator = page.getByText('First Name');
  const lastNameLocator = page.getByText('Last Name');
  const emailLocator = page.getByLabel('Email*')
  const phoneLocator = page.getByText('Phone');
  const companyLocator = page.getByText('Company');
  const countryDropDown = page.getByLabel('Country*');
  const messageLocator = page.getByLabel('Message*');
  const agreeCheckBox = page.getByText('I agree');
  //const notaRobotCheckBox = page.getByLabel('I\'m not a robot');
  const notaRobotCheckBox = page.frameLocator('iframe[name="a-hcrhmdj6f86r"]').getByLabel('I\'m not a robot')
  const submitButton = page.getByRole('button', { name: 'Submit' });

  const randomFirstName = faker.person.firstName();
  const randomLastName = faker.person.lastName();
  const randomEmail = faker.internet.email();
  const randomPhone = faker.phone.number();
  const randomCompany = faker.company.name();
  const randomMessage = faker.lorem.sentence();

  await page.goto('https://www.sogeti.com/');
  await allowCookiesButton.click();
  await servicesLocator.click();
  await automationLocator.click();
  await expect(contactUsLocator).toBeVisible();
  await firstNameLocator.fill(randomFirstName);
  await lastNameLocator.fill(randomLastName);
  await emailLocator.fill(randomEmail);
  await phoneLocator.fill(randomPhone);
  await companyLocator.fill(randomCompany);
  await countryDropDown.selectOption('Germany');
  await messageLocator.fill(randomMessage);
  await agreeCheckBox.click();
  //not possible to get around captcha and submit
  //await notaRobotCheckBox.click(); 
  await submitButton.click();
  await page.close();  
});

