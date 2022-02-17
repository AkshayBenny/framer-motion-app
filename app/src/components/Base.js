import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div
      initial={{ x: '100vw' }}
      animate={{ x: '0vw' }}
      transition={{ duration: 1, type: 'spring' }}
      className='base container'
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          initial={{ x: -2000 }}
          animate={{ x: 0 }}
          className='next'
        >
          <Link to='/toppings'>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{
                scale: 1.2,
                textShadow: '0px 0px 8px rgb(255, 255, 255)',
                boxShadow: '0px 0px 8px rgb(255, 255, 255)',
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
