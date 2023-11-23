var assert = require("assert");
const calculateNumber = require("./1-calcul");

const SUM = 'SUM';
const SUBTRACT = 'SUBTRACT';
const DIVIDE = 'DIVIDE';

describe("calculateNumber", () => {
    describe("type SUM", () => {
        it("Tests addition of whole numbers", () => {
            assert.strictEqual(calculateNumber(SUM, 3, 5), 8);
            assert.strictEqual(calculateNumber(SUM, 4, -8), -4);
            assert.strictEqual(calculateNumber(SUM, 4, 0), 4);
        });
        it("Tests addition of float numbers", () => {
            assert.strictEqual(calculateNumber(SUM, 3.7, 5.9), 10);
            assert.strictEqual(calculateNumber(SUM, 0.0, 0.1), 0);
        });
    });
    describe("type SUBTRACT", () => {
        it("Tests subtraction of whole numbers", () => {
            assert.strictEqual(calculateNumber(SUBTRACT, 7, 2), 5);
            assert.strictEqual(calculateNumber(SUBTRACT, 7, -2), 9);
            assert.strictEqual(calculateNumber(SUBTRACT, -7, -3), -4);
        });
        it("Tests subtraction of float numbers", () => {
            assert.strictEqual(calculateNumber(SUBTRACT, 6.5, 3.5), 3);
            assert.strictEqual(calculateNumber(SUBTRACT, 6.1, 3.5), 2);
            assert.strictEqual(calculateNumber(SUBTRACT, 6.0, 5.0), 1);
            assert.strictEqual(calculateNumber(SUBTRACT, -6.5, -3.5), -3);
            assert.strictEqual(calculateNumber(SUBTRACT, 6.5, -3.0), 10);
        });
    });
    describe("type DIVIDE", () => {
        it("Tests Division of whole numbers", () => {
            assert.strictEqual(calculateNumber(DIVIDE, 6, 3), 2);
            assert.strictEqual(calculateNumber(DIVIDE, 6, 4), 1.5);
            assert.strictEqual(calculateNumber(DIVIDE, 6, 8), 0.75);
            assert.strictEqual(calculateNumber(DIVIDE, -6, 3), -2);
            assert.strictEqual(calculateNumber(DIVIDE, 6, -3), -2);
        });
        it("Tests Division of float numbers", () => {
            assert.strictEqual(calculateNumber(DIVIDE, 5.8, 1.5), 3);
            assert.strictEqual(calculateNumber(DIVIDE, -5.8, 1.5), -3);
        });
    });
});
