import { createContext, useState } from "react";

export const CartContext = createContext([]);

/**
 * @function CartContextProvider
 * @param {JSX.Element} children
 * @returns {JSX.Element}
 * @description CartContextProvider es el que provee todos los elementos del carrito de compras a la App.
 * ------------------------------------------------------------------------------------------------------
 * @function addToCart
 * @param {Object} product
 * @description addToCart es el que agrega un producto al carrito de compras.
 * 
 * @function removeItem
 * @param {Number} id
 * @description removeItem es el que remueve un producto del carrito de compras.
 * 
 * @function editQuantity
 * @param {Number} id
 * @param {Number} quantity
 * @description editQuantity es el que edita la cantidad de un producto del carrito de compras.
 * 
 * @function clearCart
 * @description clearCart es el que limpia el carrito de compras.
 * 
 * @function totalItems
 * @returns {Number}
 * @description totalItems es el que devuelve la cantidad total de productos en el carrito de compras.
 * 
 * @function totalPrice
 * @returns {Number}
 * @description totalPrice es el que devuelve el precio total de los productos en el carrito de compras.
 * 
 */

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

  // En esta parte se empaquetan todas las funciones y variables que se van a usar en el contexto.
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
