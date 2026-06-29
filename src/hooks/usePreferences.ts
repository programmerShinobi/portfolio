import { useContext } from 'react';
import { PreferencesContext } from '@/context/preferencesContext';
import { resolve, t as translate, type I18nText, type RichText } from '@/lib/richText';

export function usePreferences() {
  const ctx = useContext(PreferencesContext);
  if (!ctx) throw new Error('usePreferences must be used within <PreferencesProvider>');
  return ctx;
}

export function useTheme() {
  const { theme, setTheme, toggleTheme } = usePreferences();
  return { theme, setTheme, toggleTheme };
}

export function useLang() {
  const { lang, setLang } = usePreferences();
  return { lang, setLang };
}

export function useDepth() {
  const { depth, setDepth } = usePreferences();
  return { depth, setDepth };
}

/** Resolve a RichText with the current language + depth. */
export function useRich(): (rt: RichText) => string {
  const { lang, depth } = usePreferences();
  return (rt: RichText) => resolve(rt, lang, depth);
}

/** Resolve a short I18nText label with the current language. */
export function useI18n(): (text: I18nText) => string {
  const { lang } = usePreferences();
  return (text: I18nText) => translate(text, lang);
}
