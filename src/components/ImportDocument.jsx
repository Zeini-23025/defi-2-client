import { useState } from 'react'

function ImportDocument() {
  const [file, setFile] = useState(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [results, setResults] = useState(null)

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    setFile(selectedFile)
    setResults(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file) return

    setAnalyzing(true)
    // TODO: Implement file upload and analysis
    try {
      const formData = new FormData()
      formData.append('document', file)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Mock results
      setResults({
        totalWords: 150,
        unknownWords: [
          { word: 'exemple1', context: 'Contexte de l\'exemple 1' },
          { word: 'exemple2', context: 'Contexte de l\'exemple 2' },
        ]
      })
    } catch (error) {
      console.error('Error analyzing document:', error)
    } finally {
      setAnalyzing(false)
    }
  }

  return (
    <div className="import-document">
      <h2>Importer un document</h2>
      <div className="import-section">
        <form onSubmit={handleSubmit} className="import-form">
          <div className="form-group">
            <label htmlFor="document">Sélectionner un document</label>
            <input
              type="file"
              id="document"
              accept=".pdf,.doc,.docx,.txt"
              onChange={handleFileChange}
              className="file-input"
            />
            <p className="file-info">
              Formats acceptés: PDF, Word (.doc, .docx), Texte (.txt)
            </p>
          </div>
          <button
            type="submit"
            className="submit-button"
            disabled={!file || analyzing}
          >
            {analyzing ? 'Analyse en cours...' : 'Analyser le document'}
          </button>
        </form>

        {results && (
          <div className="analysis-results">
            <h3>Résultats de l'analyse</h3>
            <p>Nombre total de mots : {results.totalWords}</p>
            <h4>Mots non trouvés dans le dictionnaire :</h4>
            <div className="unknown-words">
              {results.unknownWords.map((item, index) => (
                <div key={index} className="unknown-word-item">
                  <span className="word">{item.word}</span>
                  <p className="context">{item.context}</p>
                  <button
                    className="add-word-button"
                    onClick={() => {/* TODO: Implement add word logic */}}
                  >
                    Ajouter au dictionnaire
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ImportDocument 