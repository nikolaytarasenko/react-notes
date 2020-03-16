import React, {useState} from 'react';
import './AddNewNoteForm.css';

import uuid from 'react-uuid';

const AddNewNoteForm = props => {
    const [charsCounter, setCharsCounter] = useState(180);
    const [selectedCategory, setSelectedCategory] = useState('default');

    const submitHandler = e => {
        e.preventDefault();

        // return if any of the hollow forms is empty
        if (props.currentFormData.title.length === 0 || props.currentFormData.text.length === 0) return false;

        const date = new Date();

        // call parent addNewNote function
        props.addNewNote(date, selectedCategory);

        // set default value to local chars counter
        setCharsCounter(180);

        // set default category
        setSelectedCategory('default');
    };

    const inputChangeHandler = e => {
        const target = e.target;
        const formData = {
            [target.name]: target.value
        };

        if (target.name === 'text') setCharsCounter(180 - target.value.length);

        props.setCurrentFormData(formData);
    };

    const categoryChangeHandler = e => setSelectedCategory(e.target.value);

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
                    <label htmlFor="new-note-text" >Category:</label>
                    <select name="categories" size={props.categories.length} value={selectedCategory} onChange={categoryChangeHandler} >
                        {props.categories.map(cat => {
                            return <option key={uuid()} value={cat.name}>{cat.name}</option>
                        })}
                    </select>
                </div>
                <div className="form-row">
                    <input type="submit" value="add" />
                </div>
            </form>
        </div>
    )
};

export default AddNewNoteForm;