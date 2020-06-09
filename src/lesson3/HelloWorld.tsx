import React from "react";

interface Prop {
  username: string;
}

export const HelloWorld: React.FC<Prop> = ({ username }) => (
  <h1>Hello World, {username}!</h1>
);
