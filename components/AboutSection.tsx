import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, MapPin, Calendar, Award, Target, User, Sparkles } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { label: 'Years of Learning', value: '3+', icon: Calendar },
    { label: 'Projects Completed', value: '15+', icon: Target },
    { label: 'Technologies', value: '10+', icon: GraduationCap },
    { label: 'Awards Won', value: '5', icon: Award },
  ];

  const education = [
    {
      degree: 'BE CSE (AI&ML)',
      institution: 'PSG College of Technology',
      period: '2024 - 2027',
      status: 'Current',
      description: 'Specializing in Artificial Intelligence and Machine Learning'
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'PSG Polytechnic College',
      period: '2021 - 2024',
      status: 'Completed',
      description: 'Strong foundation in computer science fundamentals'
    }
  ];

  const skills = [
    'Machine Learning', 'Python', 'Java', 'Android Development',
    'IoT Systems', 'Data Structures', 'Algorithms', 'Firebase',
    'Power BI', 'Blender', 'Problem Solving'
  ];



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-10 sm:mb-12 lg:mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 mb-4"
          >
            <User className="h-6 w-6 text-primary" />
            <span className="text-sm uppercase tracking-widest text-muted-foreground">Get to know me</span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4 sm:mb-6"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-px bg-primary mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Discover my journey, skills, and passion for technology as I build innovative solutions 
            that bridge the gap between artificial intelligence and real-world applications.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column - Profile & Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Profile Card */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20"
                  >
                    <span className="text-3xl font-medium text-primary">S</span>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-card"
                    />
                  </motion.div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Shelvaaathithyan VK</h3>
                  <p className="text-muted-foreground mb-6">AI/ML Developer & Problem Solver</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Tamil Nadu, India</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                      <span className="text-sm text-green-500 font-medium">Available for opportunities</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  </motion.div>
                  <div className="text-3xl font-light text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="lg:col-span-2 space-y-10"
          >
            {/* Introduction */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p className="text-lg text-foreground leading-relaxed">
                  I'm a passionate Computer Science student specializing in AI/ML, currently pursuing my degree at 
                  PSG College of Technology. My journey began with a curiosity about how machines can learn and 
                  solve complex problems, which has evolved into a deep love for artificial intelligence and software development.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Through hands-on projects and real-world applications, I've developed expertise in mobile app development, 
                  IoT systems, and machine learning. I believe in creating technology that not only works efficiently but 
                  also makes a meaningful impact on people's lives.
                </p>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-2xl font-medium text-foreground flex items-center">
                <GraduationCap className="h-6 w-6 mr-3 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-foreground text-lg">{edu.degree}</h4>
                        <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                        <Badge variant={edu.status === 'Current' ? 'default' : 'secondary'} className="mt-1">
                          {edu.status}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-2xl font-medium text-foreground flex items-center">
                <Sparkles className="h-6 w-6 mr-3 text-primary" />
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    transition={{ 
                      delay: index * 0.05,
                      hover: { duration: 0.2 }
                    }}
                    viewport={{ once: true }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="bg-muted/50 text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default py-2 px-4"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Current Focus */}
            <motion.div
              variants={itemVariants}
            >
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center">
                    <Target className="h-5 w-5 mr-3 text-primary" />
                    Current Focus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm currently diving deep into advanced machine learning techniques, working on IoT projects, 
                    and exploring the intersection of AI and hardware systems. Always excited to collaborate on innovative projects that push 
                    the boundaries of what's possible with technology.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;