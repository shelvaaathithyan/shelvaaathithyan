import React from 'react';
import { motion } from 'framer-motion';

const LoadingPage: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      {/* Geometric Loader */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Outer rotating ring */}
        <motion.div
          className="w-16 h-16 border-2 border-white/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner rotating squares */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <div className="relative w-8 h-8">
            <motion.div
              className="absolute w-2 h-2 bg-white rounded-sm"
              style={{ top: 0, left: 0 }}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="absolute w-2 h-2 bg-white rounded-sm"
              style={{ top: 0, right: 0 }}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.25 }}
            />
            <motion.div
              className="absolute w-2 h-2 bg-white rounded-sm"
              style={{ bottom: 0, right: 0 }}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute w-2 h-2 bg-white rounded-sm"
              style={{ bottom: 0, left: 0 }}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.75 }}
            />
          </div>
        </motion.div>

        {/* Center dot */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            className="w-1 h-1 bg-white rounded-full"
            animate={{ 
              scale: [0.5, 1.5, 0.5],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingPage;