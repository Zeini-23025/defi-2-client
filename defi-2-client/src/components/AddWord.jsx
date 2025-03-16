import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { apiServices } from '../api'

function AddWord() {
  const location = useLocation()
  const [wordData, setWordData] = useState({
    word: '',
    phonetic: '',
    definition: '',
    example: '',
    category: '',
    dialect: '',
    source: ''
  })
  const [wordVariants, setWordVariants] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedVariant, setSelectedVariant] = useState(null)
  const [responseData, setResponseData] = useState(null)

  useEffect(() => {
    // Check if word is provided in URL query params
    const params = new URLSearchParams(location.search)
    const wordParam = params.get('word')

    if (wordParam) {
      setWordData(prev => ({
        ...prev,
        word: wordParam
      }))

      // Fetch word variants
      fetchWordVariants(wordParam)
    }
  }, [location.search])

  const fetchWordVariants = async (word) => {
    if (!word || word.trim().length < 2) return

    setLoading(true)
    try {
      const response = await apiServices.MotsGenerer(word.trim())
      console.log('API Response in AddWord:', response)
      setResponseData(response.data)

      // Process the response data
      if (response.data) {
        if (Array.isArray(response.data)) {
          setWordVariants(response.data)
        } else if (response.data.variants) {
          // Handle the case where the response contains a 'variants' field
          const variantsText = response.data.variants
          const variantsList = variantsText.split('\n').filter(v => v.trim())
          const formattedVariants = variantsList.map(variant => ({
            form: variant.trim(),
            word: variant.trim(),
            type: 'variante',
            description: `Forme dérivée de '${response.data.word || word}'`
          }))
          setWordVariants(formattedVariants)
        } else {
          setWordVariants([])
        }
      } else {
        setWordVariants([])
      }
    } catch (error) {
      console.error('Error fetching word variants:', error)
      setWordVariants([])
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // TODO: Implement API call to save the word
    console.log('Submitting word:', wordData)
    alert('Mot ajouté avec succès! (Simulation)')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setWordData(prev => ({
      ...prev,
      [name]: value
    }))

    // If word field changes, fetch variants
    if (name === 'word' && value.trim().length > 1) {
      fetchWordVariants(value)
    }
  }

  const applyVariant = (variant) => {
    setSelectedVariant(variant)

    // Update form with variant data
    setWordData(prev => ({
      ...prev,
      word: variant.word || variant.form || prev.word,
      category: variant.type ? mapVariantTypeToCategory(variant.type) : prev.category,
      // You can add more fields here as needed
    }))
  }

  // Helper function to map variant types to form categories
  const mapVariantTypeToCategory = (type) => {
    const typeMap = {
      'conjugaison': 'verbe',
      'pluriel': 'nom',
      'féminin': 'adjectif',
      'diminutif': 'nom',
      'variante': 'nom',
      // Add more mappings as needed
    }

    return typeMap[type.toLowerCase()] || ''
  }

  return (
    <div className="add-word">
      <h2>Ajouter un nouveau mot</h2>

      {/* Display raw response data for debugging */}
      {responseData && (
        <div className="response-data-debug">
          <h3>Données brutes de l'API:</h3>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}

      {wordVariants.length > 0 && (
        <div className="word-variants-section">
          <h3>Formes grammaticales suggérées</h3>
          <p className="variants-help">Sélectionnez une forme pour pré-remplir le formulaire</p>

          <div className="variants-container">
            {wordVariants.map((variant, index) => (
              <div
                key={index}
                className={`variant-item ${selectedVariant === variant ? 'selected' : ''}`}
                onClick={() => applyVariant(variant)}
              >
                <span className="variant-word">{variant.word || variant.form}</span>
                {variant.type && <span className="variant-type">{variant.type}</span>}
                {variant.description && <span className="variant-description">{variant.description}</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {loading && <div className="variants-loading">Chargement des variantes...</div>}

      <form onSubmit={handleSubmit} className="word-form">
        <div className="form-group">
          <label htmlFor="word">Mot (en Hassaniya)</label>
          <input
            type="text"
            id="word"
            name="word"
            value={wordData.word}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phonetic">Prononciation phonétique</label>
          <input
            type="text"
            id="phonetic"
            name="phonetic"
            value={wordData.phonetic}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="definition">Définition</label>
          <textarea
            id="definition"
            name="definition"
            value={wordData.definition}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="example">Exemple d'utilisation</label>
          <textarea
            id="example"
            name="example"
            value={wordData.example}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Catégorie grammaticale</label>
          <select
            id="category"
            name="category"
            value={wordData.category}
            onChange={handleChange}
          >
            <option value="">Sélectionner une catégorie</option>
            <option value="nom">Nom</option>
            <option value="verbe">Verbe</option>
            <option value="adjectif">Adjectif</option>
            <option value="adverbe">Adverbe</option>
            <option value="expression">Expression</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dialect">Variante dialectale (optionnel)</label>
          <input
            type="text"
            id="dialect"
            name="dialect"
            value={wordData.dialect}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="source">Source (optionnel)</label>
          <input
            type="text"
            id="source"
            name="source"
            value={wordData.source}
            onChange={handleChange}
            placeholder="Livre, document, ou source orale"
          />
        </div>

        <button type="submit" className="submit-button">
          Ajouter au dictionnaire
        </button>
      </form>
    </div>
  )
}

export default AddWord 