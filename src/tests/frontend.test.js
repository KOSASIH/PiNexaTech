// tests/frontend.test.js

// Example test suite for frontend components
import { formatDate } from '../shared/utils';

test('formats date correctly', () => {
  const date = new Date('2022-01-01T00:00:00');
  expect(formatDate(date)).toBe('January 1, 2022');
});
