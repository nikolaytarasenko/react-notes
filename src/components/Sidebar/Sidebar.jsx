import React from 'react';
import './Sidebar.css';
import uuid from 'react-uuid';

const Sidebar = props => {
    const { categories } = props;

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
                            </li>
                        )
                    })}
                </ul>
                <button type="button" className="categories__add">add new category</button>
            </div>
        </aside>
    )
};

export default Sidebar;