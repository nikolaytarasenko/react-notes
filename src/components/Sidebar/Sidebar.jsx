import React from "react";
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="app__sidebar sidebar">
            <h2 className="sidebar__title">sidebar</h2>
            <h4>categories:</h4>
            <ul>
                <li>work</li>
                <li>education</li>
                <li>personal</li>
                <li>books</li>
                <li>sport</li>
            </ul>
            <button type="button">add new category</button>
        </aside>
    )
};

export default Sidebar;