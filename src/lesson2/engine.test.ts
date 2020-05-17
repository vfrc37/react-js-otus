import {
  zeroPrioritiesCalc,
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  thirdPrioritiesCalc,
  forthPrioritiesCalc,
} from "./engine";

/* eslint-disable prettier/prettier */
const tests = [
  {
    name: "zeroPrioritiesCalc test cases",
    cases: [
      { args: [4, "!"], expected: [24] },
      { args: [2, "^", 4], expected: [16] },
      { args: [2, "^", 4, "^", 2], expected: [256] },
      { args: [1, "+", 4, "!"], expected: [1, "+", 24] },
      { args: [1, "+", 2, "^", 4], expected: [1, "+", 16] },
    ],
    func: zeroPrioritiesCalc,
  },
  {
    name: "firstPrioritiesCalc simple cases",
    cases: [
      { args: [1, "*", 32], expected: [32] },
      { args: [32, "/", 32], expected: [1] },
      { args: [32, "+", 32], expected: [32, "+", 32] },
    ],
    func: firstPrioritiesCalc,
  },
  {
    name: "firstPrioritiesCalc mixed with second priorities cases",
    cases: [
      { args: [32, "/", 32, "+", 10, "*", 10], expected: [1, "+", 100] },
    ],
    func: firstPrioritiesCalc,
  },
  {
    name: "secondPrioritiesCalc simple cases",
    cases: [
      { args: [32, "+", 32], expected: [64] },
      { args: [32, "-", 32], expected: [0] },
      { args: [32, "-", 32, "+", 10], expected: [10] },
    ],
    func: secondPrioritiesCalc,
  },
  {
    name: "thirdPrioritiesCalc test cases",
    cases: [
      { args: [32], expected: [32] },
      { args: ["(", 32, ")"], expected: [32] },
      { args: ["(", "(", 32, ")", ")"], expected: [32] },
      { args: ["(", "(", 32, ")", "+", 1, ")"], expected: ["(", 32, "+", 1, ")"] },
    ],
    func: thirdPrioritiesCalc,
  },
  {
    name: "forthPrioritiesCalc test cases",
    cases: [
      { args: ["fib", 10], expected: [55] },
      { args: [1, "+", "fib", 10], expected: [1, "+", 55] },
      { args: ["sin", 1], expected: [0.8414709848078965] },
      { args: ["cos", 1], expected: [0.5403023058681398] },
      { args: ["tan", 1], expected: [1.5574077246549023] },
    ],
    func: forthPrioritiesCalc,
  },
];
/* eslint-enable prettier/prettier */

tests.forEach((t) => {
  describe(t.name, () => {
    test.each(t.cases)(`Test %#, %o`, (data) => {
      expect(t.func(data.args)).toEqual(data.expected);
    });
  });
});
