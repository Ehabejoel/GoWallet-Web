import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      title: "Create an Account",
      description: "Sign up in minutes with just your phone number and basic information.",
      step: "01",
    },
    {
      title: "Start Saving or Join a Group",
      description: "Create personal vaults or join Njangie groups with friends and family.",
      step: "02",
    },
    {
      title: "Track, Withdraw & Win Rewards",
      description: "Watch your money grow, withdraw when needed, and earn rewards for consistent saving.",
      step: "03",
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-green-50 to-emerald-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            How Gowallet Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Start your financial journey in three simple steps
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 relative">
          {/* Connection line between steps */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-green-200"></div>

          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StepCard({ step, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white rounded-2xl shadow-lg p-8 relative"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white font-bold absolute -top-6 left-1/2 transform -translate-x-1/2 text-lg">
        {step.step}
      </div>
      <div className="pt-8 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
        <p className="text-gray-600">{step.description}</p>
        
        <div className="mt-8">
          <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
            <img
              src="/api/placeholder/320/240"
              alt={`Step ${step.step} illustration`}
              className="max-h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}