import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { ItemCount } from '../Itemcount/ItemCount'
import { getProducts } from '../ItemListContainer/getProducts'
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {

  const { cartList, addToCart, setCartList } = useContext(CartContext)
  const [product, setProduct] = useState('')
  const { itemId } = useParams()
  console.log(itemId)
  
  useEffect(() => {
    if(itemId){
      getProducts()
      .then((response) => {
        setProduct(response.find((items) => items.id == itemId))
      })
      .catch((error) => {
        console.log(error)
      })
    }else {
      console.log('No hay productos')
    }
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
    </>
  )
}
