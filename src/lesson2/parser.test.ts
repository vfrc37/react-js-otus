import { parser } from "./parser";

describe("Parser correct cases", () => {
  it("1 + 32", () => {
    expect(parser("1 + 32")).toEqual([1, "+", 32]);
  });

  it("11 + 3 * 22", () => {
    expect(parser("11 + 3 * 22")).toEqual([11, "+", 3, "*", 22]);
  });

  it("1 + 32 - 2 + 2", () => {
    expect(parser("1 + 32 - 2 + 2")).toEqual([1, "+", 32, "-", 2, "+", 2]);
  });

  it("1 + ( 1 + ( 1 + 32 ) )", () => {
    expect(parser("1 + ( 1 + ( 1 + 32 ) )")).toEqual([
      1,
      "+",
      "(",
      1,
      "+",
      "(",
      1,
      "+",
      32,
      ")",
      ")",
    ]);
  });

  it("fib(10)", () => {
    expect(parser("fib ( 10 )")).toEqual(["fib", "(", 10, ")"]);
  });
});

describe("Parser invalid cases / Invalid element", () => {
  it("%", () => {
    expect(() => parser("%")).toThrow(TypeError("Invalid element: '%'"));
  });
});

describe("Parser invalid cases / elements after number", () => {
  it("1 2", () => {
    expect(() => parser("1 2")).toThrow(
      TypeError("Invalid elements order: '2' can't be after '1'")
    );
  });

  it("1 fib", () => {
    expect(() => parser("1 fib")).toThrow(
      TypeError("Invalid elements order: 'fib' can't be after '1'")
    );
  });

  it("1 ( 2", () => {
    expect(() => parser("1 ( 2")).toThrow(
      TypeError("Invalid elements order: '(' can't be after '1'")
    );
  });

  it("1 (", () => {
    expect(() => parser("1 (")).toThrow(
      TypeError("Invalid elements order: '(' can't be after '1'")
    );
  });
});

describe("Parser invalid cases / elements after sign", () => {
  it("1 + *", () => {
    expect(() => parser("1 + *")).toThrow(
      TypeError("Invalid elements order: '*' can't be after '+'")
    );
  });

  it("1 + !", () => {
    expect(() => parser("1 + !")).toThrow(
      TypeError("Invalid elements order: '!' can't be after '+'")
    );
  });

  it("1 + )", () => {
    expect(() => parser("1 + )")).toThrow(
      TypeError("Invalid elements order: ')' can't be after '+'")
    );
  });
});

describe("Parser invalid cases / elements after factorial", () => {
  it("5! 1", () => {
    expect(() => parser("5 ! 1")).toThrow(
      TypeError("Invalid elements order: '1' can't be after '!'")
    );
  });

  it("5! fib", () => {
    expect(() => parser("5 ! fib")).toThrow(
      TypeError("Invalid elements order: 'fib' can't be after '!'")
    );
  });

  it("5! (", () => {
    expect(() => parser("5 ! (")).toThrow(
      TypeError("Invalid elements order: '(' can't be after '!'")
    );
  });
});

describe("Parser invalid cases / elements after function", () => {
  it("fib 1", () => {
    expect(() => parser("fib 1")).toThrow(
      TypeError("Invalid elements order: '1' can't be after 'fib'")
    );
  });

  it("fib +", () => {
    expect(() => parser("fib +")).toThrow(
      TypeError("Invalid elements order: '+' can't be after 'fib'")
    );
  });

  it("fib !", () => {
    expect(() => parser("fib !")).toThrow(
      TypeError("Invalid elements order: '!' can't be after 'fib'")
    );
  });

  it("fib fib", () => {
    expect(() => parser("fib fib")).toThrow(
      TypeError("Invalid elements order: 'fib' can't be after 'fib'")
    );
  });

  it("fib )", () => {
    expect(() => parser("fib )")).toThrow(
      TypeError("Invalid elements order: ')' can't be after 'fib'")
    );
  });
});

describe("Parser invalid cases / elements after open bracket", () => {
  it("( + 1", () => {
    expect(() => parser("( + 1")).toThrow(
      TypeError("Invalid elements order: '+' can't be after '('")
    );
  });

  it("( !", () => {
    expect(() => parser("( !")).toThrow(
      TypeError("Invalid elements order: '!' can't be after '('")
    );
  });

  it("( )", () => {
    expect(() => parser("( )")).toThrow(
      TypeError("Invalid elements order: ')' can't be after '('")
    );
  });
});

describe("Parser invalid cases / elements after close bracket", () => {
  it("( 1 ) 2", () => {
    expect(() => parser("( 1 ) 2")).toThrow(
      TypeError("Invalid elements order: '2' can't be after ')'")
    );
  });

  it("( 1 ) fib", () => {
    expect(() => parser("( 1 ) fib")).toThrow(
      TypeError("Invalid elements order: 'fib' can't be after ')'")
    );
  });

  it("( 1 ) ( 2 )", () => {
    expect(() => parser("( 1 ) ( 2 )")).toThrow(
      TypeError("Invalid elements order: '(' can't be after ')'")
    );
  });
});

describe("Parser invalid cases / brackets number", () => {
  it("( 1 + 2 ) - 3 ) + (", () => {
    expect(() => parser("( 1 + 2 ) - 3 ) + (")).toThrow(
      TypeError("Invalid brackets: there are extra close brackets")
    );
  });

  it("( 1 + ( 2 + 3 )", () => {
    expect(() => parser("( 1 + ( 2 + 3 )")).toThrow(
      TypeError(
        "Invalid brackets: number of close and open brackets is different"
      )
    );
  });
});
