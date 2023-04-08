import * as chai from 'chai';
import * as jwt from 'jsonwebtoken';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');

import { Model } from 'sequelize';
import { app } from '../app';
import Matches from '../database/models/Matches.model';
import statusCodes from '../statusCode';
import {
    mockCreatedMatch,
    mockMatches,
    mockMatchesInProgressFalse,
    mockMatchesInProgressTrue,
} from './mock/mockMatches';
import { userToken, verifyToken } from './mock/mockUser';

chai.use(chaiHttp);

const { expect } = chai;

describe('GET /matches', () => {
	afterEach(sinon.restore);

	describe('Quando a solicitação é feita com sucesso', () => {
		it('deve retornar um status 200 e um objeto com as partidas', async () => {
			sinon
				.stub(Model, 'findAll')
				.resolves(mockMatches as unknown as Matches[]);

			const httpResponse = await chai.request(app).get('/matches');

			expect(httpResponse.status).to.be.equal(statusCodes.ok);
			expect(httpResponse.body).to.be.deep.equal(mockMatches);
		});
	});

	describe('Quando a solicitação da rota GET /matches?inProgress=param é feita com sucesso', () => {
		it('true: deve retornar um status 200 com as partidas em progresso', async () => {
			sinon
				.stub(Model, 'findAll')
				.resolves(mockMatchesInProgressTrue as unknown as Matches[]);

			const httpResponse = await chai
				.request(app)
				.get('/matches?inProgress=true');

			expect(httpResponse.status).to.be.equal(statusCodes.ok);

			expect(httpResponse.body).to.be.deep.equal(mockMatchesInProgressTrue);
		});

		it('false: deve retornar um status 200 com as partidas finalizadas', async () => {
			sinon
				.stub(Model, 'findAll')
				.resolves(mockMatchesInProgressFalse as unknown as Matches[]);

			const httpResponse = await chai
				.request(app)
				.get('/matches?inProgress=false');

			expect(httpResponse.status).to.be.equal(statusCodes.ok);

			expect(httpResponse.body).to.be.deep.equal(mockMatchesInProgressFalse);
		});
	});
});

describe('PATCH /matches/:id/finish', () => {
	afterEach(sinon.restore);

	describe('Quando o token não for informado', () => {
		it('deve retornar o status 401 e uma messagem com "token not found"', async () => {
			const httpResponse = await chai.request(app).patch('/matches/1/finish');

			expect(httpResponse.status).to.be.deep.equal(statusCodes.unauthorized);
			expect(httpResponse.body).to.be.deep.equal({
				message: 'Token not found',
			});
		});
	});

	describe('Quando o token for inválido', () => {
		it('deve retornar o status 401 e uma mensagem com "Token must be a valid token"', async () => {
			const httpResponse = await chai
				.request(app)
				.patch('/matches/1/finish')
				.set('Authorization', 'token');

			expect(httpResponse.status).to.equal(statusCodes.unauthorized);
			expect(httpResponse.body).to.be.deep.equal({
				message: 'Token must be a valid token',
			});
		});
	});

	describe('Quando existir um token e ele for válido', () => {
		it('deve retornar um objeto com um objeto { message: "Finished" }', async () => {
			sinon.stub(jwt, 'verify').returns(verifyToken as any);

			const message = { message: 'Finished' };

			const httpResponse = await chai
				.request(app)
				.patch('/matches/1/finish')
				.set('Authorization', userToken)
				.send({
					homeTeamGoals: 6,
					awayTeamGoals: 2,
				});

			expect(httpResponse.status).to.equal(statusCodes.ok);
			expect(httpResponse.body).to.deep.equal(message);
		});
	});
});

describe('POST /matches', () => {
	afterEach(sinon.restore);

	describe('Quando o token não for informado', () => {
		it('deve retornar o status 401 e uma messagem com "token not found"', async () => {
			const httpResponse = await chai.request(app).post('/matches');

			expect(httpResponse.status).to.be.deep.equal(statusCodes.unauthorized);
			expect(httpResponse.body).to.be.deep.equal({
				message: 'Token not found',
			});
		});
	});

	describe('Quando o token for inválido', () => {
		it('deve retornar o status 401 e uma mensagem com "Token must be a valid token"', async () => {
			const httpResponse = await chai
				.request(app)
				.post('/matches')
				.set('Authorization', 'token');

			expect(httpResponse.status).to.equal(statusCodes.unauthorized);
			expect(httpResponse.body).to.be.deep.equal({
				message: 'Token must be a valid token',
			});
		});
	});

	describe('Quando existir um token e ele for válido', () => {
		it('deve retornar um objeto com um objeto { message: "Finished" }', async () => {
			sinon.stub(jwt, 'verify').returns(verifyToken as any);

			sinon.stub(Model, 'create').resolves(mockCreatedMatch as Matches);

			const httpResponse = await chai
				.request(app)
				.post('/matches')
				.set('Authorization', userToken)
				.send({
					homeTeamId: 16,
					awayTeamId: 8,
					homeTeamGoals: 2,
					awayTeamGoals: 2,
				});

			expect(httpResponse.status).to.equal(statusCodes.created);
			expect(httpResponse.body).to.deep.equal(mockCreatedMatch);
		});
	});

	describe('Quando homeTeam e awayTeam forem iguais', () => {
		it('deve retornar um status 422 e um objeto { message: "It is not possible to create a match with two equal teams" }', async () => {
			sinon.stub(jwt, 'verify').returns(verifyToken as any);

			const httpResponse = await chai
				.request(app)
				.post('/matches')
				.set('Authorization', userToken)
				.send({
					homeTeamId: 5,
					awayTeamId: 5,
					homeTeamGoals: 2,
					awayTeamGoals: 2,
				});

			expect(httpResponse.status).to.equal(statusCodes.unprocessableEntity);

			expect(httpResponse.body).to.deep.equal({
				message: 'It is not possible to create a match with two equal teams',
			});
		});
	});

	describe('Quando o time não existir no banco de dados', () => {
		it('deve retornar um status 404 com um objeto { "message": "There is no team with such id!" }', async () => {
			sinon.stub(jwt, 'verify').returns(verifyToken as any);
			sinon.stub(Model, 'findOne').resolves(null);

			const httpResponse = await chai
				.request(app)
				.post('/matches')
				.set('Authorization', userToken)
				.send({
					homeTeamId: 322,
					awayTeamId: 5,
					homeTeamGoals: 2,
					awayTeamGoals: 2,
				});
			expect(httpResponse.status).to.equal(statusCodes.notFound);
			expect(httpResponse.body).to.deep.equal({
				message: 'There is no team with such id!',
			});
		});
	});
});
