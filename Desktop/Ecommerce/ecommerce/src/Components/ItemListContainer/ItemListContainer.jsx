import React from "react";
import { useState, useEffect } from "react";
import { getProducts } from "./getProducts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ItemListContainer.css";
import Loader from "./../../assets/loader.svg";
import WorkInProgress from "../WorkInProgress/WorkInProgress";
import { Link, useParams } from "react-router-dom";


export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  const { brandId } = useParams();

  useEffect(() => {
    if (categoryId) {
      if(brandId){
      
        setLoading(true);
        getProducts()
          .then((response) => {
            setProducts(response.filter((product) => product.category === categoryId && product.brand === brandId));
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        setLoading(true);
        getProducts()
          .then((response) => {
            setProducts(response.filter((product) => product.category === categoryId));
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    } else {
      setLoading(true);
      getProducts()
        .then((response) => {
          setProducts(response);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }

  }, [categoryId, brandId]);

  console.log(products);

  return (
    <>
      {categoryId === undefined ? <WorkInProgress /> : null}
      {
        loading
        ?
          <center>
            <div className="loader">
              <img src={Loader} alt="loader" />
            </div>
          </center>  
        :
        <div className="container">
        {products.map((product) => {
          return (
            <div className="col-4 p-2 mt-3 mb-3">
              <div
                key={product.id}
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
                    <a href="#" className="btn btn-primary">
                      View Product
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      }
      
    </>
  );
};
