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
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { CartItemEdit } from "./CartItemEdit/CartItemEdit";
import "./CartContainer.css";
import { Login } from "../Login/Login";

/**
 * @function CartContainer - Componente que muestra el carrito de compras.
 * @details - Este componente muestra el carrito de compras, con la posibilidad de editar la cantidad de productos, eliminarlos y vaciar el carrito, ademas de mostrar el total de la compra.
 * Este fue el componente mas complejo de hacer, ya que utilizamos el contexto CartContext para poder manejar el carrito de compras.
 * @returns {JSX.Element} - Retorna el componente CartContainer.
 */

export const CartContainer = () => {
  const [beforePurchase, setBeforePurchase] = useState(true);
  const [notification, setNotification] = useState(false);
  const { cartList, removeItem, editQuantity, clearCart, totalPrice } =useContext(CartContext);

  /**
   * @function placeOrder - Funcion que me permite realizar la compra.
   * @function updateStock - Funcion que me permite actualizar el stock de los productos.
   * @function setBeforePurchase - Funcion que me permite cambiar el estado de la variable beforePurchase de esta manera puedo mostrar el formulario de compra.
   * @function setNotification - Funcion que me permite cambiar el estado de la variable notification de esta manera puedo mostrar la notificacion de compra realizada.
   * ------------------------------------------------------------------------------------------------------------------------------------------------------------------
   * @function clearCart - Funcion que me permite vaciar el carrito de compras.
   * @function totalPrice - Funcion que me permite calcular el total de la compra.
   * @function editQuantity - Funcion que me permite editar la cantidad de productos en el carrito de compras.
   * @function removeItem - Funcion que me permite eliminar un producto del carrito de compras.
   * Todas las anteriores funciones son importadas desde el archivo CartContext.js.
   */
  
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
      date: new Date()
    };

    const db = getFirestore();
    const queryCollection = collection(db, "orders");
    addDoc(queryCollection, order)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err))
      .finally(() => {
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

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setBeforePurchase(false);
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
          <h3 className="text-center">
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
            onClick={() => handleToTop()}
          >
            {" "}
            Complete Purchase
          </button>
        </center>
      )}
      {!beforePurchase && (
        <center>
          <div id="login-container">
            <Login placeOrder={placeOrder} setBeforePurchase={setBeforePurchase} />
          </div>
        </center>
      )}
    </>
  );
};

