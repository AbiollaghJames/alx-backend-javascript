function calculateNumber(a, b) {
    const numA = Number(a);
    const numB = Number(b);

    if (Number.isNaN(numA) || Number.isNaN(numB)) {
        throw new Error("a or b must strictly be numbers!");
    };
    return Math.round(numA) + Math.round(numB);
};

module.exports = calculateNumber;
