var assert = require("assert");
var calculateNumber = require("./0-calcul");

describe("calculateNumber", function() {
    it("Should test the rounded part", function() {
        assert.strictEqual(calculateNumber(1.5, 3.8), 6);
        assert.strictEqual(calculateNumber(-6.4, -3.8), -10);
        assert.strictEqual(calculateNumber(0.9, 0.7), 2);
        assert.strictEqual(calculateNumber(6.9, 8), 15);
        assert.strictEqual(calculateNumber(5, 8.8), 14);
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
