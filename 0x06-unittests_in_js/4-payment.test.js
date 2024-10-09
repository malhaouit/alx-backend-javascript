const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi with stubs', function () {
  let calculateNumberStub;
  let consoleSpy;

  beforeEach(function () {
    // Stub Utils.calculateNumber to always return 10
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    
    // Spy on console.log to check if it's called with the correct message
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the original methods after each test
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it('should call calculateNumber with SUM, 100, and 20', function () {
    sendPaymentRequestToApi(100, 20);

    // Check if Utils.calculateNumber was called once with the correct arguments
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    
    // Check if console.log was called with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
