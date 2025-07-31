'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 bg-[#0b0c19]">
      <div className="max-w-4xl mx-auto bg-[#0b0c19]/90 backdrop-blur-lg shadow-2xl rounded-[10px] border-[2px] border-gray-600/30">
        <div className="flex justify-between items-center h-14 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-400">AutoService</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-6">
              <a href="#home" className="text-white hover:text-blue-400 px-3 py-2 text-base font-medium transition-colors">
                Home
              </a>
              <a href="#services" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-base font-medium transition-colors">
                Services
              </a>
              <a href="#solutions" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-base font-medium transition-colors">
                Solutions
              </a>
              <a href="#about" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-base font-medium transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-base font-medium transition-colors">
                Contact
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-400 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-2 pb-3 space-y-1 bg-[#0b0c19]/95 backdrop-blur-lg border-t border-gray-600/30 rounded-b-[10px]">
              <a href="#home" className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#services" className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium">
                Services
              </a>
              <a href="#solutions" className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium">
                Solutions
              </a>
              <a href="#about" className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}