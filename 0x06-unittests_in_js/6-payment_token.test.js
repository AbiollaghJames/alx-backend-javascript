const { expect } = require("chai");
const sinon = require("sinon");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", () => {
    it("Resolves the Promise for true", (done) => {
        getPaymentTokenFromAPI(true)
            .then((result) => {
                expect(result).to.eql({data: 'Successful response from the API' });
                done();
            })
            .catch((error) => {
                done(error);
            });
    });
});