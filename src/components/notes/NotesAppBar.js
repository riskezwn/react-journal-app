import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote } from "../../actions/notes";

export const NotesAppBar = () => {
    const dispatch = useDispatch();
    const { active } = useSelector((state) => state.notes);

    const handleSaveNote = () => {
        dispatch(startSaveNote(active));
    };

    return (
        <div className="notes__appbar">
            <span>28th of August of 2022</span>
            <div>
                <button className="btn">Picture</button>
                <button className="btn" onClick={handleSaveNote}>
                    Save
                </button>
            </div>
        </div>
    );
};
