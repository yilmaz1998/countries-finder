import React from 'react'

const Header = ({searchTerm, handleSearchChange}) => {
  return (
    <div class="fixed-top">
      <div className='head d-flex'>
    <h1>Country Finder</h1><i class="bi bi-search"></i>
    </div>
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