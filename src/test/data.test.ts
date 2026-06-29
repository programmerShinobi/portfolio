import { describe, expect, it } from 'vitest';
import { isRichTextComplete, type RichText } from '@/lib/richText';
import { caseStudies } from '@/data/caseStudies';
import { skills } from '@/data/skills';
import { principles } from '@/data/principles';

// Collect every RichText in the data layer so we can assert completeness.
function collectRichTexts(): Array<{ where: string; rt: RichText }> {
  const out: Array<{ where: string; rt: RichText }> = [];

  for (const cs of caseStudies) {
    out.push({ where: `caseStudy(${cs.slug}).impact`, rt: cs.impact });
    for (const [key, rt] of Object.entries(cs.detail)) {
      out.push({ where: `caseStudy(${cs.slug}).detail.${key}`, rt });
    }
  }
  for (const s of skills) out.push({ where: `skill(${s.axis.en}).label`, rt: s.label });
  for (const p of principles) out.push({ where: `principle(${p.title.en}).body`, rt: p.body });

  return out;
}

describe('content integrity', () => {
  it('every RichText has all four variants filled', () => {
    const incomplete = collectRichTexts().filter(({ rt }) => !isRichTextComplete(rt));
    expect(incomplete.map((x) => x.where)).toEqual([]);
  });

  it('case study slugs are unique', () => {
    const slugs = caseStudies.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('exactly one spotlight case study', () => {
    expect(caseStudies.filter((c) => c.spotlight).length).toBe(1);
  });

  it('skill levels are within 0..100 and not all 100', () => {
    expect(skills.every((s) => s.level >= 0 && s.level <= 100)).toBe(true);
    expect(skills.every((s) => s.level === 100)).toBe(false);
  });

  // AHI is a backend/data project — it must never list React (matches the CV).
  it('AHI does not use React', () => {
    const ahi = caseStudies.find((c) => c.slug === 'ahi');
    expect(ahi).toBeDefined();
    const hasReact = ahi!.techUsed.some((t) => /react/i.test(t));
    expect(hasReact).toBe(false);
  });
});
