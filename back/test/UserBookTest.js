var expect  = require('chai').expect;
var request = require('supertest');
var token;

beforeEach(function(done) {
    request("http://localhost:3000")
      .post('/api/auth')
      .send({ username: "hyboi", password: "1234" })
      .end(function(err, res) {
        expect(res.body).to.have.property('accessToken')
        token= res.body.accessToken;
        done();
      })
  });

it('Search for a book as a user', function(done) {
    request("http://localhost:3000")
      .get('/api/books/search')
      .set("Authorization", "Bearer " + token)
      .send({ book: "Name of the wind", author: "Patrick Rothfuss" })
      .end(function(err, res) {
        expect(res.status).to.be.equals(201);
        expect(res.body[0]).to.have.property('idbooks');
        expect(res.body[0]).to.have.property('name').to.be.equals("Name of the wind")
        done();
      });
});

it('Insert book as user', function(done) {
    request("http://localhost:3000")
      .post('/api/books/insert')
      .set("Authorization", "Bearer " + token)
      .send({ 	"book" : "Name of the wind",
                "author" : "Patrick Rothfuss",
                "description" : "Second entry of the popular King Killer chronicles books.",
                "publishing_date" : "16/05/2020",
                "number_of_copies" : 10,
                "shelf_location" : "A5" })
      .end(function(err, res) {
        expect(res.status).to.be.equals(403);
        done();
      });
});

it('Update book as user', function(done) {
    request("http://localhost:3000")
      .put('/api/books/update')
      .set("Authorization", "Bearer " + token)
      .send({ 	"book" : "Name of the wind",
                "author" : "Patrick Rothfuss",
                "number_of_copies" : 10})
      .end(function(err, res) {
        expect(res.status).to.be.equals(403);
        done();
      });
});