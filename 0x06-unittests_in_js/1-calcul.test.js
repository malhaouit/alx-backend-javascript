const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
    describe('SUM operation', function () {
        it('should return 6 when summing 1.4 and 4.5', function () {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });

        it('should return 5 when summing 1 and 4', function () {
            assert.strictEqual(calculateNumber('SUM', 1, 4), 5);
        });
    });

    describe('SUBTRACT operation', function () {
        it('should return -4 when subtracting 4.5 from 1.4', function () {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });

        it('should return 3 when subtracting 2 from 5', function () {
            assert.strictEqual(calculateNumber('SUBTRACT', 5, 2), 3);
        });
    });

    describe('DIVIDE operation', function () {
        it('should return 0.2 when dividing 1.4 by 4.5', function () {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return Error when dividing by 0', function () {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
    });

    describe('Invalid operation type', function () {
        it('should throw an error for invalid operation type', function () {
            assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), Error);
        });
    });
});
