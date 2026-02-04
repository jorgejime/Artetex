
import React from 'react';

export type View = 'home' | 'services' | 'collection' | 'process' | 'about' | 'contact';

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  aspectRatio: string;
  isFeatured?: boolean;
}

export interface NavItem {
  label: string;
  icon: React.ReactNode;
  view: View;
}
