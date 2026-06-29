import { createElement } from 'react';
import type { RichText } from '@/lib/richText';
import { useRich } from '@/hooks/usePreferences';

interface RichTextViewProps {
  value: RichText;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

/** Renders a RichText resolved against the current language + depth toggles. */
export function RichTextView({ value, as = 'p', className }: RichTextViewProps) {
  const rich = useRich();
  return createElement(as, { className }, rich(value));
}
