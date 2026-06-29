import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { CaseStudy } from '@/data/caseStudies';
import { Badge } from '@/components/ui/primitives';
import { BeforeAfterCard } from './BeforeAfterCard';
import { useI18n } from '@/hooks/usePreferences';
import { ui } from '@/data/uiStrings';
import { cn } from '@/lib/utils';

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const i18n = useI18n();
  const spotlight = study.spotlight;

  return (
    <article
      className={cn(
        'rounded-2xl border p-6 transition-colors',
        spotlight
          ? 'border-brand-cyan/40 bg-brand-cyan/[0.04]'
          : 'border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-white/[0.02]',
      )}
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        {spotlight && <Badge className="border-brand-cyan/60 text-brand-cyan">{i18n(ui.spotlightBadge)}</Badge>}
        <Badge>{i18n(study.category)}</Badge>
      </div>

      <h3 className="text-xl font-semibold">{study.name}</h3>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{i18n(study.summary)}</p>

      <div className="my-5">
        <BeforeAfterCard study={study} />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <ul className="mono flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
          {study.techUsed.slice(0, 5).map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <Link
          to={`/case-studies/${study.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-brand-cyan hover:underline"
        >
          {i18n(ui.readCaseStudy)} <ArrowUpRight size={15} />
        </Link>
      </div>
    </article>
  );
}
