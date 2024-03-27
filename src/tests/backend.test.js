// tests/backend.test.js

// Example test suite for backend services
const { sum } = require('../backend/services/mathService');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
