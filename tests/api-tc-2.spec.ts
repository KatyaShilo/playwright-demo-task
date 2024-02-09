import { test, expect } from '@playwright/test';

test('API Test Case 2', async ({ request }) => {
  const recievedData1 = await request.get(`/us/90210`);
  const recievedData2 = await request.get(`/us/12345`);
  const recievedData3 = await request.get(`/ca/B2R`);

  expect(recievedData1.status()).toBe(200);
  expect(recievedData1.headers()['content-type']).toBe('application/json');
  expect(await recievedData1.json()).toEqual(expect.objectContaining({
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

  expect(recievedData2.status()).toBe(200);
  expect(recievedData2.headers()['content-type']).toBe('application/json');
  expect(await recievedData2.json()).toEqual(expect.objectContaining({
    country: 'United States',
    'post code': '12345',
    places: [{
        'place name': 'Schenectady',
        longitude: '-74.058',
        state: 'New York',
        'state abbreviation': 'NY',
        latitude: '42.8333'
      }]
  }));

  expect(recievedData3.status()).toBe(200);
  expect(recievedData3.headers()['content-type']).toBe('application/json');
  expect(await recievedData3.json()).toEqual(expect.objectContaining({
    country: 'Canada',
    'post code': 'B2R',
    places: [{
      'place name': 'Waverley',
      longitude: '-63.5144',
      state: 'Nova Scotia',
      'state abbreviation': 'NS',
      latitude: '44.7431'
      }]
  }));

});