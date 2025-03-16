function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>À propos</h4>
            <p>Le dictionnaire collaboratif Hassaniya est une initiative pour préserver et promouvoir la langue Hassaniya.</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: contact@dictionnaire-hassaniya.com</p>
          </div>
          <div className="footer-section">
            <h4>Suivez-nous</h4>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dictionnaire Hassaniya. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 