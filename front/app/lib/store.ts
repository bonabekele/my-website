"use client";

import { create } from 'zustand';

interface ThemeState {
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  primaryColor: 'hsl(var(--primary))',
  setPrimaryColor: (color) => set({ primaryColor: color }),
}));