import { Section, SectionHeading } from '@/components/ui/primitives';
import { useI18n } from '@/hooks/usePreferences';
import { ui, aboutParagraphs } from '@/data/uiStrings';
import { profile } from '@/data/profile';

export function About() {
  const i18n = useI18n();
  return (
    <Section id="about" className="border-b border-slate-200 dark:border-slate-800">
      <SectionHeading eyebrow="07 — About" title={i18n(ui.aboutTitle)} />
      <div className="max-w-2xl space-y-4 text-slate-600 dark:text-slate-300">
        {aboutParagraphs.map((p) => (
          <p key={p.en}>{i18n(p)}</p>
        ))}
        <p className="mono pt-2 text-xs text-slate-500 dark:text-slate-400">{profile.education.degree}</p>
        <p className="mono text-xs text-slate-500 dark:text-slate-400">{profile.education.detail}</p>
      </div>
    </Section>
  );
}
