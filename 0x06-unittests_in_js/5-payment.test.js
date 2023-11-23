const sinon = require("sinon");
const { expect } = require("chai");
const utils = require("./utils");
const sendPaymentRequestToApi = require("./5-payment");

describe("sendPaymentRequestToAPI", () => {
        let consoleLogStub;

        beforeEach(() => {
            consoleLogStub = sinon.stub(console, 'log');
        });

        afterEach(() => {
            consoleLogStub.restore();
        });
        it("Logs 120 if a is 100 and b is 20", () => {
            sendPaymentRequestToApi(100, 20);
            expect(consoleLogStub.calledOnce).to.be.true;
            expect(consoleLogStub.calledOnceWithExactly('The total is: 120')).to.be.true;
        });
        it("Logs 20 if both a and b are 10", () => {
            sendPaymentRequestToApi(10, 10);
            expect(consoleLogStub.calledOnce).to.be.true;
            expect(consoleLogStub.calledOnceWithExactly('The total is: 20')).to.be.true;
        });
    });
