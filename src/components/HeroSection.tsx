"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center relative overflow-hidden bg-white/50 backdrop-blur-sm">
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Abstract Background Animation Placeholder */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-[800px] h-[800px] rounded-full bg-whisk-yellow blur-[100px] absolute -top-1/2 -left-1/4"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-[600px] h-[600px] rounded-full bg-blue-200 blur-[80px] absolute -bottom-1/4 -right-1/4"
        />
      </div>

      <div className="z-10 text-center max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 flex justify-center"
        >
          <span className="bg-whisk-yellow/20 text-text-primary px-4 py-1.5 rounded-full text-sm font-medium border border-whisk-yellow/30 flex items-center gap-2">
            <Sparkles size={16} className="text-amber-600" />
            AI-Powered Image Generation
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="text-5xl md:text-7xl font-display font-bold tracking-tight text-text-primary mb-6"
        >
          Create, Remix, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-whisk-yellow">
            Inspire.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10"
        >
          Explore a universe of visual possibilities powered by state-of-the-art AI.
          Save, organize, and use your favorite prompts to generate new masterpieces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="bg-black text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-all transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl flex items-center gap-3 mx-auto">
            Start Creating
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </motion.div>
      </div>
    </div>
  );
};
