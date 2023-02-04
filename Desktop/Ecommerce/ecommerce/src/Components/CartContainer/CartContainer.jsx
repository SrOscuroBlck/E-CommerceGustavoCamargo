import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./CartContainer.css";
import { CartItemEdit } from "./CartItemEdit/CartItemEdit";

export const CartContainer = () => {
  const { cartList, removeItem, editQuantity, setCartList } = useContext(CartContext);

  const handleRemove = (id) => {
    removeItem(id);
  };

  const handleEdit = (id, quantity) => {
    editQuantity(id, quantity);
  };

  const handleClear = () => {
    setCartList([]);
  };

  return (
    <>
      {cartList.map((cartItem) => {
          return (
            //Create a horizontal card with the product info and the quantity of the product in the cart
            <div 
              className="card" 
              key={cartItem.id}
              id="cart-card"
            >
              <div className="cart-item" id="cart-item">
                <img src={cartItem.pictureUrl} alt={`${cartItem.name} image`} />
                <div className="item-details" id="cart-item-details">
                  <h3>{cartItem.name}</h3>
                  <CartItemEdit initial={cartItem.quantity} onEdit={handleEdit} id={cartItem.id}/>
                </div>
                <div className="removeItem">
                  <button className="btn btn-danger" onClick={() => handleRemove(cartItem.id)}>Remove</button>
                </div>
              </div>
            </div>
          );
        })}
        {
          cartList.length ===0 
          ?
            <div className="cartContainer">
              <h3 className="text-center" id="clear">Your cart is empty</h3>
            </div>
          :
          <center>
            <button className="btn btn-danger" onClick={() => handleClear()}> Clear the Cart</button>
          </center>
        }
    </>
  );
};
