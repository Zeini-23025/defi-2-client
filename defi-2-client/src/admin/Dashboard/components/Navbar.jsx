import React from 'react';
import './Navbar.css';

const Navbar = ({ toggleSidebar }) => {
    return (
        <div className="dashboard-navbar">
            <div className="navbar-left">
                <button className="menu-toggle" onClick={toggleSidebar}>
                    <i className="fas fa-bars"></i>
                </button>
                <div className="navbar-brand">
                    <span>Dictionnaire Admin</span>
                </div>
            </div>

            <div className="navbar-right">
                <div className="navbar-search">
                    <input type="text" placeholder="Rechercher..." />
                    <button className="search-button">
                        <i className="fas fa-search"></i>
                    </button>
                </div>

                <div className="navbar-notifications">
                    <button className="notification-button">
                        <i className="fas fa-bell"></i>
                        <span className="notification-badge">3</span>
                    </button>
                </div>

                <div className="navbar-user">
                    <img src="https://via.placeholder.com/40" alt="User" className="user-avatar" />
                    <div className="user-info">
                        <span className="user-name">Admin</span>
                        <span className="user-role">Administrateur</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar; 