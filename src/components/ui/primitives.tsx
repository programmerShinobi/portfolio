import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mx-auto w-full max-w-5xl px-5 sm:px-6', className)}>{children}</div>;
}

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn('scroll-mt-20 py-16 sm:py-20', className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <header className="mb-10">
      {eyebrow && (
        <p className="mono mb-2 text-xs uppercase tracking-widest text-brand-cyan">{eyebrow}</p>
      )}
      <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
      {sub && <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">{sub}</p>}
    </header>
  );
}

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'mono inline-flex items-center rounded-full border border-slate-300 px-2.5 py-0.5 text-xs text-slate-600',
        'dark:border-slate-700 dark:text-slate-300',
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'rounded-xl border border-slate-200 bg-slate-50/60 p-5 transition-colors',
        'dark:border-slate-800 dark:bg-white/[0.02]',
        className,
      )}
    >
      {children}
    </div>
  );
}
