import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AddWord from './components/AddWord'
import Dictionary from './components/Dictionary'
import ImportDocument from './components/ImportDocument'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddWord />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/import" element={<ImportDocument />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
