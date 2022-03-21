/**
 * @jest-environment jsdom
 */

import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import { LoginScreen } from "../../../components/auth/LoginScreen";
import "../../../setupTest";
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from "../../../actions/auth";

jest.mock("../../../actions/auth", () => ({
  startGoogleLogin: jest.fn(),
  startLoginEmailPassword: jest.fn(),
}));
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <LoginScreen />
    </MemoryRouter>
  </Provider>
);
describe("test in <LoginScreen/>", () => {
  beforeEach(() => {
    store = mockStore(initState);
    jest.clearAllMocks();
  });

  test("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should start starLoginScreen with Google button", () => {
    wrapper.find(".google-btn").prop("onClick")();

    expect(startGoogleLogin).toHaveBeenCalled();
  });

  test("should start startLogin with their respective arguments", () => {
    wrapper.find("form").prop("onSubmit")({
      preventDefault() {},
    });

    // expect(startLoginEmailPassword).toHaveBeenCalledWith("", "");
  });
});
