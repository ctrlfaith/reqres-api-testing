const { test, expect } = require('@playwright/test');
const USER_CONFIG = require('../config/user.config');

test.describe('DELETE - DELETE /api/users/:id', () => {

  test('TC11 - DELETE user id=2 / Expected result: status 204', async ({ request }) => {
    const response = await request.delete(`/api/users/${USER_CONFIG.EXISTING_USER_ID}`);

    expect(response.status()).toBe(204);
  });

  test('TC12 - DELETE user ที่ไม่มีอยู่ / Expected result: status 204', async ({ request }) => {
    const response = await request.delete(`/api/users/${USER_CONFIG.NON_EXISTING_USER_ID}`);

    expect(response.status()).toBe(204);
  });

});