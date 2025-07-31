import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Building, Users, Trophy, Award, DollarSign, Plane, Calendar, MapPin, Clock, Globe, Smartphone, Lightbulb, Target } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const timelineItems = [
    {
      type: "experience",
      title: "Web Technology Training",
      organization: "KitKat Software Solutions",
      period: "7 Days",
      location: "Training Program",
      description: "Completed intensive web technology training program focusing on fundamental web development skills including HTML, CSS, and JavaScript.",
      highlights: [
        "Learned HTML5 semantic elements and structure",
        "Mastered CSS3 styling, flexbox, and grid layouts",
        "Gained proficiency in JavaScript fundamentals and DOM manipulation",
        "Built responsive web pages from scratch"
      ],
      icon: Globe,
      color: "blue"
    },
    {
      type: "achievement",
      title: "1st Place - State Level Project Expo",
      organization: "State Education Board",
      period: "2024",
      location: "Tamil Nadu, India",
      description: "Won first place in state level project expo and advanced to national level competition where achieved 7th position among top participants nationwide.",
      highlights: [
        "Secured 1st position at state level project expo",
        "Selected for national level project expo competition",
        "Achieved 7th position in national level competition",
        "Project recognized for innovation and technical excellence"
      ],
      icon: Trophy,
      color: "yellow"
    },
    {
      type: "experience",
      title: "Mobile App Development Training",
      organization: "Freelancer League",
      period: "Training Course",
      location: "Online",
      description: "Comprehensive training program covering mobile app development using modern tools including Firebase integration, Kodular for low-code development, and Android Studio.",
      highlights: [
        "Mastered Firebase backend integration and real-time database",
        "Learned low-code app development using Kodular platform",
        "Gained proficiency in Android Studio for native app development",
        "Built complete mobile applications from design to deployment"
      ],
      icon: Smartphone,
      color: "green"
    },
    {
      type: "achievement",
      title: "2nd Place - IWMA Competition",
      organization: "Industrial Waste Management Association",
      period: "2024",
      location: "PSG College of Technology",
      description: "Secured 2nd place in Industrial Waste Management Association competition held at PSG College of Technology with a cash prize of Rs.10,000.",
      highlights: [
        "Achieved 2nd position among numerous participants",
        "Awarded cash prize of Rs.10,000 for outstanding performance",
        "Project focused on innovative waste management solutions",
        "Recognized for technical innovation and practical implementation"
      ],
      icon: DollarSign,
      color: "emerald"
    },
    {
      type: "achievement",
      title: "Achievement Award",
      organization: "PSG Polytechnic College",
      period: "Diploma Period",
      location: "Academic Excellence",
      description: "Received Achievement Award during diploma period at PSG Polytechnic College for excelling in academics and outstanding performance in co-curricular and extra-curricular activities.",
      highlights: [
        "Recognized for consistent academic excellence throughout diploma",
        "Outstanding performance in co-curricular activities",
        "Exceptional contribution to extra-curricular programs",
        "Demonstrated leadership and all-round development"
      ],
      icon: Award,
      color: "purple"
    },
    {
      type: "achievement",
      title: "Ideathon-Hackathon Winner",
      organization: "SNS College of Engineering",
      period: "2024",
      location: "Competition",
      description: "Won Ideathon-Hackathon conducted by SNS College of Engineering and earned an opportunity to visit Singapore as part of the prize recognition.",
      highlights: [
        "Emerged winner in competitive Ideathon-Hackathon event",
        "Demonstrated exceptional problem-solving and innovation skills",
        "Earned prestigious opportunity to visit Singapore",
        "Recognized for creative thinking and technical implementation"
      ],
      icon: Lightbulb,
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
      yellow: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/20" },
      green: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20" },
      emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
      purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20" },
      indigo: { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/20" }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground mb-4"
          >
            Experience & Achievements
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-px bg-primary mx-auto mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A timeline of my professional journey, academic achievements, and recognition in the field of technology.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border"></div>

          {/* Timeline Items */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8 sm:space-y-10 lg:space-y-12"
          >
            {timelineItems.map((item, index) => {
              const colors = getColorClasses(item.color);
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start space-x-6"
                >
                  {/* Timeline Node */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`relative z-10 w-16 h-16 ${colors.bg} ${colors.border} border-2 rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <item.icon className={`h-6 w-6 ${colors.text}`} />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex-1"
                  >
                    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          <div className="space-y-2">
                            <CardTitle className="text-xl text-foreground">
                              {item.title}
                            </CardTitle>
                            <CardDescription className="text-primary font-medium">
                              {item.organization}
                            </CardDescription>
                          </div>
                          
                          <div className="flex flex-col sm:items-end space-y-2">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-2" />
                              {item.period}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4 mr-2" />
                              {item.location}
                            </div>
                          </div>
                        </div>

                        {/* Type Badge */}
                        <Badge 
                          variant={item.type === 'experience' ? 'default' : 'secondary'}
                          className="w-fit capitalize"
                        >
                          {item.type}
                        </Badge>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-3">
                          <h4 className="text-sm font-medium text-foreground">Key Highlights:</h4>
                          <ul className="space-y-2.5">
                            {item.highlights.map((highlight, highlightIndex) => (
                              <motion.li
                                key={highlightIndex}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: highlightIndex * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start text-sm text-foreground/80"
                              >
                                <div className="w-2 h-2 bg-green-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                                <span>{highlight}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-12 lg:mt-16"
        >
          {[
            { label: "Training Programs", value: "3", icon: Clock },
            { label: "Major Awards", value: "5", icon: Trophy },
            { label: "Competition Wins", value: "4", icon: Target },
            { label: "Prize Money", value: "₹10K", icon: DollarSign }
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

export default ExperienceSection;