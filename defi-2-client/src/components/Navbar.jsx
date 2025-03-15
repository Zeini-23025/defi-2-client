import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">Dictionnaire Hassaniya</Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Accueil</Link>
        <Link to="/dictionary" className="nav-link">Dictionnaire</Link>
        <Link to="/add" className="nav-link">Ajouter un mot</Link>
        <Link to="/import" className="nav-link">Importer un document</Link>
      </div>
    </nav>
  )
}

export default Navbar 