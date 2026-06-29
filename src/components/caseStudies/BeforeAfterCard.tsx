import { ArrowRight } from 'lucide-react';
import type { CaseStudy } from '@/data/caseStudies';
import { useI18n, useRich } from '@/hooks/usePreferences';
import { ui } from '@/data/uiStrings';

export function BeforeAfterCard({ study }: { study: CaseStudy }) {
  const i18n = useI18n();
  const rich = useRich();
  return (
    <div className="grid gap-3 sm:grid-cols-[1fr_auto_1.2fr] sm:items-stretch">
      <div className="rounded-lg border border-slate-200 bg-slate-50/60 p-4 dark:border-slate-800 dark:bg-white/[0.02]">
        <p className="mono mb-2 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {i18n(ui.before)}
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-300">{i18n(study.before)}</p>
      </div>
      <div className="flex items-center justify-center text-brand-cyan" aria-hidden="true">
        <ArrowRight className="hidden sm:block" />
        <ArrowRight className="rotate-90 sm:hidden" />
      </div>
      <div className="rounded-lg border border-brand-cyan/40 bg-brand-cyan/[0.06] p-4">
        <p className="mono mb-2 text-xs uppercase tracking-wider text-brand-cyan">{i18n(ui.after)}</p>
        <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{rich(study.impact)}</p>
      </div>
    </div>
  );
}
