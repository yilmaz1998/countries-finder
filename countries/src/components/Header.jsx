import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({searchTerm, handleSearchChange}) => {
  return (
    <div class="fixed-top">
     <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <Link to={'/'} class="navbar-brand">Country Finder<i class="bi bi-search"></i></Link>
  </div>
</nav>

    <input
      type="text"
      placeholder="Search for a country..."
      className="form-control mb-4"
      value={searchTerm}
      onChange={handleSearchChange}
                />
    </div>
  )
}

export default Header