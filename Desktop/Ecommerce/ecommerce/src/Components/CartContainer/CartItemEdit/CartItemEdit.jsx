import { useState } from 'react';

/**
 * 
 * @function CartItemEdit - Este componente me permite modificar la cantidad de productos que quiero agregar al carrito.
 * @description - Este componente me ayuda a modificar la cantidad de productos que quiero agregar al carrito.
 */

export const CartItemEdit = ({initial, onEdit, id}) => {
    const [count, setCount] = useState(initial);

    /**
     * @function handleAdd - Funcion que me permite aumentar la cantidad de productos que quiero agregar al carrito, aqui se revisa el stock del producto.
     * @function handleSubstract - Funcion que me permite disminuir la cantidad de productos que quiero agregar al carrito.
     * @function onAdd - Funcion que me permite agregar el producto al carrito.
    */
    const handleAdd = () => {
        setCount(count + 1)
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
