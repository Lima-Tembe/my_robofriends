import { shallow } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton";
import setupTest from "../setupTest";

describe("Counter Button", () => {
  it("should render the Counter Button component", () => {
    const mockColor = "red";
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
  });

  it("should increment counter correctly", () => {
    const mockColor = "red";
    const wrapper = shallow(<CounterButton color={mockColor} />);
    wrapper.find('[id="counter"]').simulate("click");
    expect(wrapper.state()).toEqual({ count: 1 });
  });
});
