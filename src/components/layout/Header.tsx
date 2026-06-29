import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/primitives';
import { DepthToggle, LangToggle, ThemeToggle } from './Toggles';
import { useI18n } from '@/hooks/usePreferences';
import { ui } from '@/data/uiStrings';

export function Header() {
  const i18n = useI18n();
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/70 dark:bg-[#0b1020]/80">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link to="/" className="font-heading text-sm font-semibold tracking-tight sm:text-base">
          Faqih<span className="text-brand-cyan">.</span>
          <span className="hidden text-slate-500 dark:text-slate-400 sm:inline"> Muhti</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 dark:text-slate-300 md:flex">
          <a href="/#work" className="hover:text-slate-900 dark:hover:text-white">
            {i18n(ui.navWork)}
          </a>
          <a href="/#how" className="hover:text-slate-900 dark:hover:text-white">
            {i18n(ui.navHowIThink)}
          </a>
          <a href="/#about" className="hover:text-slate-900 dark:hover:text-white">
            {i18n(ui.navAbout)}
          </a>
          <a href="/#contact" className="hover:text-slate-900 dark:hover:text-white">
            {i18n(ui.navContact)}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle />
          <DepthToggle />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
