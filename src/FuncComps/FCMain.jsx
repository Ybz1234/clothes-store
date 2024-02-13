import React, { useState } from 'react';

import FCProductsList from './FCProductsList';
import FCCart from './FCCart';

export default function FCMain() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'Jeans', price: 1000, imageUrl: 'jeans.jpg' },
    { id: 2, name: 'T-shirt', price: 750, imageUrl: 'tshirt.jpg' },
    { id: 3, name: 'Hat', price: 250, imageUrl: 'hat.jpg' },
  ];

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  let totalSum = 0;

  for (const item of cartItems) {
    totalSum += item.price;
  }

  return (
    <>
      <FCProductsList products={products} onAddToCart={addToCart} cartItems={cartItems} />
      <FCCart cartItems={cartItems} onRemoveFromCart={removeFromCart} />
      <div>
        <h3>Total Price: ${totalSum}</h3>
      </div>
    </>
  );
}
