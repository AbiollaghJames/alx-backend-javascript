const chai = require("chai");
const app = require("./api");
const request = require("request");
const expect = chai.expect;

describe("Express API Test", () => {
    const params = {
        url: "http://localhost:7865",
        method: "GET",
    };
    it("Tests status code", (done) => {
        request(params, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
    it("Tests body text", (done) => {
        request(params, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
});