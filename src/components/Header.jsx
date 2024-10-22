import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { MdClose, MdMenu } from 'react-icons/md';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  }

  return (
    <header className='fixed left-0 right-0 w-full z-10 transition-all duration-300 max-padd-container flexBetween'>
      {/* {Logo} */}
      <Link to={'/'}>
        <h4 className='bold-24'>
          <span className='text-secondary'>Glam</span>Store
        </h4>
      </Link>
      <div className='flexBetweem gap-x-20'>
      {/* navbar desktop */}
        <Navbar containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}/>
      {/* navbar mobile */}
        <Navbar containerStyles={`${menuOpened ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-q ring-slate-900/5 transition-all duration-300 cursor-pointer" : "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-q ring-slate-900/5 transition-all duration-300 -right-[100%] cursor-pointer"}`} />
        <div>
          {/* button */}
          {!menuOpened ? (
            <MdMenu onClick={toggleMenu}/>
          ): (<MdClose onClick={toggleMenu}/>)}
        </div>
      </div>

    </header>
  )
}

export default Header