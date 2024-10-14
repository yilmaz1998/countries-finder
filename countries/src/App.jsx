import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Countries from './components/Countries'
import Welcome from './components/Welcome'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/countries" element={<Countries />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Router>
  )
}

export default App

