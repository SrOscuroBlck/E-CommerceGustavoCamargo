/*
  Coded by Gustavo Camargo
  @SrOscuroBlck
  Thx to teacher Fede from CoderHouse
*/

import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { ItemCount } from '../Itemcount/ItemCount'
import { getProduct } from '../../firebase/config'
import './ItemDetailContainer.css'
import Loader from "./../../assets/loader.svg";

/**
 * @function ItemDetailContainer - Componente que muestra el detalle de un producto en especifico.
 * @returns {JSX.Element} - Retorna el componente ItemDetailContainer.
 * @description - Este componente recibe un producto en especifico y lo regresa al padre para que lo muestre en pantalla junto a los demas de array de productos.
 */

export const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true)
  const { cartList, addToCart, updateCart, setCartList } = useContext(CartContext)
  const [product, setProduct] = useState('')
  const { itemId } = useParams()

  /**
   * @function useEffect - En este caso, el useEffect me sirve para extraer el producto de la base de datos y mostrarlo en pantalla.
   * @function getProduct - Funcion que me trae un producto de la base de datos.
   * Todas las anteriores funciones son importadas desde el archivo config.js.
   * @function onAdd - Funcion que me permite agregar un producto al carrito de compras, mediante el contexto CartContext.
   */
  
  useEffect(() => {
      getProduct(itemId)
      .then((response) => {
        setProduct(response)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [itemId])
  const onAdd = (cant) => {
    
    const itemInCart = cartList.find((item) => item.id === product.id)
    if (itemInCart) {
      updateCart(product.id, cant)
    } else {
      addToCart({ ...product, quantity: cant })
    }

  }
  return (
    <>
        {loading ? (
        <center>
          <div className="loader">
            <img src={Loader} alt="loader" />
          </div>
        </center>
        ) : (
        <div className="app">
            <div className="details" key={product.id}>
              <div className="big-img">
                <img src={product.pictureUrl} alt={`${product.name} image`}/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{product.name}</h2>
                  <span>${product.price}</span>
                </div>
                <p>{product.category}</p>
                <p>{product.brand}</p>
                <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>

              </div>
            </div>
        </div>
        )}
    </>
  )
}
