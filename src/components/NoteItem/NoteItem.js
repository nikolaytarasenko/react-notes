import React from 'react';
import './NoteItem.css';

const NoteItem = ({ title, text, date, category }) => {
    return (
        <div className="notes-item">
            <h2>{title}</h2>
            <p>{text}</p>
            <footer>
                <div>Category: {category}</div>
                <strong>{date.toLocaleDateString()}</strong>
            </footer>
        </div>
    )
};

export default NoteItem;