import { useState } from "react";
import { Link } from "react-router-dom";

/**
 * @function ItemCount - Este componente me permite agregar productos al carrito.
 * @description - Este componente me ayuda a modificar la cantidad de productos que quiero agregar al carrito. Tambien revisa el stock del producto y me permite agregarlo al carrito.
 */

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [itemInCart, setItemInCart] = useState(false);
  
  /**
   * @function handleAdd - Funcion que me permite aumentar la cantidad de productos que quiero agregar al carrito, aqui se revisa el stock del producto.
   * @function handleSubstract - Funcion que me permite disminuir la cantidad de productos que quiero agregar al carrito.
   * @function onAdd - Funcion que me permite agregar el producto al carrito.
   * @function setItemInCart - Funcion que me permite cambiar el estado de itemInCart.
   */

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const handleSubstract = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };
  const handleOnAdd = () => {
    onAdd(count);
    setItemInCart(true);
  };

  return (
    <div className="card">
      {itemInCart ? (
        <div className="card-footer">
          <Link to="/">
            <button className="btn btn-outline-dark w-100">Keep Buying</button>
          </Link>
          <Link to="/cart">
            <button className="btn btn-outline-dark w-100">Go to cart</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="card-body row">
            <div className="col">
              <button
                className="btn btn-outline-dark w-100"
                onClick={handleAdd}
              >
                +
              </button>
            </div>
            <div className="col">
              <p className="text-center">{count}</p>
            </div>
            <div className="col">
              <button
                className="btn btn-outline-dark w-100"
                onClick={handleSubstract}
              >
                -
              </button>
            </div>
          </div>

          <div className="card-footer">
            <button
              className="btn btn-outline-dark w-100"
              onClick={handleOnAdd}
            >
              Add to cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};
