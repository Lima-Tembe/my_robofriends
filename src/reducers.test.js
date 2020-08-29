import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";
import * as reducers from "./reducers";
import setupTest from "./setupTest";

describe("Reducer - SearchField", () => {
  const initialStateSearch = {
    searchField: "",
  };

  it("should return the initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: "" });
  });

  it("should handle CHANGE SEARCHFIELD", () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCHFIELD,
        payload: "abc",
      })
    ).toEqual({
      searchField: "abc",
    });
  });
});

describe("Reducer - Request Robots", () => {
  const initialStateRobots = {
    robots: [],
    isPending: false,
  };
  it("should return initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it("should handle REQUEST ROBOTS PENDING", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({
      robots: [],
      isPending: true,
    });
  });

  it("should handle REQUEST ROBOTS SUCCESS", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: 123,
            name: "John Doe",
            email: "john@gmail.com",
          },
        ],
      })
    ).toEqual({
      robots: [
        {
          id: 123,
          name: "John Doe",
          email: "john@gmail.com",
        },
      ],
      isPending: false,
    });
  });

  it("should handle REQUEST ROBOTS FAILED", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: "Unable to get robots",
      })
    ).toEqual({
      robots: [],
      error: "Unable to get robots",
      isPending: false,
    });
  });
});
