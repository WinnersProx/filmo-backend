import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

chai.use(chaiHttp);

const { expect } = chai;

describe('Root', () => {

    it('should return a 404 status when a user accesses a wrong endpoint', (done) => {
        chai
            .request(app)
            .get('/**')
            .set('Content-type', 'application/json')
            .end((err, res) => {
                if(err) done(err);
                expect(res.status).to.equal(404);
                done();
        });

    });

    it('should return a 200 status with a message when a user accesses the main endpoint', (done) => {
        chai
            .request(app)
            .get('/')
            .set('Content-type', 'application/json')
            .end((err, res) => {
                if(err) done(err);
                expect(res.status).to.equal(200);
                expect(res.body).to.have.property('message');
                done();
        });

    });
});
