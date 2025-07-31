import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingPage from './components/LoadingPage';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Set dark theme
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.style.margin = '0';
    document.body.style.padding = '0';
  }, []);

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Track active section based on scroll
  useEffect(() => {
    if (isLoading) return;

    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'achievements', 'skills', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close sidebar on mobile after navigation
    if (isMobile) {
      setIsSidebarExpanded(false);
    }
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="flex min-h-screen bg-background text-foreground relative">
      {/* Sidebar */}
      <Sidebar 
        activeSection={activeSection} 
        onNavigate={scrollToSection}
        onExpandChange={setIsSidebarExpanded}
        isMobile={isMobile}
        isExpanded={isSidebarExpanded}
      />

      {/* Main Content with Responsive Margin */}
      <motion.main
        initial={{ opacity: 0, x: 50 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          marginLeft: isMobile ? '0' : (isSidebarExpanded ? '260px' : '80px')
        }}
        transition={{ 
          opacity: { duration: 0.8, ease: "easeOut" },
          x: { duration: 0.8, ease: "easeOut" },
          marginLeft: { duration: 0.3, ease: "easeInOut" }
        }}
        className="flex-1 relative w-full"
      >
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <AchievementsSection />
        <SkillsSection />
        <ContactSection />
      </motion.main>

      {/* Mobile Sidebar Backdrop */}
      <AnimatePresence>
        {isSidebarExpanded && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsSidebarExpanded(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}