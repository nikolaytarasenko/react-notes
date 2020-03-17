import React from 'react';
import './Sidebar.css';
import uuid from 'react-uuid';
import AddCategoryForm from "../AddCategoryForm/AddCategoryForm";

const Sidebar = props => {
    const { categories } = props;

    const editCategoryHandler = id => {

    };

    const removeCategoryHandler = id => {

    };

    return (
        <aside className="app__sidebar sidebar">
            <div className="sidebar__categories categories">
                <h4 className="sidebar__title">categories:</h4>
                <ul className="categories__list">
                    {categories.map(category => {
                        return (
                            <li className="categories__item" key={uuid()}>
                                <i style={{ 'background': category.color }} />
                                {category.name}
                                <button type="button" className="categories__edit" onClick={() => editCategoryHandler(category.id)}>edit</button>
                                <button type="button" className="categories__remove" onClick={() => removeCategoryHandler(category.id)}>remove</button>
                            </li>
                        )
                    })}
                </ul>
                <AddCategoryForm addNewCategory={props.addNewCategory} />
            </div>
        </aside>
    )
};

export default Sidebar;