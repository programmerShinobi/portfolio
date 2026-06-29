import { createContext } from 'react';
import type { Depth, Lang } from '@/lib/richText';

export type Theme = 'light' | 'dark';

export interface Preferences {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  depth: Depth;
  setDepth: (d: Depth) => void;
}

export const PreferencesContext = createContext<Preferences | null>(null);
