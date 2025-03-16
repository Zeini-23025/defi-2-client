import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-page">
            <div className="welcome-banner">
                <div className="banner-content">
                    <h1>Bienvenue sur le Tableau de Bord</h1>
                    <p>Gérez votre dictionnaire et suivez les statistiques</p>
                </div>
            </div>

            <div className="dashboard-stats">
                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-book"></i>
                    </div>
                    <div className="stat-content">
                        <h3>Total des mots</h3>
                        <span className="stat-number">1,245</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-clock"></i>
                    </div>
                    <div className="stat-content">
                        <h3>En attente</h3>
                        <span className="stat-number">28</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-users"></i>
                    </div>
                    <div className="stat-content">
                        <h3>Utilisateurs</h3>
                        <span className="stat-number">156</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-eye"></i>
                    </div>
                    <div className="stat-content">
                        <h3>Vues</h3>
                        <span className="stat-number">8,549</span>
                    </div>
                </div>
            </div>

            <div className="dashboard-sections">
                <div className="dashboard-section">
                    <div className="section-header">
                        <h2>Derniers mots ajoutés</h2>
                        <button className="view-all-button">Voir tout</button>
                    </div>

                    <div className="section-content">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Mot</th>
                                    <th>Catégorie</th>
                                    <th>Ajouté par</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Exemple</td>
                                    <td>Nom</td>
                                    <td>John Doe</td>
                                    <td>2024-03-15</td>
                                    <td>
                                        <button className="action-button edit">Éditer</button>
                                        <button className="action-button view">Voir</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Dictionnaire</td>
                                    <td>Nom</td>
                                    <td>Jane Smith</td>
                                    <td>2024-03-14</td>
                                    <td>
                                        <button className="action-button edit">Éditer</button>
                                        <button className="action-button view">Voir</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Linguistique</td>
                                    <td>Adjectif</td>
                                    <td>Mark Johnson</td>
                                    <td>2024-03-13</td>
                                    <td>
                                        <button className="action-button edit">Éditer</button>
                                        <button className="action-button view">Voir</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="dashboard-section">
                    <div className="section-header">
                        <h2>Mots en attente de modération</h2>
                        <button className="view-all-button">Voir tout</button>
                    </div>

                    <div className="section-content">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Mot</th>
                                    <th>Soumis par</th>
                                    <th>Date</th>
                                    <th>Statut</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Néologisme</td>
                                    <td>Alice Brown</td>
                                    <td>2024-03-16</td>
                                    <td><span className="status pending">En attente</span></td>
                                    <td>
                                        <button className="action-button review">Réviser</button>
                                        <button className="action-button reject">Rejeter</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Lexique</td>
                                    <td>Robert Green</td>
                                    <td>2024-03-15</td>
                                    <td><span className="status review">En révision</span></td>
                                    <td>
                                        <button className="action-button review">Réviser</button>
                                        <button className="action-button reject">Rejeter</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Sémantique</td>
                                    <td>Emily White</td>
                                    <td>2024-03-14</td>
                                    <td><span className="status pending">En attente</span></td>
                                    <td>
                                        <button className="action-button review">Réviser</button>
                                        <button className="action-button reject">Rejeter</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard; 