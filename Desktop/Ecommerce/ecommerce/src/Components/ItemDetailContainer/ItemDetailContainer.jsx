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
export const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true)
  const { cartList, addToCart, setCartList } = useContext(CartContext)
  const [product, setProduct] = useState('')
  const { itemId } = useParams()
  
  useEffect(() => {
      console.log(itemId)
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
      itemInCart.quantity += cant
      setCartList([...cartList])
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
