import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { Link } from "react-router-dom";


export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);
    const [itemInCart, setItemInCart] = useState(false);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }   
    }
    const  handleSubstract = () => {
        if (count > initial) {å
            setCount(count - 1);
        }
    }
    const handleOnAdd = () => {
        onAdd(count)
        setItemInCart(true)
    }

  return (
    <div className='card'>
        <div className='card-body row'>
            <div className='col'>
                <button className='btn btn-outline-dark w-100' onClick={handleAdd}>+</button>
            </div>
            <div className='col'>
                <p className='text-center'>{count}</p>
            </div>
            <div className='col'>
                <button className='btn btn-outline-dark w-100' onClick={handleSubstract}>-</button>
            </div>
        </div>
        {
            itemInCart 
            ?
                <div className='card-footer'>
                    <Link to='/'>
                        <button className='btn btn-outline-dark w-100'>Keep Buying</button>
                    </Link>
                    <Link to='/cart'>
                        <button className='btn btn-outline-dark w-100'>Go to cart</button>
                    </Link>
                </div>
            :
                <div className='card-footer'>

                    <button className='btn btn-outline-dark w-100' onClick={handleOnAdd}>Add to cart</button>
                </div>
        }

    </div>
  )
}
