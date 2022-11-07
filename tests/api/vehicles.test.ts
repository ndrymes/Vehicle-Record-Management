import supertest from 'supertest';
import { getConnection } from 'typeorm';

import { createApp } from 'src/app';

describe('Healthcheck Integration tests', () => {
    let server: Express.Application;

    beforeAll(async () => {
        server = await createApp();
    });

    afterAll(async () => {
        await getConnection().close();
    });

    describe('/v1/vehiclerecord', () => {
        it('returns 200', async () => {
            const response = await supertest(server).post('/v1/statelogs');
            expect(response.status).toBe(200);
        });
    });
});
