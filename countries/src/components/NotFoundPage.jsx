import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='welcome'>
        <h1>404 - No Page Found</h1>
        <Link className='link' to="/">Go Back to Welcome Page</Link>
    </div>
  )
}

export default NotFoundPage