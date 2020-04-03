const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connections');

describe('ong', () => {
    /* Antes de executar o teste roda a migration */
    beforeEach(async() => {
        await connection.migrate.latest();
    })

    /* Ao finalizar o test, desfaz a conexão */
    afterAll(() => {
        connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAE",
                email: "contato@teste.com",
                whatsapp: "7100000000",
                city: "Salvador",
                uf: "BA"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})