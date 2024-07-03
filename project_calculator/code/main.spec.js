const main = require('./main')

describe('main', () => {
  test.skip('works with century years', () => {
    expect(leapYears(700)).toBe(false);
  });
});