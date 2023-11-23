const Utils = {
    calculateNumber(type, a, b) {
        let numA = Number(a);
        let numB = Number(b);
    
        if (Number.isNaN(numA) || Number.isNaN(numB)) {
            throw new Error("a or b must strictly be numbers!");
        };
    
        switch (type) {
            case 'SUM':
                return Math.round(numA) + Math.round(numB);
            case 'SUBTRACT':
                return Math.round(numA) - Math.round(numB);
            case 'DIVIDE':
                if (numB === 0) return 'Error';
                return Math.round(numA) / Math.round(numB);
            default:
                throw Error ("Invalid operation, Undefined type");
        };
    }
};

module.exports = Utils;