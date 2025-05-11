import { motion } from 'framer-motion';
import { UserCircleIcon } from '@heroicons/react/24/outline';

export default function Community() {
  const stats = [
    { label: "Active Users", value: "5,000+" },
    { label: "Njangie Groups", value: "250+" },
    { label: "Total Savings", value: "$1M+" },
    { label: "User Rating", value: "4.9/5" }
  ];

  const reviews = [
    {
      name: "Sarah M.",
      role: "Gowallet User",
      text: "Gowallet has transformed how I save money. The Njangie feature is brilliant!"
    },
    {
      name: "John D.",
      role: "Group Admin",
      text: "Managing group savings has never been easier. Great transparency and security."
    },
    {
      name: "Lisa K.",
      role: "Gowallet User",
      text: "Love the community aspect. It keeps me motivated to save regularly."
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-green-50 to-emerald-50" id="community">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CommunityHeader />
        <Stats stats={stats} />
        <Reviews reviews={reviews} />
        <CallToAction />
      </div>
    </div>
  );
}

function CommunityHeader() {
  return (
    <div className="text-center mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-gray-900"
      >
        Join Our Growing Community
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 text-xl text-gray-600"
      >
        Connect with like-minded savers and achieve your financial goals together
      </motion.p>
    </div>
  );
}

function Stats({ stats }) {
  return (
    <div className="grid md:grid-cols-4 gap-8 mb-16">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-2xl p-6 text-center shadow-lg"
        >
          <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
          <div className="text-gray-600">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

function Reviews({ reviews }) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {reviews.map((review, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <UserCircleIcon className="w-8 h-8 text-green-600" />
            </div>
            <div className="ml-4">
              <div className="font-medium text-gray-900">{review.name}</div>
              <div className="text-gray-500 text-sm">{review.role}</div>
            </div>
          </div>
          <p className="text-gray-600 mb-4">{review.text}</p>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function CallToAction() {
  return (
    <div className="mt-16 text-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-green-600 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:bg-green-700 transition shadow-xl inline-flex items-center"
      >
        Join Our Community
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </motion.button>
    </div>
  );
}