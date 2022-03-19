/**
 * @jest-environment node
 */

import { deleteDoc, doc, getDoc } from "firebase/firestore";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startLoadingNotes,
  startNewNote,
  startSaveNote,
  startUploading,
} from "../../actions/notes";
import { db } from "../../firebase/firebase-config";
import { types } from "../../types/types";

// const noScroll = () => {};
// Object.defineProperty(window, "scrollTo", { value: noScroll, writable: true });

jest.mock("../../helpers/fileUpload", () => ({
  fileUpload: jest.fn(() => {
    return Promise.resolve("https://holamundo.com/photo.jpg");
  }),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: "TESTING",
  },
  notes: {
    active: {
      id: "7hgx1A0tDmQDsAVyU4W0",
      title: "titlfdffde",
      body: "body",
      url: "https://google.com",
    },
  },
};

let store = mockStore(initState);

describe("test in notes.js", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });

  test("should create a new note", async () => {
    await store.dispatch(startNewNote());

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.notesActive,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });

    expect(actions[1]).toEqual({
      type: types.notesAddNew,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });

    const docId = actions[0].payload.id;
    const docRef = doc(db, "TESTING/journal/notes", docId);
    await deleteDoc(docRef);
  });

  test("startLoadingNotes should load notes", async () => {
    await store.dispatch(startLoadingNotes("TESTING"));

    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.notesLoad,
      payload: expect.any(Array),
    });

    const expected = {
      id: expect.any(String),
      title: expect.any(String),
      body: expect.any(String),
      date: expect.any(Number),
    };
    expect(actions[0].payload[0]).toMatchObject(expected);
  });

  test("startSaveNote should update the note", async () => {
    const note = {
      id: "7hgx1A0tDmQDsAVyU4W0",
      title: "title",
      body: "body",
    };

    await store.dispatch(startSaveNote(note));
    const actions = store.getActions();

    expect(actions[0].type).toBe(types.notesUpdate);
    const docRef = await getDoc(doc(db, "TESTING/journal/notes", note.id));
    expect(docRef.data().title).toBe("title");
  });

  test("startUploading should update note url", async () => {
    const file = ("photo.jpg");
    await store.dispatch(startUploading(file));
  });
});
