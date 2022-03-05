import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export const loadNotes = async (uid) => {
    const collRef = collection(db, `${uid}/journal/notes`);
    const q = query(collRef, orderBy("date", "desc"));
    const notesSnap = await getDocs(q);
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
