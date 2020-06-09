import React from "react";
import { shallow } from "enzyme";

import { HelloWorld } from "./HelloWorld";

describe("HelloWorld render", function () {
  it("Render with prop username", function () {
    expect(
      shallow(<HelloWorld username="UserName" />).matchesElement(
        <h1>Hello World, UserName!</h1>
      )
    ).toBe(true);
  });
});
