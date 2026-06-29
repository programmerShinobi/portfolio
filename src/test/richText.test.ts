import { describe, expect, it } from 'vitest';
import { resolve, isRichTextComplete, type RichText } from '@/lib/richText';

const full: RichText = {
  en: { plain: 'en-plain', tech: 'en-tech' },
  id: { plain: 'id-plain', tech: 'id-tech' },
};

describe('resolve()', () => {
  it('returns the exact variant for each combination', () => {
    expect(resolve(full, 'en', 'plain')).toBe('en-plain');
    expect(resolve(full, 'en', 'tech')).toBe('en-tech');
    expect(resolve(full, 'id', 'plain')).toBe('id-plain');
    expect(resolve(full, 'id', 'tech')).toBe('id-tech');
  });

  it('falls back depth tech -> plain when tech is empty', () => {
    const t: RichText = { en: { plain: 'p', tech: '' }, id: { plain: 'ip', tech: '' } };
    expect(resolve(t, 'en', 'tech')).toBe('p');
    expect(resolve(t, 'id', 'tech')).toBe('ip');
  });

  it('falls back language id -> en when the id block is empty', () => {
    const t: RichText = { en: { plain: 'p', tech: 't' }, id: { plain: '', tech: '' } };
    expect(resolve(t, 'id', 'tech')).toBe('t');
    expect(resolve(t, 'id', 'plain')).toBe('p');
  });
});

describe('isRichTextComplete()', () => {
  it('is true only when all four variants are non-empty', () => {
    expect(isRichTextComplete(full)).toBe(true);
    expect(isRichTextComplete({ en: { plain: 'a', tech: 'b' }, id: { plain: 'c', tech: '' } })).toBe(false);
  });
});
