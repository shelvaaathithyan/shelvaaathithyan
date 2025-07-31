import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Trophy, Award, DollarSign, Plane, Calendar, MapPin, Globe, Lightbulb, Target, CheckCircle } from 'lucide-react';

const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      title: "Ideathon-Hackathon Winner",
      description: "Won Ideathon-Hackathon conducted by SNS College of Engineering and earned an opportunity to visit Singapore as part of the prize recognition.",
      icon: Lightbulb,
      color: "indigo",
      year: "2017-2018",
      date: "Late 2017 to Mid 2018",
      category: "International Recognition",
      location: "SNS College of Engineering"
    },
    {
      title: "1st Place - State Level Project Expo",
      description: "Won first place in state level project expo and advanced to national level competition where achieved 7th position among top participants nationwide.",
      icon: Trophy,
      color: "yellow",
      year: "2018",
      date: "Late 2018",
      category: "Competition Victory",
      location: "Tamil Nadu, India"
    },
    {
      title: "2nd Place - IWMA Competition",
      description: "Secured 2nd place in Industrial Waste Management Association competition held at PSG College of Technology with a cash prize of Rs.10,000.",
      icon: DollarSign,
      color: "emerald",
      year: "2019",
      date: "Mid 2019",
      category: "Prize Money",
      location: "PSG College of Technology"
    },
    {
      title: "Mobile App Development Training", 
      description: "Comprehensive training program covering mobile app development using modern tools including Firebase integration, Kodular for low-code development, and Android Studio.",
      icon: Globe,
      color: "green",
      year: "2023",
      date: "Late 2023",
      category: "Professional Training",
      location: "Freelancer League"
    },
    {
      title: "Achievement Award",
      description: "Received Achievement Award during diploma period at PSG Polytechnic College for excelling in academics and outstanding performance in co-curricular and extra-curricular activities.",
      icon: Award,
      color: "purple",
      year: "2024",
      date: "Mid 2024",
      category: "Academic Excellence",
      location: "PSG Polytechnic College"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      yellow: { 
        bg: "bg-yellow-500/20", 
        text: "text-yellow-400", 
        border: "border-yellow-500/30",
        glow: "shadow-yellow-500/20"
      },
      emerald: { 
        bg: "bg-emerald-500/20", 
        text: "text-emerald-400", 
        border: "border-emerald-500/30",
        glow: "shadow-emerald-500/20"
      },
      indigo: { 
        bg: "bg-indigo-500/20", 
        text: "text-indigo-400", 
        border: "border-indigo-500/30",
        glow: "shadow-indigo-500/20"
      },
      purple: { 
        bg: "bg-purple-500/20", 
        text: "text-purple-400", 
        border: "border-purple-500/30",
        glow: "shadow-purple-500/20"
      },
      green: { 
        bg: "bg-green-500/20", 
        text: "text-green-400", 
        border: "border-green-500/30",
        glow: "shadow-green-500/20"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.yellow;
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
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1.2, ease: "easeInOut" }
    }
  };

  return (
    <section id="achievements" className="py-12 sm:py-16 lg:py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground mb-4"
          >
            Achievement & Experience
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-px bg-primary mx-auto mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            A timeline journey showcasing key milestones, awards, and recognitions that mark my growth in technology and innovation.
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Main Timeline Line */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={lineVariants}
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/60 to-primary/20 transform origin-top"
          />

          {/* Achievement Items */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8 lg:space-y-12"
          >
            {achievements.map((achievement, index) => {
              const colors = getColorClasses(achievement.color);
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start"
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className={`w-16 h-16 rounded-full ${colors.bg} ${colors.border} border-2 flex items-center justify-center shadow-lg ${colors.glow}`}
                    >
                      <achievement.icon className={`h-7 w-7 ${colors.text}`} />
                    </motion.div>
                    
                    {/* Connection Line to Content */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                      className="absolute top-8 left-16 w-8 h-0.5 bg-border transform origin-left"
                    />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.02, 
                      x: 5,
                      transition: { duration: 0.3 }
                    }}
                    className="ml-8 flex-1 bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 relative group"
                  >
                    {/* Date Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className="absolute -top-3 left-6"
                    >
                      <Badge 
                        variant="secondary"
                        className={`${colors.bg} ${colors.text} border-0 shadow-md text-xs px-3 py-1`}
                      >
                        <Calendar className="h-3 w-3 mr-1" />
                        {achievement.date}
                      </Badge>
                    </motion.div>

                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-3 mt-2">
                      <Badge 
                        variant="outline"
                        className="text-xs border-primary/30 text-primary bg-primary/5"
                      >
                        {achievement.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span className="text-xs">{achievement.location}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                      {achievement.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                      {achievement.description}
                    </p>

                    {/* Completion Indicator */}
                    <div className="flex items-center text-sm text-primary">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span className="font-medium">Completed</span>
                    </div>

                    {/* Subtle glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* End Marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="relative flex items-center justify-center mt-8"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <span className="ml-4 text-sm text-muted-foreground font-medium">Journey Continues...</span>
          </motion.div>
        </div>

        {/* Achievement Statistics */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { label: "Major Awards", value: "5", icon: Trophy },
            { label: "Prize Money", value: "₹10K", icon: DollarSign },
            { label: "Competition Wins", value: "3", icon: Target },
            { label: "International Tour", value: "1", icon: Plane }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-light text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;