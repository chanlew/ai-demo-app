const request = require('supertest');
const app = require('./index');

describe('GET /items', () => {
  it('returns 200 with an array of items', async () => {
    const res = await request(app).get('/items');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('returns items with id, name, and description fields', async () => {
    const res = await request(app).get('/items');
    const item = res.body[0];
    expect(item).toHaveProperty('id');
    expect(item).toHaveProperty('name');
    expect(item).toHaveProperty('description');
  });
});

describe('POST /items', () => {
  it('returns 201 with the created item', async () => {
    const res = await request(app)
      .post('/items')
      .send({ name: 'Test Item', description: 'A test item' });
    expect(res.status).toBe(201);
    expect(res.body.name).toBe('Test Item');
    expect(res.body.description).toBe('A test item');
    expect(res.body).toHaveProperty('id');
  });

  it('created item appears in GET /items', async () => {
    await request(app)
      .post('/items')
      .send({ name: 'Another Item', description: 'Another description' });
    const res = await request(app).get('/items');
    const found = res.body.find((i) => i.name === 'Another Item');
    expect(found).toBeDefined();
  });
});
