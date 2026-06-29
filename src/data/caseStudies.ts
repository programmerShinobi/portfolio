import type { I18nText, RichText } from '@/lib/richText';

export interface CaseStudyDetail {
  overview: RichText;
  challenge: RichText;
  contribution: RichText;
  approach: RichText;
  outcome: RichText;
  reflections: RichText;
}

export interface CaseStudy {
  slug: string;
  name: string;
  category: I18nText;
  angle: I18nText;
  summary: I18nText;
  before: I18nText;
  action: I18nText;
  impact: RichText;
  techUsed: string[];
  detail: CaseStudyDetail;
  spotlight?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ahi',
    name: 'AHI — Aircraft Health Index',
    spotlight: true,
    category: { en: 'Security · Integration · Analytics', id: 'Keamanan · Integrasi · Analitik' },
    angle: {
      en: 'Security, integration, and analytics readiness in a mission-relevant operational context.',
      id: 'Keamanan, integrasi, dan kesiapan analitik dalam konteks operasional yang kritikal.',
    },
    summary: {
      en: 'A backend and data platform that centralized aircraft health information, prepared it for analysis, and strengthened security.',
      id: 'Platform backend dan data yang memusatkan informasi kesehatan pesawat, menyiapkannya untuk analisis, dan memperkuat keamanan.',
    },
    before: {
      en: 'Fleet-health data was scattered across many systems and databases; monitoring was manual; a penetration test (BSSN) raised critical security findings.',
      id: 'Data kesehatan armada tersebar di banyak sistem dan database; pemantauan manual; penetration test (BSSN) memunculkan temuan keamanan kritikal.',
    },
    action: {
      en: 'Built and maintained a monitoring platform integrating heterogeneous databases, streamed the result into Elasticsearch, and led security hardening.',
      id: 'Membangun dan memelihara platform monitoring yang mengintegrasikan database heterogen, mengalirkan hasilnya ke Elasticsearch, dan memimpin security hardening.',
    },
    impact: {
      en: {
        plain:
          'Fleet-health data from many sources now lives behind one door and is ready to analyze — opening the way to predict problems earlier — while 100% of the critical security findings were closed.',
        tech:
          'Unified multi-source operational data into a single access surface with an Elasticsearch analytical store (separated from the transactional store), enabling fast aggregate/trend queries and a path to predictive maintenance; resolved 100% of critical BSSN penetration-test findings.',
      },
      id: {
        plain:
          'Data kesehatan armada dari banyak sumber kini berada di satu pintu dan siap dianalisis — membuka jalan untuk memprediksi masalah lebih awal — sementara 100% temuan keamanan kritikal berhasil ditutup.',
        tech:
          'Menyatukan data operasional multi-sumber menjadi satu lapisan akses dengan analytical store Elasticsearch (terpisah dari transactional store), memungkinkan query agregat/tren yang cepat dan jalan menuju predictive maintenance; menuntaskan 100% temuan kritikal penetration test BSSN.',
      },
    },
    techUsed: ['NestJS', 'Prisma ORM', 'PostgreSQL', 'Elasticsearch'],
    detail: {
      overview: {
        en: {
          plain:
            'AHI lets the health of an entire aircraft fleet be watched from one place, with the data prepared for deeper analysis.',
          tech:
            'AHI is an aviation health-monitoring platform (NestJS · Prisma · PostgreSQL) that consolidates operational data and indexes it into Elasticsearch as an analytical store.',
        },
        id: {
          plain:
            'AHI memungkinkan kesehatan seluruh armada pesawat dipantau dari satu tempat, dengan data yang sudah disiapkan untuk analisis lebih dalam.',
          tech:
            'AHI adalah platform pemantauan kesehatan penerbangan (NestJS · Prisma · PostgreSQL) yang mengonsolidasikan data operasional dan mengindeksnya ke Elasticsearch sebagai analytical store.',
        },
      },
      challenge: {
        en: {
          plain:
            'The information was spread across different systems and had to be combined by hand — slow and error-prone — and there were serious security findings to fix.',
          tech:
            'Heterogeneous operational sources, manual monitoring, no analytical store, and critical findings from a BSSN penetration test.',
        },
        id: {
          plain:
            'Informasinya tersebar di sistem yang berbeda dan harus disatukan manual — lambat dan rawan salah — serta ada temuan keamanan serius yang harus diperbaiki.',
          tech:
            'Sumber operasional heterogen, pemantauan manual, tanpa analytical store, dan temuan kritikal dari penetration test BSSN.',
        },
      },
      contribution: {
        en: {
          plain:
            'I built and maintained the platform, connected the data sources, prepared the data for analysis, and led the work to fix the security findings.',
          tech:
            'Owned backend engineering (NestJS/Prisma/PostgreSQL), multi-database integration, the Elasticsearch indexing pipeline, and led security hardening (auth, access control, data protection).',
        },
        id: {
          plain:
            'Saya membangun dan memelihara platform, menghubungkan sumber data, menyiapkan data untuk analisis, dan memimpin perbaikan temuan keamanan.',
          tech:
            'Memegang backend engineering (NestJS/Prisma/PostgreSQL), integrasi multi-database, pipeline indexing Elasticsearch, dan memimpin security hardening (autentikasi, kontrol akses, proteksi data).',
        },
      },
      approach: {
        en: {
          plain:
            'Bring the scattered data together automatically, keep a separate copy tuned for analysis, and tighten security where it mattered most.',
          tech:
            'Integrate sources into PostgreSQL, then stream into Elasticsearch so analytical queries do not load the transactional system; harden the most critical findings first.',
        },
        id: {
          plain:
            'Menyatukan data yang tersebar secara otomatis, menyimpan salinan terpisah yang disetel untuk analisis, dan memperketat keamanan di titik yang paling penting.',
          tech:
            'Mengintegrasikan sumber ke PostgreSQL, lalu mengalirkan ke Elasticsearch agar query analitik tidak membebani sistem transaksional; mengeraskan temuan paling kritikal lebih dulu.',
        },
      },
      outcome: {
        en: {
          plain:
            'One place to see fleet health, data ready for prediction, and the critical security findings closed.',
          tech:
            'A unified, analytics-ready data foundation (path to predictive maintenance) and remediated critical security findings.',
        },
        id: {
          plain:
            'Satu tempat untuk melihat kesehatan armada, data siap untuk prediksi, dan temuan keamanan kritikal yang sudah ditutup.',
          tech:
            'Fondasi data terpadu dan siap-analitik (jalan menuju predictive maintenance) serta temuan keamanan kritikal yang diremediasi.',
        },
      },
      reflections: {
        en: {
          plain:
            'The biggest value was not any single feature — it was making messy data trustworthy and ready for the future.',
          tech:
            'Separating transactional and analytical concerns early paid off; integration + analytics + security rarely sit in one person, and owning all three sharpened system judgment.',
        },
        id: {
          plain:
            'Nilai terbesar bukan satu fitur tertentu — melainkan membuat data yang berantakan menjadi tepercaya dan siap untuk masa depan.',
          tech:
            'Memisahkan concern transaksional dan analitik sejak awal sangat membantu; integrasi + analitik + keamanan jarang ada pada satu orang, dan menangani ketiganya mempertajam judgment sistem.',
        },
      },
    },
  },

  {
    slug: 'e-techpub',
    name: 'E-Techpub',
    category: { en: 'Legacy Modernization', id: 'Modernisasi Legacy' },
    angle: {
      en: 'Transforming slow, manual publishing workflows into a modern web platform.',
      id: 'Mengubah alur kerja publikasi yang lambat dan manual menjadi platform web modern.',
    },
    summary: {
      en: 'A modernization effort that replaced Excel-heavy, manual workflows with a centralized, scalable digital platform.',
      id: 'Upaya modernisasi yang menggantikan alur kerja manual berbasis Excel dengan platform digital yang terpusat dan scalable.',
    },
    before: {
      en: 'The legacy Technical Publications system loaded data slowly; teams still used manual Excel for reporting and document distribution.',
      id: 'Sistem Technical Publications lama lambat memuat data; tim masih memakai Excel manual untuk reporting dan distribusi dokumen.',
    },
    action: {
      en: 'Helped rebuild and modernize the system into a web platform (Spring Boot + PostgreSQL) with end-to-end document control.',
      id: 'Membantu membangun ulang dan memodernisasi sistem menjadi platform web (Spring Boot + PostgreSQL) dengan kontrol dokumen end-to-end.',
    },
    impact: {
      en: {
        plain:
          'Manual, Excel-driven work was replaced by a digital workflow — cutting manual document-handling effort by about 40% — and managing and distributing aircraft manuals became centralized, trackable, and ready to scale.',
        tech:
          'Replaced a manual-heavy legacy workflow with a maintainable web platform, reducing manual document-handling effort by ~40%; document control became centralized and auditable, removing spreadsheet reconciliation.',
      },
      id: {
        plain:
          'Pekerjaan manual berbasis Excel digantikan alur kerja digital — memangkas usaha penanganan dokumen manual sekitar 40% — dan pengelolaan serta distribusi manual pesawat menjadi terpusat, terlacak, dan siap berkembang.',
        tech:
          'Mengganti alur legacy yang manual dengan platform web yang mudah dipelihara, mengurangi usaha penanganan dokumen manual ~40%; kontrol dokumen menjadi terpusat dan dapat diaudit, menghapus rekonsiliasi spreadsheet.',
      },
    },
    techUsed: ['Spring Boot', 'PostgreSQL', 'Java'],
    detail: {
      overview: {
        en: {
          plain: 'A move from spreadsheets to a proper web system for technical documents.',
          tech: 'Re-platforming a Technical Publications system onto Spring Boot + PostgreSQL.',
        },
        id: {
          plain: 'Perpindahan dari spreadsheet ke sistem web yang layak untuk dokumen teknis.',
          tech: 'Mem-platform-ulang sistem Technical Publications ke Spring Boot + PostgreSQL.',
        },
      },
      challenge: {
        en: {
          plain: 'Slow loads, manual steps, and document distribution that did not scale.',
          tech: 'Legacy performance limits, manual processes, and no central source of truth for documents.',
        },
        id: {
          plain: 'Pemuatan lambat, langkah manual, dan distribusi dokumen yang tidak scalable.',
          tech: 'Batas performa legacy, proses manual, dan tidak ada sumber kebenaran terpusat untuk dokumen.',
        },
      },
      contribution: {
        en: {
          plain: 'I helped rebuild the application and shape its structure to speed up the workflow.',
          tech: 'Contributed to the rebuild, application structure, and document-control flow.',
        },
        id: {
          plain: 'Saya membantu membangun ulang aplikasi dan menata strukturnya untuk mempercepat alur kerja.',
          tech: 'Berkontribusi pada rebuild, struktur aplikasi, dan alur kontrol dokumen.',
        },
      },
      approach: {
        en: {
          plain: 'Replace manual steps with a clean digital flow, one room at a time.',
          tech: 'Incremental modernization toward a maintainable Spring Boot + PostgreSQL platform.',
        },
        id: {
          plain: 'Mengganti langkah manual dengan alur digital yang rapi, sedikit demi sedikit.',
          tech: 'Modernisasi bertahap menuju platform Spring Boot + PostgreSQL yang mudah dipelihara.',
        },
      },
      outcome: {
        en: {
          plain: 'Faster, tidier, centralized, and ready to grow.',
          tech: 'A maintainable, centralized document platform replacing the manual workflow.',
        },
        id: {
          plain: 'Lebih cepat, lebih rapi, terpusat, dan siap berkembang.',
          tech: 'Platform dokumen yang terpusat dan mudah dipelihara menggantikan alur manual.',
        },
      },
      reflections: {
        en: {
          plain: 'Modernization works best when you respect how people actually work today.',
          tech: 'Understanding operational constraints before rebuilding kept the transition low-risk.',
        },
        id: {
          plain: 'Modernisasi paling berhasil saat menghormati cara orang bekerja saat ini.',
          tech: 'Memahami batasan operasional sebelum membangun ulang menjaga transisi tetap rendah risiko.',
        },
      },
    },
  },

  {
    slug: 'cross-db-integration',
    name: 'Cross-Database Integration (FDW)',
    category: { en: 'System Integration', id: 'Integrasi Sistem' },
    angle: {
      en: 'Making fragmented enterprise data accessible through cross-database integration.',
      id: 'Membuat data enterprise yang terfragmentasi dapat diakses melalui integrasi lintas-database.',
    },
    summary: {
      en: 'A practical approach to read across PostgreSQL, MSSQL, and MySQL via PostgreSQL Foreign Data Wrapper.',
      id: 'Pendekatan praktis untuk membaca lintas PostgreSQL, MSSQL, dan MySQL via PostgreSQL Foreign Data Wrapper.',
    },
    before: {
      en: 'Data lived in different databases (PostgreSQL, MSSQL, MySQL), prone to inconsistency and manual reconciliation.',
      id: 'Data berada di database berbeda (PostgreSQL, MSSQL, MySQL), rawan inkonsistensi dan rekonsiliasi manual.',
    },
    action: {
      en: 'Designed cross-database integration via PostgreSQL Foreign Data Wrapper to connect the systems.',
      id: 'Merancang integrasi lintas-database via PostgreSQL Foreign Data Wrapper untuk menghubungkan sistem.',
    },
    impact: {
      en: {
        plain:
          'Data from separate systems could be reached as if it were one source — cutting manual work and the risk of mismatched data.',
        tech:
          'Provided a more unified access layer across heterogeneous databases through FDW, reducing reconciliation and unlocking better reporting/integration.',
      },
      id: {
        plain:
          'Data dari sistem terpisah dapat diakses seolah satu sumber — mengurangi kerja manual dan risiko data tidak sinkron.',
        tech:
          'Menyediakan lapisan akses yang lebih terpadu lintas database heterogen melalui FDW, mengurangi rekonsiliasi dan membuka reporting/integrasi yang lebih baik.',
      },
    },
    techUsed: ['PostgreSQL', 'Foreign Data Wrapper', 'MSSQL', 'MySQL'],
    detail: {
      overview: {
        en: {
          plain: 'A way to query several databases as though they were one.',
          tech: 'A cross-database access pattern using PostgreSQL FDW (the capability under AHI).',
        },
        id: {
          plain: 'Cara untuk meng-query beberapa database seolah-olah satu.',
          tech: 'Pola akses lintas-database memakai PostgreSQL FDW (kapabilitas yang mendasari AHI).',
        },
      },
      challenge: {
        en: {
          plain: 'Different databases, high manual effort, hard to keep in sync.',
          tech: 'Heterogeneous engines (PostgreSQL/MSSQL/MySQL) without a unified access path.',
        },
        id: {
          plain: 'Database berbeda, kerja manual tinggi, sulit dijaga sinkron.',
          tech: 'Engine heterogen (PostgreSQL/MSSQL/MySQL) tanpa jalur akses yang terpadu.',
        },
      },
      contribution: {
        en: {
          plain: 'I designed the integration approach and the cross-database access strategy.',
          tech: 'Implemented the FDW approach and defined the cross-database access strategy.',
        },
        id: {
          plain: 'Saya merancang pendekatan integrasi dan strategi akses lintas-database.',
          tech: 'Mengimplementasikan pendekatan FDW dan mendefinisikan strategi akses lintas-database.',
        },
      },
      approach: {
        en: {
          plain: 'Make several sources feel like one connected source.',
          tech: 'Use PostgreSQL FDW as a unifying access layer over remote engines.',
        },
        id: {
          plain: 'Membuat beberapa sumber terasa seperti satu sumber yang terhubung.',
          tech: 'Memakai PostgreSQL FDW sebagai lapisan akses penyatu di atas engine remote.',
        },
      },
      outcome: {
        en: {
          plain: 'Easier data retrieval, less manual friction, a path to better reporting.',
          tech: 'Reduced fragmentation and a foundation for downstream integration/analytics.',
        },
        id: {
          plain: 'Pengambilan data lebih mudah, friksi manual berkurang, jalan menuju reporting lebih baik.',
          tech: 'Mengurangi fragmentasi dan menjadi fondasi untuk integrasi/analitik lanjutan.',
        },
      },
      reflections: {
        en: {
          plain: 'Sometimes the best fix is a clearer connection, not a full rebuild.',
          tech: 'Integration before duplication kept the solution maintainable and low-risk.',
        },
        id: {
          plain: 'Kadang solusi terbaik adalah koneksi yang lebih jelas, bukan membangun ulang total.',
          tech: 'Integrasi sebelum duplikasi menjaga solusi tetap maintainable dan rendah risiko.',
        },
      },
    },
  },

  {
    slug: 'ierapps',
    name: 'IERApps — Integrated Engineering Resource Applications',
    category: { en: 'Performance', id: 'Performa' },
    angle: {
      en: 'Improving mobile-app backend reliability and responsiveness.',
      id: 'Meningkatkan keandalan dan responsivitas backend aplikasi mobile.',
    },
    summary: {
      en: 'Resolved critical bugs and optimized GraphQL queries and database interactions for a mobile app.',
      id: 'Menyelesaikan bug kritikal serta mengoptimalkan query GraphQL dan interaksi database untuk aplikasi mobile.',
    },
    before: {
      en: 'The mobile app backend was slow and had critical bugs affecting reliability and responsiveness.',
      id: 'Backend aplikasi mobile lambat dan memiliki bug kritikal yang mengganggu keandalan dan responsivitas.',
    },
    action: {
      en: 'Resolved critical bugs and optimized GraphQL queries and database interactions.',
      id: 'Menyelesaikan bug kritikal serta mengoptimalkan query GraphQL dan interaksi database.',
    },
    impact: {
      en: {
        plain: 'The app responded better and became more reliable for its users.',
        tech:
          'Reduced backend/query-level inefficiencies (incl. GraphQL N+1 patterns), improving backend reliability and response time for the mobile app.',
      },
      id: {
        plain: 'Aplikasi merespons lebih baik dan menjadi lebih andal bagi penggunanya.',
        tech:
          'Mengurangi inefisiensi backend/query (termasuk pola N+1 GraphQL), meningkatkan keandalan dan waktu respons backend untuk aplikasi mobile.',
      },
    },
    techUsed: ['GraphQL', 'Node.js', 'PostgreSQL'],
    detail: {
      overview: {
        en: {
          plain: 'Make a mobile app respond faster and more reliably.',
          tech: 'Performance and bug-fixing work on the GraphQL backend of the IERApps mobile app.',
        },
        id: {
          plain: 'Membuat aplikasi mobile merespons lebih cepat dan lebih andal.',
          tech: 'Pekerjaan performa dan perbaikan bug pada backend GraphQL aplikasi mobile IERApps.',
        },
      },
      challenge: {
        en: {
          plain: 'A slow backend and critical bugs were hurting the mobile experience.',
          tech: 'Inefficient queries and critical production bugs degrading mobile responsiveness.',
        },
        id: {
          plain: 'Backend lambat dan bug kritikal menurunkan pengalaman aplikasi mobile.',
          tech: 'Query tidak efisien dan bug produksi kritikal yang menurunkan responsivitas mobile.',
        },
      },
      contribution: {
        en: {
          plain: 'I fixed the critical bugs and optimized the slow parts users actually feel.',
          tech: 'Resolved critical bugs and optimized GraphQL/DB access on the mobile backend.',
        },
        id: {
          plain: 'Saya memperbaiki bug kritikal dan mengoptimalkan bagian lambat yang benar-benar dirasakan pengguna.',
          tech: 'Menyelesaikan bug kritikal dan mengoptimalkan akses GraphQL/DB pada backend mobile.',
        },
      },
      approach: {
        en: {
          plain: 'Fix what is broken first, then make the slowest parts fast.',
          tech: 'Resolve critical bugs, then target query patterns and DB interactions with the highest latency impact.',
        },
        id: {
          plain: 'Perbaiki yang rusak dulu, lalu buat bagian paling lambat menjadi cepat.',
          tech: 'Menyelesaikan bug kritikal, lalu menargetkan pola query dan interaksi DB dengan dampak latensi tertinggi.',
        },
      },
      outcome: {
        en: {
          plain: 'A more responsive, more dependable mobile app.',
          tech: 'Improved backend reliability and response time for the mobile app.',
        },
        id: {
          plain: 'Aplikasi mobile yang lebih responsif dan dapat diandalkan.',
          tech: 'Keandalan dan waktu respons backend yang meningkat untuk aplikasi mobile.',
        },
      },
      reflections: {
        en: {
          plain: 'Reliability is a feature users feel every day.',
          tech: 'Performance and bug-fixing are product concerns, not afterthoughts.',
        },
        id: {
          plain: 'Keandalan adalah fitur yang dirasakan pengguna setiap hari.',
          tech: 'Performa dan perbaikan bug adalah concern produk, bukan renungan belakangan.',
        },
      },
    },
  },

  {
    slug: 'xops',
    name: 'XOPS — Excellent Operations',
    category: { en: 'Operational Digitalization', id: 'Digitalisasi Operasional' },
    angle: {
      en: 'Digitizing manual aircraft-maintenance operations.',
      id: 'Mendigitalkan operasi maintenance pesawat yang manual.',
    },
    summary: {
      en: 'An operations platform that moved maintenance workflows off manual processes.',
      id: 'Platform operasi yang memindahkan alur maintenance dari proses manual.',
    },
    before: {
      en: 'Aircraft-maintenance operations were still run as manual processes.',
      id: 'Operasi maintenance pesawat masih dijalankan sebagai proses manual.',
    },
    action: {
      en: 'Built a maintenance-operations platform (NestJS, PostgreSQL) and designed its database.',
      id: 'Membangun platform operasi maintenance (NestJS, PostgreSQL) dan merancang databasenya.',
    },
    impact: {
      en: {
        plain: 'Maintenance operations moved from manual steps to a digital workflow, cutting manual processing time by about 35%.',
        tech: 'Digitized maintenance operations on a NestJS/PostgreSQL platform with a purpose-built schema, reducing manual processing time by ~35%.',
      },
      id: {
        plain: 'Operasi maintenance berpindah dari langkah manual ke alur kerja digital, memangkas waktu proses manual sekitar 35%.',
        tech: 'Mendigitalkan operasi maintenance di platform NestJS/PostgreSQL dengan skema yang dirancang khusus, mengurangi waktu proses manual ~35%.',
      },
    },
    techUsed: ['NestJS', 'PostgreSQL', 'TypeScript'],
    detail: {
      overview: {
        en: {
          plain: 'A digital home for maintenance operations.',
          tech: 'A NestJS/PostgreSQL platform for maintenance operations.',
        },
        id: {
          plain: 'Rumah digital untuk operasi maintenance.',
          tech: 'Platform NestJS/PostgreSQL untuk operasi maintenance.',
        },
      },
      challenge: {
        en: { plain: 'Manual operations were slow and hard to track.', tech: 'No digital system of record for maintenance operations.' },
        id: { plain: 'Operasi manual lambat dan sulit dilacak.', tech: 'Tidak ada system of record digital untuk operasi maintenance.' },
      },
      contribution: {
        en: { plain: 'I built the platform and designed the database.', tech: 'Backend build (NestJS) and database design.' },
        id: { plain: 'Saya membangun platform dan merancang database.', tech: 'Membangun backend (NestJS) dan merancang database.' },
      },
      approach: {
        en: { plain: 'Turn manual steps into a clear, trackable flow.', tech: 'Model the workflow into a schema-backed operations app.' },
        id: { plain: 'Mengubah langkah manual menjadi alur yang jelas dan terlacak.', tech: 'Memodelkan alur kerja menjadi aplikasi operasi berbasis skema.' },
      },
      outcome: {
        en: { plain: 'Digitized maintenance operations.', tech: 'A digital operations workflow replacing manual processes.' },
        id: { plain: 'Operasi maintenance terdigitalisasi.', tech: 'Alur operasi digital menggantikan proses manual.' },
      },
      reflections: {
        en: { plain: 'Good schema design makes operations software last.', tech: 'Investing in the data model early kept the operations app extensible.' },
        id: { plain: 'Desain skema yang baik membuat software operasi bertahan lama.', tech: 'Berinvestasi pada data model sejak awal menjaga aplikasi operasi tetap dapat dikembangkan.' },
      },
    },
  },

  {
    slug: 'olaps-electronic-logbook',
    name: 'OLAPS & Electronic Logbook',
    category: { en: 'Digitalization & Stabilization', id: 'Digitalisasi & Stabilisasi' },
    angle: {
      en: 'Stabilizing a web app and digitizing manual logbooks.',
      id: 'Menstabilkan aplikasi web dan mendigitalkan logbook manual.',
    },
    summary: {
      en: 'Stabilized the OLAPS web app and developed an Electronic Logbook feature.',
      id: 'Menstabilkan aplikasi web OLAPS dan mengembangkan fitur Electronic Logbook.',
    },
    before: {
      en: 'Logbooks were recorded manually; the OLAPS application was unstable.',
      id: 'Logbook dicatat manual; aplikasi OLAPS kurang stabil.',
    },
    action: {
      en: 'Stabilized the OLAPS web app and built the Electronic Logbook feature.',
      id: 'Menstabilkan aplikasi web OLAPS dan membangun fitur Electronic Logbook.',
    },
    impact: {
      en: {
        plain: 'Manual logbooks became a fully digital flow — eliminating 100% of manual logbook entries — and the application got more stable.',
        tech: 'Eliminated 100% of manual logbook entries via a fully digital workflow and improved OLAPS stability.',
      },
      id: {
        plain: 'Logbook manual menjadi alur sepenuhnya digital — menghapus 100% pencatatan logbook manual — dan aplikasi menjadi lebih stabil.',
        tech: 'Menghapus 100% entri logbook manual lewat alur kerja sepenuhnya digital dan meningkatkan stabilitas OLAPS.',
      },
    },
    techUsed: ['Node.js', 'PostgreSQL'],
    detail: {
      overview: {
        en: { plain: 'Make logbooks digital and keep the app steady.', tech: 'Electronic Logbook feature work plus OLAPS stabilization.' },
        id: { plain: 'Membuat logbook digital dan menjaga aplikasi tetap stabil.', tech: 'Pekerjaan fitur Electronic Logbook plus stabilisasi OLAPS.' },
      },
      challenge: {
        en: { plain: 'Manual records and an unstable app.', tech: 'Manual logbook process and application stability issues.' },
        id: { plain: 'Catatan manual dan aplikasi yang tidak stabil.', tech: 'Proses logbook manual dan masalah stabilitas aplikasi.' },
      },
      contribution: {
        en: { plain: 'I stabilized the app and built the digital logbook.', tech: 'Stabilization work and Electronic Logbook feature development.' },
        id: { plain: 'Saya menstabilkan aplikasi dan membangun logbook digital.', tech: 'Pekerjaan stabilisasi dan pengembangan fitur Electronic Logbook.' },
      },
      approach: {
        en: { plain: 'Fix the shaky parts first, then add the digital logbook.', tech: 'Stabilize before extending; add the logbook as a reliable feature.' },
        id: { plain: 'Perbaiki bagian yang goyah dulu, lalu tambahkan logbook digital.', tech: 'Stabilkan sebelum memperluas; menambahkan logbook sebagai fitur yang andal.' },
      },
      outcome: {
        en: { plain: 'Digital logbooks and a steadier application.', tech: 'A digital logbook flow and improved application stability.' },
        id: { plain: 'Logbook digital dan aplikasi yang lebih stabil.', tech: 'Alur logbook digital dan stabilitas aplikasi yang meningkat.' },
      },
      reflections: {
        en: { plain: 'Stability earns the right to add features.', tech: 'Reliability work first makes feature work safer and more durable.' },
        id: { plain: 'Stabilitas memberi hak untuk menambah fitur.', tech: 'Pekerjaan keandalan lebih dulu membuat pengembangan fitur lebih aman dan tahan lama.' },
      },
    },
  },
];

export const spotlightCaseStudy = caseStudies.find((c) => c.spotlight) ?? caseStudies[0];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
