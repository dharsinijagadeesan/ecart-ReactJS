import React, { useState } from 'react';
import ProductList from '../components/ProductList';

const products = [
  { id: 1, name: 'Product A', price: 30 },
  { id: 2, name: 'Product B', price: 20 },
  { id: 3, name: 'Product C', price: 50 },
];

const Shop = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart`);
  };

  return (
    <div>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default Shop;
