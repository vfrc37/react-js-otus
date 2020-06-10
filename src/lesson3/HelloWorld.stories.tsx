import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { HelloWorld } from "./HelloWorld";

export default {
  title: "Hello World!",
  decorators: [withKnobs],
};

export const HelloWorldStory: React.FC<{}> = () => {
  const name = text("username", "UserName");

  return <HelloWorld username={name} />;
};
