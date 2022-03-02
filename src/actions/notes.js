import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { types } from "../types/types";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const newNote = {
            title: "",
            body: "",
            date: new Date().getTime(),
        };
        const collRef = collection(db, `${uid}/journal/notes`);
        const doc = await addDoc(collRef, newNote);
        dispatch(activeNote(doc.id, newNote));
    };
};

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note,
    },
});

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes,
});
