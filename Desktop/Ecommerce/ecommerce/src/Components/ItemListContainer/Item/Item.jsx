import React from 'react'
import { Link } from "react-router-dom";
import './Item.css'

export const Item = (props) => {
    const product = props.product;
  return (
    <div className="col-4 p-2 mt-3 mb-3" id="itemContainer">
              <div
                key={product.id}
                id="card"
                className="card w-100 text-center shadow"
                style={{ width: "18rem" }}
              >
                <img
                  src={product.pictureUrl}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <Link to={`/${product.category}/${product.brand}/${product.id}`}>
                      <button className="btn btn-danger">View Product</button>
                  </Link>
                </div>
              </div>
            </div>
  )
}
