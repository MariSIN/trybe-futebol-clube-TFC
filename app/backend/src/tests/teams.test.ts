import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Model } from 'sequelize';
import TeamsModel from '../database/models/Teams.model';
import statusCodes from '../statusCode';
import { allTeams, oneTeam } from './mock/mockTeams';

chai.use(chaiHttp);

const { expect } = chai;

describe('GET "/teams"', () => {
	afterEach(sinon.restore);

	describe('Quando a solicitação é feita com sucesso', () => {
		it('deve retornar todos os times', async () => {
			sinon.stub(Model, 'findAll').resolves(allTeams as TeamsModel[]);

			const response = await chai.request(app).get('/teams');

			expect(response.status).to.deep.equal(200);
			expect(response.body).to.deep.equal(statusCodes.ok);
		});
	});
});

describe('GET /teams/:id', () => {
	describe('Quando a solicitação é feita com sucesso', () => {
		it('deve retornar um time pelo ID', async () => {
			sinon.stub(Model, 'findByPk').resolves(oneTeam as TeamsModel);

			const response = await chai.request(app).get('/teams/1');

			expect(response.body).to.deep.equal(oneTeam);
			expect(response.status).to.deep.equal(statusCodes.ok);
		});
	});
});
