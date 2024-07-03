const calculator = require('./main')

describe('math', () => {
  test('add', () => {
    expect(calculator.math("+",1, 2)).toBe(3);
  });

  test('sub', () => {
    expect(calculator.math("-",6, 5)).toBe(1);
  });

  test('multiply', () => {
    expect(calculator.math("*",3, 2)).toBe(6);
  });

  test('divide', () => {
    expect(calculator.math("/",6, 3)).toBe(2);
  });
});