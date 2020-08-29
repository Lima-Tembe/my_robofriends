import { shallow, mount, render } from "enzyme";
import React from "react";
import Card from "./Card";
import setupTest from "../setupTest";

it("should render the Card component", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
