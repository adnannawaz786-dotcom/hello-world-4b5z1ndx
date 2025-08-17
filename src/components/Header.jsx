import React from 'react';
import { cn } from '../lib/utils';

const Header = ({ className }) => {
  return (
    <header className={cn(
      "w-full bg-black/90 backdrop-blur-sm border-b border-cyan-500/30 sticky top-0 z-50",
      className
    )}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse">
                HELLO WORLD
              </h1>
              <div className="absolute inset-0 text-2xl font-bold text-cyan-400/20 blur-sm">
                HELLO WORLD
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="relative text-cyan-300 hover:text-pink-400 transition-colors duration-300 group"
            >
              <span className="relative z-10">HOME</span>
              <div className="absolute inset-0 bg-cyan-400/10 scale-0 group-hover:scale-100 transition-transform duration-300 blur-lg"></div>
            </a>
            <a 
              href="#about" 
              className="relative text-cyan-300 hover:text-pink-400 transition-colors duration-300 group"
            >
              <span className="relative z-10">ABOUT</span>
              <div className="absolute inset-0 bg-cyan-400/10 scale-0 group-hover:scale-100 transition-transform duration-300 blur-lg"></div>
            </a>
            <a 
              href="#services" 
              className="relative text-cyan-300 hover:text-pink-400 transition-colors duration-300 group"
            >
              <span className="relative z-10">SERVICES</span>
              <div className="absolute inset-0 bg-cyan-400/10 scale-0 group-hover:scale-100 transition-transform duration-300 blur-lg"></div>
            </a>
            <a 
              href="#contact" 
              className="relative text-cyan-300 hover:text-pink-400 transition-colors duration-300 group"
            >
              <span className="relative z-10">CONTACT</span>
              <div className="absolute inset-0 bg-cyan-400/10 scale-0 group-hover:scale-100 transition-transform duration-300 blur-lg"></div>
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="relative px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg overflow-hidden group">
              <span className="relative z-10">CONNECT</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-pink-500/20 animate-pulse"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-cyan-400 hover:text-pink-400 transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Neon underglow effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>
      </div>
    </header>
  );
};

export default Header;