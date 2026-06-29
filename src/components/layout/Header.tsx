import { useCallback, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Container } from '@/components/ui/primitives';
import { DepthToggle, LangToggle, ThemeToggle } from './Toggles';
import { useI18n } from '@/hooks/usePreferences';
import { ui } from '@/data/uiStrings';
import type { I18nText } from '@/lib/richText';
import { cn } from '@/lib/utils';

const NAV: { id: string; label: I18nText }[] = [
  { id: 'work', label: ui.navWork },
  { id: 'how', label: ui.navHowIThink },
  { id: 'about', label: ui.navAbout },
  { id: 'contact', label: ui.navContact },
];

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export function Header() {
  const i18n = useI18n();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Smooth-scroll to a Home section. If we're on another route, go Home first.
  const goToSection = useCallback(
    (id: string) => {
      setOpen(false);
      const behavior: ScrollBehavior = prefersReducedMotion() ? 'auto' : 'smooth';
      const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior, block: 'start' });
      if (location.pathname === '/') {
        scroll();
      } else {
        navigate('/');
        window.setTimeout(scroll, 60);
      }
    },
    [location.pathname, navigate],
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/70 dark:bg-[#0b1020]/80">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="shrink-0 font-heading text-sm font-semibold tracking-tight sm:text-base"
        >
          Faqih<span className="text-brand-cyan">.</span>
          <span className="hidden text-slate-500 dark:text-slate-400 sm:inline"> Muhti</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm text-slate-600 dark:text-slate-300 md:flex">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goToSection(item.id)}
              className="transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              {i18n(item.label)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop toggles */}
          <div className="hidden items-center gap-2 md:flex">
            <LangToggle />
            <DepthToggle />
          </div>
          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="rounded-full border border-slate-300 p-1.5 text-slate-600 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:text-white md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </Container>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden border-t border-slate-200/70 transition-[max-height] duration-300 dark:border-slate-800/70 md:hidden',
          open ? 'max-h-96' : 'max-h-0',
        )}
      >
        <Container className="flex flex-col gap-1 py-3">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goToSection(item.id)}
              className="rounded-lg px-2 py-2 text-left text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
            >
              {i18n(item.label)}
            </button>
          ))}
          <div className="mt-2 flex flex-wrap items-center gap-3 border-t border-slate-200/70 pt-3 dark:border-slate-800/70">
            <span className="mono text-xs text-slate-500 dark:text-slate-400">{i18n(ui.langLabel)}</span>
            <LangToggle />
            <span className="mono text-xs text-slate-500 dark:text-slate-400">{i18n(ui.depthLabel)}</span>
            <DepthToggle />
          </div>
        </Container>
      </div>
    </header>
  );
}
