import React from "react";
import './AddNewNoteForm.css';

const AddNewNoteForm = props => {
    const submitHandler = e => {

    };

    return (
        <div className="new-note">
            <h2>Add new note (90 symbols):</h2>
            <form onSubmit={submitHandler}>
                <div className="form-row">
                    <label htmlFor="new-note-title" >title:</label>
                    <input type="text" id="new-note-title" placeholder="title" />
                </div>
                <div className="form-row">
                    <label htmlFor="new-note-text" >text:</label>
                    <textarea type="text" id="new-note-title" maxLength="180" placeholder="title" />
                </div>
                <div className="form-row">
                    <input type="submit" value="add" />
                </div>
            </form>
        </div>
    )
};

export default AddNewNoteForm;