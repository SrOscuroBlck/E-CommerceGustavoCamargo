import React from "react";
import { useState, useEffect } from "react";
import { getProducts } from "./getProducts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ItemListContainer.css";
import Loader from "./../../assets/loader.svg";
import WorkInProgress from "../WorkInProgress/WorkInProgress";
import { Item } from "./Item/Item";
import { useParams } from "react-router-dom";


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
        <div className="back">
          <div className="container">
            {products.map((product) => {
              return (
                <Item key={product.id} product={product} />
              );
            })}
          </div>
        </div>
      }
      
    </>
  );
};
