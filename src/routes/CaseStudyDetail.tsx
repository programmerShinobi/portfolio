import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Badge } from '@/components/ui/primitives';
import { BeforeAfterCard } from '@/components/caseStudies/BeforeAfterCard';
import { getCaseStudy, type CaseStudyDetail as Detail } from '@/data/caseStudies';
import { useI18n, useRich } from '@/hooks/usePreferences';
import { ui } from '@/data/uiStrings';
import type { I18nText, RichText } from '@/lib/richText';

const sectionTitles: Array<{ key: keyof Detail; label: I18nText }> = [
  { key: 'overview', label: { en: 'Overview', id: 'Ringkasan' } },
  { key: 'challenge', label: { en: 'The Challenge', id: 'Tantangan' } },
  { key: 'contribution', label: { en: 'My Contribution', id: 'Kontribusi Saya' } },
  { key: 'approach', label: { en: 'Technical Approach', id: 'Pendekatan Teknis' } },
  { key: 'outcome', label: { en: 'Outcome / Impact', id: 'Hasil / Dampak' } },
  { key: 'reflections', label: { en: 'Reflections', id: 'Refleksi' } },
];

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const i18n = useI18n();
  const rich = useRich();
  const study = slug ? getCaseStudy(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) {
    return (
      <Container className="py-24 text-center">
        <h1 className="text-2xl font-semibold">Case study not found</h1>
        <Link to="/#work" className="mt-4 inline-block text-brand-cyan hover:underline">
          {i18n(ui.backToWork)}
        </Link>
      </Container>
    );
  }

  return (
    <article className="py-12 sm:py-16">
      <Container className="max-w-3xl">
        <Link to="/#work" className="text-sm text-brand-cyan hover:underline">
          {i18n(ui.backToWork)}
        </Link>

        <header className="mt-6">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            {study.spotlight && (
              <Badge className="border-brand-cyan/60 text-brand-cyan">{i18n(ui.spotlightBadge)}</Badge>
            )}
            <Badge>{i18n(study.category)}</Badge>
          </div>
          <h1 className="text-3xl font-bold sm:text-4xl">{study.name}</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">{i18n(study.angle)}</p>
        </header>

        <div className="my-8">
          <BeforeAfterCard study={study} />
        </div>

        <div className="space-y-8">
          {sectionTitles.map(({ key, label }) => (
            <section key={key}>
              <h2 className="mono mb-2 text-xs uppercase tracking-widest text-brand-cyan">
                {i18n(label)}
              </h2>
              <p className="text-slate-700 dark:text-slate-200">{rich(study.detail[key] as RichText)}</p>
            </section>
          ))}
        </div>

        <footer className="mt-10 border-t border-slate-200 pt-6 dark:border-slate-800">
          <p className="mono mb-2 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {i18n(ui.techUsed)}
          </p>
          <div className="flex flex-wrap gap-2">
            {study.techUsed.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </footer>
      </Container>
    </article>
  );
}
