import type { I18nText, RichText } from '@/lib/richText';

export interface SkillAxis {
  axis: I18nText;
  short: I18nText; // concise label used on the radar chart (full name stays in the table)
  level: number; // 0-100, self-assessed
  label: RichText;
  evidence: string[];
}

// Self-assessed proficiency. Intentionally NOT all 100 — a realistic, specialist shape.
export const skills: SkillAxis[] = [
  {
    axis: { en: 'Backend Engineering', id: 'Backend Engineering' },
    short: { en: 'Backend', id: 'Backend' },
    level: 90,
    label: {
      en: {
        plain: 'Building the reliable server-side core that everything else depends on.',
        tech: 'Production backends with Node.js/NestJS and Spring Boot in aviation systems.',
      },
      id: {
        plain: 'Membangun inti sisi-server yang andal sebagai tumpuan semua bagian lain.',
        tech: 'Backend produksi dengan Node.js/NestJS dan Spring Boot pada sistem penerbangan.',
      },
    },
    evidence: ['AHI', 'XOPS', 'E-Techpub', 'NestJS', 'Spring Boot'],
  },
  {
    axis: { en: 'Database & Data', id: 'Database & Data' },
    short: { en: 'Data', id: 'Data' },
    level: 88,
    label: {
      en: {
        plain: 'Designing how data is stored, connected, and made ready to analyze.',
        tech: 'PostgreSQL/MySQL/MSSQL, schema design, FDW, and Elasticsearch as an analytical store.',
      },
      id: {
        plain: 'Merancang cara data disimpan, dihubungkan, dan disiapkan untuk dianalisis.',
        tech: 'PostgreSQL/MySQL/MSSQL, desain skema, FDW, dan Elasticsearch sebagai analytical store.',
      },
    },
    evidence: ['AHI', 'Cross-DB FDW', 'Elasticsearch', 'PostgreSQL'],
  },
  {
    axis: { en: 'System Integration', id: 'Integrasi Sistem' },
    short: { en: 'Integration', id: 'Integrasi' },
    level: 85,
    label: {
      en: {
        plain: 'Connecting scattered systems so data flows as if from one source.',
        tech: 'Cross-database access via FDW and multi-source integration feeding analytics.',
      },
      id: {
        plain: 'Menghubungkan sistem yang tersebar agar data mengalir seolah dari satu sumber.',
        tech: 'Akses lintas-database via FDW dan integrasi multi-sumber yang memasok analitik.',
      },
    },
    evidence: ['AHI', 'Cross-DB FDW'],
  },
  {
    axis: { en: 'Security & Remediation', id: 'Keamanan & Remediasi' },
    short: { en: 'Security', id: 'Keamanan' },
    level: 78,
    label: {
      en: {
        plain: 'Finding and closing the most serious security gaps.',
        tech: 'Led hardening that closed critical BSSN penetration-test findings.',
      },
      id: {
        plain: 'Menemukan dan menutup celah keamanan yang paling serius.',
        tech: 'Memimpin hardening yang menutup temuan kritikal penetration test BSSN.',
      },
    },
    evidence: ['AHI', 'BSSN hardening'],
  },
  {
    axis: { en: 'Legacy Modernization', id: 'Modernisasi Legacy' },
    short: { en: 'Modernization', id: 'Modernisasi' },
    level: 82,
    label: {
      en: {
        plain: 'Turning slow, old systems into modern, scalable ones — without stopping operations.',
        tech: 'Rebuilding legacy workflows incrementally toward maintainable platforms.',
      },
      id: {
        plain: 'Mengubah sistem lama yang lambat menjadi modern dan scalable — tanpa menghentikan operasional.',
        tech: 'Membangun ulang alur legacy secara bertahap menuju platform yang mudah dipelihara.',
      },
    },
    evidence: ['E-Techpub', 'OLAPS'],
  },
  {
    axis: { en: 'API Design', id: 'Desain API' },
    short: { en: 'API', id: 'API' },
    level: 80,
    label: {
      en: {
        plain: 'Designing clear, dependable ways for systems to talk to each other.',
        tech: 'REST and GraphQL (incl. query optimization) with Swagger/OpenAPI.',
      },
      id: {
        plain: 'Merancang cara yang jelas dan andal agar sistem saling berbicara.',
        tech: 'REST dan GraphQL (termasuk optimasi query) dengan Swagger/OpenAPI.',
      },
    },
    evidence: ['IERApps', 'GraphQL', 'REST'],
  },
  {
    axis: { en: 'Frontend', id: 'Frontend' },
    short: { en: 'Frontend', id: 'Frontend' },
    level: 70,
    label: {
      en: {
        plain: 'Building the screens people actually use.',
        tech: 'Angular (e.g. XPREAM), with React.js and Next.js for operational web UIs.',
      },
      id: {
        plain: 'Membangun layar yang benar-benar dipakai orang.',
        tech: 'Angular (mis. XPREAM), dengan React.js dan Next.js untuk UI web operasional.',
      },
    },
    evidence: ['XPREAM', 'Angular', 'React.js'],
  },
  {
    axis: { en: 'DevOps & Delivery', id: 'DevOps & Delivery' },
    short: { en: 'DevOps', id: 'DevOps' },
    level: 68,
    label: {
      en: {
        plain: 'Shipping work reliably and working well in a team.',
        tech: 'Docker, Git, CI/CD, and Agile/Scrum delivery.',
      },
      id: {
        plain: 'Mengirim hasil kerja secara andal dan bekerja baik dalam tim.',
        tech: 'Docker, Git, CI/CD, dan delivery Agile/Scrum.',
      },
    },
    evidence: ['Docker', 'Git', 'Scrum'],
  },
];
