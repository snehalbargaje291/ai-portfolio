'use client'
import React from "react";
import { motion } from "framer-motion";

// Define the waving animation
const waveAnimation = {
  animate: {
    rotate: [0, -5, 5, -5, 5, 0],
    transition: {
      rotate: {
        repeat: Infinity,
        duration: 1,
        ease: "easeInOut",
      },
    },
  },
};

function WavingHand() {
  return (
    <motion.div
      className="text-xl inline-block font-semibold tracking-tight md:text-4xl"
      variants={waveAnimation}
      animate="animate"
    >
      👋
    </motion.div>
  );
}

export default WavingHand;
