'use strict';

var expect    = require('chai').expect;
var supertest = require('supertest-as-promised');
var request;

describe('swaggerize-ui', function () {

  before(function () {
    return require('./fixtures/app').then(function (app) {
      request = supertest(app);
    });
  });

  it('should redirect docs with url query', function () {
    return request.get('/docs')
      .expect(302)
      .then(function (res) {
        expect(res.headers.location).to.be.equal('?url=%2Fapi-docs');
        return request.get('/api-doc').expect(200);
      })
      .then(function (res) {
        expect(res.body).to.be.eql(require('./fixtures/docs'));
        return request.get('/hello/swaggerman').expect(200);
      })
      .then(function (res) {
        expect(res.body).to.be.eql({message: 'Hello swaggerman!'});
      });
  });

  it('should not redirect docs if url query is given', function () {
    return request.get('/docs/?url=https%3A%2F%2Flocalhost%2Fapi-docs')
      .expect(200);
  });

});
