"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GalleryItem } from '@/types';
import { useGalleryStore } from '@/store/galleryStore';
import { Play } from 'lucide-react';

interface GalleryCardProps {
  item: GalleryItem;
  index: number;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ item, index }) => {
  const { setSelectedItem } = useGalleryStore();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layoutId={`card-${item.id}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.2, 0.65, 0.3, 0.9]
      }}
      className="relative w-full rounded-2xl overflow-hidden cursor-pointer group bg-gray-100"
      style={{ aspectRatio: item.aspectRatio }}
      onClick={() => setSelectedItem(item)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
    >
      {/* Image */}
      <motion.img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      />

      {/* Overlay Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-white font-bold text-lg leading-tight mb-1">{item.title}</h3>
              <p className="text-white/70 text-sm line-clamp-2">{item.description}</p>
            </div>
          </div>

          <motion.div
            className="mt-4 inline-flex items-center gap-2 bg-whisk-yellow text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
          >
            <Play size={12} fill="currentColor" />
            Animate Ausprobieren
          </motion.div>
        </motion.div>
      </div>

      {/* Top badges (optional, e.g. New or Popular) */}
      {index % 5 === 0 && (
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm">
          New
        </div>
      )}
    </motion.div>
  );
};
