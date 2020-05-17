var expect  = require('chai').expect;
var request = require('supertest');


it('I Login as Admin', function(done) {
    request("http://localhost:3000")
      .post('/api/auth')
      .send({ username: "hyhae", password: "1234" })
      .end(function(err, res) {
        expect(res.body).to.have.property('accessToken')
        done();
      });
  });

it('Login as User', function(done) {
    request("http://localhost:3000")
      .post('/api/auth')
      .send({ username: "hyboi", password: "1234" })
      .end(function(err, res) {
        expect(res.body).to.have.property('accessToken')
        done();
      });
});