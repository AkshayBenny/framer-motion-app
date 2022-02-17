import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: 'spring',
      mass: 0.4,
      damping: 10,
      when: 'beforeChildren', //this makes the parent div animation complete before the children animation starts
      staggerChildren: 0.4,
    },
  },
};

const orderVariants = {
  hidden: { opacity: 0, y: '-100vh' },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, type: 'spring', stiffness: 50 },
  },
};

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      className='order container'
    >
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <motion.div variants={orderVariants} key={topping}>
          {topping}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Order;
