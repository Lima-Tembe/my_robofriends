import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";
import * as actions from "./actions";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const mockStore = configureMockStore([thunkMiddleware]);

describe("Search Field", () => {
  const text = "wooo";
  const expectedAction = {
    type: CHANGE_SEARCHFIELD,
    payload: text,
  };
  it("should create an action to search robots", () => {
    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});

describe("Request Robots", () => {
  it("should handle the request robots api", () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING,
    };
    expect(action[0]).toEqual(expectedAction);
  });
});
