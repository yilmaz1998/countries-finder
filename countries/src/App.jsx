import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Countries from './components/Countries'
import Welcome from './components/Welcome'
import NotFoundPage from './components/NotFoundPage'

function AnimatedRoutes() {
  const location = useLocation()


return (
  <AnimatePresence>
          <Routes location={location} key={location.pathname}>
        <Route path="/countries" element={<Countries />} />
        <Route path="/" element={<Welcome />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
  </AnimatePresence>
)
}
function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  )
}

export default App

