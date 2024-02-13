import React from 'react';

import Button from '@mui/material/Button';
import AddToCart from '@mui/icons-material/Shop';

export default function FCProduct(props) {
  const handleAddToCart = () => {
    props.onAddToCart(props.product);
  };

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <span>Item: {props.product.name}</span><hr />
      <span>Price: ${props.product.price}</span> <hr />
      <img src={props.product.imageUrl} alt="" style={{ maxWidth: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }} /> <hr />
      <Button variant="contained" endIcon={<AddToCart />} onClick={handleAddToCart}>Add to cart</Button>
    </div>
  );
}
