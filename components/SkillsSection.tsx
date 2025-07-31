import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Code2, Database, Wrench, Star } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      gradient: "from-blue-500 to-cyan-600",
      skills: [
        { name: "Java", rating: 3.5 },
        { name: "Python", rating: 2 },
        { name: "C", rating: 3 },
      ]
    },
    {
      title: "Technologies",
      icon: Database,
      gradient: "from-emerald-500 to-teal-600",
      skills: [
        { name: "Firebase", rating: 3 },
        { name: "MongoDB", rating: 2 },
        { name: "MySQL", rating: 3 },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      gradient: "from-purple-500 to-indigo-600",
      skills: [
        { name: "Power BI", rating: 3 },
        { name: "Blender", rating: 3 },
        { name: "Git", rating: 3 },
        { name: "Android Studio", rating: 3.5 },
      ]
    }
  ];

  const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <motion.div
          key={i}
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ delay: i * 0.1, duration: 0.3 }}
          viewport={{ once: true }}
        >
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        </motion.div>
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <motion.div
          key="half"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ delay: fullStars * 0.1, duration: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Star className="h-4 w-4 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          </div>
        </motion.div>
      );
    }

    // Empty stars (5 total stars now)
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <motion.div
          key={`empty-${i}`}
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ delay: (fullStars + (hasHalfStar ? 1 : 0) + i) * 0.1, duration: 0.3 }}
          viewport={{ once: true }}
        >
          <Star className="h-4 w-4 text-gray-300" />
        </motion.div>
      );
    }

    return <div className="flex items-center space-x-1">{stars}</div>;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-background">
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
            <Code2 className="h-6 w-6 text-primary" />
            <span className="text-sm uppercase tracking-widest text-muted-foreground">Technical Skills</span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4 sm:mb-6"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-px bg-primary mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive overview of my technical skills across programming languages, 
            technologies, and development tools rated on a 5-star scale based on proficiency and experience.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                {/* Category Header */}
                <div className="relative h-32 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-90`} />
                  
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute bg-white rounded-full"
                        style={{
                          width: Math.random() * 30 + 10,
                          height: Math.random() * 30 + 10,
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                          duration: Math.random() * 2 + 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Category Icon and Title */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30 mb-3"
                    >
                      <category.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-medium text-white">{category.title}</h3>
                  </div>
                </div>

                {/* Skills List */}
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 4 }}
                        className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-200"
                      >
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <div className="flex items-center space-x-2">
                          <StarRating rating={skill.rating} />
                          <span className="text-sm text-muted-foreground ml-2">
                            {skill.rating}/5
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-10 sm:mt-12 lg:mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-foreground mb-4">Continuous Learning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm constantly expanding my skill set by learning new technologies and staying updated 
                  with the latest trends in AI/ML, mobile development, and software engineering. 
                  My goal is to achieve 5-star proficiency in emerging technologies that shape the future of tech.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;