var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

  describe('weather', function() {

    describe('GET /weather', function() {

      it('should accept a city parameter and return a JSON object containing the city name', function(done) {
        request(server)
          .get('/weather')
          .query({ city: 'London'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            res.body.name.should.eql('London');
            done();
          });
      });

    });

  });

});
