const { test, expect } = require('@playwright/test');
const USER_CONFIG = require('../config/user.config');

test.describe('CREATE - POST /api/users', () => {

  test('TC01 - POST user / Expected result: status 201', async ({ request }) => {
    const response = await request.post('/api/users', {
      data: USER_CONFIG.CREATE_USER,
    });

    expect(response.status()).toBe(201);
  });

  test('TC02 - POST user / Expected result: response มี id และ createdAt', async ({ request }) => {
    const response = await request.post('/api/users', {
      data: USER_CONFIG.CREATE_USER,
    });
    const body = await response.json();

    expect(body.id).toBeTruthy();
    expect(body.createdAt).toBeTruthy();
  });

  test('TC03 - POST user / Expected result: name และ job ตรงกับข้อมูลที่ส่งไป', async ({ request }) => {
    const response = await request.post('/api/users', {
      data: USER_CONFIG.CREATE_USER,
    });
    const body = await response.json();

    expect(body.name).toBe(USER_CONFIG.CREATE_USER.name);
    expect(body.job).toBe(USER_CONFIG.CREATE_USER.job);
  });

});