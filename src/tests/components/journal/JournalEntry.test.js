/**
 * @jest-environment jsdom
 */

import { mount } from "enzyme";
import { Provider } from "react-redux";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { activeNote } from "../../../actions/notes";
import { JournalEntry } from "../../../components/journal/JournalEntry";

import "../../../setupTest";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);
store.dispatch = jest.fn();

const note = {
  id: 1234,
  date: 0,
  title: "hola",
  body: "mundo",
  url: "https://someplace.com/photo.png",
};

const wrapper = mount(
  <Provider store={store}>
    <JournalEntry {...note} />
  </Provider>
);
describe("test in <JournalEntry />", () => {
  test("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should active note", () => {
    wrapper.find(".journal__entry").prop("onClick")();

    expect(store.dispatch).toHaveBeenCalledWith(
      activeNote(note.id, { ...note })
    );
  });
});
