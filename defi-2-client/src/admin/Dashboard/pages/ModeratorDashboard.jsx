import React, { useState } from 'react';
import './ModeratorDashboard.css';

const ModeratorDashboard = () => {
    const [selectedTab, setSelectedTab] = useState('pending');

    return (
        <div className="moderator-dashboard">
            <div className="welcome-banner">
                <div className="banner-content">
                    <h1>Bienvenue sur le Tableau de Modération</h1>
                    <p>Gérez et validez les soumissions de mots</p>
                </div>
            </div>

            <div className="dashboard-stats">
                <div className="stat-card">
                    <h3>En attente</h3>
                    <span className="stat-number">12</span>
                </div>
                <div className="stat-card">
                    <h3>En révision</h3>
                    <span className="stat-number">5</span>
                </div>
                <div className="stat-card">
                    <h3>Validés</h3>
                    <span className="stat-number">45</span>
                </div>
            </div>

            <div className="submissions-section">
                <div className="section-header">
                    <h2>Soumissions de mots</h2>
                    <div className="tab-navigation">
                        <button
                            className={`tab-button ${selectedTab === 'pending' ? 'active' : ''}`}
                            onClick={() => setSelectedTab('pending')}
                        >
                            En attente
                        </button>
                        <button
                            className={`tab-button ${selectedTab === 'review' ? 'active' : ''}`}
                            onClick={() => setSelectedTab('review')}
                        >
                            En révision
                        </button>
                        <button
                            className={`tab-button ${selectedTab === 'validated' ? 'active' : ''}`}
                            onClick={() => setSelectedTab('validated')}
                        >
                            Validés
                        </button>
                    </div>
                </div>

                <div className="submissions-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Mot</th>
                                <th>Définition</th>
                                <th>Auteur</th>
                                <th>Date</th>
                                <th>Statut</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Exemple</td>
                                <td>Définition du mot...</td>
                                <td>John Doe</td>
                                <td>2024-03-20</td>
                                <td><span className="status pending">En attente</span></td>
                                <td>
                                    <button className="action-button review">Réviser</button>
                                    <button className="action-button comment">Commenter</button>
                                </td>
                            </tr>
                            {/* Autres lignes... */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ModeratorDashboard; 