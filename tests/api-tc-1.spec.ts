import { test, expect } from '@playwright/test';

test('API Test Case 1', async ({ request }) => {
  const recievedData = await request.get(`/de/bw/stuttgart`);
  console.log('responce', await recievedData.json())
  expect(recievedData.status()).toBe(200);
  expect(recievedData.headers()['content-type']).toBe('application/json');
  expect(await recievedData.json()).toEqual(expect.objectContaining({
    country: 'Germany',
    state: 'Baden-Württemberg'
  }));

});