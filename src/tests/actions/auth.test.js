/**
 * @jest-environment node
 */

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  login,
  logout,
  startLoginEmailPassword,
  startLogout,
} from "../../actions/auth";
import { types } from "../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe("test in auth.js", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });

  test("login and logout should create action", () => {
    const user = {
      uid: "dwr455",
      displayName: "riskezwn",
    };
    const loginAction = login(user.uid, user.displayName);
    expect(loginAction).toEqual({
      type: types.login,
      payload: user,
    });

    const logoutAction = logout();
    expect(logoutAction).toEqual({
      type: types.logout,
    });
  });

  test("should execute startLogout", async () => {
    await store.dispatch(startLogout());
    const actions = store.getActions();

    expect(actions[0]).toEqual({ type: types.logout });
    expect(actions[1]).toEqual({ type: types.notesLogoutCleaning });
  });

  test("should start startLoginEmailPassword", async () => {
    await store.dispatch(startLoginEmailPassword("test@test.com", "testing"));
    const actions = store.getActions();

    expect(actions[1]).toEqual({
      type: types.login,
      payload: {
        uid: "JVqvnEtZplUHtVwMZxNQhRDQNdt2",
        displayName: null,
      },
    });
  });
});
