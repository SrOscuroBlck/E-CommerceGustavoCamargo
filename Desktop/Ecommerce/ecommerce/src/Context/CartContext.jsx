import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (product) => {
    setCartList([...cartList, product]);
  };

  const removeItem = (id) => {
    const newCartList = cartList.filter((item) => item.id !== id);
    setCartList(newCartList);
  };

  const editQuantity = (id, quantity) => {
    const itemInCart = cartList.find((item) => item.id === id);
    if (itemInCart) {
      itemInCart.quantity = quantity;
      setCartList([...cartList]);
    }
  };

  const clearCart = () => {
    setCartList([]);
  };

  const totalItems = () => {
    return cartList.reduce((count, item) => count + item.quantity, 0);
  };

  const totalPrice = () => {
    return cartList.reduce(
      (count, item) => count + item.quantity * item.price,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeItem,
        editQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
