import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemCount } from '../Itemcount/ItemCount'
import { getProducts } from '../ItemListContainer/getProducts'
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {
  const onAdd = (cant) => {
    console.log(cant)
  }

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
    console.log(product)
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
