import { test, expect } from '@playwright/test';

test('API Test Case 2', async ({ request }) => {
  const recievedData = await request.get(`/us/90210`);
  console.log('response', await recievedData.json())
  expect(recievedData.status()).toBe(200);
  expect(recievedData.headers()['content-type']).toBe('application/json');
  expect(await recievedData.json()).toEqual(expect.objectContaining({
    country: 'United States',
    'post code': '90210',
    places: [{
      'place name': 'Beverly Hills',
      longitude: '-118.4065',
      state: 'California',
      'state abbreviation': 'CA',
      latitude: '34.0901'
    }]
  }));
});