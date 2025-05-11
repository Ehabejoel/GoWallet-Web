import { motion } from 'framer-motion';
import { UsersIcon, ArrowPathIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function Njangie() {
  return (
    <div className="py-20 bg-white" id="njangie">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          <NjangieInfo />
          <NjangieSimulator />
        </div>
      </div>
    </div>
  );
}

function NjangieInfo() {
  const features = [
    {
      icon: <UsersIcon className="w-5 h-5 text-green-600" />,
      title: "Building Trust & Community",
      description: "Njangie brings people together around financial goals, creating accountability and community support."
    },
    {
      icon: <ArrowPathIcon className="w-5 h-5 text-blue-600" />,
      title: "Rotation Logic",
      description: "Members contribute regularly, with each person receiving the full pot on a rotating schedule."
    },
    {
      icon: <UserCircleIcon className="w-5 h-5 text-purple-600" />,
      title: "Group Roles & Security",
      description: "Designated group admins ensure transparency while Gowallet provides the digital security."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Njangie Savings Explained</h2>
      <p className="mt-4 text-xl text-gray-600">Traditional community savings, reimagined for the digital age</p>
      
      <div className="mt-8 space-y-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className={`w-8 h-8 rounded-full ${
                index === 0 ? 'bg-green-100' : 
                index === 1 ? 'bg-blue-100' : 
                'bg-purple-100'
              } flex items-center justify-center`}>
                {feature.icon}
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10">
        <button className="bg-indigo-600 text-white py-3 px-8 rounded-xl text-lg font-medium hover:bg-indigo-700 transition shadow-lg">
          Start a Njangie Group
        </button>
      </div>
    </motion.div>
  );
}

function NjangieSimulator() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-12 lg:mt-0"
    >
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 relative">
        <RotatingMembers />
        <SimulatorControls />
      </div>
    </motion.div>
  );
}

function RotatingMembers() {
  return (
    <div className="relative">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-64 h-64 mx-auto"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full bg-green-200 flex items-center justify-center">
            <div className="w-36 h-36 rounded-full bg-green-300"></div>
          </div>
        </div>
        
        {[...Array(6)].map((_, i) => {
          const angle = (i * 60) * (Math.PI / 180);
          const x = Math.sin(angle) * 86;
          const y = -Math.cos(angle) * 86;
          
          return (
            <motion.div
              key={i}
              className="absolute w-14 h-14 bg-white rounded-full border-4 border-green-100 flex items-center justify-center shadow-lg"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                left: '50%',
                top: '50%'
              }}
            >
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            </motion.div>
          );
        })}
      </motion.div>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl shadow-lg"
        >
          Njangie
        </motion.div>
      </div>
    </div>
  );
}

function SimulatorControls() {
  return (
    <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Group Savings Simulator</h3>
      
      <div className="space-y-4">
        <RangeControl label="Group Size" min={3} max={15} defaultValue={6} />
        <RangeControl label="Contribution Amount" min={10} max={100} defaultValue={50} prefix="$" />
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Frequency
          </label>
          <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            <option>Weekly</option>
            <option>Bi-weekly</option>
            <option>Monthly</option>
          </select>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Your Turn:</span>
          <span className="text-lg font-bold text-indigo-600">Week 3</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-600">You'll Receive:</span>
          <span className="text-lg font-bold text-green-600">$300</span>
        </div>
      </div>
    </div>
  );
}

function RangeControl({ label, min, max, defaultValue, prefix }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input 
        type="range" 
        min={min} 
        max={max} 
        defaultValue={defaultValue}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>{prefix}{min}</span>
        <span>{prefix}{Math.floor((max + min) / 2)}</span>
        <span>{prefix}{max}</span>
      </div>
    </div>
  );
}