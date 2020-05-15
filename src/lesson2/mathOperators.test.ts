import {
  mul,
  div,
  add,
  minus,
  factorial,
  pow,
  sin,
  cos,
  tan,
  fib,
} from "./mathOperators";

describe("mathOperators test cases", () => {
  it("mul 1 * 2 to equal 2", () => {
    expect(mul(1, 2)).toBe(2);
  });

  it("mul 2 * 2 to equal 4", () => {
    expect(mul(2, 2)).toBe(4);
  });

  it("div 2 / 2 to equal 1", () => {
    expect(div(2, 2)).toBe(1);
  });

  it("div 4 / 2 to equal 2", () => {
    expect(div(4, 2)).toBe(2);
  });

  it("add 4 + 2 to equal 6", () => {
    expect(add(4, 2)).toBe(6);
  });

  it("minus 4 - 2 to equal 2", () => {
    expect(minus(4, 2)).toBe(2);
  });

  it("factorial of 4 = 24", () => {
    expect(factorial(4)).toBe(24);
  });

  it("pow 2 ** 4 = 16", () => {
    expect(pow(2, 4)).toBe(16);
  });

  it("sin 1", () => {
    expect(sin(1)).toBe(0.8414709848078965);
  });

  it("cos 1", () => {
    expect(cos(1)).toBe(0.5403023058681398);
  });

  it("tan 1", () => {
    expect(tan(1)).toBe(1.5574077246549023);
  });

  it("fib 10 = 55", () => {
    expect(fib(10)).toBe(55);
  });
});
