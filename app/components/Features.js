import { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

function ErrorBoundary({ children, fallback }) {
  return (
    <ReactErrorBoundary
      fallbackRender={({ error }) => {
        console.error('Animation error:', error);
        return fallback;
      }}
      onError={(error) => console.error('Error caught by boundary:', error.stack)}
    >
      {children}
    </ReactErrorBoundary>
  );
}

export default function ElegantFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: 'Personal Vaults',
      description:
        'Create secure savings vaults with customized goals, timelines, and automatic deposits that adapt to your financial rhythm.',
      color: 'from-purple-500 to-indigo-600',
      textColor: 'text-purple-600',
      iconPath:
        'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
      lottieUrl: 'https://lottie.host/7ea06795-b0fb-4a34-a4c6-a8be7e84bd48/cV5kiTFqI5.json',
      fallbackImage: 'https://via.placeholder.com/220x220?text=Personal+Vaults',
    },
    {
      title: 'Instant Transfers',
      description:
        'Send money to friends and family instantly with zero fees, using our advanced payment network that bridges traditional and digital finance.',
      color: 'from-blue-500 to-cyan-400',
      textColor: 'text-blue-600',
      iconPath:
        'M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5',
      lottieUrl: 'https://lottie.host/57c26aa7-2a00-4be4-b925-737b46bc8c89/YIDB0iNfrf.lottie',
      fallbackImage: 'https://via.placeholder.com/220x220?text=Instant+Transfers',
    },
    {
      title: 'Group Savings',
      description:
        'Save together with trusted circles in a modern take on traditional group savings, building community while achieving collective financial goals.',
      color: 'from-green-500 to-emerald-400',
      textColor: 'text-green-600',
      iconPath:
        'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
      lottieUrl: 'https://lottie.host/deefef12-87e5-4c39-bfa9-8232012258c9/pXDSSMO56r.json',
      fallbackImage: 'https://via.placeholder.com/220x220?text=Group+Savings',
    },
    {
      title: 'Transaction History',
      description:
        'Track every transaction with detailed analytics and personalized insights that reveal spending patterns and suggest optimizations unique to you.',
      color: 'from-amber-500 to-orange-400',
      textColor: 'text-amber-600',
      iconPath:
        'M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z',
      lottieUrl: 'https://lottie.host/2abc1467-bd86-405d-96da-d551da37de8b/MSIyPrpvJH.json',
      fallbackImage: 'https://via.placeholder.com/220x220?text=Transaction+History',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with elegant animation */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gray-100 text-gray-800 text-sm font-medium mb-5">
            Revolutionary Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Redefining Your Financial Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6 mb-6 rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the tools that make managing your money simpler, smarter, and more social than ever before.
          </p>
        </div>

        {/* Main features interactive display */}
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full">
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between relative z-10">
            {/* Left side: Feature Selector */}
            <div className="w-full lg:w-1/3 mb-10 lg:mb-0">
              <ul className="space-y-1">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className={`transition-all duration-300 cursor-pointer rounded-xl border px-6 py-4 mb-4 ${
                      activeFeature === index
                        ? `border-l-4 border-${feature.textColor} shadow-lg`
                        : 'border-gray-100 hover:border-gray-200'
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="flex items-center">
                      <div
                        className={`flex-shrink-0 mr-4 ${
                          activeFeature === index ? 'opacity-100' : 'opacity-50'
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className={`w-6 h-6 ${feature.textColor}`}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d={feature.iconPath} />
                        </svg>
                      </div>
                      <div>
                        <h3
                          className={`font-semibold text-lg ${
                            activeFeature === index ? 'text-gray-900' : 'text-gray-700'
                          }`}
                        >
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side: Feature Display */}
            <div className="w-full lg:w-2/3 lg:pl-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    activeFeature === index ? 'opacity-100 translate-y-0' : 'opacity-0 absolute translate-y-8'
                  }`}
                  style={{ display: activeFeature === index ? 'block' : 'none' }}
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                    <div className="p-8">
                      <div className="mb-6">
                        <span
                          className={`inline-flex items-center justify-center p-3 rounded-md bg-opacity-10 ${feature.textColor} bg-${
                            feature.textColor.split('-')[1]
                          }-100`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={`w-8 h-8 ${feature.textColor}`}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d={feature.iconPath} />
                          </svg>
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600 text-lg mb-8">{feature.description}</p>
                      <div className="relative h-36 md:h-60 bg-gray-100 rounded-lg overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10`}></div>
                        <div className="flex items-center justify-center h-full">
                          <ErrorBoundary
                            fallback={
                              <div className="flex items-center justify-center p-6">
                                {feature.fallbackImage ? (
                                  <img
                                    src={feature.fallbackImage}
                                    alt={feature.title}
                                    className="w-20 h-20 object-contain"
                                  />
                                ) : (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className={`w-20 h-20 ${feature.textColor}`}
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" d={feature.iconPath} />
                                  </svg>
                                )}
                              </div>
                            }
                          >
                            <DotLottieReact
                              src={feature.lottieUrl}
                              loop
                              autoplay
                              renderer="svg" // Switch to "canvas" if SVG causes issues
                              onError={(error) =>
                                console.error(
                                  `Lottie error for ${feature.title} (${feature.lottieUrl}):`,
                                  error.stack
                                )
                              }
                              style={{ width: '220px', height: '220px' }}
                              className="transition-all duration-700"
                            />
                          </ErrorBoundary>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}