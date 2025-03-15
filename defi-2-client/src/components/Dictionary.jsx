import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

function Dictionary() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '')
  const [words, setWords] = useState([])
  const [loading, setLoading] = useState(false)
  const [filters, setFilters] = useState({
    category: '',
    dialect: ''
  })

  useEffect(() => {
    if (searchParams.get('search')) {
      handleSearch(searchParams.get('search'))
    } else {
      // Load initial dictionary data
      fetchWords()
    }
  }, [])

  const fetchWords = async () => {
    setLoading(true)
    try {
      // TODO: Implement API call
      // Mock data
      const mockWords = [
        {
          id: 1,
          word: 'exemple1',
          phonetic: 'ɛgzɑ̃pl',
          definition: 'Définition du mot exemple1',
          example: 'Utilisation dans une phrase',
          category: 'nom',
          dialect: 'région1',
          source: 'Source 1'
        },
        // Add more mock words...
      ]
      setWords(mockWords)
    } catch (error) {
      console.error('Error fetching words:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async (term) => {
    setSearchTerm(term)
    setSearchParams({ search: term })
    setLoading(true)
    try {
      // TODO: Implement search API call
      // Mock filtered data
      await new Promise(resolve => setTimeout(resolve, 500))
      // Filter mock data based on search term
    } catch (error) {
      console.error('Error searching words:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="dictionary">
      <div className="dictionary-header">
        <h2>Dictionnaire Hassaniya</h2>
        <div className="search-filters">
          <div className="search-bar">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Rechercher un mot..."
              className="search-input"
            />
          </div>
          <div className="filters">
            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="filter-select"
            >
              <option value="">Toutes les catégories</option>
              <option value="nom">Nom</option>
              <option value="verbe">Verbe</option>
              <option value="adjectif">Adjectif</option>
              <option value="adverbe">Adverbe</option>
              <option value="expression">Expression</option>
            </select>
            <select
              name="dialect"
              value={filters.dialect}
              onChange={handleFilterChange}
              className="filter-select"
            >
              <option value="">Toutes les variantes</option>
              <option value="region1">Région 1</option>
              <option value="region2">Région 2</option>
            </select>
          </div>
        </div>
      </div>

      <div className="dictionary-content">
        {loading ? (
          <div className="loading">Chargement...</div>
        ) : (
          <div className="word-list">
            {words.map(word => (
              <div key={word.id} className="word-card">
                <div className="word-header">
                  <h3 className="word-title">{word.word}</h3>
                  <span className="phonetic">[{word.phonetic}]</span>
                </div>
                <div className="word-category">{word.category}</div>
                <div className="word-definition">
                  <strong>Définition:</strong>
                  <p>{word.definition}</p>
                </div>
                {word.example && (
                  <div className="word-example">
                    <strong>Exemple:</strong>
                    <p>{word.example}</p>
                  </div>
                )}
                {word.dialect && (
                  <div className="word-dialect">
                    <strong>Variante:</strong> {word.dialect}
                  </div>
                )}
                {word.source && (
                  <div className="word-source">
                    <strong>Source:</strong> {word.source}
                  </div>
                )}
                <button className="edit-button">
                  Modifier
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Dictionary 