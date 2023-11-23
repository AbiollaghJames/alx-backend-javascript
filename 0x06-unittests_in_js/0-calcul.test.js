var assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", function() {
    it("Should test the rounded part", function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
    it("Should sum signed and unsigned integers", function() {
        assert.strictEqual(calculateNumber(3, 4), 7);
        assert.strictEqual(calculateNumber(2, -5), -3);
        assert.strictEqual(calculateNumber(5, -4), 1);
    });
    it("Casts non number to number and return rounded sum", function() {
        assert.strictEqual(calculateNumber('2', 8), 10);
        assert.strictEqual(calculateNumber('5.7', 7.3), 13);
        assert.strictEqual(calculateNumber('5.7', '4.9'), 11);
    });
});
