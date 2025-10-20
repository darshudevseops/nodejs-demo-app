const request = require('supertest');

const app = require('../app');

describe('GET /', () => {
it('should return welcome message', async () => {
const response = await request(app).get('/');
expect(response.statusCode).toBe(200);
expect(response.body).toHaveProperty('message');
expect(response.body.message).toContain('Hello from Node.js Demo App');
});
});
describe('GET /health', () => {
it('should return health status', async () => {
const response = await request(app).get('/health');
expect(response.statusCode).toBe(200);
expect(response.body).toHaveProperty('status', 'OK');
});
});

describe('GET /api/info', () => {
it('should return app information', async () => {
const response = await request(app).get('/api/info');
expect(response.statusCode).toBe(200);
expect(response.body).toHaveProperty('name', 'Node.js Demo App');
expect(response.body).toHaveProperty('version', '1.0.0');
});
});
