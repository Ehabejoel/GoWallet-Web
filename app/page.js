'use client';

import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Njangie from './components/Njangie';
import Community from './components/Community';
import Footer from './components/Footer';
import GlobalUserGrid from './components/connect';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {isClient && (
        <>
          {/* <div className="pt-7">
            <Hero />
          </div> */}
          <div className="pt-16 ml-8">
          <GlobalUserGrid />
          </div>
          <Features />
          <HowItWorks />
          <Njangie />
          <Community />
          <Footer />
        </>
      )}
    </div>
  );
}