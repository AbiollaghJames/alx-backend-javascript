const request = require('request');
const { expect } = require('chai');

describe('Express API Test', () => {
  describe('GET /', () => {
    it('Checks status code and body', (done) => {
      const params = {
        url: 'http://localhost:7865',
        method: 'GET'
      };

      request(params, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET /cart/12', () => {
    it('200 response for cart 12', (done) => {
      const params = {
        url: 'http://localhost:7865/cart/12',
        method: 'GET'
      };

      request(params, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });
  });

  describe('GET /cart/string', () => {
    it('404 response', (done) => {
      const params = {
        url: 'http://localhost:7865/cart/string',
        method: 'GET'
      };

      request(params, (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/', () => {
    it('404 response', (done) => {
      const params = {
        url: 'http://localhost:7865/cart/',
        method: 'GET'
      };

      request(params, (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});
