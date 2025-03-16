import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AddWord from './components/AddWord'
import Dictionary from './components/Dictionary'
import ImportDocument from './components/ImportDocument'
import DashboardLayout from './admin/Dashboard/layouts/DashboardLayout'
import Dashboard from './admin/Dashboard/pages/Dashboard'
import Footer from './components/Footer'
import { ThemeProvider } from './components/ThemeContext'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Profile from './components/profile/Profile'
import Notifications from './components/notifications/Notifications'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/add" element={<AddWord />} />
              <Route path="/dictionary" element={<Dictionary />} />
              <Route path="/import" element={<ImportDocument />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
          </main>
          <Footer />
        </div>


        {/* Routes du dashboard admin */}
        <Route path="/admin/*" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* Ajoutez d'autres routes admin ici */}
        </Route>
      </Router>
    </ThemeProvider>
  )
}

export default App
