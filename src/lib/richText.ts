// Two independent content dimensions: language and depth.
export type Lang = 'en' | 'id';
export type Depth = 'plain' | 'tech';

// Sale-driving narrative: 4 variants (language x depth).
export interface RichText {
  en: { plain: string; tech: string };
  id: { plain: string; tech: string };
}

// Short UI labels: per-language only (no depth dimension).
export interface I18nText {
  en: string;
  id: string;
}

/**
 * Resolve a RichText to a string for the current language + depth.
 * Fallback order (treating empty strings as "missing"):
 *   depth tech -> plain, then language id -> en.
 */
export function resolve(t: RichText, lang: Lang, depth: Depth): string {
  const block = t[lang] ?? t.en;
  return block[depth] || block.plain || t.en[depth] || t.en.plain;
}

export function t(text: I18nText, lang: Lang): string {
  return text[lang] || text.en;
}

/** True only when all four variants are non-empty (used by tests). */
export function isRichTextComplete(rt: RichText): boolean {
  return Boolean(rt.en?.plain && rt.en?.tech && rt.id?.plain && rt.id?.tech);
}
