import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='home container'
    >
      <motion.h2
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
          animate={{  opacity: 1 }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to='/base'>
        <motion.button
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
          animate={{  opacity: 1 }}
        > 
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
