const sinon = require("sinon");
const { expect, assert } = require("chai");
const utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToAPI", () => {
    it("Calls calculateNumber()", () => {
        const calculateNumberStub = sinon.stub(utils, 'calculateNumber');
        calculateNumberStub.returns(10);
        const spy = sinon.spy(console, 'log');

        const apiRequest = sendPaymentRequestToApi(100, 20);

        expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
        expect(spy.calledOnceWithExactly('The total is: 10'));
        expect(utils.calculateNumber('SUM', 100, 20)).to.equal(apiRequest);

        calculateNumberStub.restore();
        spy.restore();
    });
});
