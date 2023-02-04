import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

export const CartItemEdit = ({initial, onEdit, id}) => {
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        setCount(count + 1)
        console.log(count)
        onEdit(id, count + 1)
    }
    const  handleSubstract = () => {
        if (count > 1) {
            setCount(count - 1);
            onEdit(id, count - 1)
        }
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
    </div>
  )
}
