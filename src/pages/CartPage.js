import React, { useState } from 'react';
import Cart from '../components/Cart';

const CartPage = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Product A', price: 30 },
    { id: 2, name: 'Product B', price: 20 },
  ]);

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default CartPage;
