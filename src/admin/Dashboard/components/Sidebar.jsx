import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
                <h3>Admin Panel</h3>
                <button className="close-sidebar" onClick={toggleSidebar}>×</button>
            </div>

            <div className="sidebar-content">
                <ul className="sidebar-menu">
                    <li className="sidebar-item">
                        <Link to="/admin/dashboard" className="sidebar-link">
                            <i className="fas fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>

                    <li className="sidebar-item">
                        <Link to="/admin/words" className="sidebar-link">
                            <i className="fas fa-book"></i>
                            <span>Gestion des mots</span>
                        </Link>
                    </li>

                    <li className="sidebar-item">
                        <Link to="/admin/moderation" className="sidebar-link">
                            <i className="fas fa-check-circle"></i>
                            <span>Modération</span>
                        </Link>
                    </li>

                    <li className="sidebar-item">
                        <Link to="/admin/users" className="sidebar-link">
                            <i className="fas fa-users"></i>
                            <span>Utilisateurs</span>
                        </Link>
                    </li>

                    <li className="sidebar-item">
                        <Link to="/admin/settings" className="sidebar-link">
                            <i className="fas fa-cog"></i>
                            <span>Paramètres</span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="sidebar-footer">
                <Link to="/" className="sidebar-link">
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Retour au site</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar; 