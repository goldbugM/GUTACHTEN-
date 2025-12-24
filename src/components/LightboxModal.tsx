"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GalleryItem } from '@/types';
import { X, Heart, Share2, Info, Download, Maximize2 } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div
        layoutId={`card-${item.id}`}
        className="bg-white w-full max-w-6xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-md transition-colors"
        >
          <X size={24} />
        </button>

        {/* Image Section */}
        <div className="flex-1 bg-gray-100 relative group flex items-center justify-center overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-contain max-h-[60vh] md:max-h-[90vh]"
          />

          <div className="absolute bottom-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors shadow-lg">
              <Maximize2 size={20} />
            </button>
          </div>
        </div>

        {/* Details Section */}
        <div className="w-full md:w-[400px] bg-white p-8 flex flex-col h-auto md:h-full overflow-y-auto">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-2">{item.title}</h2>
              <div className="flex gap-2 text-sm text-text-tertiary">
                <span>By AI Artist</span>
                <span>•</span>
                <span>{new Date(item.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mb-8 border-b border-gray-100 pb-8">
            <button className="flex-1 bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
              <Download size={18} />
              Save
            </button>
            <button className="flex-1 border border-gray-200 text-text-primary py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <Share2 size={18} />
              Share
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider mb-3">Prompt</h3>
              <div className="bg-gray-50 p-4 rounded-xl text-sm text-text-primary leading-relaxed border border-gray-100">
                {item.metadata.prompt}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider mb-3">Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-text-tertiary">Model</span>
                  <span className="font-medium">{item.metadata.model}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-tertiary">Resolution</span>
                  <span className="font-medium">{item.metadata.resolution}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-tertiary">Ratio</span>
                  <span className="font-medium">{(item.aspectRatio).toFixed(2)}:1</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-text-secondary px-3 py-1 rounded-full text-xs font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
