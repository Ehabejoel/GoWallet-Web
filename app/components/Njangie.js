import { motion } from 'framer-motion';
import { UsersIcon, ArrowPathIcon, UserCircleIcon, BanknotesIcon } from '@heroicons/react/24/outline';

export default function GroupSavings() {
  return (
    <div className="py-20 bg-white" id="group-savings">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          <GroupSavingsInfo />
          <SavingsSimulator />
        </div>
      </div>
    </div>
  );
}

function GroupSavingsInfo() {
  const features = [
    {
      icon: <UsersIcon className="w-5 h-5 text-green-600" />,
      title: "Group Goals Made Easy",
      description: "Bring friends together around shared financial goals like vacations, events, or gifts."
    },
    {
      icon: <BanknotesIcon className="w-5 h-5 text-blue-600" />,
      title: "Flexible Contributions",
      description: "Everyone contributes at their own convenience while the system tracks all payments."
    },
    {
      icon: <UserCircleIcon className="w-5 h-5 text-purple-600" />,
      title: "Simple Administration",
      description: "Group admins maintain transparency and can withdraw funds when your goal is reached."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Group Savings</h2>
      <p className="mt-4 text-xl text-gray-600">Save together with friends for your shared dreams and goals</p>
      
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
          Start a Group Fund
        </button>
      </div>
    </motion.div>
  );
}

function SavingsSimulator() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-12 lg:mt-0"
    >
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-5 relative">
        <GroupVisualization />
        <SavingsControls />
      </div>
    </motion.div>
  );
}

function GroupVisualization() {
  return (
    <div className="relative h-36">
      {/* Central goal icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold shadow-lg"
        >
          <div className="text-center">
            <span className="text-xs block">GOAL</span>
            <span className="text-lg">$1,500</span>
          </div>
        </motion.div>
      </div>
      
      {/* Progress circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-40 h-40 rounded-full border-6 border-indigo-200"></div>
      </div>
      
      {/* Group members */}
      {[...Array(5)].map((_, i) => {
        const angle = (i * 72) * (Math.PI / 180);
        const x = Math.sin(angle) * 86;
        const y = -Math.cos(angle) * 86;
        
        return (
          <motion.div
            key={i}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-14 h-14 bg-white rounded-full border-4 border-indigo-100 flex items-center justify-center shadow-lg"
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
      
      {/* Contribution animations */}
      {[...Array(3)].map((_, i) => {
        const delay = i * 2;
        const angle = ((i * 144) % 360) * (Math.PI / 180);
        const startX = Math.sin(angle) * 86;
        const startY = -Math.cos(angle) * 86;
        
        return (
          <motion.div
            key={`coin-${i}`}
            initial={{ 
              x: startX, 
              y: startY,
              scale: 0,
              opacity: 0
            }}
            animate={{ 
              x: 0,
              y: 0,
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 1.5,
              delay: delay,
              repeat: Infinity,
              repeatDelay: 5
            }}
            className="absolute w-6 h-6 rounded-full bg-yellow-400 border-2 border-yellow-500 flex items-center justify-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md"
          >
            <span className="text-xs font-bold text-yellow-800">$</span>
          </motion.div>
        );
      })}
    </div>
  );
}

function SavingsControls() {
  return (
    <div className="mt-4 bg-white rounded-xl p-5 shadow-lg">
      <h3 className="text-lg font-medium text-gray-900 mb-3">Group Savings Simulator</h3>
      
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Goal Name
          </label>
          <input
            type="text"
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Summer Vacation 2025"
            defaultValue="Summer Vacation 2025"
          />
        </div>
        
        <RangeControl label="Total Goal Amount" min={500} max={3000} defaultValue={1500} prefix="$" />
        <RangeControl label="Group Size" min={2} max={10} defaultValue={5} />
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Target Date
            </label>
            <input
              type="date"
              className="w-full rounded-lg border-gray-300 shadow-sm"
              defaultValue="2025-08-01"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reminders
            </label>
            <select className="w-full rounded-lg border-gray-300 shadow-sm">
              <option>Weekly</option>
              <option>Monthly</option>
              <option>None</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="mt-5 p-3 bg-indigo-50 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Current Progress:</span>
          <span className="text-lg font-bold text-indigo-600">$650 / $1,500</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '43%' }}></div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-600">Time Remaining:</span>
          <span className="text-lg font-bold text-green-600">82 days</span>
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
        <span>{prefix ? prefix : ''}{min}</span>
        <span>{prefix ? prefix : ''}{Math.floor((max + min) / 2)}</span>
        <span>{prefix ? prefix : ''}{max}</span>
      </div>
    </div>
  );
}