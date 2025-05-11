import { useState, useEffect, useRef } from 'react';

export default function ImaginativeHowItWorks() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const containerRef = useRef(null);

  const steps = [
    {
      title: "Create an Account",
      description: "Begin your journey with a seamless signup process that takes just minutes. Connect with your phone number and watch your financial future unfold.",
      emoji: "✨",
      color: "from-indigo-500 to-violet-500"
    },
    {
      title: "Start Saving or Join a Group",
      description: "Forge your path alone with personal vaults or unite with friends and family in Njangie groups to achieve collective prosperity.",
      emoji: "🌱",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Track, Withdraw & Win Rewards",
      description: "Watch your wealth flourish, access funds whenever needed, and be celebrated with rewards that acknowledge your financial discipline.",
      emoji: "🏆",
      color: "from-amber-500 to-orange-500"
    }
  ];

  // Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimationComplete(true), 2000);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Auto-advance steps
  useEffect(() => {
    if (!animationComplete) return;
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [animationComplete, steps.length]);

  return (
    <section 
      ref={containerRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white"
      id="how-it-works"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Floating circles */}
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className={`absolute rounded-full mix-blend-multiply filter blur-xl bg-opacity-60 animate-float-slow`}
              style={{
                width: `${Math.random() * 15 + 5}rem`,
                height: `${Math.random() * 15 + 5}rem`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: [`rgba(79, 70, 229, 0.2)`, `rgba(16, 185, 129, 0.2)`, `rgba(245, 158, 11, 0.2)`][i % 3],
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${Math.random() * 20 + 15}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header section with spiral animation */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <span className="inline-block text-3xl mb-4 animate-bounce-slow">✨</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            The Gowallet Experience
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Embark on a transformative financial journey in three magical steps
          </p>
          
          {/* Animated Journey Line */}
          <div className={`w-2/3 mx-auto h-1 mt-12 mb-16 relative ${isVisible && animationComplete ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            <div className="absolute inset-0 h-1 bg-gray-200 rounded-full"></div>
            <div 
              className="absolute inset-0 h-1 bg-gradient-to-r from-indigo-500 via-emerald-500 to-orange-500 rounded-full"
              style={{ 
                width: `${(currentStep + 1) * (100/3)}%`,
                transition: 'width 1s ease-in-out'
              }}
            ></div>
            
            {steps.map((_, index) => (
              <div 
                key={index} 
                className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center transition-all duration-500 cursor-pointer
                  ${index <= currentStep ? 'bg-gradient-to-r from-indigo-500 via-emerald-500 to-orange-500' : 'bg-gray-200'}
                `}
                style={{ left: `calc(${index * (100/3)}% - 12px)` }}
                onClick={() => setCurrentStep(index)}
              >
                <div className={`w-2 h-2 rounded-full bg-white ${index <= currentStep ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
            ))}
            
            <div 
              className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full border-2 border-white bg-gradient-to-r from-indigo-500 via-emerald-500 to-orange-500`}
              style={{ 
                left: `calc(100% - 12px)`,
                opacity: currentStep === 2 ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out'
              }}
            >
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
          </div>
        </div>

        {/* Main immersive display */}
        <div className={`min-h-screen-half relative transition-all duration-1000 ${isVisible && animationComplete ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left: 3D Step Visualization */}
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <div className="relative h-96 w-full perspective-1000">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 rounded-2xl overflow-hidden transition-all duration-1000 transform-style-3d shadow-2xl ${
                      index === currentStep 
                        ? 'opacity-100 rotateY-0' 
                        : index < currentStep 
                          ? 'opacity-0 rotateY-90neg' 
                          : 'opacity-0 rotateY-90'
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-90`}></div>
                    <div className="absolute inset-0 bg-pattern opacity-10"></div>
                    
                    <div className="relative h-full flex flex-col justify-center items-center text-white p-10 text-center">
                      <div className="text-8xl mb-6 animate-float">{step.emoji}</div>
                      <h3 className="text-3xl font-bold mb-4">Step {index + 1}</h3>
                      <div className="flex items-center justify-center space-x-6 mb-8">
                        {[...Array(3)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-white bg-opacity-40'}`}
                          ></div>
                        ))}
                      </div>
                      <img
                        src="/api/placeholder/400/250"
                        alt={`Step ${index + 1} illustration`}
                        className="rounded-lg shadow-lg max-w-full h-auto"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right: Step Details */}
            <div className="w-full lg:w-1/2 lg:pl-16">
              <div className="relative">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`transition-all duration-1000 ${
                      index === currentStep 
                        ? 'opacity-100 transform translate-y-0' 
                        : 'opacity-0 absolute transform translate-y-8'
                    }`}
                    style={{ display: index === currentStep ? 'block' : 'none' }}
                  >
                    <h3 className="inline-block text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600 mb-4">
                      {index + 1}
                    </h3>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">{step.title}</h3>
                    <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500 mb-6"></div>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">{step.description}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-8">
                      {[1, 2, 3].map((feature) => (
                        <span 
                          key={feature}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                        >
                          Feature {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-10 flex items-center space-x-4">
                      <button className={`px-6 py-3 rounded-full text-white font-medium transition-all duration-300 bg-gradient-to-r ${step.color} hover:shadow-lg transform hover:-translate-y-1`}>
                        Learn More
                      </button>
                      
                      <button className="px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                        Watch Demo
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom action area */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-500 ${isVisible && animationComplete ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <p className="text-xl text-gray-600 mb-8">
            Ready to transform your financial future?
          </p>
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Begin Your Journey Now
          </button>
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .rotateY-0 {
          transform: rotateY(0deg);
        }
        .rotateY-90 {
          transform: rotateY(90deg);
        }
        .rotateY-90neg {
          transform: rotateY(-90deg);
        }
        .min-h-screen-half {
          min-height: 60vh;
        }
        .bg-pattern {
          background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce 2s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}