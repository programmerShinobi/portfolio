import { Section, SectionHeading } from '@/components/ui/primitives';
import { CaseStudyCard } from '@/components/caseStudies/CaseStudyCard';
import { caseStudies } from '@/data/caseStudies';
import { useI18n } from '@/hooks/usePreferences';
import { ui } from '@/data/uiStrings';

export function SelectedCaseStudies() {
  const i18n = useI18n();
  // Spotlight first, then the rest.
  const ordered = [...caseStudies].sort((a, b) => Number(b.spotlight) - Number(a.spotlight));

  return (
    <Section id="work" className="border-b border-slate-200 dark:border-slate-800">
      <SectionHeading eyebrow="03 — Work" title={i18n(ui.workTitle)} sub={i18n(ui.workSub)} />
      <div className="grid gap-6">
        {ordered.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </Section>
  );
}
