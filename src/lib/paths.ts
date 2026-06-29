/**
 * Build a path to a public asset that respects Vite's `base` (and therefore the
 * GitHub Pages sub-path). Never hardcode a leading '/'.
 *
 *   asset('cv-faqih-pratama-muhti.pdf') -> '/portfolio/cv-faqih-pratama-muhti.pdf'
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path.replace(/^\//, '')}`;
}
