const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
    describe('SUM operation', function () {
        it('should return 6 when summing 1.4 and 4.5', function () {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });

        it('should return 5 when summing 1 and 4', function () {
            expect(calculateNumber('SUM', 1, 4)).to.equal(5);
        });
    });

    describe('SUBTRACT operation', function () {
        it('should return -4 when subtracting 4.5 from 1.4', function () {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });

        it('should return 3 when subtracting 2 from 5', function () {
            expect(calculateNumber('SUBTRACT', 5, 2)).to.equal(3);
        });
    });

    describe('DIVIDE operation', function () {
        it('should return 0.2 when dividing 1.4 by 4.5', function () {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.2, 0.01);
        });

        it('should return Error when dividing by 0', function () {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });

    describe('Invalid operation type', function () {
        it('should throw an error for invalid operation type', function () {
            expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw(Error);
        });
    });
});
