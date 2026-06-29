import { Github, ExternalLink } from 'lucide-react';
import { Section, SectionHeading, Card, Badge } from '@/components/ui/primitives';
import { useI18n, useRich } from '@/hooks/usePreferences';
import { ui } from '@/data/uiStrings';
import type { RichText } from '@/lib/richText';

const repo = 'https://github.com/programmerShinobi/architecture-advisor';
const demo = 'https://programmershinobi.github.io/architecture-advisor/';

const body: RichText = {
  en: {
    plain:
      'Through architecture-advisor, I turn how an architecture consultant reasons into an interactive tool — describe a system’s needs, and it guides toward a sensible recommendation. A self-initiated project.',
    tech:
      'A client-side web app that encodes architecture-selection reasoning into a rule-based recommendation engine, deployed on GitHub Pages — translating complex decision-making into a deterministic, reusable system.',
  },
  id: {
    plain:
      'Lewat architecture-advisor, saya mengubah cara seorang konsultan arsitektur bernalar menjadi alat interaktif — jelaskan kebutuhan sistemnya, dan alat ini memandu ke rekomendasi yang masuk akal. Project atas inisiatif pribadi.',
    tech:
      'Web app sisi-klien yang mengkodekan reasoning pemilihan arsitektur menjadi recommendation engine berbasis aturan, di-deploy di GitHub Pages — menerjemahkan decision-making kompleks menjadi sistem deterministik dan reusable.',
  },
};

export function PersonalExploration() {
  const i18n = useI18n();
  const rich = useRich();
  return (
    <Section className="border-b border-slate-200 dark:border-slate-800">
      <SectionHeading eyebrow="06 — Exploration" title={i18n(ui.exploreTitle)} sub={i18n(ui.exploreSub)} />
      <Card>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold">architecture-advisor</h3>
          <Badge className="border-amber-400/60 text-amber-500">🚧 {i18n(ui.inProgress)}</Badge>
        </div>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">{rich(body)}</p>
        <div className="mt-5 flex flex-wrap gap-4 text-sm">
          <a href={repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-brand-cyan hover:underline">
            <Github size={15} /> {i18n(ui.followBuild)}
          </a>
          <a href={demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-slate-500 hover:text-brand-cyan dark:text-slate-400">
            <ExternalLink size={15} /> {i18n(ui.liveDemo)}
          </a>
        </div>
      </Card>
    </Section>
  );
}
