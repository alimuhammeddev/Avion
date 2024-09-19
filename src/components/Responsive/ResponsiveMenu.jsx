import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom';

const ResponsiveMenu = ({open}) => {
  return (
    <AnimatePresence mode='wait'>
        {
            open && (
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.3 }}
                    className='absolute top-20 left-0 w-full h-screen z-20'
                >
                    <div className='bg-[#2A254B] text-[#ffffff] py-10 m-6 rounded-3xl'>
                        <ul className='flex flex-col justify-center items-center gap-10'>
                            <Link to="/">
                                <li>Home</li>
                            </Link>
                            <Link to="/about">
                                <li>About us</li>
                            </Link>
                            <Link to="/product">
                                <li>Product listing</li>
                            </Link>
                            <Link to="/contact">
                                <li>Contact us</li>
                            </Link>
                        </ul>
                    </div>
                </motion.div>

            )}
    </AnimatePresence>
  )
};

export default ResponsiveMenu