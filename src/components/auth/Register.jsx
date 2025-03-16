import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiServices } from '../../api';
import './Auth.css';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validation des mots de passe
    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      setLoading(false);
      return;
    }

    try {
      // On enlève confirmPassword car le backend n'en a pas besoin
      const { confirmPassword, ...registerData } = formData;
      console.log('Données envoyées au backend:', registerData);
      
      const registerResponse = await apiServices.register(registerData);
      console.log('Réponse du backend:', registerResponse);
      
      // Redirection vers la page de connexion après inscription réussie
      navigate('/login', { 
        state: { 
          message: 'Inscription réussie ! Veuillez vous connecter.' 
        } 
      });
    } catch (err) {
      console.error('Erreur détaillée:', err.response?.data);
      if (err.response?.data?.email) {
        setError('Cet email est déjà utilisé');
      } else if (err.response?.data?.nom) {
        setError('Le nom est requis');
      } else if (err.response?.data?.password) {
        setError('Le mot de passe est invalide : ' + err.response.data.password[0]);
      } else {
        setError(
          err.response?.data?.message || 
          err.response?.data?.detail ||
          'Une erreur est survenue lors de l\'inscription'
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Inscription</h2>
        {error && <div className="auth-error">{error}</div>}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              disabled={loading}
              minLength={3}
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
              required
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={loading}
              minLength={8}
              title="Le mot de passe doit contenir au moins 8 caractères"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              disabled={loading}
              minLength={8}
            />
          </div>
          <button 
            type="submit" 
            className="auth-submit"
            disabled={loading}
          >
            {loading ? 'Inscription en cours...' : 'S\'inscrire'}
          </button>
        </form>
        <div className="auth-links">
          <p>
            Déjà un compte ?{' '}
            <Link to="/login">Se connecter</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register; 