import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-[url('/hero-banner.png')] text-white flex items-center justify-center min-h-screen bg-cover bg-center ">
      <motion.div
        className="mx-auto container text-center backdrop-blur-sm absolute bottom-52"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6 px-5"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          Welcome to Prime FIT
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 px-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
        >
          "Your Prime Fitness Journey Starts Here. Train Hard, Stay Fit, Be Strong."
        </motion.p>
        <motion.button
          href="#about"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
        >
          Explore Exercises
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
