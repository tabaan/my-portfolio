
// Added React import to resolve React.ReactNode namespace error.
import React from 'react';

export enum Tab {
  HOME = 'home',
  ABOUT = 'about',
  PRODUCTS = 'products'
}

export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  color: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}