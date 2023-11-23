const chai = require("chai");
const app = require("./api");
const request = require("request");
const expect = chai.expect;

describe("Express API Test", () => {
    describe("GET root", () => {
        it("Tests status code and body", (done) => {
            const params = {
                url: "http://localhost:7865",
                method: 'GET',
            };
            request(params, (err, res, body) => {
                expect(res.statusCode).to.equal(200);
                expect(body).to.equal("Welcome to the payment system");
                done();
            });
        });
    });
});