import { Section, SectionHeading, Card } from '@/components/ui/primitives';
import { useI18n } from '@/hooks/usePreferences';
import { ui } from '@/data/uiStrings';
import type { I18nText } from '@/lib/richText';

// Metrics here are sourced from the CV (source of truth) — not invented.
const highlights: I18nText[] = [
  { en: 'Built & modernized 6+ enterprise aviation systems', id: 'Membangun & memodernisasi 6+ sistem operasional aviasi' },
  { en: 'Resolved 100% of critical BSSN security findings', id: 'Menuntaskan 100% temuan keamanan kritikal BSSN' },
  { en: 'Cut manual effort by up to 40% through modernization', id: 'Memangkas kerja manual hingga 40% lewat modernisasi' },
  { en: 'Built across backend, data, and integration layers', id: 'Membangun di lapisan backend, data, dan integrasi' },
];

export function ImpactHighlights() {
  const i18n = useI18n();
  return (
    <Section className="border-b border-slate-200 dark:border-slate-800">
      <SectionHeading eyebrow="01 — Trust" title={i18n(ui.impactTitle)} sub={i18n(ui.impactLead)} />
      <div className="grid gap-4 sm:grid-cols-2">
        {highlights.map((h) => (
          <Card key={h.en} className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-cyan" />
            <p className="text-sm text-slate-700 dark:text-slate-200">{i18n(h)}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
