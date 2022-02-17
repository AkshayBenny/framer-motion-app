import React from 'react';
import { motion } from 'framer-motion';

const Order = ({ pizza }) => {
  return (
    <div
      initial={{ x: '100vw' }}
      animate={{ x: '0vw' }}
      transition={{ duration: 1, type: 'spring' }}
      className='order container'
    >
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
    </div>
  );
};

export default Order;
