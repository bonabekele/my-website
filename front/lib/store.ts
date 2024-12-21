import { create } from 'zustand';

interface ThemeState {
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
}

export const useThemeStore = create<ThemeState>((set: (state: Partial<ThemeState>) => void) => ({
  primaryColor: 'hsl(var(--primary))',
  setPrimaryColor: (color: string) => set({ primaryColor: color }),
}));
