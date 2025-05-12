import React, { useState, useEffect } from 'react';

// Define a simple CSS class for the breathing animation
const breathingLineStyle = {
  height: '2px',
  background: 'linear-gradient(to right, #2dd4bf, #0d9488)',
  borderRadius: '9999px',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  animation: 'breathe 3s ease-in-out infinite',
  width: '15%', // Starting width
};

// Define the keyframes as a style that will be injected
const animationStyle = {
  '@keyframes breathe': {
    '0%, 100%': { width: '10%' },
    '50%': { width: '25%' },
  },
};

export default function UserCollage() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Create and inject the keyframes CSS
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes breathe {
        0%, 100% { width: 10%; }
        50% { width: 25%; }
      }
    `;
    document.head.appendChild(style);
    
    // Cleanup function to remove the style when component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full bg-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left side - Text content */}
        <div className="w-full md:w-2/5 mb-8 md:mb-0 pr-0 md:pr-8">          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="block text-gray-900 text-7xl">Your Money</span>
            <span className="block text-teal-600 text-7xl">Your Way.</span>
            <span className="block text-gray-900 text-6xl">Solo or Together.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10">
           Gowallet helps you save, send, and build wealth with friends, family, and community.
          </p>
          <div className="flex space-x-5">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium text-lg py-4 px-8 rounded-lg transition-colors">
              Get Started
            </button>
            <button className="border border-gray-300 hover:border-teal-600 text-gray-800 font-medium text-lg py-4 px-8 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
          {/* Right side - Image grid */}        <div className="w-full md:w-1/2 relative pl-4 md:pl-8">
          <div className={`relative h-80 md:h-[400px] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            
            {/* Simplified decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400 rounded-full opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500 rounded-full opacity-70"></div>
            
            {/* Simplified user images grid with clear spacing */}
            <div className="absolute inset-0 grid grid-cols-3 gap-4 p-4">
              {/* First column */}
              <div className="grid gap-4">
                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105">
                  <img src="https://images.pexels.com/photos/2379886/pexels-photo-2379886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User in Africa" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-video overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105">
                  <img src="https://images.pexels.com/photos/6146929/pexels-photo-6146929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User in Africa" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Second column */}
              <div className="grid gap-4">
                <div className="aspect-video overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105">
                  <img src="https://images.pexels.com/photos/5905510/pexels-photo-5905510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User in Africa" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105">
                  <img src="https://images.pexels.com/photos/12912206/pexels-photo-12912206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User  Africa" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-video overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105">
                  <img src="https://images.pexels.com/photos/7534377/pexels-photo-7534377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User in Africa" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Third column */}
              <div className="grid gap-4">
                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105">
                  <img src="https://images.pexels.com/photos/8734282/pexels-photo-8734282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User in Africa" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-video overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105">
                  <img src="https://images.pexels.com/photos/9558710/pexels-photo-9558710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User in Africa" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      {/* Slick teal line at the bottom */}
      <div className="flex justify-center mt-12">
        <div className="h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full shadow-md" style={breathingLineStyle}></div>
      </div>
    </div>
  );
}