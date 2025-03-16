import { Link } from 'react-router-dom'
import { useTheme } from './ThemeContext'
import './navbar.css'

function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <Link to="/">Hassaniya</Link>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/dictionary" className="nav-link">Dictionnaire</Link>
          <Link to="/add" className="nav-link">Ajouter un mot</Link>
          <Link to="/import" className="nav-link">Importer un document</Link>
          <Link to="/login" className="auth-button">Connexion</Link>
          <button 
            className="dark-mode-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 