const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require("./1-calcul");

const SUM = 'SUM';
const SUBTRACT = 'SUBTRACT';
const DIVIDE = 'DIVIDE';

describe("calculateNumber", () => {
    describe("type SUM", () => {
        it("Tests addition of whole numbers", () => {
            expect(calculateNumber(SUM, 3, 5)).to.equal(8);
            expect(calculateNumber(SUM, 4, -8)).to.equal(-4);
            expect(calculateNumber(SUM, 4, 0)).to.equal(4);
        });
        it("Tests addition of float numbers", () => {
            expect(calculateNumber(SUM, 3.7, 5.9)).to.equal(10);
            expect(calculateNumber(SUM, 1.4, 4.5)).to.equal(6);
        });
    });
    describe("type SUBTRACT", () => {
        it("Tests subtraction of whole numbers", () => {
            expect(calculateNumber(SUBTRACT, 7, 2)).to.equal(5);
            expect(calculateNumber(SUBTRACT, 7, -2)).to.equal(9);
            expect(calculateNumber(SUBTRACT, -7, -3)).to.equal(-4);
        });
        it("Tests subtraction of float numbers", () => {
            expect(calculateNumber(SUBTRACT, 6.5, 3.5)).to.equal(3);
            expect(calculateNumber(SUBTRACT, 6.1, 3.5)).to.equal(2);
            expect(calculateNumber(SUBTRACT, 1.4, 4.5)).to.equal(-4);
            expect(calculateNumber(SUBTRACT, -6.5, -3.5)).to.equal(-3);
            expect(calculateNumber(SUBTRACT, 6.5, -3.0)).to.equal(10);
        });
    });
    describe("type DIVIDE", () => {
        it("Tests Division of whole numbers", () => {
            expect(calculateNumber(DIVIDE, 6, 3)).to.equal(2);
            expect(calculateNumber(DIVIDE, 6, 4)).to.equal(1.5);
            expect(calculateNumber(DIVIDE, 6, 8)).to.equal(0.75);
            expect(calculateNumber(DIVIDE, -6, 3)).to.equal(-2);
            expect(calculateNumber(DIVIDE, 6, -3)).to.equal(-2);
        });
        it("Tests Division of float numbers", () => {
            expect(calculateNumber(DIVIDE, 5.8, 1.5)).to.equal(3);
            expect(calculateNumber(DIVIDE, 1.4, 4.5)).to.equal(0.2);
            expect(calculateNumber(DIVIDE, 1.4, 0)).to.equal('Error');
        });
    });
});
