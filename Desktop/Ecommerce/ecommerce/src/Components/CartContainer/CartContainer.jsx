import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./CartContainer.css";

export const CartContainer = () => {
  const { cartList } = useContext(CartContext);
  return (
    <>
        {cartList.map((cartItem) => {
          return (
            //Create a horizontal card with the product info and the quantity of the product in the cart
            <div className="card" key={cartItem.id}>
              <div class="cart-item">
                <img src={cartItem.pictureUrl} alt={`${cartItem.name} image`} />
                <div class="item-details">
                  <h3>{cartItem.name}</h3>
                  <p>{cartItem.quantity}</p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
