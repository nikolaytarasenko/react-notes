import React from 'react';
import './NoteItem.css';

const NoteItem = ({ title, text, date, category }) => {
    return (
        <div className="notes-item">
            <h2>{title}</h2>
            <p>{text}</p>
            <strong>{date.toLocaleDateString()}</strong>
            <p>Category: {category}</p>
        </div>
    )
};

export default NoteItem;