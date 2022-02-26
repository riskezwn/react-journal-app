import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />
                <textarea
                    placeholder="What happened today?"
                    className="notes__textarea"
                    autoComplete="off"
                ></textarea>
                <div className="notes__image">
                    <img
                        src="https://i.blogs.es/0ca5da/ambulo_polar_wide/840_560.jpg"
                        alt="imagen"
                    />
                </div>
            </div>
        </div>
    );
};
