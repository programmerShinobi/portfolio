import { Section, SectionHeading, Card, Badge } from '@/components/ui/primitives';
import { techGroups } from '@/data/techStack';
import { useI18n } from '@/hooks/usePreferences';
import { ui } from '@/data/uiStrings';

export function TechnicalFocus() {
  const i18n = useI18n();
  return (
    <Section className="border-b border-slate-200 dark:border-slate-800">
      <SectionHeading eyebrow="05 — Stack" title={i18n(ui.focusTitle)} sub={i18n(ui.focusLead)} />
      <div className="grid gap-4 sm:grid-cols-2">
        {techGroups.map((g) => (
          <Card key={g.title.en}>
            <h3 className="mb-3 text-sm font-semibold text-brand-cyan">{i18n(g.title)}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
