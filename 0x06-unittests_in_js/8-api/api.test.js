const request = require('request');
const { expect } = require('chai');

describe('Express API Test', () => {
  describe('GET /', () => {
    it('Check status code and body', (done) => {
      const params = {
        url: 'http://localhost:7865',
        method: 'GET',
      };

      request(params,  (error, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
});