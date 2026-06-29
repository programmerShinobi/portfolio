import type { I18nText } from '@/lib/richText';

export const ui: Record<string, I18nText> = {
  // nav / header
  navWork: { en: 'Work', id: 'Karya' },
  navHowIThink: { en: 'How I Think', id: 'Cara Berpikir' },
  navAbout: { en: 'About', id: 'Tentang' },
  navContact: { en: 'Contact', id: 'Kontak' },

  // hero
  heroHeadline: {
    en: 'Software Engineer building clarity for complex systems.',
    id: 'Software Engineer yang membangun kejelasan untuk sistem kompleks.',
  },
  heroSub: {
    en: 'With experience in backend engineering, system integration, security remediation, and legacy modernization, I build solutions that don’t just run — they create real operational impact.',
    id: 'Dengan pengalaman di backend engineering, integrasi sistem, remediasi keamanan, dan modernisasi legacy, saya membangun solusi yang tidak sekadar berjalan — tetapi memberi dampak operasional nyata.',
  },
  ctaViewWork: { en: 'View Case Studies', id: 'Lihat Studi Kasus' },
  ctaContact: { en: 'Contact Me', id: 'Hubungi Saya' },
  ctaDownloadCv: { en: 'Download CV', id: 'Unduh CV' },

  outcome1: { en: 'Modernize legacy workflows', id: 'Modernisasi alur kerja legacy' },
  outcome2: { en: 'Connect data across systems', id: 'Menghubungkan data lintas sistem' },
  outcome3: { en: 'Strengthen reliability and security', id: 'Memperkuat keandalan dan keamanan' },

  // sections
  impactTitle: { en: 'Where I create value', id: 'Di mana saya memberi nilai' },
  impactLead: {
    en: 'My work sits where complexity matters most: operational reliability, fragmented systems, legacy constraints, and decisions that affect real workflows.',
    id: 'Pekerjaan saya berada di titik di mana kompleksitas paling penting: keandalan operasional, sistem terfragmentasi, batasan legacy, dan keputusan yang memengaruhi alur kerja nyata.',
  },
  radarTitle: { en: 'Capability Map', id: 'Peta Kapabilitas' },
  radarSub: {
    en: 'A practical view of where I create the most value across software systems.',
    id: 'Pandangan praktis tentang di mana saya memberi nilai terbesar di seluruh sistem software.',
  },
  radarNote: {
    en: 'This is not a generic skill list. It reflects areas where I have repeatedly worked on real systems, operational workflows, and architecture decisions. Levels are self-assessed proficiency.',
    id: 'Ini bukan daftar skill generik. Ini mencerminkan area di mana saya berulang kali bekerja pada sistem nyata, alur operasional, dan keputusan arsitektur. Level adalah proficiency yang dinilai sendiri.',
  },
  radarTableCaption: { en: 'Capability levels (text equivalent)', id: 'Level kapabilitas (padanan teks)' },
  colCapability: { en: 'Capability', id: 'Kapabilitas' },
  colLevel: { en: 'Level', id: 'Level' },
  colEvidence: { en: 'Evidence', id: 'Bukti' },

  workTitle: { en: 'Selected Case Studies', id: 'Studi Kasus Pilihan' },
  workSub: {
    en: 'Clear problems, real contributions, honest impact.',
    id: 'Masalah yang jelas, kontribusi nyata, dampak yang jujur.',
  },
  spotlightBadge: { en: 'Spotlight', id: 'Sorotan' },
  readCaseStudy: { en: 'Read case study', id: 'Baca studi kasus' },
  before: { en: 'Before', id: 'Sebelum' },
  after: { en: 'After (impact)', id: 'Sesudah (dampak)' },
  backToWork: { en: '← Back to all work', id: '← Kembali ke semua karya' },
  techUsed: { en: 'Tech used', id: 'Teknologi yang dipakai' },

  howTitle: { en: 'How I Think', id: 'Cara Saya Berpikir' },
  howSub: {
    en: 'Architecture thinking, grounded in delivery.',
    id: 'Berpikir arsitektur, berpijak pada delivery.',
  },

  focusTitle: { en: 'Technical Focus', id: 'Fokus Teknis' },
  focusLead: {
    en: 'I work across the layers where system clarity matters most: backend logic, data access, integration boundaries, and the operational realities around them.',
    id: 'Saya bekerja di lapisan tempat kejelasan sistem paling penting: logika backend, akses data, batas integrasi, dan realitas operasional di sekitarnya.',
  },

  exploreTitle: { en: 'Personal Exploration', id: 'Eksplorasi Pribadi' },
  exploreSub: {
    en: 'I also build side projects to explore architectural thinking and how technical reasoning can become useful tools.',
    id: 'Saya juga membangun side project untuk mengeksplorasi pemikiran arsitektur dan bagaimana penalaran teknis bisa menjadi alat yang berguna.',
  },
  inProgress: { en: 'In Progress', id: 'Sedang Dikembangkan' },
  followBuild: { en: 'Follow the build on GitHub', id: 'Ikuti progresnya di GitHub' },
  liveDemo: { en: 'Live demo', id: 'Demo langsung' },

  aboutTitle: { en: 'About', id: 'Tentang' },

  contactTitle: { en: 'Let’s build better systems', id: 'Mari bangun sistem yang lebih baik' },
  contactSub: {
    en: 'If you’re working on legacy modernization, backend platforms, or integration-heavy systems, I’d be happy to connect.',
    id: 'Jika Anda sedang mengerjakan modernisasi legacy, platform backend, atau sistem yang padat integrasi, saya senang untuk terhubung.',
  },
  emailMe: { en: 'Email Me', id: 'Email Saya' },

  // toggles (accessible labels)
  themeLabel: { en: 'Toggle theme', id: 'Ganti tema' },
  langLabel: { en: 'Language', id: 'Bahasa' },
  depthLabel: { en: 'Depth', id: 'Kedalaman' },
  depthPlain: { en: 'Plain', id: 'Awam' },
  depthTech: { en: 'Tech', id: 'Teknis' },
};

export const aboutParagraphs: I18nText[] = [
  {
    en: 'I’m a software engineer with around 3 years of experience and a strong interest in backend systems, data integration, and modernization work — having built and modernized 6+ enterprise aviation systems. I enjoy problems where technical decisions have real operational consequences, especially systems that are complex, legacy-heavy, or spread across multiple sources of truth.',
    id: 'Saya seorang software engineer dengan pengalaman sekitar 3 tahun dan minat kuat pada sistem backend, integrasi data, dan pekerjaan modernisasi — telah membangun dan memodernisasi 6+ sistem operasional aviasi. Saya menikmati masalah di mana keputusan teknis berdampak operasional nyata, terutama sistem yang kompleks, sarat legacy, atau tersebar di banyak sumber kebenaran.',
  },
  {
    en: 'My approach is grounded in clarity: understanding existing constraints, improving what matters most, and building solutions that are maintainable, reliable, and understandable across teams.',
    id: 'Pendekatan saya berpijak pada kejelasan: memahami batasan yang ada, memperbaiki yang paling penting, dan membangun solusi yang mudah dipelihara, andal, dan dapat dipahami lintas tim.',
  },
  {
    en: 'I’m currently a Backend & Full Stack Developer working on aviation systems (GMF AeroAsia project), and I’m open to work involving backend, integration, and modernization challenges.',
    id: 'Saat ini saya seorang Backend & Full Stack Developer yang menangani sistem penerbangan (proyek GMF AeroAsia), dan saya terbuka untuk pekerjaan yang melibatkan tantangan backend, integrasi, dan modernisasi.',
  },
];
