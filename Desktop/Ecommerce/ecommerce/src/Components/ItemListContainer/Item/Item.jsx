import { Link } from "react-router-dom";
import "./Item.css";

/**
 * @function Item - Componente que muestra un producto en especifico.
 * @param {Object} props - Propiedades que recibe el componente.
 * @param {Object} props.product - Producto que se va a mostrar.
 * @returns {JSX.Element} - Retorna el componente Item.
 * @description - Este componente recibe un producto en especifico y lo regresa al padre para que lo muestre en pantalla junto a los demas de array de productos.
 */

export const Item = (props) => {
  const product = props.product;
  return (
    
    <div className="col-4 p-2 mt-3 mb-3" id="itemContainer">
      <Link to={`/${product.category}/${product.brand}/${product.id}`}>
      <div
        key={product.id}
        id="card"
        className="card w-100 text-center shadow"
        style={{ width: "18rem" }}
      >
        <img src={product.pictureUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.price}</p>
          <Link to={`/${product.category}/${product.brand}/${product.id}`}>
            <button className="btn btn-danger">View Product</button>
          </Link>
        </div>
      </div>
      </Link>
    </div>
  );
};
