const { test, expect } = require('@playwright/test');
const USER_CONFIG = require('../config/user.config');

test.describe('UPDATE - PUT /api/users/:id', () => {

  test('TC08 - PUT user id=2 / Expected result: status 200', async ({ request }) => {
    const response = await request.put(`/api/users/${USER_CONFIG.EXISTING_USER_ID}`, {
      data: USER_CONFIG.UPDATE_USER,
    });

    expect(response.status()).toBe(200);
  });

  test('TC09 - PUT user id=2 / Expected result: ข้อมูลที่ตอบกลับมาตรงกับที่ส่งไป', async ({ request }) => {
    const response = await request.put(`/api/users/${USER_CONFIG.EXISTING_USER_ID}`, {
      data: USER_CONFIG.UPDATE_USER,
    });
    const body = await response.json();

    expect(body.name).toBe(USER_CONFIG.UPDATE_USER.name);
    expect(body.job).toBe(USER_CONFIG.UPDATE_USER.job);
  });

  test('TC10 - PUT user id=2 / Expected result: response มี updatedAt', async ({ request }) => {
    const response = await request.put(`/api/users/${USER_CONFIG.EXISTING_USER_ID}`, {
      data: USER_CONFIG.UPDATE_USER,
    });
    const body = await response.json();

    expect(body.updatedAt).toBeTruthy();
  });

});