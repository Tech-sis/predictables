import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Components
// import Header from './components/header'

// Pages
import Home from './pages/home'
import RegistrationPage from './pages/RegistrationPage'
import Fixture from './pages/fixturehome'

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<RegistrationPage />} />
        <Route path="/fixture" element={<Fixture />} />
      </Routes>
    </Router>
  )
}

export default App
