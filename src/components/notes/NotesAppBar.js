import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notes";

export const NotesAppBar = () => {
    const dispatch = useDispatch();
    const { active } = useSelector((state) => state.notes);
    const date = moment(active.date);

    const handleSaveNote = () => {
        dispatch(startSaveNote(active));
    };

    const handlePictureUpdate = () => {
        document.querySelector("#fileSelector").click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            dispatch(startUploading(file));
        }
    };

    return (
        <div className="notes__appbar">
            <span>{date.format("dddd, Do of MMMM of YYYY")}</span>
            <input
                id="fileSelector"
                type="file"
                name="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
            <div>
                <button className="btn" onClick={handlePictureUpdate}>
                    Picture
                </button>
                <button className="btn" onClick={handleSaveNote}>
                    Save
                </button>
            </div>
        </div>
    );
};
