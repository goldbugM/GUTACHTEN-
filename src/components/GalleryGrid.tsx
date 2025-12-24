"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { GalleryItem } from '@/types';
import { useGalleryStore } from '@/store/galleryStore';
import { GalleryCard } from './GalleryCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useWindowWidth } from '@/hooks/useWindowWidth';

gsap.registerPlugin(ScrollTrigger);

export const GalleryGrid: React.FC = () => {
  const { items } = useGalleryStore();
  const [filter, setFilter] = useState('All');
  const gridRef = useRef<HTMLDivElement>(null);
  const windowWidth = useWindowWidth();
  const [columnCount, setColumnCount] = useState(3);

  const categories = ['All', 'Portraits', 'Landscapes', 'Abstract', '3D Render'];

  // Update column count based on window width
  useEffect(() => {
    if (windowWidth < 640) {
      setColumnCount(1);
    } else if (windowWidth < 1024) {
      setColumnCount(2);
    } else {
      setColumnCount(3);
    }
  }, [windowWidth]);

  // Simulate filtering for the UI demo
  const filteredItems = filter === 'All'
    ? items
    : items.filter((_, i) => i % categories.length === categories.indexOf(filter));

  // Split items into dynamic columns for masonry layout
  const columns: GalleryItem[][] = Array.from({ length: columnCount }, () => []);
  filteredItems.forEach((item, i) => {
    columns[i % columnCount].push(item);
  });

  useEffect(() => {
    if (!gridRef.current) return;

    // Parallax effect using GSAP
    // We animate odd columns differently than even columns to create depth
    const ctx = gsap.context(() => {
      // Select all columns
      const cols = gridRef.current?.querySelectorAll('.masonry-column');

      if(cols) {
         cols.forEach((col, i) => {
           // Only apply parallax on desktop/tablet to avoid jitter on mobile
           if (window.innerWidth < 640) return;

           // Every second column moves faster
           const speed = i % 2 === 0 ? 0.05 : -0.05;

           gsap.to(col, {
             y: (index, target) => ScrollTrigger.maxScroll(window) * speed,
             ease: "none",
             scrollTrigger: {
               trigger: gridRef.current,
               start: "top bottom",
               end: "bottom top",
               scrub: 0.5, // smooth lag
             }
           });
         });
      }
    }, gridRef);

    return () => ctx.revert();
  }, [filteredItems, columnCount]);


  return (
    <div className="w-full">
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-4 mb-12 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === category
                ? 'bg-black text-white shadow-lg scale-105'
                : 'bg-white text-text-secondary hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Grid Construction */}
      <motion.div
        layout
        ref={gridRef}
        className={`grid gap-6 md:gap-8 items-start ${
          columnCount === 1 ? 'grid-cols-1' : columnCount === 2 ? 'grid-cols-2' : 'grid-cols-3'
        }`}
      >
        <LayoutGroup>
          {Array.from({ length: columnCount }).map((_, colIndex) => (
            <div
              key={`col-${colIndex}`}
              className={`masonry-column flex flex-col gap-6 md:gap-8 ${
                // Apply visual offset to the middle column in 3-col layout for masonry feel
                colIndex === 1 && columnCount === 3 ? 'pt-0 lg:pt-16' : ''
              }`}
            >
              {columns[colIndex].map((item, itemIndex) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  index={itemIndex * columnCount + colIndex}
                />
              ))}
            </div>
          ))}
        </LayoutGroup>
      </motion.div>
    </div>
  );
};
