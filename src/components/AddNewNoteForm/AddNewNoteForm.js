import React, {useState} from "react";
import './AddNewNoteForm.css';

const AddNewNoteForm = props => {
    const [charsCounter, setCharsCounter] = useState(180);

    const submitHandler = e => {
        e.preventDefault();

        // return if any of the hollow forms is empty
        if (props.currentFormData.title.length === 0 || props.currentFormData.text.length === 0) return false;

        const date = new Date();

        // set default value to local chars counter
        setCharsCounter(180);

        // call parent addNewNote function
        props.addNewNote(date);
    };

    const inputChangeHandler = e => {
        const target = e.target;
        const formData = {
            [target.name]: target.value
        };

        if (target.name === 'text') setCharsCounter(180 - target.value.length);

        props.setCurrentFormData(formData);
    };

    return (
        <div className="new-note">
            <h2>Add new note ({charsCounter} symbols):</h2>
            <form onSubmit={submitHandler}>
                <div className="form-row">
                    <label htmlFor="new-note-title" >Title:</label>
                    <input type="text" name="title" id="new-note-title" placeholder="title" onChange={inputChangeHandler} value={props.currentFormData.title} />
                </div>
                <div className="form-row">
                    <label htmlFor="new-note-text" >Text:</label>
                    <textarea name="text" id="new-note-title" maxLength="180" placeholder="type your note text here.." onChange={inputChangeHandler} value={props.currentFormData.text} />
                </div>
                <div className="form-row">
                    <input type="submit" value="add" />
                </div>
            </form>
        </div>
    )
};

export default AddNewNoteForm;