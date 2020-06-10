import React from "react";
import { shallow } from "enzyme";

import { HelloWorld } from "./HelloWorld";

describe("HelloWorld render", function () {
  it("Render with prop username", function () {
    const wrapper = shallow(<HelloWorld username="UserName" />);
    expect(wrapper).toMatchSnapshot();
  });
});
