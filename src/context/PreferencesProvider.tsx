import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Depth, Lang } from '@/lib/richText';
import { PreferencesContext, type Theme } from './preferencesContext';

function readTheme(): Theme {
  if (typeof document !== 'undefined' && document.documentElement.classList.contains('dark')) {
    return 'dark';
  }
  const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
  return stored === 'light' ? 'light' : 'dark';
}

function readLang(): Lang {
  const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : null;
  if (stored === 'en' || stored === 'id') return stored;
  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('id')) {
    return 'id';
  }
  return 'en';
}

function readDepth(): Depth {
  const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('depth') : null;
  return stored === 'tech' ? 'tech' : 'plain';
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(readTheme);
  const [lang, setLangState] = useState<Lang>(readLang);
  const [depth, setDepthState] = useState<Depth>(readDepth);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('depth', depth);
  }, [depth]);

  const setTheme = useCallback((t: Theme) => setThemeState(t), []);
  const toggleTheme = useCallback(() => setThemeState((t) => (t === 'dark' ? 'light' : 'dark')), []);
  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const setDepth = useCallback((d: Depth) => setDepthState(d), []);

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme, lang, setLang, depth, setDepth }),
    [theme, setTheme, toggleTheme, lang, setLang, depth, setDepth],
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}
