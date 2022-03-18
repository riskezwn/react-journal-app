import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe("test in authReducer", () => {
  test("should login", () => {
    const initState = {};
    const action = {
      type: types.login,
      payload: {
        uid: "abc",
        displayName: "riskezwn",
      },
    };
    const state = authReducer(initState, action);
    expect(state).toEqual({
      uid: "abc",
      name: "riskezwn",
    });
  });

  test("should logout", () => {
    const initState = {
      uid: "abc",
      name: "riskezwn",
    };
    const action = {
      type: types.logout,
    };
    const state = authReducer(initState, action);
    expect(state).toEqual({});
  });

  test("should return an error", () => {
    const initState = {
      uid: "abc",
      name: "riskezwn",
    };
    const action = {
      type: 'dffdf',
    };
    const state = authReducer(initState, action);
    expect(state).toEqual(initState);
  });
});
