import React from 'react';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/DeleteForeverSharp';

export default function FCCart(props) {
  const { cartItems, onRemoveFromCart } = props;

  const handleRemoveFromCart = (itemId) => {
    onRemoveFromCart(itemId);
  };

  return (
    <>
      <h2>Shopping Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ marginRight: 'auto' }}>{item.name} - ${item.price}</span>
          <Button onClick={() => handleRemoveFromCart(item.id)} variant="outlined" color="error" endIcon={<DeleteIcon />} style={{ marginLeft: '8px' }}>
            Remove
          </Button>
        </div>
      ))}
    </>
  );
}
