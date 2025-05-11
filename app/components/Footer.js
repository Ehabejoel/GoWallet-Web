import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
        { label: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "How it Works", href: "#how-it-works" },
        { label: "Njangie Savings", href: "#njangie" },
        { label: "Community", href: "#community" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Security", href: "/security" },
        { label: "Compliance", href: "/compliance" }
      ]
    }
  ];

  const socialLinks = [
    { 
      name: "Facebook",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.77,22V14.2h2.6l0.4-3h-3V9.15c0-0.86,0.2-1.45,1.47-1.45h1.57V5.13c-0.27-0.04-1.22-0.12-2.31-0.12 c-2.29,0-3.85,1.4-3.85,3.96v2.21h-2.6v3h2.6V22H18.77z"/>
        </svg>
      ),
      href: "#"
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.25,5.55c-0.85,0.38-1.76,0.63-2.72,0.75c0.98-0.59,1.73-1.52,2.09-2.63c-0.92,0.54-1.93,0.93-3.01,1.14 c-0.87-0.92-2.1-1.5-3.47-1.5c-2.62,0-4.74,2.13-4.74,4.75c0,0.37,0.04,0.73,0.12,1.08C7.84,8.93,4.68,7.03,2.42,4.17 c-0.41,0.71-0.64,1.53-0.64,2.41c0,1.65,0.84,3.11,2.12,3.96c-0.78-0.02-1.51-0.24-2.15-0.6v0.06c0,2.31,1.64,4.23,3.82,4.67 c-0.4,0.11-0.82,0.17-1.25,0.17c-0.31,0-0.61-0.03-0.9-0.09c0.61,1.89,2.37,3.27,4.45,3.31c-1.63,1.28-3.69,2.04-5.93,2.04 c-0.39,0-0.77-0.02-1.14-0.07c2.11,1.35,4.62,2.14,7.32,2.14c8.78,0,13.59-7.29,13.59-13.59c0-0.21,0-0.41-0.01-0.62 C21.83,7.34,22.62,6.51,23.25,5.55z"/>
        </svg>
      ),
      href: "#"
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2.16c3.2,0,3.58,0.01,4.85,0.07c1.17,0.05,1.8,0.25,2.23,0.41c0.56,0.22,0.96,0.48,1.38,0.9 c0.42,0.42,0.68,0.82,0.9,1.38c0.16,0.42,0.36,1.06,0.41,2.23c0.06,1.27,0.07,1.65,0.07,4.85s-0.01,3.58-0.07,4.85 c-0.05,1.17-0.25,1.8-0.41,2.23c-0.22,0.56-0.48,0.96-0.9,1.38c-0.42,0.42-0.82,0.68-1.38,0.9c-0.42,0.16-1.06,0.36-2.23,0.41 c-1.27,0.06-1.65,0.07-4.85,0.07s-3.58-0.01-4.85-0.07c-1.17-0.05-1.8-0.25-2.23-0.41c-0.56-0.22-0.96-0.48-1.38-0.9 c-0.42-0.42-0.68-0.82-0.9-1.38c-0.16-0.42-0.36-1.06-0.41-2.23c-0.06-1.27-0.07-1.65-0.07-4.85s0.01-3.58,0.07-4.85 c0.05-1.17,0.25-1.8,0.41-2.23c0.22-0.56,0.48-0.96,0.9-1.38c0.42-0.42,0.82-0.68,1.38-0.9c0.42-0.16,1.06-0.36,2.23-0.41 C8.42,2.17,8.8,2.16,12,2.16 M12,0C8.74,0,8.33,0.01,7.05,0.07C5.78,0.13,4.9,0.33,4.14,0.63c-0.78,0.3-1.44,0.71-2.1,1.37 C1.38,2.66,0.97,3.32,0.67,4.1C0.37,4.86,0.17,5.74,0.11,7.01C0.05,8.29,0.04,8.7,0.04,11.96s0.01,3.67,0.07,4.95 c0.06,1.27,0.26,2.15,0.56,2.91c0.3,0.78,0.71,1.44,1.37,2.1c0.66,0.66,1.32,1.07,2.1,1.37c0.76,0.3,1.64,0.5,2.91,0.56 c1.28,0.06,1.69,0.07,4.95,0.07s3.67-0.01,4.95-0.07c1.27-0.06,2.15-0.26,2.91-0.56c0.78-0.3,1.44-0.71,2.1-1.37 c0.66-0.66,1.07-1.32,1.37-2.1c0.3-0.76,0.5-1.64,0.56-2.91c0.06-1.28,0.07-1.69,0.07-4.95s-0.01-3.67-0.07-4.95 c-0.06-1.27-0.26-2.15-0.56-2.91c-0.3-0.78-0.71-1.44-1.37-2.1c-0.66-0.66-1.32-1.07-2.1-1.37c-0.76-0.3-1.64-0.5-2.91-0.56 C15.67,0.01,15.26,0,12,0L12,0z"/>
          <path d="M12,5.84c-3.4,0-6.16,2.76-6.16,6.16s2.76,6.16,6.16,6.16s6.16-2.76,6.16-6.16S15.4,5.84,12,5.84z M12,16 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,16,12,16z"/>
          <circle cx="18.41" cy="5.59" r="1.44"/>
        </svg>
      ),
      href: "#"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8">
          <div className="col-span-2 md:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <Link href="/" className="text-2xl font-bold">
                Gowallet
              </Link>
              <p className="text-gray-400 text-sm">
                Revolutionizing personal and group finance through innovative digital solutions.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link 
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Gowallet. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}