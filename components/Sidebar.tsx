import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  User, 
  FolderOpen, 
  Award, 
  Code2,
  Mail, 
  FileText,
  Github,
  Linkedin,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onExpandChange?: (isExpanded: boolean) => void;
  isMobile: boolean;
  isExpanded: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeSection, 
  onNavigate, 
  onExpandChange, 
  isMobile, 
  isExpanded 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleExpandChange = (expanded: boolean) => {
    onExpandChange?.(expanded);
  };

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
  link.href = '/Shelvaaathithyan_Resume.pdf'; // Path to the file inside public/
  link.download = 'Shelvaaathithyan_Resume.pdf';
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

  const navigationItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: Github, 
      url: 'https://github.com/shelvaaathithyan',
      color: 'hover:text-gray-300 hover:bg-gray-800/20'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://linkedin.com/in/shelvaaathithyan',
      color: 'hover:text-blue-400 hover:bg-blue-400/10'
    },
    { 
      name: 'LeetCode', 
      icon: Code2, 
      url: 'https://leetcode.com/u/shelvaleet',
      color: 'hover:text-orange-400 hover:bg-orange-400/10'
    },
  ];

  // Mobile Hamburger Menu
  if (isMobile) {
    return (
      <>
        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => handleExpandChange(!isExpanded)}
          className="fixed top-4 left-4 z-50 w-12 h-12 bg-sidebar border border-sidebar-border rounded-lg flex items-center justify-center text-sidebar-foreground shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-5 w-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Sidebar Drawer */}
        <AnimatePresence>
          {isExpanded && (
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 top-0 h-screen w-72 bg-sidebar border-r border-sidebar-border z-50 flex flex-col shadow-2xl"
            >
              {/* Mobile Header */}
              <div className="p-6 border-b border-sidebar-border">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-lg font-medium text-primary">S</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-base font-medium text-sidebar-foreground">Shelvaaathithyan VK</h3>
                    <p className="text-sm text-sidebar-foreground/60">AI/ML Developer</p>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 py-6">
                <div className="space-y-2 px-4">
                  {navigationItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => onNavigate(item.id)}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full flex items-center px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                        activeSection === item.id
                          ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-sm'
                          : 'text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent'
                      }`}
                    >
                      <item.icon className="h-5 w-5 mr-4" />
                      <span className="font-medium">{item.label}</span>
                    </motion.button>
                  ))}
                </div>
              </nav>

              {/* Mobile Resume Button */}
              <div className="p-4">
                <motion.button
                  onClick={handleResumeDownload}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center px-4 py-3 bg-sidebar-primary text-sidebar-primary-foreground rounded-xl hover:bg-sidebar-primary/90 transition-all duration-300 shadow-lg"
                >
                  <FileText className="h-5 w-5 mr-3" />
                  <span className="font-medium">Download Resume</span>
                  <ExternalLink className="h-4 w-4 ml-2" />
                </motion.button>
              </div>

              {/* Mobile Social Links */}
              <div className="p-4 border-t border-sidebar-border">
                <h4 className="text-xs font-medium text-sidebar-foreground/50 tracking-wide uppercase mb-3">
                  Connect
                </h4>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-xl bg-sidebar-accent text-sidebar-foreground/70 transition-all duration-200 ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Desktop Sidebar
  const shouldExpand = isExpanded || isHovered;

  return (
    <>
      <motion.aside
        initial={{ width: 80 }}
        animate={{ width: shouldExpand ? 260 : 80 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border z-50 flex flex-col overflow-hidden shadow-xl"
      >
        {/* Desktop Header */}
        <motion.div className="p-4 border-b border-sidebar-border flex items-center">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-medium text-primary">S</span>
          </div>
          
          <AnimatePresence>
            {shouldExpand && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="ml-3 overflow-hidden"
              >
                <h3 className="text-sm font-medium text-sidebar-foreground whitespace-nowrap">Shelvaaathithyan VK</h3>
                <p className="text-xs text-sidebar-foreground/60 whitespace-nowrap">AI/ML Developer</p>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {shouldExpand && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleExpandChange(false)}
                className="ml-auto p-1 rounded-md hover:bg-sidebar-accent transition-colors"
              >
                <ChevronLeft className="h-4 w-4 text-sidebar-foreground/60" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="flex-1 py-4">
          <div className="space-y-1 px-2">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                whileHover={{ x: 6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full group relative flex items-center px-3 py-2.5 rounded-lg text-left transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-sm'
                    : 'text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent'
                }`}
              >
                <div className="flex-shrink-0 flex items-center justify-center w-5 h-5">
                  <item.icon className="h-5 w-5" />
                </div>
                
                <AnimatePresence>
                  {shouldExpand && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2, delay: 0.05 }}
                      className="ml-3 font-medium whitespace-nowrap text-sm"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>

                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute right-2 w-1 h-6 bg-sidebar-primary-foreground rounded-full"
                  />
                )}

                {!shouldExpand && (
                  <motion.div
                    initial={{ opacity: 0, x: -10, scale: 0.9 }}
                    whileHover={{ opacity: 1, x: 0, scale: 1 }}
                    className="absolute left-full ml-2 px-2 py-1 bg-sidebar-foreground text-sidebar text-xs rounded-md whitespace-nowrap pointer-events-none z-50"
                  >
                    {item.label}
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </nav>

        {/* Desktop Resume Download */}
        <div className="px-2 pb-4">
          <motion.button
            onClick={handleResumeDownload}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center px-3 py-2.5 bg-sidebar-primary text-sidebar-primary-foreground rounded-lg hover:bg-sidebar-primary/90 transition-all duration-300 shadow-lg relative group"
          >
            <FileText className="h-5 w-5 flex-shrink-0" />
            
            <AnimatePresence>
              {shouldExpand && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2, delay: 0.05 }}
                  className="ml-2 font-medium whitespace-nowrap text-sm"
                >
                  Resume
                </motion.span>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {shouldExpand && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="ml-auto"
                >
                  <ExternalLink className="h-4 w-4" />
                </motion.div>
              )}
            </AnimatePresence>

            {!shouldExpand && (
              <motion.div
                initial={{ opacity: 0, x: -10, scale: 0.9 }}
                whileHover={{ opacity: 1, x: 0, scale: 1 }}
                className="absolute left-full ml-2 px-2 py-1 bg-sidebar-foreground text-sidebar text-xs rounded-md whitespace-nowrap pointer-events-none z-50"
              >
                Download Resume
              </motion.div>
            )}
          </motion.button>
        </div>

        {/* Desktop Social Links */}
        <div className="px-2 pb-4 border-t border-sidebar-border pt-4">
          <AnimatePresence>
            {shouldExpand ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="space-y-2"
              >
                <h4 className="text-xs font-medium text-sidebar-foreground/50 tracking-wide uppercase px-2">
                  Connect
                </h4>
                <div className="grid grid-cols-3 gap-1">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-2 rounded-lg bg-sidebar-accent text-sidebar-foreground/70 transition-all duration-200 flex items-center justify-center ${social.color}`}
                    >
                      <social.icon className="h-4 w-4" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col space-y-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, x: 2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-lg text-sidebar-foreground/70 hover:text-sidebar-foreground transition-all duration-200 flex items-center justify-center relative group ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                    
                    <motion.div
                      initial={{ opacity: 0, x: -10, scale: 0.9 }}
                      whileHover={{ opacity: 1, x: 0, scale: 1 }}
                      className="absolute left-full ml-2 px-2 py-1 bg-sidebar-foreground text-sidebar text-xs rounded-md whitespace-nowrap pointer-events-none z-50"
                    >
                      {social.name}
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Expand Button */}
        {!shouldExpand && (
          <motion.button
            onClick={() => handleExpandChange(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-4 -right-3 w-6 h-6 bg-sidebar border border-sidebar-border rounded-full flex items-center justify-center text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors shadow-lg"
          >
            <ChevronRight className="h-3 w-3" />
          </motion.button>
        )}
      </motion.aside>
    </>
  );
};

export default Sidebar;
