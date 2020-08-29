import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";
import setupTest from "../setupTest";

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    searchField: "",
    robots: [],
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

describe("MainPage", () => {
  it("should render MainPage without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should filter robots correctly', () => {
      const mockProps2 = {
        onRequestRobots: jest.fn(),
        searchField: "j",
        robots: [{
            id: 3,
            name: "John Doe",
            email: "john@gmail.com"
        }],
        isPending: false,
      };
      const wrapper2 = shallow(<MainPage {...mockProps2} />);
      expect(wrapper2.instance().filteredRobots()).toEqual([
        {
          id: 3,
          name: "John Doe",
          email: "john@gmail.com",
        },
      ]);
  });

});
