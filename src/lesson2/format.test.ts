import { format } from "./format";

describe("format test cases", () => {
  it(" 1 ", () => {
    expect(format(" 1 ")).toEqual("1");
  });

  it("1 + 32 * 2 - 15 / 5", () => {
    expect(format("1 + 32 * 2 - 15 / 5")).toEqual("1 + 32 * 2 - 15 / 5");
  });

  it("(32)", () => {
    expect(format("(32)")).toEqual("( 32 )");
  });

  it("(1 + 32)", () => {
    expect(format("(1 + 32)")).toEqual("( 1 + 32 )");
  });

  it("1 + (1 + ( 1 + 32 ))", () => {
    expect(format("1 + (1 + ( 1 + 32 ))")).toEqual("1 + ( 1 + ( 1 + 32 ) )");
  });
});
