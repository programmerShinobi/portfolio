import type { I18nText, RichText } from '@/lib/richText';

export interface Principle {
  title: I18nText;
  body: RichText;
}

export const principles: Principle[] = [
  {
    title: { en: 'Modernize with context', id: 'Modernisasi dengan konteks' },
    body: {
      en: {
        plain:
          'Not every old system needs a full rewrite. I understand the operational context and risks before deciding how to modernize.',
        tech:
          'Assess operational constraints, coupling, and migration risk before choosing a modernization strategy (e.g. Strangler Fig over big-bang).',
      },
      id: {
        plain:
          'Tidak semua sistem lama perlu dirombak total. Saya memahami konteks operasional dan risikonya sebelum menentukan cara modernisasi.',
        tech:
          'Menilai batasan operasional, coupling, dan risiko migrasi sebelum memilih strategi modernisasi (mis. Strangler Fig ketimbang big-bang).',
      },
    },
  },
  {
    title: { en: 'Integrate before you duplicate', id: 'Integrasi sebelum duplikasi' },
    body: {
      en: {
        plain:
          'When systems are scattered, the best fix is often a clearer connection — not rebuilding everything.',
        tech:
          'Prefer a maintainable integration/access layer (e.g. FDW, anti-corruption layer) over duplicating sources.',
      },
      id: {
        plain:
          'Saat sistem tersebar, solusi terbaik sering kali koneksi yang lebih jelas — bukan membangun ulang semuanya.',
        tech:
          'Mengutamakan lapisan integrasi/akses yang maintainable (mis. FDW, anti-corruption layer) ketimbang menduplikasi sumber.',
      },
    },
  },
  {
    title: { en: 'Reliability matters as much as features', id: 'Keandalan sepenting fitur' },
    body: {
      en: {
        plain:
          'New features matter, but a slow, fragile, or insecure system erodes value over time.',
        tech:
          'Treat performance, stability, and security as first-class product concerns, not afterthoughts.',
      },
      id: {
        plain:
          'Fitur baru penting, tetapi sistem yang lambat, rapuh, atau tidak aman menggerus nilai seiring waktu.',
        tech:
          'Memperlakukan performa, stabilitas, dan keamanan sebagai concern produk utama, bukan renungan belakangan.',
      },
    },
  },
  {
    title: { en: 'Technical decisions should stay understandable', id: 'Keputusan teknis harus tetap bisa dijelaskan' },
    body: {
      en: {
        plain:
          'I aim for decisions I can explain clearly — to engineers and to non-technical stakeholders alike.',
        tech:
          'Document trade-offs (ADRs) and keep architecture explainable across technical and non-technical audiences.',
      },
      id: {
        plain:
          'Saya mengupayakan keputusan yang bisa saya jelaskan dengan jelas — baik ke engineer maupun stakeholder non-teknis.',
        tech:
          'Mendokumentasikan trade-off (ADR) dan menjaga arsitektur tetap dapat dijelaskan lintas audiens teknis dan non-teknis.',
      },
    },
  },
];
