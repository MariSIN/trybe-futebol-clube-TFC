import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');

import { Model } from 'sequelize';
import { app } from '../app';
import Users from '../database/models/users.model';
import { theLogin, theUser } from './mock/mockUser';


chai.use(chaiHttp);

const { expect } = chai;

describe('POST "/login"', () => {

    afterEach(sinon.restore);
    
    
    describe('Quando algum parâmetro obrigatório não for informado', () => {

        it('deve retornar status 400 caso o email não seja informado', async () => {
            const httpResponse = await chai.request(app).post('/login').send({});

            expect(httpResponse.status).to.equal(400);
            expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' })
            
        });

        it('deve retornar status 400 caso o password não seja informado', async () => {
            const httpResponse = await chai
                .request(app)
                .post('/login')
                .send({
                    email: 'email@email.com'
                });

            expect(httpResponse.status).to.equal(400);
            expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' })
            
        });
    })

    describe('Quando algum parâmetro for inválido', () => {
        it('deve retornar status 401 caso o password tenha menos que 6 caracteres', async () => {
            const httpResponse = await chai
                .request(app)
                .post('/login')
                .send({
                    email: 'email@email.com',
                    password: 'senha'
                });

                expect(httpResponse.status).to.equal(401);
            expect(httpResponse.body).to.deep.equal({ message: 'Invalid email or password' })
        });

        it('deve retornar status 401 caso o email não esteja no formato correto', async () => {
            const httpResponse = await chai
            .request(app)
            .post('/login')
            .send({
                email: 'email.email@com',
                    password: 'senhaaa'
                });

            expect(httpResponse.status).to.equal(401);
            expect(httpResponse.body).to.deep.equal({ message: 'Invalid email or password' })
        })
    })

    describe('Quando a informação não existe', () => {
        it('deve retornar um status 401 caso o usuário não exista', async () => {
            sinon.stub(Model, 'findOne').resolves(theUser as Users)
            const httpResponse = await chai
                .request(app)
                .post('/login')
                .send({
                    email: 'admin@admine.com',
                    password: 'blablabla'
                });
            expect(httpResponse.status).to.equal(401);
            expect(httpResponse.body).to.deep.equal({ message: 'Invalid email or password' });
        })
    })
    
    describe('Quando a requisição é feita com sucesso', () => {
        it('deve retornar um status 200 caso seja possível fazer o login', async () => {
            sinon.stub(Model, 'findOne').resolves(theUser as Users)
            const httpResponse = await chai
                .request(app)
                .post('/login')
                .send(theLogin);

                
            expect(httpResponse.status).to.equal(200);
 
        })
    })
});
