import {
  zeroPrioritiesCalc,
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  thirdPrioritiesCalc,
} from "./engine";

describe("zeroPrioritiesCalc test cases", () => {
  it("[4, !]", () => {
    expect(zeroPrioritiesCalc([4, "!"])).toEqual([24]);
  });

  it("[2, ^, 4]", () => {
    expect(zeroPrioritiesCalc([2, "^", 4])).toEqual([16]);
  });

  it("[2, ^, 4, ^, 2]", () => {
    expect(zeroPrioritiesCalc([2, "^", 4, "^", 2])).toEqual([256]);
  });
});

describe("firstPrioritiesCalc simple cases", () => {
  it("[1, * 32]", () => {
    expect(firstPrioritiesCalc([1, "*", 32])).toEqual([32]);
  });

  it("[32, /, 32]", () => {
    expect(firstPrioritiesCalc([32, "/", 32])).toEqual([1]);
  });

  it("[32, + 32]", () => {
    expect(firstPrioritiesCalc([32, "+", 32])).toEqual([32, "+", 32]);
  });
});

describe("firstPrioritiesCalc mixed with second priorities cases", () => {
  it("[32, /, 32, +, 10, *, 10]", () => {
    expect(firstPrioritiesCalc([32, "/", 32, "+", 10, "*", 10])).toEqual([
      1,
      "+",
      100,
    ]);
  });
});

describe("secondPrioritiesCalc simple cases", () => {
  it("[32, + 32]", () => {
    expect(secondPrioritiesCalc([32, "+", 32])).toEqual([64]);
  });

  it("[32, - 32]", () => {
    expect(secondPrioritiesCalc([32, "-", 32])).toEqual([0]);
  });

  it("[32, - 32, +, 10]", () => {
    expect(secondPrioritiesCalc([32, "-", 32, "+", 10])).toEqual([10]);
  });
});

describe("thirdPrioritiesCalc test cases", () => {
  it("[32]", () => {
    expect(thirdPrioritiesCalc([32])).toEqual([32]);
  });

  it("[(, 32, )]", () => {
    expect(thirdPrioritiesCalc(["(", 32, ")"])).toEqual([32]);
  });

  it("[(, (, 32, ), )]", () => {
    expect(thirdPrioritiesCalc(["(", "(", 32, ")", ")"])).toEqual([32]);
  });

  it("[(, (, 32, ), +, 1, )]", () => {
    expect(thirdPrioritiesCalc(["(", "(", 32, ")", "+", 1, ")"])).toEqual([
      "(",
      32,
      "+",
      1,
      ")",
    ]);
  });
});
