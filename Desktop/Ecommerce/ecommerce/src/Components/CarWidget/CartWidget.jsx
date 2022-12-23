import React from 'react';
import cartWidget from '../../assets/cart.svg';

import './CartWidget.css';

function CartWidget() {
  return (
    <div className="cartWidget">
        <img src={cartWidget} alt="CartWidget"  />
    </div>
  );
}

export default CartWidget;