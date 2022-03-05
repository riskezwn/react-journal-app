import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

export const JournalEntry = ({ id, date, title, body, url }) => {
    const dispatch = useDispatch();
    const noteDate = moment(date);

    const handleEntryClick = () => {
        dispatch(
            activeNote(id, {
                date,
                title,
                body,
                url,
            })
        );
    };

    let bodyReduced = body;
    if (bodyReduced.length > 150) {
        bodyReduced = bodyReduced.slice(0, 120) + "...";
    }

    return (
        <div className="journal__entry animate__animated animate__fadeIn animate__faster" onClick={handleEntryClick}>
            <div className="journal__entry-content">
                {url && (
                    <div
                        className="journal__entry-picture"
                        style={{
                            backgroundSize: "cover",
                            backgroundImage: `url(${url})`,
                        }}
                    ></div>
                )}
                <div className="journal__entry-body">
                    <p className="journal__entry-title">{title}</p>
                    <p className="journal__entry-content">{bodyReduced}</p>
                </div>
            </div>

            <div className="journal__entry-date-box">
                <span>{noteDate.format("dddd")}</span>
                <h4>{noteDate.format("Do")}</h4>
            </div>
        </div>
    );
};
