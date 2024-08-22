import React from 'react';
import './Sidebar.css';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <h2>STORYKU</h2>
            </div>
            <ul className="sidebar-menu">
                <li className="menu-item">
                    <a href="#">Dashboard</a>
                </li>
                <li className="menu-item">
                    <a href="#">Story Management</a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
