import { create } from 'zustand';
import { GalleryState, GalleryItem, FilterOptions } from '@/types';

// Mock Data Generation
const generateMockItems = (count: number): GalleryItem[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `item-${i}`,
    imageUrl: `https://picsum.photos/seed/${i}/800/${800 + (i % 3) * 200}`, // Varying aspect ratios
    thumbnailUrl: `https://picsum.photos/seed/${i}/400/${400 + (i % 3) * 100}`,
    blurHash: "L6PZfSi_.AyE_3t7t7R**0o#DgR4", // Placeholder
    title: `Creative Composition ${i + 1}`,
    description: "A stunning visual exploration of form and color.",
    tags: ["art", "design", "digital"],
    aspectRatio: 800 / (800 + (i % 3) * 200),
    createdAt: new Date().toISOString(),
    metadata: {
      prompt: "Abstract geometric shapes in vibrant colors",
      model: "Stable Diffusion XL",
      resolution: "1024x1024"
    }
  }));
};

export const useGalleryStore = create<GalleryState>((set) => ({
  items: generateMockItems(24),
  filter: {
    searchQuery: '',
    tags: []
  },
  loading: false,
  selectedItem: null,
  viewMode: 'masonry',
  sortBy: 'date',

  setItems: (items) => set({ items }),
  setSelectedItem: (selectedItem) => set({ selectedItem }),
  setLoading: (loading) => set({ loading }),
  setFilter: (newFilter) => set((state) => ({
    filter: { ...state.filter, ...newFilter }
  })),
}));
