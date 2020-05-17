import { format } from "./format";

const cases = [
  [" 1 ", "1"],
  ["1 + 32 * 2 - 15 / 5", "1 + 32 * 2 - 15 / 5"],
  ["(32)", "( 32 )"],
  ["(1 + 32)", "( 1 + 32 )"],
  ["1 + (1 + ( 1 + 32 ))", "1 + ( 1 + ( 1 + 32 ) )"],
  ["4!", "4 !"],
  ["4^2", "4 ^ 2"],
  ["4**", "4 ^ 2"],
  ["4**2", "4 ^ 2"],
  ["fib(10)", "fib ( 10 )"],
];

describe("format test cases", () => {
  test.each(cases)(`Test %#, %o`, (a, expected) => {
    expect(format(a)).toEqual(expected);
  });
});
