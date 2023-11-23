const sinon = require("sinon");
const { expect, assert } = require("chai");
const utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToAPI", () => {
    it("Calls calculateNumber()", () => {
        const spy1 = sinon.spy(utils, 'calculateNumber');
        const spy2 = sinon.spy(console, 'log');

        const apiRequest = sendPaymentRequestToApi(100, 20);

        expect(spy1.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
        expect(spy2.calledOnceWithExactly('The total is: 120')).to.equal(true);
        expect(utils.calculateNumber('SUM', 100, 20)).to.equal(apiRequest);

        spy1.restore();
        spy2.restore();
    });
});