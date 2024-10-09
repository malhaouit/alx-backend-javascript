const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi with hooks', function () {
  let consoleSpy;

  beforeEach(function () {
    // Spy on console.log before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore console.log after each test
    consoleSpy.restore();
  });

  it('should log "The total is: 120" and be called once', function () {
    sendPaymentRequestToApi(100, 20);

    // Check if console.log was called with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    
    // Check if console.log was called once
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('should log "The total is: 20" and be called once', function () {
    sendPaymentRequestToApi(10, 10);

    // Check if console.log was called with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    
    // Check if console.log was called once
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
