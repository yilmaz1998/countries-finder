import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="welcome">
      <h1>Welcome to Country Finder <i className="bi bi-search"></i></h1>
      <p>Explore the world!</p>
      <Link to="/countries">Click to Start</Link>
    </div>
  )
}

export default Welcome;
