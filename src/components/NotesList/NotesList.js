import React from 'react';
import './NotesList.css';
import NoteItem from "../NoteItem/NoteItem";
import uuid from "react-uuid";

const NotesList = ({ notes }) => {
    return (
        <div className="notes-list">
            {notes.map(note => {
                return (
                    <NoteItem key={uuid()} {...note} />
                )
            })}
        </div>
    )
};

export default NotesList;