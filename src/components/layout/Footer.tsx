import { Github, Linkedin, Mail } from 'lucide-react';
import { Container } from '@/components/ui/primitives';
import { profile } from '@/data/profile';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-brand-cyan">
            <Mail size={18} />
          </a>
          <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer" className="hover:text-brand-cyan">
            <Linkedin size={18} />
          </a>
          <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer" className="hover:text-brand-cyan">
            <Github size={18} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
