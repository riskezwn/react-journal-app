/**
 * @jest-environment jsdom
 */

import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { login } from "../../actions/auth";
import { AppRouter } from "../../routers/AppRouter";
import "../../setupTest";
import { act } from "react-dom/test-utils";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";

jest.mock("../../actions/auth", () => ({
  login: jest.fn(),
}));
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
  notes: {
    active: {
      id: "abc",
    },
    notes: [],
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

describe("test in <AppRouter />", () => {
  test("should start login if authenticated", async () => {
    let user;
    await act(async () => {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        "test@test.com",
        "testing"
      );
      user = userCredentials.user;
      const wrapper = mount(
        <Provider store={store}>
          <AppRouter />
        </Provider>
      );
    });
    expect(login).toHaveBeenCalledWith("JVqvnEtZplUHtVwMZxNQhRDQNdt2", null);
  });
});
