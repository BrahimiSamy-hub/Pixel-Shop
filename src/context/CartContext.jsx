import { createContext, useState, useContext } from 'react'

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

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        isOpen,
        toggleCart,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
