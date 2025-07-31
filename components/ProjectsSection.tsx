import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Smartphone, Bot, Shield, Box, ExternalLink, Github, Star, Calendar, Code2, Coffee, Activity, Trash2 } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Smart Snacky - Vending Machine",
      description: "An interactive educational vending machine developed using Raspberry Pi that dispenses snacks as rewards for answering questions, designed to create interest among students towards learning.",
      technologies: ["Raspberry Pi", "Python", "Hardware", "Sensors", "IoT"],
      icon: Coffee,
      gradient: "from-amber-500 to-orange-600",
      github: "https://github.com/shelvaaathithyan/Smart_Snacky",
      featured: false,
      status: "Completed",
      year: "2018"
    },
    {
      title: "ApartiBot - IoT Delivery Robot",
      description: "Autonomous delivery robot system designed for apartment complexes with advanced navigation and mobile app integration.",
      technologies: ["Raspberry Pi", "Python", "Navigation", "Mobile App", "IoT"],
      icon: Bot,
      gradient: "from-blue-500 to-cyan-600",
      github: "https://github.com/shelvaaathithyan/ApartiBot",
      featured: true,
      status: "Completed",
      year: "2024"
    },
    {
      title: "Machine Health Checker",
      description: "A comprehensive ML-powered solution for diagnosing and resolving machinery issues using Decision Tree Classifier with Tkinter GUI for efficient troubleshooting and maintenance.",
      technologies: ["Python", "Machine Learning", "Tkinter", "Decision Tree", "Data Analysis"],
      icon: Activity,
      gradient: "from-green-500 to-emerald-600",
      github: "https://github.com/shelvaaathithyan/Machine_Health_Checker",
      featured: false,
      status: "Completed",
      year: "2023"
    },
    {
      title: "Smart Bin - IoT Waste Management",
      description: "IoT-based smart waste bin for smart cities featuring automatic cap opening with ultrasonic sensors, level indicators, color-coded lights, and SMS notifications to municipal corporations.",
      technologies: ["Arduino", "Ultrasonic Sensors", "IoT", "ESP8266", "SMS Integration"],
      icon: Trash2,
      gradient: "from-emerald-500 to-teal-600",
      github: "https://github.com/shelvaaathithyan/SmartBin",
      featured: false,
      status: "Completed",
      year: "2019"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4 sm:mb-6"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-px bg-primary mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            A showcase of my technical skills and problem-solving approach through real-world projects 
            that demonstrate innovation, creativity, and technical excellence.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group"
            >
              <Card className="h-full bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden hover:shadow-xl">
                {/* Compact Header */}
                <div className="relative p-6 pb-4">
                  {/* Top badges */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex space-x-2">
                      {project.featured && (
                        <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                          <Star className="h-3 w-3 mr-1 fill-current" />
                          Featured
                        </Badge>
                      )}
                      <Badge 
                        variant="outline"
                        className={`border-border/50 text-muted-foreground ${
                          project.status === 'Completed' 
                            ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                            : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  {/* Icon and Title */}
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} p-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                <CardContent className="pt-0 px-6 pb-6">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-xs px-2 py-1 bg-muted/30 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 border-0"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge
                        variant="secondary"
                        className="text-xs px-2 py-1 bg-muted/20 text-muted-foreground/60 border-0"
                      >
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Action Button - Only Code button now */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-border/50 text-muted-foreground hover:bg-accent hover:text-foreground hover:border-primary/30 group/btn h-9"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-3.5 w-3.5 group-hover/btn:rotate-12 transition-transform" />
                      View Code
                    </a>
                  </Button>
                </CardContent>

                {/* Subtle hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mt-12"
        >
          <motion.div variants={itemVariants}>
            <div className="max-w-md mx-auto p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">Explore More Projects</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Discover additional projects and contributions on my GitHub profile
              </p>
              <motion.div
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  className="border-border/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary group w-full"
                  asChild
                >
                  <a href="https://github.com/shelvaaathithyan" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    View GitHub Profile
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
