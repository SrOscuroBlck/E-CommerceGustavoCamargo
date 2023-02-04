import React from 'react'
import { createContext, useState } from 'react'


export const CartContext = createContext([])

export const CartContextProvider = ({children}) => { 
    const [cartList, setCartList] = useState([])

    const addToCart = (product) => {
        setCartList([...cartList, product])
    }

    const removeItem = (id) => {
        const newCartList = cartList.filter((item) => item.id !== id);
        setCartList(newCartList);
    };

    const editQuantity = (id, quantity) => {
        const itemInCart = cartList.find((item) => item.id === id)
        if (itemInCart) {
          itemInCart.quantity = quantity
          setCartList([...cartList])
        }
    }


  return (
    <CartContext.Provider value={{
        cartList,
        setCartList,
        addToCart,
        removeItem,
        editQuantity
    }}>
        {children}
    </CartContext.Provider>

  )
}
