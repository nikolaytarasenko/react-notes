import React from "react";
import './AddNewNoteForm.css';

const AddNewNoteForm = props => {
    const submitHandler = e => {
        e.preventDefault();

        const date = new Date();

        props.addNewNote(date);
    };

    const inputChangeHandler = e => {
        const target = e.target;
        const formData = {
            [target.name]: target.value
        };

        props.setCurrentFormData(formData)
    };

    return (
        <div className="new-note">
            <h2>Add new note (180 symbols):</h2>
            <form onSubmit={submitHandler}>
                <div className="form-row">
                    <label htmlFor="new-note-title" >title:</label>
                    <input type="text" name="title" id="new-note-title" placeholder="title" onChange={inputChangeHandler} />
                </div>
                <div className="form-row">
                    <label htmlFor="new-note-text" >text:</label>
                    <textarea name="text" id="new-note-title" maxLength="180" placeholder="text" onChange={inputChangeHandler} />
                </div>
                <div className="form-row">
                    <input type="submit" value="add" />
                </div>
            </form>
        </div>
    )
};

export default AddNewNoteForm;