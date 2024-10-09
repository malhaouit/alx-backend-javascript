const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should return a resolved promise with the correct data when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Check if the response matches the expected output
        expect(response).to.include({ data: 'Successful response from the API' });
        done(); // Ensure the test completes after the assertion
      })
      .catch((error) => done(error)); // In case of error, pass it to done
  });
});
