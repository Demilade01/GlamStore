import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { MdClose, MdMenu } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { GiShoppingBag } from 'react-icons/gi';
import { SidebarContext } from '../context/SidebarContext';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isActive, setIsActive ] = useState(false);

  const {isOpen, setIsOpen} = useContext(SidebarContext);
  const {itemQuantity} = useContext(CartContext);

  const navigate = useNavigate();

  console.log(itemQuantity);


  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 20) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }, [])
  })

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  }

  return (
    <header className={`${isActive ? 'bg-white shadow-sm py-3' : 'bg-transparent py-4'} fixed left-0 right-0 w-full z-10 max-padd-container flexBetween transition-all duration-300`}>
      {/* {Logo} */}
      <Link to={'/'}>
        <h4 className='bold-24'>
          <span className='text-secondary'>Glam</span>Store
        </h4>
      </Link>
      {/* navbar */}
      <div className='flexBetween gap-x-20'>
      {/* navbar desktop */}
        <Navbar containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}/>
      {/* navbar mobile */}
        {menuOpened && (
          <Navbar containerStyles="flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 cursor-pointer" />
        )}
        <div className='flexBetween gap-x-3 sm:gap-x-8'>
          {/* button */}
          {!menuOpened ? (
            <MdMenu onClick={toggleMenu} className='md:hidden  cursor-pointer hover:text-secondary text-2xl'/>
          ): (<MdClose onClick={toggleMenu} className='md:hidden cursor-pointer hover:text-secondary text-2xl'/>)}

          <div className='flex relative' onClick={() => setIsOpen(!isOpen)}>
            <GiShoppingBag
              className='text-[25px]'
            />
            <span className='bg-secondary text-white text-sm absolute -top-2.5 -right-2.5 flexCenter w-5 h-5 rounded-full shadow-md'>{itemQuantity}</span>
          </div>

          <button className='btn-outline rounded-full'>Login</button>
        </div>
      </div>

    </header>
  )
}

export default Header