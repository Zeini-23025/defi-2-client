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
        <Routes>
          {/* Routes principales de l'application */}
          <Route path="/" element={
            <div className="app">
              <Navbar />
              <main className="main-content">
                <Home />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/login" element={
            <div className="app">
              <Navbar />
              <main className="main-content">
                <Login />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/register" element={
            <div className="app">
              <Navbar />
              <main className="main-content">
                <Register />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/add" element={
            <div className="app">
              <Navbar />
              <main className="main-content">
                <AddWord />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/dictionary" element={
            <div className="app">
              <Navbar />
              <main className="main-content">
                <Dictionary />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/import" element={
            <div className="app">
              <Navbar />
              <main className="main-content">
                <ImportDocument />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/profile" element={
            <div className="app">
              <Navbar />
              <main className="main-content">
                <Profile />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/notifications" element={
            <div className="app">
              <Navbar />
              <main className="main-content">
                <Notifications />
              </main>
              <Footer />
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
    </ThemeProvider>
  )
}

export default App
