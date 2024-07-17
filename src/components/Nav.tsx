import { Package } from '@phosphor-icons/react/dist/ssr';
import { Flex } from 'antd';
import React from 'react';
import { motion } from 'framer-motion';

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const navTransition = {
  type: 'spring',
  stiffness: 50,
  delay: 0.2,
};

export default function Nav() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={navVariants}
      transition={navTransition}
    >
      <Flex align="center" className="px-16 py-8 bg-orange-500">
        <Package size={42} />
        <p className=" mb-0 ml-4 font-extrabold font-mono sm:text-4xl text-2xl">
          Cek Paket
        </p>
      </Flex>
    </motion.div>
  );
}
