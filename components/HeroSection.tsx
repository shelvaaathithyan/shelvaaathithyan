import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Download, Mail, MapPin, Calendar } from 'lucide-react';

const HeroSection: React.FC = () => {
  const greeting = "Hello there";
  const nameIntro = "I'm";
  const name = "Shelvaaathithyan VK";
  const title = "AI/ML Developer & Problem Solver";

  // Function to handle resume download
  const handleResumeDownload = () => {
    try {
      const resumeContent = `
SHELVAAATHITHYAN VK
AI/ML Developer & Problem Solver

EDUCATION
• BE Computer Science Engineering - AI & ML
  PSG College of Technology (2024-2027)
• Diploma in Computer Engineering  
  PSG Polytechnic College (2021-2024)

PROJECTS
• Inventory Management System - Android application with Firebase backend
• ApartiBot - IoT Delivery Robot with computer vision capabilities
• Advanced Home Security System - Smart IoT security solution
• 3D Gengar Model - Professional 3D modeling in Blender

TECHNICAL SKILLS
Programming: Java (3.5/5), Python (2/5), C (3/5)
Technologies: Firebase (3/5), MongoDB (2/5), MySQL (3/5)
Tools: Power BI (3/5), Blender (3/5), Git (3/5), Android Studio (3.5/5)

CONTACT
Location: Tamil Nadu, India
Email: Available on request
GitHub: github.com/shelvaaathithyan
LinkedIn: Available on request
      `;

      const blob = new Blob([resumeContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Shelvaaathithyan_VK_Resume.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      console.log('Resume downloaded successfully!');
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Error downloading resume. Please try again.');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-start relative bg-background overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-primary/10 rounded-full"
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.4, 0],
              scale: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100 + 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-20 relative z-10 w-full">
        <div className="max-w-5xl">
          {/* Modern Typography Layout - Responsive */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-4 sm:space-y-6 lg:space-y-8"
          >
            {/* Hello there. */}
            <motion.div variants={itemVariants} className="flex items-center">
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                {greeting}
                <span className="text-accent-orange">.</span>
              </h1>
            </motion.div>

            {/* I'm Shelvaaathithyan VK */}
            <motion.div variants={itemVariants} className="space-y-1 sm:space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-3 space-y-1 sm:space-y-0">
                <span className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground">
                  {nameIntro}
                </span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-tight break-words">
                  {name}
                </h2>
              </div>
              
              {/* Accent line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '120px' }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                className="h-1 bg-accent-orange rounded-full"
              />
            </motion.div>

            {/* Professional Title */}
            <motion.div variants={itemVariants} className="pt-2 sm:pt-4">
              <h3 className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-muted-foreground">
                {title}
              </h3>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mt-8 sm:mt-10 lg:mt-12 max-w-4xl"
          >
            <motion.p
              variants={itemVariants}
              className="font-primary text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-10"
            >
              I'm a Computer Science student specializing in AI/ML at PSG College of Technology, 
              passionate about building intelligent systems that solve real-world problems. 
              I love exploring machine learning, developing mobile applications, and creating IoT solutions.
            </motion.p>

            {/* Status Indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 lg:gap-8 text-sm text-muted-foreground mb-8 sm:mb-10 lg:mb-12"
            >
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent-orange flex-shrink-0" />
                <span className="font-primary">Tamil Nadu, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-accent-orange flex-shrink-0" />
                <span className="font-primary">Available for opportunities</span>
              </div>
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"
                />
                <span className="text-green-400 font-primary">Open to work</span>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg"
                className="font-primary bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base rounded-lg shadow-sm hover:shadow-md transition-all duration-200 w-full sm:w-auto"
                onClick={handleResumeDownload}
              >
                <Download className="mr-2 sm:mr-3 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Button 
                variant="outline"
                size="lg"
                className="font-primary border-border/60 text-foreground hover:bg-accent/50 hover:border-primary/40 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base rounded-lg w-full sm:w-auto"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Mail className="mr-2 sm:mr-3 h-4 w-4" />
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;