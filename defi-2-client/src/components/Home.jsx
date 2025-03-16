import { useState, useEffect, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { apiServices } from '../api'

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [loading, setLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [searchPerformed, setSearchPerformed] = useState(false)
  const [responseData, setResponseData] = useState(null)
  const suggestionsRef = useRef(null)
  const inputRef = useRef(null)
  const navigate = useNavigate()
  const debounceTimerRef = useRef(null)

  useEffect(() => {
    // Add click outside listener to close suggestions
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target) &&
        inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    // Fetch suggestions when searchTerm changes
    if (searchTerm.trim().length > 1) {
      // Clear previous timer
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current)
      }

      // Set new timer to debounce API calls
      debounceTimerRef.current = setTimeout(async () => {
        setLoading(true)
        try {
          const response = await apiServices.MotsGenerer(searchTerm.trim())
          console.log('API Response:', response)
          setResponseData(response.data)

          // Process the response data
          if (response.data) {
            if (Array.isArray(response.data)) {
              setSuggestions(response.data)
            } else if (response.data.variants) {
              // Handle the case where the response contains a 'variants' field
              const variantsText = response.data.variants
              const variantsList = variantsText.split('\n').filter(v => v.trim())
              const formattedVariants = variantsList.map(variant => ({
                form: variant.trim(),
                word: variant.trim(),
                type: 'variante',
                description: `Forme dérivée de '${response.data.word || searchTerm}'`
              }))
              setSuggestions(formattedVariants)
            } else {
              setSuggestions([])
            }
            setShowSuggestions(true)
          } else {
            setSuggestions([])
          }
        } catch (error) {
          console.error('Error fetching word suggestions:', error)
          setSuggestions([])
        } finally {
          setLoading(false)
        }
      }, 300) // 300ms debounce
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [searchTerm])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      // Instead of navigating, just show suggestions
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current)
      }

      setLoading(true)
      setSearchPerformed(true)
      apiServices.MotsGenerer(searchTerm.trim())
        .then(response => {
          console.log('Search API Response:', response)
          setResponseData(response.data)

          // Process the response data
          if (response.data) {
            if (Array.isArray(response.data)) {
              setSuggestions(response.data)
            } else if (response.data.variants) {
              // Handle the case where the response contains a 'variants' field
              const variantsText = response.data.variants
              const variantsList = variantsText.split('\n').filter(v => v.trim())
              const formattedVariants = variantsList.map(variant => ({
                form: variant.trim(),
                word: variant.trim(),
                type: 'variante',
                description: `Forme dérivée de '${response.data.word || searchTerm}'`
              }))
              setSuggestions(formattedVariants)
            } else {
              setSuggestions([])
            }
          } else {
            setSuggestions([])
          }
        })
        .catch(error => {
          console.error('Error fetching word suggestions:', error)
          setSuggestions([])
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.word || suggestion.form)
    setShowSuggestions(false)
  }

  const handleAddWord = (word) => {
    navigate(`/add?word=${encodeURIComponent(word)}`)
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
          <form onSubmit={handleSearch} className="search-form-container">
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Rechercher un mot..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
                ref={inputRef}
                onFocus={() => searchTerm.trim().length > 1 && setShowSuggestions(true)}
              />

              {showSuggestions && (
                <div className="suggestions-container" ref={suggestionsRef}>
                  {loading ? (
                    <div className="suggestion-loading">Chargement...</div>
                  ) : suggestions.length > 0 ? (
                    <ul className="suggestions-list">
                      {suggestions.map((suggestion, index) => (
                        <li
                          key={index}
                          className="suggestion-item"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          <span className="suggestion-word">{suggestion.word || suggestion.form}</span>
                          {suggestion.type && (
                            <span className="suggestion-type">{suggestion.type}</span>
                          )}
                          {suggestion.description && (
                            <span className="suggestion-description">{suggestion.description}</span>
                          )}
                          <button
                            className="add-suggestion-button"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleAddWord(suggestion.word || suggestion.form)
                            }}
                          >
                            Ajouter
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : searchTerm.trim().length > 1 ? (
                    <div className="no-suggestions">
                      Aucune suggestion trouvée
                      <button
                        className="add-new-word-button"
                        onClick={() => handleAddWord(searchTerm)}
                      >
                        Ajouter ce mot
                      </button>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
            <button type="submit" className="search-button">
              Rechercher
            </button>
          </form>
        </div>

        {searchPerformed && !showSuggestions && (
          <div className="search-results-section">
            <h2>Formes grammaticales pour "{searchTerm}"</h2>

            {/* Display raw response data for debugging */}
            {responseData && (
              <div className="response-data-debug">
                <h3>Données brutes de l'API:</h3>
                <pre>{JSON.stringify(responseData, null, 2)}</pre>
              </div>
            )}

            {suggestions.length > 0 ? (
              <div className="suggestions-grid">
                {suggestions.map((suggestion, index) => (
                  <div key={index} className="suggestion-card">
                    <h3>{suggestion.word || suggestion.form}</h3>
                    {suggestion.type && <div className="suggestion-tag">{suggestion.type}</div>}
                    {suggestion.description && <p>{suggestion.description}</p>}
                    <div className="suggestion-actions">
                      <button
                        className="add-to-dictionary-btn"
                        onClick={() => handleAddWord(suggestion.word || suggestion.form)}
                      >
                        Ajouter au dictionnaire
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <p>Aucune forme grammaticale trouvée pour "{searchTerm}"</p>
                <button
                  className="add-new-word-btn"
                  onClick={() => handleAddWord(searchTerm)}
                >
                  Ajouter ce mot au dictionnaire
                </button>
              </div>
            )}
          </div>
        )}

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