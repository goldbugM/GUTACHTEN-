"use client";

import React, { useEffect } from 'react';
import { useGalleryStore } from '@/store/galleryStore';
import { HeroSection } from './HeroSection';
import { GalleryGrid } from './GalleryGrid';
import { LightboxModal } from './LightboxModal';
import { Navbar } from './Navbar';
import { AnimatePresence } from 'framer-motion';

export const GalleryContainer: React.FC = () => {
  const { selectedItem, setSelectedItem } = useGalleryStore();

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  return (
    <div className="w-full flex flex-col relative bg-bg-page">
      <Navbar />
      <HeroSection />

      <div className="max-w-[1440px] w-full mx-auto px-4 md:px-8 lg:px-16 py-12">
        <GalleryGrid />
      </div>

      <AnimatePresence>
        {selectedItem && (
          <LightboxModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
