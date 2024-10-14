import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Welcome = () => {
  return (
    <motion.div
    initial={{ y: "-50vw", opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ x: "-50vw", opacity: 0 }}
    transition={{ duration: 1.2 }}
     className="welcome">
      <h1>Welcome to Country Finder <i className="bi bi-search"></i></h1>
      <p>Explore the world!</p>
      <motion.div
    initial={{ y: "+70vw" , opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1.2 }}>
      <Link to="/countries">Click to Start</Link>
    </motion.div>
    </motion.div>
  )
}

export default Welcome;
