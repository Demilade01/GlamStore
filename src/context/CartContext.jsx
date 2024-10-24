import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext();



const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.quantity;
    }, 0);
    setTotal(total);
  }, [cart]);

  // update item quantity
  useEffect(() => {
    if(cart){
      const quantity = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.quantity;
      }, 0)
      setItemQuantity(quantity);
    }
  }, [cart])



  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, quantity:1 }
    const cartItem = cart.find((item) => {
      return item.id === id;
    })
    // cartItem is already in the
    if(cartItem) {
      const newCart = [...cart].map((item) => {
        if(item.id === id) {
          return {...item, quantity:cartItem.quantity +1}
        }else {
          return item
        }
      })
      setCart(newCart);
    } else {
      setCart([...cart, newItem])
    }
  }

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    })
    setCart(newCart);
  }

  // clear cart
  const clearCart = () => {
    setCart([])
  }

  // increase quantity
  const increaseQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id)
    addToCart(cartItem, id);
  }

  // decrease quantity
  const decreaseQuantity = (id) => {
    const cartItem = cart.find((item) => {
      return item.id == id
    })
    if(cartItem){
      const newCart = cart.map((item) => {
        if(item.id == id) {
          return {...item, quantity:cartItem.quantity - 1}
        }else {
          return item
        }
      })
      setCart(newCart)
    }
    if (cartItem.quantity < 1){
      removeFromCart(id)
    }

  }

  return (
    <CartContext.Provider value={{addToCart, cart, clearCart, removeFromCart, increaseQuantity, decreaseQuantity, total, itemQuantity}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider