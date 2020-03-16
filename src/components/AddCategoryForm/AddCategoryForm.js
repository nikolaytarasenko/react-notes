import React, {useState} from "react";
import './AddCategoryForm.css';
import { ChromePicker } from 'react-color';

const AddCategoryForm = props => {
    const [formVisibility, setFormVisibility] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [categoryColor, setCategoryColor] = useState('#41E3EB');

    const submitHandler = e => {
        e.preventDefault();

        if (!inputValue) return false;

        // call parent addNewNote function
        props.addNewCategory(inputValue, categoryColor);

        // set default input value
        setInputValue('');

        // set default color
        setCategoryColor('#790C8A');

        // hide form
        setFormVisibility(false);
    };

    const inputChangeHandler = e => setInputValue(e.target.value);

    const colorChangeHandler = color => setCategoryColor(color.hex);

    return (
        <div>
            <button
                type="button"
                className={formVisibility ? 'categories__add' : 'categories__add visible'}
                onClick={() => setFormVisibility(!formVisibility)}
            >
                {formVisibility ? '' : 'new category'}
            </button>
            {formVisibility ?
                <form className="add-category" onSubmit={submitHandler}>
                    <div className="form-control">
                        <label htmlFor="category_name">category name:</label>
                        <input
                            type="text"
                            id="category_name"
                            onChange={inputChangeHandler}
                        />
                    </div>
                    <div className="form-control color-picker">
                        <label>color:</label>
                        <ChromePicker
                            onChange={colorChangeHandler}
                            color={categoryColor}
                        />
                    </div>
                    <div className="form-control">
                        <input
                            type="submit"
                            value="add category"
                        />
                    </div>
                    <div className="form-control">
                        <input
                            type="button"
                            value="cancel"
                            onClick={() => setFormVisibility(!formVisibility)}
                        />
                    </div>
                </form>
            : null}
        </div>
    )
};

export default AddCategoryForm;