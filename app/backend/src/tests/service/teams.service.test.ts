import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../../app';

import { Model } from 'sequelize';
import TeamsModel from '../../database/models/teams.model';
import { allTeams } from '../mock/mockTeams';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa a camada service para a rota "/teams"', () => {

  it('Testa a camada service para a rota "/teams"', async () => {
    sinon.stub(Model, 'findAll').resolves(allTeams as TeamsModel[]);

    const response = await chai.request(app).get('/team');

    expect(response).to.equal(200);
    expect(response.body).to.be.deep.equal(allTeams);

   (Model.findAll as sinon.SinonStub).restore();

  });
});
