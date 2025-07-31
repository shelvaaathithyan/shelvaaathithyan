import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code, 
  Send, 
  MapPin, 
  Clock, 
  Phone,
  MessageCircle,
  CheckCircle,
  Loader2
} from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/shelvaaathithyan',
      icon: Github,
      color: 'hover:text-gray-400',
      bg: 'hover:bg-gray-500/10'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/shelvaaathithyan',
      icon: Linkedin,
      color: 'hover:text-blue-400',
      bg: 'hover:bg-blue-500/10'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/shelvaleet',
      icon: Code,
      color: 'hover:text-orange-400',
      bg: 'hover:bg-orange-500/10'
    },
    {
      name: 'Email',
      url: 'mailto:shelvaaathithyan@gmail.com',
      icon: Mail,
      color: 'hover:text-green-400',
      bg: 'hover:bg-green-500/10'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shelvaaathithyan@gmail.com',
      href: 'mailto:shelvaaathithyan@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tamil Nadu, India',
      href: null
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours',
      href: null
    },
    {
      icon: Phone,
      label: 'Availability',
      value: 'Mon - Fri, 9 AM - 6 PM',
      href: null
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
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
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Get In Touch
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-px bg-primary mx-auto mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            I'm always excited to discuss new opportunities, collaborate on interesting projects, 
            or simply chat about technology. Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="lg:col-span-2"
          >
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Name</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                        required
                      />
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Tell me about your project or just say hello!"
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground resize-none"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : isSubmitted ? (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-6"
          >
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Connect Online</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      transition={{ 
                        delay: index * 0.1,
                        hover: { duration: 0.2 }
                      }}
                      viewport={{ once: true }}
                      className={`flex items-center space-x-3 p-3 rounded-lg border border-border ${social.bg} transition-all duration-200 text-muted-foreground ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Availability Status */}
            <motion.div variants={itemVariants}>
              <Card className="bg-green-500/10 border-green-500/20">
                <CardContent className="pt-6">
                  <div className="text-center space-y-3">
                    <div className="flex justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div>
                      <p className="font-medium text-green-400">Available for opportunities</p>
                      <p className="text-sm text-green-300/70 mt-1">
                        Currently open to internships, freelance projects, and collaborations
                      </p>
                    </div>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      Ready to work
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mt-16 pt-8 border-t border-border"
        >
          <motion.p 
            variants={itemVariants}
            className="text-muted-foreground"
          >
            © 2024 Shelvaaathithyan V.K. Crafted with passion using React, TypeScript, and modern web technologies.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;