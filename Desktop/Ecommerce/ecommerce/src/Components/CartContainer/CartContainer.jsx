/*
  Coded by Gustavo Camargo
  @SrOscuroBlck
  Thx to teacher Fede from CoderHouse
*/
import "firebase/firestore";
import {
  collection,
  getFirestore,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { CartItemEdit } from "./CartItemEdit/CartItemEdit";
import "./CartContainer.css";
import { Login } from "../Login/Login";

export const CartContainer = () => {
  const [beforePurchase, setBeforePurchase] = useState(true);
  const [notification, setNotification] = useState(false);
  const { cartList, removeItem, editQuantity, clearCart, totalPrice } =
  useContext(CartContext);
  
  const updateStock = () => {
    // update the stock by subtracting the quantity of the product in the cart
    cartList.forEach((item) => {
      const db = getFirestore();
      const queryDocUpdate = doc(db, "products", item.id);
      updateDoc(queryDocUpdate, { stock: item.stock - item.quantity });
    });
  };
  const placeOrder = (name, email, phone) => {
    setBeforePurchase(false);
    const buyer = {
      name: name,
      email: email,
      phone: phone,
    };
    const items = cartList.map((item) => {
      return {
        id: item.id,
        title: item.name,
        price: item.price,
      };
    });

    const order = {
      buyer: buyer,
      orderItems: items,
      total: totalPrice(),
    };

    console.log(order);

    const db = getFirestore();
    const queryCollection = collection(db, "orders");
    addDoc(queryCollection, order)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err))
      .finally(() => {
        console.log("Order placed");
        clearCart();
        updateStock();
        setBeforePurchase(true);
        setNotification(true);
        setTimeout(() => setNotification(false), 2000);

      });
  };


  //I decided not to change my functions, it will be my unique way to do it
  const handleRemove = (id) => {
    removeItem(id);
  };

  const handleEdit = (id, quantity) => {
    editQuantity(id, quantity);
  };

  const handleClear = () => {
    clearCart();
  };


  return (
    <>
      {notification && 
        <div className="notification" id="notification">
          Your order has been placed.
        </div>
      }
      {cartList.map((cartItem) => {
        return (
          <div className="card" key={cartItem.id} id="cart-card">
            <div className="cart-item" id="cart-item">
              <img src={cartItem.pictureUrl} alt={`${cartItem.name} image`} />
              <div className="item-details" id="cart-item-details">
                <h3>{cartItem.name}</h3>
                <CartItemEdit
                  initial={cartItem.quantity}
                  onEdit={handleEdit}
                  id={cartItem.id}
                />
              </div>
              <div className="removeItem">
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemove(cartItem.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {(cartList.length === 0 && beforePurchase === true) ? (
        <div className="cartContainer">
          <h3 className="text-center" id="clear">
            Your cart is empty
          </h3>
        </div>
      ) : (
        <center>
          <h3 className="text-center" id="clear">
            Total: ${totalPrice()}
          </h3>
          <button
            className="btn btn-danger"
            id="clrBtn"
            onClick={() => handleClear()}
          >
            {" "}
            Clear the Cart
          </button>
          <button
            className="btn btn-success"
            id="compBtn"
            onClick={() => setBeforePurchase(() => false)}
          >
            {" "}
            Complete Purchase
          </button>
        </center>
      )}
      {!beforePurchase && (
        <center>
          <div id="login-container">
            <Login placeOrder={placeOrder}/>
          </div>
        </center>
      )}
    </>
  );
};

