import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 sm:py-16 lg:py-20 bg-muted/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 sm:space-y-6"
        >


          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center items-center space-x-3 sm:space-x-4 text-muted-foreground"
          >
            <span className="text-sm sm:text-base">Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 fill-current" />
            </motion.div>
            <span className="text-sm sm:text-base">using</span>
            <Code className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            <span className="text-sm sm:text-base">and</span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Coffee className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600" />
            </motion.div>
          </motion.div>

          {/* Animated Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
            className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent max-w-md mx-auto"
          />

          {/* Copyright and Credits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-2 sm:space-y-3"
          >
            <p className="text-xs sm:text-sm text-muted-foreground/70">
              © {currentYear} Shelvaaathithyan VK. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/50">
              Built with React, TypeScript, Tailwind CSS & Framer Motion
            </p>
          </motion.div>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/20 rounded-full"
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 4 + 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: '100%',
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;