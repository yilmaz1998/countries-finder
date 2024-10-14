import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = ({searchTerm, handleSearchChange}) => {
  return (
    <motion.div
    initial={{x: "-300vw"}}
    animate={{x: 0}}
    transition={{duration: 1.5}} 
    class="fixed-top">
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
    </motion.div>
  )
}

export default Header