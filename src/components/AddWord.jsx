import { useState } from 'react'

function AddWord() {
  const [wordData, setWordData] = useState({
    word: '',
    phonetic: '',
    definition: '',
    example: '',
    category: '',
    dialect: '',
    source: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // TODO: Implement API call to save the word
    console.log('Submitting word:', wordData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setWordData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="add-word">
      <h2>Ajouter un nouveau mot</h2>
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