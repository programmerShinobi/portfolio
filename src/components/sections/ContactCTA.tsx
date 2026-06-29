import { Github, Linkedin, Mail, Download, Phone } from 'lucide-react';
import { Section } from '@/components/ui/primitives';
import { useI18n } from '@/hooks/usePreferences';
import { ui } from '@/data/uiStrings';
import { profile } from '@/data/profile';
import { asset } from '@/lib/paths';

export function ContactCTA() {
  const i18n = useI18n();
  const links = [
    { href: `mailto:${profile.email}`, label: i18n(ui.emailMe), icon: Mail, primary: true },
    { href: profile.phoneHref, label: profile.phone, icon: Phone },
    { href: profile.linkedin, label: 'LinkedIn', icon: Linkedin, external: true },
    { href: profile.github, label: 'GitHub', icon: Github, external: true },
    { href: asset(profile.cvFile), label: i18n(ui.ctaDownloadCv), icon: Download, download: true },
  ];

  return (
    <Section id="contact">
      <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-8 text-center dark:border-slate-800 dark:bg-white/[0.02] sm:p-12">
        <h2 className="text-2xl font-semibold sm:text-3xl">{i18n(ui.contactTitle)}</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600 dark:text-slate-400">{i18n(ui.contactSub)}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {links.map(({ href, label, icon: Icon, primary, external, download }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              {...(download ? { download: true } : {})}
              className={
                primary
                  ? 'inline-flex items-center gap-2 rounded-full bg-brand-cyan px-5 py-2.5 text-sm font-medium text-slate-900 hover:brightness-110'
                  : 'inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium hover:border-brand-cyan dark:border-slate-700'
              }
            >
              <Icon size={16} /> {label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
