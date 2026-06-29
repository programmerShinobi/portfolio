import { lazy, Suspense } from 'react';
import { Section, SectionHeading } from '@/components/ui/primitives';
import { skills } from '@/data/skills';
import { useI18n, useRich } from '@/hooks/usePreferences';
import { ui } from '@/data/uiStrings';

// Lazy-load the chart so Recharts does not weigh down first paint.
const SkillsRadar = lazy(() =>
  import('@/components/skills/SkillsRadar').then((m) => ({ default: m.SkillsRadar })),
);

export function CapabilityRadar() {
  const i18n = useI18n();
  const rich = useRich();

  return (
    <Section id="capabilities" className="border-b border-slate-200 dark:border-slate-800">
      <SectionHeading eyebrow="02 — Capability" title={i18n(ui.radarTitle)} sub={i18n(ui.radarSub)} />

      <div className="grid items-start gap-8 lg:grid-cols-2">
        <Suspense
          fallback={<div className="h-[360px] w-full animate-pulse rounded-xl bg-slate-100 dark:bg-white/[0.03] sm:h-[420px]" />}
        >
          <SkillsRadar />
        </Suspense>

        {/* Accessible text equivalent of the chart. */}
        <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[20rem] text-left text-sm">
            <caption className="sr-only">{i18n(ui.radarTableCaption)}</caption>
            <thead className="mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <tr className="border-b border-slate-200 dark:border-slate-800">
                <th scope="col" className="py-2 pr-2">{i18n(ui.colCapability)}</th>
                <th scope="col" className="py-2 pr-2">{i18n(ui.colLevel)}</th>
                <th scope="col" className="py-2">{i18n(ui.colEvidence)}</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((s) => (
                <tr key={s.axis.en} className="border-b border-slate-100 align-top dark:border-slate-800/60">
                  <th scope="row" className="py-3 pr-2 font-medium">
                    {i18n(s.axis)}
                    <span className="mt-1 block text-xs font-normal text-slate-500 dark:text-slate-400">
                      {rich(s.label)}
                    </span>
                  </th>
                  <td className="mono py-3 pr-2 text-brand-cyan">{s.level}</td>
                  <td className="py-3 text-xs text-slate-500 dark:text-slate-400">
                    {s.evidence.join(', ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">{i18n(ui.radarNote)}</p>
        </div>
      </div>
    </Section>
  );
}
