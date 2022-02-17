import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1, duration: 1.5 } },
};

const buttonVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255, 255, 255)',
    boxShadow: '0px 0px 8px rgb(255, 255, 255)',
    transition:{
      duration: 0.5,
      yoyo: Infinity
    }
  },
};

const Home = () => {
  return (
    <motion.div
      variants={containerVariant}
      initial='hidden'
      animate='visible'
      className='home container'
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to='/base'>
        <motion.button variants={buttonVariant} whileHover='hover'>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
