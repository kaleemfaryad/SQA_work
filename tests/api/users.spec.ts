import { test, expect } from '@playwright/test';

test.describe('Users API', () => {
  test('get single user returns correct data @smoke', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.data.id).toBe(2);
    expect(body.data).toHaveProperty('email');
    expect(body.data).toHaveProperty('first_name');
  });

  test('get non-existent user returns 404 @regression', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/9999');

    expect(response.status()).toBe(404);
  });

  test('create user returns 201 with correct payload @smoke', async ({ request }) => {
    const payload = { name: 'Morpheus', job: 'leader' };

    const response = await request.post('https://reqres.in/api/users', {
      data: payload
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.name).toBe(payload.name);
    expect(body.job).toBe(payload.job);
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('createdAt');
  });

  test('update user returns 200 with updated fields @regression', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
      data: { name: 'Morpheus Updated', job: 'senior leader' }
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.name).toBe('Morpheus Updated');
    expect(body).toHaveProperty('updatedAt');
  });

  test('delete user returns 204 @regression', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2');

    expect(response.status()).toBe(204);
  });
});