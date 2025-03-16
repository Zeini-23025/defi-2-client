import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AddWord from './components/AddWord'
import Dictionary from './components/Dictionary'
import ImportDocument from './components/ImportDocument'
import DashboardLayout from './admin/Dashboard/layouts/DashboardLayout'
import Dashboard from './admin/Dashboard/pages/Dashboard'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes principales de l'application */}
        <Route path="/" element={
          <div className="app">
            <Navbar />
            <main className="app-main-content">
              <Routes>
                <Route index element={<Home />} />
                <Route path="add" element={<AddWord />} />
                <Route path="dictionary" element={<Dictionary />} />
                <Route path="import" element={<ImportDocument />} />
              </Routes>
            </main>
          </div>
        } />

        {/* Routes du dashboard admin */}
        <Route path="/admin/*" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* Ajoutez d'autres routes admin ici */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
