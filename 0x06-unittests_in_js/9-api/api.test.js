const request = require('request');
const { expect } = require('chai');

// Helper function to make requests and perform assertions
function testRequest(description, url, expectedStatusCode, expectedBody = null) {
  describe(description, () => {
    it(`Responds with status code ${expectedStatusCode}`, (done) => {
      const options = {
        url: `http://localhost:7865${url}`,
        method: 'GET',
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(expectedStatusCode);
        if (expectedBody) {
          expect(body).to.equal(expectedBody);
        }
        done();
      });
    });
  });
}

// Main test suite
describe('Integration Testing', () => {

  // Test for the root endpoint
  testRequest(
    'GET /',
    '/',
    200,
    'Welcome to the payment system'
  );

  // Valid cart ID tests
  const validCartIds = [12, 1, 123];
  validCartIds.forEach((id) => {
    testRequest(
      `GET /cart/${id}`,
      `/cart/${id}`,
      200,
      `Payment methods for cart ${id}`
    );
  });

  // Invalid cart ID tests (non-numeric)
  const invalidCartIds = ['a12', 'a12b', '12b', 'hello', ''];
  invalidCartIds.forEach((id) => {
    const url = id ? `/cart/${id}` : '/cart/'; // Handle empty ID case
    testRequest(
      `GET /cart/${id || 'empty'}`,
      url,
      404
    );
  });
});
