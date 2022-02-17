import React from 'react';
import { Link } from 'react-router-dom';
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
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut',
    },
  },
};

const basesVariants = {
  hover: {
    scale: 1.3,
    originX: 0,
    color: '#f8e112',
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
};

const nextContainerVariants = {
  hidden: { x: '-200vw' },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      type: 'spring',
      stiffness: 100,
    },
  },
};

const nextButtonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255, 255, 255)',
    boxShadow: '0px 0px 8px rgb(255, 255, 255)',
    transition: {
      duration: 0.5,
      yoyo: Infinity,
    },
  },
};

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    // initial={{ x: '100vw' }}
    // animate={{ x: '0vw' }}
    //variants are used to replace the above initial and animate
    //no need to apply transition since its embedded in the containerVariants

    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='base container'
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              variants={basesVariants}
              whileHover='hover'
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div variants={nextContainerVariants} className='next'>
          <Link to='/toppings'>
            <motion.button variants={nextButtonVariants} whileHover='hover'>
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
