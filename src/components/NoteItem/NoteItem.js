import React from "react";

const NoteItem = ({ title, text, date, category }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{text}</p>
            <strong>{date.toLocaleDateString()}</strong>
            <p>Category: {category}</p>
        </div>
    )
};

export default NoteItem;