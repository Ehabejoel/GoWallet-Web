import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Features', 'How it Works', 'Njangie Savings', 'Community'];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-indigo-600">
              Gowallet
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-700 hover:text-green-500"
              >
                {item}
              </a>
            ))}
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Download App
            </button>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white py-2">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button
              className="w-full mt-2 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700"
              onClick={() => setIsOpen(false)}
            >
              Download App
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}