import { useState } from 'react';
import './Profile.css';

function Profile() {
  const [user, setUser] = useState({
    username: "John Doe",
    email: "john@example.com",
    avatar: "https://via.placeholder.com/150",
    bio: "Passionné par la langue Hassaniya",
    joinDate: "2024-01-15",
    preferences: {
      emailNotifications: true,
      darkMode: false,
      language: "fr"
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [name]: type === 'checkbox' ? checked : value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implémenter la mise à jour du profil
    setUser(formData);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src={user.avatar} alt={user.username} />
          {isEditing && (
            <button className="change-avatar-btn">
              Changer l'avatar
            </button>
          )}
        </div>
        <div className="profile-info">
          <h1>{user.username}</h1>
          <p>Membre depuis {new Date(user.joinDate).toLocaleDateString()}</p>
        </div>
      </div>

      <div className="profile-content">
        {!isEditing ? (
          <div className="profile-details">
            <div className="detail-group">
              <h3>Informations personnelles</h3>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Bio:</strong> {user.bio}</p>
            </div>
            <div className="detail-group">
              <h3>Préférences</h3>
              <p>Notifications par email: {user.preferences.emailNotifications ? 'Activées' : 'Désactivées'}</p>
              <p>Langue: {user.preferences.language === 'fr' ? 'Français' : 'Arabe'}</p>
            </div>
            <button 
              className="edit-profile-btn"
              onClick={() => setIsEditing(true)}
            >
              Modifier le profil
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-group">
              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="4"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group checkbox">
              <label>
                <input
                  type="checkbox"
                  name="emailNotifications"
                  checked={formData.preferences.emailNotifications}
                  onChange={handleChange}
                />
                Recevoir les notifications par email
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="language">Langue préférée</label>
              <select
                id="language"
                name="language"
                value={formData.preferences.language}
                onChange={handleChange}
              >
                <option value="fr">Français</option>
                <option value="ar">Arabe</option>
              </select>
            </div>
            <div className="form-buttons">
              <button type="submit" className="save-btn">
                Enregistrer
              </button>
              <button 
                type="button" 
                className="cancel-btn"
                onClick={() => setIsEditing(false)}
              >
                Annuler
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Profile; 