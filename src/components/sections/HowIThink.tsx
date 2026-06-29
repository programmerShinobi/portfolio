import { Section, SectionHeading, Card } from '@/components/ui/primitives';
import { principles } from '@/data/principles';
import { useI18n, useRich } from '@/hooks/usePreferences';
import { ui } from '@/data/uiStrings';

export function HowIThink() {
  const i18n = useI18n();
  const rich = useRich();
  return (
    <Section id="how" className="border-b border-slate-200 dark:border-slate-800">
      <SectionHeading eyebrow="04 — Approach" title={i18n(ui.howTitle)} sub={i18n(ui.howSub)} />
      <div className="grid gap-4 sm:grid-cols-2">
        {principles.map((p, i) => (
          <Card key={p.title.en}>
            <div className="mb-2 flex items-baseline gap-3">
              <span className="mono text-sm text-brand-cyan">0{i + 1}</span>
              <h3 className="font-semibold">{i18n(p.title)}</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">{rich(p.body)}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
