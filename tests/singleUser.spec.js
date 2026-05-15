const { test, expect } = require('@playwright/test');
const USER_CONFIG = require('../config/user.config');

test.describe('SINGLE USER - GET /api/users/:id', () => {

  test('TC04 - GET user id=2 / Expected result: status 200', async ({ request }) => {
    const response = await request.get(`/api/users/${USER_CONFIG.EXISTING_USER_ID}`);

    expect(response.status()).toBe(200);
  });

  test('TC05 - GET user id=2 / Expected result: ข้อมูล user มี field ครบ', async ({ request }) => {
    const response = await request.get(`/api/users/${USER_CONFIG.EXISTING_USER_ID}`);
    const body = await response.json();

    expect(body.data.id).toBeTruthy();
    expect(body.data.email).toBeTruthy();
    expect(body.data.first_name).toBeTruthy();
    expect(body.data.last_name).toBeTruthy();
  });

  test('TC06 - GET user ที่ไม่มีอยู่ / Expected result: status 404', async ({ request }) => {
    const response = await request.get(`/api/users/${USER_CONFIG.NON_EXISTING_USER_ID}`, {
      failOnStatusCode: false,
    });

    expect(response.status()).toBe(404);
  });

  test('TC07 - GET user id=2 / Expected result: response data.id เท่ากับ 2', async ({ request }) => {
  const response = await request.get('/api/users/2');
  const body = await response.json();

  expect(body.data.id).toBe(2);
});

});