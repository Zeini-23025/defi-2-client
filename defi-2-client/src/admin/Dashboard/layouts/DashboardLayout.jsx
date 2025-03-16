import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import './DashboardLayout.css';

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Gestion du redimensionnement de la fenêtre
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setSidebarOpen(true);
            } else {
                setSidebarOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initialisation

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Overlay pour mobile */}
            {isMobile && sidebarOpen && (
                <div className="sidebar-overlay active" onClick={toggleSidebar}></div>
            )}

            {/* Contenu principal */}
            <div className={`dashboard-main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
                {/* Navbar */}
                <Navbar toggleSidebar={toggleSidebar} />

                {/* Contenu du dashboard */}
                <div className="dashboard-content">
                    <div className="dashboard-breadcrumb">
                        <div className="breadcrumb-content">
                            <div className="breadcrumb-path">
                                <a href="#" className="breadcrumb-item">Admin</a>
                                <span className="breadcrumb-separator">/</span>
                                <span className="breadcrumb-item active">Dashboard</span>
                            </div>
                        </div>
                    </div>

                    <main className="dashboard-main">
                        {/* Contenu dynamique des routes */}
                        <Outlet />
                    </main>

                    <footer className="dashboard-footer">
                        <p>&copy; 2024 Dictionnaire Admin. Tous droits réservés.</p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout; 