"use client";

import React, { useState, useEffect } from 'react';
import { Menu, Search, User } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 py-4 flex justify-between items-center ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
          <Menu size={24} className="text-text-primary" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-whisk-yellow rounded-lg flex items-center justify-center font-bold text-lg">W</div>
          <span className="font-display font-bold text-xl tracking-tight hidden md:block">Whisk Gallery</span>
        </div>
      </div>

      <div className={`flex-1 max-w-md mx-8 hidden md:block transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative group">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary group-hover:text-text-primary transition-colors" />
          <input
            type="text"
            placeholder="Search for inspiration..."
            className="w-full bg-gray-100/50 hover:bg-white focus:bg-white border border-transparent focus:border-whisk-yellow outline-none rounded-full py-2.5 pl-10 pr-4 transition-all shadow-sm focus:shadow-md"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full hover:bg-black/5 font-medium text-sm transition-colors">
          Sign In
        </button>
        <button className="bg-black text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg">
          Try Now
        </button>
      </div>
    </motion.nav>
  );
};
