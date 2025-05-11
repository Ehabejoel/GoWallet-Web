import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.div 
      className="relative min-h-[30vh] mt-10 pt-1 overflow-hidden"
      id="hero"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-green-900 to-emerald-900 opacity-90"></div>
      
      {/* Animated geometric shapes - reduced quantity */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => ( // Reduced from 8 to 5 shapes
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-20"
            style={{
              width: `${Math.random() * 300 + 100}px`, // Reduced max size from 400 to 300
              height: `${Math.random() * 300 + 100}px`, // Reduced max size from 400 to 300
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(50px)', // Reduced blur from 70px to 50px
            }}
            animate={{
              y: [0, Math.random() * 60 - 30], // Reduced animation range
              x: [0, Math.random() * 60 - 30], // Reduced animation range
              scale: [1, 1.1, 1], // Reduced scale effect
            }}
            transition={{
              duration: Math.random() * 8 + 10, // Faster animation
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 min-h-[40vh] flex items-center"> {/* Reduced from 70vh to 40vh */}
        <div className="grid md:grid-cols-2 gap-8 items-center"> {/* Reduced gap from 12 to 8 */}
          <HeroContent />
          <HeroAppMockup />
        </div>
      </div>
      
      <WaveSeparator />
    </motion.div>
  );
}

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="space-y-4"> {/* Reduced space-y-6 to space-y-4 */}
        <div className="inline-block px-3 py-1 rounded-full bg-green-400 bg-opacity-30 backdrop-blur-sm text-white text-xs font-medium"> {/* Reduced padding and text size */}
          The Future of Group & Personal Finance
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight"> {/* Reduced from text-5xl/6xl to text-4xl/5xl */}
          Your Money, Your Way.
          <span className="block mt-1 text-yellow-300">Solo or Together.</span> {/* Reduced mt-2 to mt-1 */}
        </h1>
        <p className="text-lg md:text-xl text-indigo-100"> {/* Reduced from text-xl/2xl to text-lg/xl */}
          Gowallet helps you save, send, and build wealth with friends, family, and community.
        </p>
        
        <HeroButtons />
        <HeroUserCount />
        <HeroAppStoreButtons />
      </div>
    </motion.div>
  );
}

function HeroButtons() {
  return (
    <div className="pt-2 space-y-3 sm:space-y-0 sm:space-x-3 sm:flex"> {/* Reduced padding and spacing */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-3 px-6 rounded-xl text-base font-semibold hover:from-yellow-500 hover:to-yellow-600 transition shadow-xl flex items-center justify-center" /* Reduced padding and text size */
      >
        Download App
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor"> {/* Reduced icon size */}
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full sm:w-auto bg-transparent text-white py-3 px-6 rounded-xl text-base font-medium hover:bg-white hover:bg-opacity-10 transition border border-indigo-300 border-opacity-50" /* Reduced padding and text size */
      >
        See How It Works
      </motion.button>
    </div>
  );
}

function HeroUserCount() {
  return (
    <div className="pt-4 flex items-center space-x-6"> {/* Reduced pt-8 to pt-4 and space-x-8 to space-x-6 */}
      <div className="flex -space-x-1"> {/* Reduced space-x-2 to space-x-1 */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-8 h-8 rounded-full border-2 border-indigo-500 bg-indigo-300 flex items-center justify-center text-xs font-medium text-indigo-900"> {/* Reduced from w-10 h-10 to w-8 h-8 */}
            {String.fromCharCode(65 + i)}
          </div>
        ))}
      </div>
      <div className="text-indigo-100 text-xs"> {/* Reduced from text-sm to text-xs */}
        <span className="font-bold text-white">5,000+</span> people already using Gowallet
      </div>
    </div>
  );
}

function HeroAppStoreButtons() {
  return (
    <div className="pt-3 flex items-center space-x-4"> {/* Reduced pt-4 to pt-3 and space-x-6 to space-x-4 */}
      <img src="/api/placeholder/120/36" alt="Google Play" className="h-8 rounded-md shadow-lg" /> {/* Reduced height and image placeholder size */}
      <img src="/api/placeholder/120/36" alt="App Store" className="h-8 rounded-md shadow-lg" /> {/* Reduced height and image placeholder size */}
    </div>
  );
}

function HeroAppMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="hidden md:block"
    >
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 opacity-30 filter blur-2xl"></div> {/* Reduced size from 64 to 48 and blur */}
        
        <motion.div
          animate={{ 
            y: [0, -10, 0], // Reduced animation range from -15 to -10
          }}
          transition={{ 
            duration: 3, // Faster animation
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="relative mx-auto"
        >
          <div className="relative z-10 bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-6 border-gray-800 w-60"> {/* Reduced size from w-72 to w-60, rounded-3xl to rounded-2xl, border-8 to border-6 */}
            <img 
              src="/images/Thumb1.jpeg" 
              alt="Gowallet App Preview" 
              className="w-full"
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-30"></div>
            {/* <div className="absolute bottom-3 left-0 right-0 px-3">
              <div className="p-2 bg-white bg-opacity-20 backdrop-blur-md rounded-lg">
                <div className="flex justify-between items-center">
                  <div className="text-white text-xs">Total Savings</div>
                  <div className="text-yellow-300 text-xs font-bold">$2,450.00</div>
                </div>
              </div>
            </div> */}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function WaveSeparator() {
  return (
    <div className="absolute bottom-0 left-0 right-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto"> {/* Reduced height in viewBox */}
        <path fill="#ffffff" fillOpacity="1" d="M0,96L48,88C96,80,192,64,288,60C384,56,480,64,576,72C672,80,768,88,864,92C960,96,1056,96,1152,84C1248,72,1344,48,1392,36L1440,24L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path> {/* Adjusted path for smaller height */}
      </svg>
    </div>
  );
}