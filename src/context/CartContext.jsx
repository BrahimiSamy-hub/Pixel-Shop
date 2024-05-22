// import React, { createContext, useState, useContext } from 'react'

// const CartContext = createContext()

// export const useCart = () => useContext(CartContext)

// export const CartProvider = ({ children }) => {
//   const [isOpen, setOpen] = useState(false)

//   const toggleCart = () => {
//     setOpen(!isOpen)
//   }

//   return (
//     <CartContext.Provider value={{ isOpen, toggleCart }}>
//       {children}
//     </CartContext.Provider>
//   )
// }

import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const toggleCart = () => {
    setOpen(!isOpen)
  }

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    )
  }

  return (
    <CartContext.Provider
      value={{ isOpen, toggleCart, cartItems, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
