/**
 * @jest-environment jsdom
 */

import { mount } from "enzyme";
import { Provider } from "react-redux";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { activeNote } from "../../../actions/notes";
import { NoteScreen } from "../../../components/notes/NoteScreen";

import "../../../setupTest";

jest.mock("../../../actions/notes", () => ({
  activeNote: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: "JVqvnEtZplUHtVwMZxNQhRDQNdt2",
    name: "riskezwn",
  },
  ui: {
    loading: false,
    msgError: null,
  },
  notes: {
    active: {
      id: 1234,
      title: "hola",
      body: "mundo",
      date: 0,
    },
    notes: [],
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <NoteScreen />
  </Provider>
);

describe("test in <NoteScreen/>", () => {
  test("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should init activeNote", () => {
    wrapper.find('input[name="title"]').simulate("change", {
      target: {
        name: "title",
        value: "hola de nuevo",
      },
    });

    expect(activeNote).toHaveBeenCalledWith(1234, {
      body: "mundo",
      title: "hola de nuevo",
      id: 1234,
      date: 0,
    });
  });
});
