import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      navigate(`/dictionary?search=${encodeURIComponent(searchTerm)}`)
    }
  }

  return (
    <div className="home">
      <div className="container">
        <div className="hero-section">
          <h1>Bienvenue sur le Dictionnaire Collaboratif Hassaniya</h1>
          <p className="hero-text">
            Préserver et enrichir la langue Hassaniya
          </p>
          <p className="sub-hero-text">
            Participez à la création du plus grand dictionnaire Hassaniya collaboratif en ligne
          </p>
        </div>

        <div className="search-section">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Rechercher un mot..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              Rechercher
            </button>
          </form>
        </div>
        
        <div className="features">
          <Link to="/add" className="feature-card">
            <h3>Contribuez au dictionnaire</h3>
            <p>Ajoutez de nouveaux mots, définitions et enrichissez le dictionnaire hassaniya.</p>
          </Link>
          
          <Link to="/import" className="feature-card">
            <h3>Importez des documents</h3>
            <p>Analysez automatiquement vos documents pour détecter les mots non référencés.</p>
          </Link>
          
          <Link to="/dictionary" className="feature-card">
            <h3>Consultez le dictionnaire</h3>
            <p>Explorez la richesse de la langue hassaniya à travers notre base de données collaborative.</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home 