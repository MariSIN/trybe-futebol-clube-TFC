import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import LeaderboardService from '../service/leaderboards.service';
import statusCodes from '../statusCode';
import { leaderboardAll, leaderboardAway, leaderboardHome } from './mock/mockLeaderboard';

chai.use(chaiHttp);

const { expect } = chai

describe('GET /leaderboard/home', () => {
    afterEach(sinon.restore);
    
    describe('Quando a solicitação é feita com sucesso', () => {
        it('deve retornar um status 200 com um objeto contendo a classificação dos times da casa', async () => {
            
            sinon.stub(LeaderboardService.prototype, 'getTeamPerformance').withArgs('/leaderboard/home').resolves([leaderboardHome] as any);

            const httpResponse = await chai
                .request(app)
                .get('/leaderboard/home')

            expect(httpResponse.status).to.equal(statusCodes.ok);
            expect(httpResponse.body).to.deep.equal(leaderboardHome)
        })
    })
})

describe('GET /leaderboard/away', () => {
    afterEach(sinon.restore);
    
    describe('Quando a solicitação é feita com sucesso', () => {
        it('deve retornar um status 200 com um objeto contendo a classificação dos times de fora', async () => {
            
            sinon.stub(LeaderboardService.prototype, 'getTeamPerformance').withArgs('/leaderboard/away').resolves([leaderboardAway] as any);

            const httpResponse = await chai
                .request(app)
                .get('/leaderboard/away')

            expect(httpResponse.status).to.equal(statusCodes.ok);
            expect(httpResponse.body).to.deep.equal(leaderboardAway)
        })
    })
})

describe('GET /leaderboard', () => {
    afterEach(sinon.restore);
    
    describe('Quando a solicitação é feita com sucesso', () => {
        it('deve retornar um status 200 com um objeto contendo a classificação geral', async () => {
            
            sinon.stub(LeaderboardService.prototype, 'getTeamPerformance').withArgs('/leaderboard').resolves([leaderboardAll] as any);

            const httpResponse = await chai
                .request(app)
                .get('/leaderboard')

            expect(httpResponse.status).to.equal(statusCodes.ok);
            expect(httpResponse.body).to.deep.equal(leaderboardAll)
        })
    })
})