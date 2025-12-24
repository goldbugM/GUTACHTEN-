export interface GalleryItem {
  id: string;
  imageUrl: string;
  thumbnailUrl: string;
  blurHash: string;
  title: string;
  description: string;
  tags: string[];
  aspectRatio: number; // width / height
  createdAt: string;
  metadata: {
    prompt?: string;
    model?: string;
    resolution?: string;
  };
}

export interface FilterOptions {
  searchQuery: string;
  tags: string[];
}

export interface GalleryState {
  items: GalleryItem[];
  filter: FilterOptions;
  loading: boolean;
  selectedItem: GalleryItem | null;
  viewMode: 'grid' | 'masonry' | 'list';
  sortBy: 'date' | 'popularity' | 'custom';

  setItems: (items: GalleryItem[]) => void;
  setSelectedItem: (item: GalleryItem | null) => void;
  setLoading: (loading: boolean) => void;
  setFilter: (filter: Partial<FilterOptions>) => void;
}
