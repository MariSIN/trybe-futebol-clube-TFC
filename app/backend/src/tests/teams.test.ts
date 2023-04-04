import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Model } from 'sequelize';
import TeamsModel from '../database/models/Teams.model';
import { allTeams, oneTeam } from './mock/mockTeams';

chai.use(chaiHttp);

const { expect } = chai;

describe('GET "/teams"', () => {

  it('Testa se retorna todos os times', async () => {
    sinon.stub(Model, 'findAll').resolves(allTeams as TeamsModel[]);

    const response = await chai.request(app).get('/teams');

    expect(response.status).to.be.deep.equal(200);
    expect(response.body).to.be.deep.equal(allTeams);

   (Model.findAll as sinon.SinonStub).restore();

  });

  it('Testa se retorna um time pelo ID', async () => {
    sinon.stub(Model, 'findByPk').resolves(oneTeam as TeamsModel);

    const response = await chai.request(app).get('/teams/1');

    expect(response.body).to.be.deep.equal(oneTeam);
    expect(response.status).to.be.deep.equal(200);
    
    (Model.findByPk as sinon.SinonStub).restore();
  });
});
