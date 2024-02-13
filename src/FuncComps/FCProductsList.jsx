import React from 'react';

import FCProduct from './FCProduct';

export default function FCProductsList(props) {
  const { products, onAddToCart, cartItems } = props;

  const filteredProducts = products.filter((product) => {
    return !cartItems.some((item) => item.id === product.id);
  });

  return (
    <>
      <h2>Products in store</h2>
      {filteredProducts.map((product) => (
        <FCProduct key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </>
  );
}
