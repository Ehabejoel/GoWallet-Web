import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Mail, ArrowUpRight, Globe, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  // For mobile accordion functionality
  const toggleSection = (title) => {
    if (activeSection === title) {
      setActiveSection(null);
    } else {
      setActiveSection(title);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about", isNew: false },
        { label: "Careers", href: "/careers", isNew: true },
        { label: "Press", href: "/press", isNew: false },
        { label: "Blog", href: "/blog", isNew: false },
        { label: "Contact", href: "/contact", isNew: false }
      ]
    },
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features", isNew: false },
        { label: "How it Works", href: "#how-it-works", isNew: false },
        { label: "Njangie Savings", href: "#njangie", isNew: true },
        { label: "Community", href: "#community", isNew: false },
        { label: "API", href: "/api", isNew: true }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy", isNew: false },
        { label: "Terms of Service", href: "/terms", isNew: false },
        { label: "Security", href: "/security", isNew: false },
        { label: "Compliance", href: "/compliance", isNew: false },
        { label: "Cookies", href: "/cookies", isNew: false }
      ]
    }
  ];

  const socialLinks = [
    { 
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.77,22V14.2h2.6l0.4-3h-3V9.15c0-0.86,0.2-1.45,1.47-1.45h1.57V5.13c-0.27-0.04-1.22-0.12-2.31-0.12 c-2.29,0-3.85,1.4-3.85,3.96v2.21h-2.6v3h2.6V22H18.77z"/>
        </svg>
      ),
      href: "#",
      color: "bg-blue-600"
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.25,5.55c-0.85,0.38-1.76,0.63-2.72,0.75c0.98-0.59,1.73-1.52,2.09-2.63c-0.92,0.54-1.93,0.93-3.01,1.14 c-0.87-0.92-2.1-1.5-3.47-1.5c-2.62,0-4.74,2.13-4.74,4.75c0,0.37,0.04,0.73,0.12,1.08C7.84,8.93,4.68,7.03,2.42,4.17 c-0.41,0.71-0.64,1.53-0.64,2.41c0,1.65,0.84,3.11,2.12,3.96c-0.78-0.02-1.51-0.24-2.15-0.6v0.06c0,2.31,1.64,4.23,3.82,4.67 c-0.4,0.11-0.82,0.17-1.25,0.17c-0.31,0-0.61-0.03-0.9-0.09c0.61,1.89,2.37,3.27,4.45,3.31c-1.63,1.28-3.69,2.04-5.93,2.04 c-0.39,0-0.77-0.02-1.14-0.07c2.11,1.35,4.62,2.14,7.32,2.14c8.78,0,13.59-7.29,13.59-13.59c0-0.21,0-0.41-0.01-0.62 C21.83,7.34,22.62,6.51,23.25,5.55z"/>
        </svg>
      ),
      href: "#",
      color: "bg-sky-500"
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2.16c3.2,0,3.58,0.01,4.85,0.07c1.17,0.05,1.8,0.25,2.23,0.41c0.56,0.22,0.96,0.48,1.38,0.9 c0.42,0.42,0.68,0.82,0.9,1.38c0.16,0.42,0.36,1.06,0.41,2.23c0.06,1.27,0.07,1.65,0.07,4.85s-0.01,3.58-0.07,4.85 c-0.05,1.17-0.25,1.8-0.41,2.23c-0.22,0.56-0.48,0.96-0.9,1.38c-0.42,0.42-0.82,0.68-1.38,0.9c-0.42,0.16-1.06,0.36-2.23,0.41 c-1.27,0.06-1.65,0.07-4.85,0.07s-3.58-0.01-4.85-0.07c-1.17-0.05-1.8-0.25-2.23-0.41c-0.56-0.22-0.96-0.48-1.38-0.9 c-0.42-0.42-0.68-0.82-0.9-1.38c-0.16-0.42-0.36-1.06-0.41-2.23c-0.06-1.27-0.07-1.65-0.07-4.85s0.01-3.58,0.07-4.85 c0.05-1.17,0.25-1.8,0.41-2.23c0.22-0.56,0.48-0.96,0.9-1.38c0.42-0.42,0.82-0.68,1.38-0.9c0.42-0.16,1.06-0.36,2.23-0.41 C8.42,2.17,8.8,2.16,12,2.16 M12,0C8.74,0,8.33,0.01,7.05,0.07C5.78,0.13,4.9,0.33,4.14,0.63c-0.78,0.3-1.44,0.71-2.1,1.37 C1.38,2.66,0.97,3.32,0.67,4.1C0.37,4.86,0.17,5.74,0.11,7.01C0.05,8.29,0.04,8.7,0.04,11.96s0.01,3.67,0.07,4.95 c0.06,1.27,0.26,2.15,0.56,2.91c0.3,0.78,0.71,1.44,1.37,2.1c0.66,0.66,1.32,1.07,2.1,1.37c0.76,0.3,1.64,0.5,2.91,0.56 c1.28,0.06,1.69,0.07,4.95,0.07s3.67-0.01,4.95-0.07c1.27-0.06,2.15-0.26,2.91-0.56c0.78-0.3,1.44-0.71,2.1-1.37 c0.66-0.66,1.07-1.32,1.37-2.1c0.3-0.76,0.5-1.64,0.56-2.91c0.06-1.28,0.07-1.69,0.07-4.95s-0.01-3.67-0.07-4.95 c-0.06-1.27-0.26-2.15-0.56-2.91c-0.3-0.78-0.71-1.44-1.37-2.1c-0.66-0.66-1.32-1.07-2.1-1.37c-0.76-0.3-1.64-0.5-2.91-0.56 C15.67,0.01,15.26,0,12,0L12,0z"/>
          <path d="M12,5.84c-3.4,0-6.16,2.76-6.16,6.16s2.76,6.16,6.16,6.16s6.16-2.76,6.16-6.16S15.4,5.84,12,5.84z M12,16 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,16,12,16z"/>
          <circle cx="18.41" cy="5.59" r="1.44"/>
        </svg>
      ),
      href: "#",
      color: "bg-pink-600"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"/>
        </svg>
      ),
      href: "#",
      color: "bg-blue-700"
    }
  ];

  // Stats for the counter section
  const stats = [
    { value: 1.5, suffix: "M+", label: "Active Users" },
    { value: 120, suffix: "+", label: "Countries" },
    { value: 4.8, suffix: "/5", label: "App Rating" },
    { value: 99.9, suffix: "%", label: "Uptime" }
  ];

  // Number counter animation
  const Counter = ({ value, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      let start = 0;
      const end = parseInt(value);
      const isFloat = value % 1 !== 0;
      const increment = end / 40;
      
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(isFloat ? parseFloat(value) : end);
          clearInterval(timer);
          return;
        }
        setCount(isFloat ? parseFloat(start.toFixed(1)) : Math.floor(start));
      }, duration / 40);
      
      return () => clearInterval(timer);
    }, [value, duration]);
    
    return (
      <span>
        {count}{suffix}
      </span>
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* SVG Wave Background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16 text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-gray-50"
          ></path>
        </svg>
      </div>

      {/* Pre-Footer CTA Section */}
      <div className="bg-gradient-to-b from-gray-50 to-gray-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div 
            className="rounded-3xl bg-gradient-to-r from-green-500 to-blue-600 shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative px-6 py-10 sm:px-12 sm:py-16 md:py-20 md:px-16 lg:px-20">
              {/* Background Patterns */}
              <div className="absolute right-0 bottom-0 opacity-20">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="100" fill="white" fillOpacity="0.2" />
                  <circle cx="100" cy="100" r="75" fill="white" fillOpacity="0.2" />
                  <circle cx="100" cy="100" r="50" fill="white" fillOpacity="0.2" />
                  <circle cx="100" cy="100" r="25" fill="white" fillOpacity="0.2" />
                </svg>
              </div>
              <div className="absolute left-10 top-10 opacity-20">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" fill="white" fillOpacity="0.2" />
                </svg>
              </div>
              
              <div className="grid md:grid-cols-5 gap-8 relative z-10">
                <div className="md:col-span-3 space-y-6">
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Start your financial journey with Gowallet today
                  </motion.h2>
                  <motion.p 
                    className="text-green-50 text-lg max-w-lg" 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Join millions of users transforming how they save, spend, and grow their money with our innovative platform.
                  </motion.p>
                  <motion.div 
                    className="flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <a href="#" className="bg-white text-green-600 hover:bg-green-50 transition px-6 py-3 rounded-lg font-medium flex items-center">
                      <Globe className="w-5 h-5 mr-2" />
                      Open Web App
                    </a>
                    <a href="#" className="bg-black/30 hover:bg-black/40 transition text-white px-6 py-3 rounded-lg font-medium backdrop-blur-sm flex items-center">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Talk to Sales
                    </a>
                  </motion.div>
                </div>
                
                <div className="md:col-span-2">
                  <motion.div 
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-white font-semibold text-lg mb-4">Stay updated</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                        <input
                          type="email" 
                          placeholder="Your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} 
                          className="w-full bg-white text-gray-800 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                          required
                        />
                      </div>
                      <motion.button
                        type="submit"
                        className={`w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 relative overflow-hidden ${
                          isSubmitted ? 'bg-green-700' : ''
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitted ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Subscribed!
                          </span>
                        ) : (
                          'Subscribe to Newsletter'
                        )}
                      </motion.button>
                      <p className="text-white/70 text-xs text-center">
                        We respect your privacy. Unsubscribe anytime.
                      </p>
                    </form>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Stats Counter Section */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-300 via-green-400 to-blue-400 text-transparent bg-clip-text">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gray-900 text-white pt-16 pb-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 pb-8">
            {/* Logo and Description */}
            <motion.div 
              className="md:col-span-2 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a href="/" className="block">
                <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Gowallet
                </span>
              </a>
              <p className="text-gray-400 text-sm max-w-xs">
                Revolutionizing personal and group finance through innovative digital solutions that empower communities worldwide.
              </p>
              
              {/* App Store Buttons */}
              <div className="flex flex-wrap gap-3">
                <a href="#" className="flex items-center bg-gray-800 hover:bg-gray-700 text-white rounded-xl px-4 py-2 transition-all duration-300">                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.0623 16.9035L13.7768 15.1113L17.0623 13.3191C17.3062 13.183 17.3857 12.8789 17.2504 12.634C17.1144 12.3901 16.8103 12.3105 16.5664 12.4453L13.2809 14.2375V10.5391C13.2809 10.2637 13.0582 10.0405 12.7832 10.0405C12.5078 10.0405 12.2842 10.2637 12.2842 10.5391V14.2375L8.9987 12.4453C8.75379 12.3105 8.44971 12.3901 8.31444 12.634C8.17971 12.8789 8.2586 13.183 8.50406 13.3191L11.7896 15.1113L8.50406 16.9035C8.2586 17.0395 8.17971 17.3437 8.31444 17.5885C8.40702 17.7496 8.57028 17.8379 8.73855 17.8379C8.82067 17.8379 8.90379 17.8175 8.9987 17.7773L12.2842 15.9851V19.6836C12.2842 19.959 12.5078 20.1821 12.7832 20.1821C13.0582 20.1821 13.2809 19.959 13.2809 19.6836V15.9851L16.5664 17.7773C16.6613 17.8175 16.7445 17.8379 16.8266 17.8379C16.9944 17.8379 17.1581 17.7496 17.2504 17.5885C17.3857 17.3437 17.3062 17.0395 17.0623 16.9035Z"></path>
                    <path d="M18.8227 3.08887C16.8266 1.09277 14.2231 0 11.4541 0C8.68513 0 6.08158 1.09277 4.08548 3.08887C2.08939 5.08496 0.996094 7.68848 0.996094 10.4575C0.996094 12.5719 1.67871 14.6299 2.9663 16.3501C4.1543 17.9253 5.77911 19.0938 7.62305 19.6763C7.70071 19.7007 7.77837 19.7119 7.85446 19.7119C8.0415 19.7119 8.22344 19.6335 8.35274 19.4873C8.52876 19.2865 8.57212 19.005 8.4624 18.7583C7.42212 16.3501 7.54212 13.6143 8.77075 11.3057C9.39677 10.129 10.2788 9.12649 11.3571 8.36133C11.5866 8.19531 11.6526 7.88086 11.4883 7.65137C11.3235 7.42188 11.0095 7.35586 10.78 7.5123C9.5376 8.39356 8.54118 9.53418 7.82876 10.8774C6.80759 12.7622 6.37895 14.91 6.59833 17.0435C5.35933 16.5474 4.24755 15.7109 3.36628 14.5762C2.2439 13.0894 1.64345 11.2959 1.64345 10.4575C1.64345 5.31934 6.08212 1.10156 11.4541 1.10156C16.8262 1.10156 21.2645 5.31934 21.2645 10.4575C21.2645 11.2959 20.6644 13.0894 19.542 14.5762C18.6604 15.7109 17.549 16.5474 16.3096 17.0435C16.4205 16.0518 16.3701 15.041 16.166 14.0635C16.0796 13.6997 15.7598 13.4536 15.3989 13.54C15.0356 13.626 14.7896 13.9443 14.8752 14.3076C15.0747 15.2725 15.0942 16.2778 14.9303 17.2583C14.8206 17.9053 14.649 18.5347 14.4189 19.1392C14.3092 19.3859 14.3521 19.6675 14.5286 19.8683C14.6579 20.0146 14.8395 20.0925 15.0269 20.0925C15.103 20.0925 15.1806 20.0813 15.2583 20.057C17.1023 19.4744 18.7271 18.3057 19.915 16.7305C21.2031 15.0103 21.8853 12.9523 21.8853 10.8379C21.8853 8.0688 20.7929 5.46527 18.8227 3.08887Z"></path>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </a>
                <a href="#" className="flex items-center bg-gray-800 hover:bg-gray-700 text-white rounded-xl px-4 py-2 transition-all duration-300">
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.16506 1.60767C2.97685 1.8261 2.86328 2.13454 2.86328 2.49308V21.5069C2.86328 21.8655 2.97685 22.1739 3.16506 22.3923L3.23126 22.4532L13.7881 12.0368V11.9631L3.23126 1.54674L3.16506 1.60767Z"/>
                    <path d="M17.4974 15.6919L13.7881 12.0368V11.9631L17.4974 8.30808L17.5801 8.35666L21.9571 10.7931C23.1865 11.4999 23.1865 12.5001 21.9571 13.2069L17.5801 15.6433L17.4974 15.6919Z"/>
                    <path d="M17.5802 15.6433L13.7881 12L3.16504 22.3923C3.63225 22.8898 4.40559 22.9528 5.26594 22.4553L17.5802 15.6433Z"/>
                    <path d="M17.5802 8.35665L5.26594 1.54469C4.40559 1.04716 3.63225 1.11015 3.16504 1.60767L13.7881 12L17.5802 8.35665Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </motion.div>
            
            {/* Footer Link Sections - Desktop */}
            <div className="hidden md:grid md:grid-cols-3 md:col-span-3 gap-8">
              {footerSections.map((section, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="space-y-4"
                >
                  <h3 className="font-semibold text-lg">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.links.map((link, idx) => (
                      <li key={idx}>
                        <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                          {link.label}
                          {link.isNew && (
                            <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">New</span>
                          )}
                          <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-1 transition-all duration-300" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            
            {/* Social Links */}
            <motion.div 
              className="md:col-span-1 space-y-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="font-semibold text-lg">Connect with us</h3>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.href} 
                    aria-label={`Follow us on ${social.name}`}
                    className={`${social.color} p-2 rounded-full hover:opacity-80 transition-opacity duration-300`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              
              {/* Contact Info */}
              <div className="pt-2">
                <p className="text-gray-400 text-sm">
                  <span className="block mb-1">Have questions?</span>
                  <a href="mailto:support@gowallet.com" className="text-white hover:text-green-400 transition-colors">
                    support@gowallet.com
                  </a>
                </p>
              </div>
            </motion.div>
            
            {/* Footer Link Sections - Mobile Accordion */}
            <div className="md:hidden col-span-1 space-y-4">
              {footerSections.map((section, index) => (
                <div key={index} className="border-b border-gray-800 pb-4">
                  <button 
                    onClick={() => toggleSection(section.title)}
                    className="w-full flex justify-between items-center py-2"
                  >
                    <h3 className="font-semibold text-lg">{section.title}</h3>
                    <ChevronRight 
                      className={`w-5 h-5 transform transition-transform duration-300 ${
                        activeSection === section.title ? 'rotate-90' : ''
                      }`} 
                    />
                  </button>
                  
                  {activeSection === section.title && (
                    <ul className="mt-3 space-y-3 pl-2">
                      {section.links.map((link, idx) => (
                        <li key={idx}>
                          <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                            {link.label}
                            {link.isNew && (
                              <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">New</span>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8 mt-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p 
                className="text-gray-500 text-sm" 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                © {currentYear} Gowallet. All rights reserved.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-6 mt-4 md:mt-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
                  Privacy
                </a>
                <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
                  Terms
                </a>
                <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
                  Cookies
                </a>
                <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
                  Sitemap
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 