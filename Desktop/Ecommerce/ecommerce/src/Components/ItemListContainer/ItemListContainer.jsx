/*
  Coded by Gustavo Camargo
  @SrOscuroBlck
  Thx to teacher Fede from CoderHouse
*/

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

  /**
   * @function useEffect - En este caso, el useEffect me sirve para extraer los productos de la base de datos y mostrarlos en pantalla.
   * @function getProducts - Funcion que me trae todos los productos de la base de datos.
   * @function getByBrand - Funcion que me trae los productos de una marca en especifico.
   * @function getByCategory - Funcion que me trae los productos de una categoria en especifico.
   * Todas las anteriores funciones son importadas desde el archivo config.js.
   */
  
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
