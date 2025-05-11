import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, ArrowsRightLeftIcon, 
  UsersIcon, BanknotesIcon 
} from '@heroicons/react/24/outline';

export default function Features() {
  return (
    <div 
      className="py-20 bg-white"
      id="features"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeatureHeader />
        <FeatureGrid />
      </div>
    </div>
  );
}

function FeatureHeader() {
  return (
    <div className="text-center mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-gray-900"
      >
        Powerful Features for Modern Finance
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
      >
        Discover the tools that make managing your money simpler, smarter, and more social.
      </motion.p>
    </div>
  );
}

function FeatureGrid() {
  const features = [
    {
      title: "Personal Vaults",
      description: "Create secure savings vaults with goals, timelines, and automatic deposits.",
      icon: <ShieldCheckIcon className="w-10 h-10" />,
      color: "bg-purple-100 text-purple-700",
    },
    {
      title: "Instant Transfers",
      description: "Send money to friends and family instantly with zero fees.",
      icon: <ArrowsRightLeftIcon className="w-10 h-10" />,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Group Savings (Njangie)",
      description: "Save together with trusted circles in a modern take on traditional group savings.",
      icon: <UsersIcon className="w-10 h-10" />,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Transaction History",
      description: "Track every transaction with detailed analytics and insights.",
      icon: <BanknotesIcon className="w-10 h-10" />,
      color: "bg-yellow-100 text-yellow-700",
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <FeatureCard key={index} feature={feature} index={index} />
      ))}
    </div>
  );
}

function FeatureCard({ feature, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition"
    >
      <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
      
      <div className="mt-6">
        <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
          <img
            src="/api/placeholder/320/240"
            alt={`${feature.title} illustration`}
            className="max-h-full rounded-lg"
          />
        </div>
      </div>
    </motion.div>
  );
}