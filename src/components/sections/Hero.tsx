import { ArrowRight, Download } from 'lucide-react';
import { Container } from '@/components/ui/primitives';
import { useI18n } from '@/hooks/usePreferences';
import { ui } from '@/data/uiStrings';
import { asset } from '@/lib/paths';
import { profile } from '@/data/profile';

export function Hero() {
  const i18n = useI18n();
  const outcomes = [ui.outcome1, ui.outcome2, ui.outcome3];

  return (
    <section className="blueprint relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
      <Container className="py-20 sm:py-28">
        <div className="max-w-3xl animate-fade-up">
          <p className="mono mb-4 text-xs uppercase tracking-widest text-brand-cyan">
            {profile.role}
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-5xl">{i18n(ui.heroHeadline)}</h1>
          <p className="mt-6 max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            {i18n(ui.heroSub)}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-brand-cyan px-5 py-2.5 text-sm font-medium text-slate-900 hover:brightness-110"
            >
              {i18n(ui.ctaViewWork)} <ArrowRight size={16} />
            </a>
            <a
              href={asset(profile.cvFile)}
              download
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium hover:border-brand-cyan dark:border-slate-700"
            >
              <Download size={16} /> {i18n(ui.ctaDownloadCv)}
            </a>
          </div>

          <ul className="mono mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
            {outcomes.map((o) => (
              <li key={o.en} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" /> {i18n(o)}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
