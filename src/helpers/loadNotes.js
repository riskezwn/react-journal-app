import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export const loadNotes = async (uid) => {
    const collRef = collection(db, `${uid}/journal/notes`);
    const notesSnap = await getDocs(collRef);
    const notes = [];

    notesSnap.forEach((snap) => {
        const newNote = {
            id: snap.id,
            ...snap.data(),
        };
        notes.push(newNote);
    });
    return notes;
};
