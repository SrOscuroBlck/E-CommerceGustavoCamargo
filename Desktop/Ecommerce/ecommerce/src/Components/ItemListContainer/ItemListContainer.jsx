/*
  Coded by Gustavo Camargo
  @SrOscuroBlck
  Thx to teacher Fede from CoderHouse
*/

import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { getProducts } from "./getProducts";
import { getByBrand, getByCategory, getProducts } from "../../firebase/config";
import { Link } from "react-router-dom";
import { Item } from "./Item/Item";
import { WorkInProgress } from "../WorkInProgress/WorkInProgress";
import Loader from "./../../assets/loader.svg";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  const { brandId } = useParams();

  useEffect(() => {
    if (categoryId) {
      if (brandId) {
        setLoading(true);
        getByBrand(categoryId, brandId)
          .then((response) => {
            setProducts(response);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        setLoading(true);
        getByCategory(categoryId)
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

  return (
    <>
      {categoryId === undefined ? <WorkInProgress /> : null}
      {loading ? (
        <center>
          <div className="loader">
            <img src={Loader} alt="loader" />
          </div>
        </center>
      ) : (
        <>
        {
          products.length === 0 ? (
            <center>
              <div className="no-products-container">
                <h1>No products avilable</h1>
                <Link to="/">
                  <button className="btn btn-danger">Return to Main Page</button>
                </Link>
              </div>
            </center>
          ) : 
          <div className="back">
          <div className="container">
            {products.map((product) => {
              return <Item key={product.id} product={product} />;
            })}
          </div>
          </div>
        }
        
        </>
      )}
    </>
  );
};
