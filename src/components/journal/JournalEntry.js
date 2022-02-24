import React from "react";

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: "cover",
                    backgroundImage:
                        "url(https://desenio.es/bilder/artiklar/zoom/11634_2.jpg?imgwidth=435&qt=)",
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">A new day</p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    );
};
