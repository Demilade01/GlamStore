import React, { useContext } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const {id, image, title, quantity, price} = item;
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext)

  return (
    <div className='flex gap-x-3'>
      {/* image */}
      <Link to={`/product/${id}`} className='flexCenter flex-1 m-1 py-1 rounded-xl ring-l ring-slate-900/5 h-[74px]'>
        <img src={image} alt='' height={55} width={55} className='object-contain aspect-square p-1'/>
      </Link>
      <div className='flex flex-[4] flex-col gap-y-2 mr-3'>
        {/* title and remove icons */}
        <div className='flex justify-center gap-8 items-baseline'>
          <div className='medium-14 uppercase line-clamp-2'>
            {title}
          </div>
          <div onClick={() => removeFromCart(id)} className='cursor-pointer text-gray-50'><MdClose /></div>
        </div>
          {/* cart btns and price */}
        <div className='flexBetween'>
          <div className='flexBetween gap-4 ring-l ring-slate-900/5 px-2'>
            <FaMinus onClick={() => decreaseQuantity(id)} className='cursor-pointer'/>
            <span>{quantity}</span>
            <FaPlus onClick={() => increaseQuantity(id)} className='cursor-pointer'/>
          </div>
          <p>${price}</p>
          {/* final price */}
          <div className='medium-15'>
            {`$${parseFloat(price * quantity).toFixed(2)}`}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem