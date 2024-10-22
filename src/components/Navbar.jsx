import React from 'react'

const Navbar = ({ containerStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
      <a href='#home' className='active-link'>Home</a>
      <a href='#Shop' className=''>Shop</a>
      <a href='#Contact' className=''>Contact</a>
    </nav>
  )
}

export default Navbar