# PROMPT: Portfolio Web — Software Engineer Consulting-Style Portfolio

> **Tujuan dokumen ini:** Prompt lengkap & siap-pakai untuk membangun portfolio web milik **Faqih Pratama Muhti** sebagai **Software Engineer** yang fokus pada backend systems, legacy modernization, system integration, dan architectural clarity. Dokumen ini bisa ditempel langsung ke AI coding agent (Claude Code, Cursor, dsb.) atau dijadikan spesifikasi developer.
>
> **Pergeseran konsep dari versi sebelumnya:** Portfolio ini **tidak lagi menjadikan "engine"/mesin konsultasi interaktif sebagai pusat konsep.** Sebagai gantinya, ia berbentuk **portfolio gaya konsultan yang dewasa** — landing page yang kuat + halaman detail studi kasus — yang memposisikan Faqih sebagai engineer yang mampu **membaca sistem kompleks, memodernisasi yang legacy, mengintegrasikan data, dan menghasilkan dampak nyata.** Elemen kuat dari versi lama (impact-first, Capability Radar, knowledge base dari resume, spotlight AHI) **dipertahankan**; toggle audiens kini diperluas menjadi **dua toggle independen — bahasa `EN ⇄ ID` dan kedalaman `Plain ⇄ Deep Tech`**. Project pribadi `architecture-advisor` turun menjadi *personal exploration*, bukan inti narasi.
>
> **Acuan gaya/pola (pelengkap, bukan pusat):**
> - **Repo:** https://github.com/programmerShinobi/architecture-advisor — referensi gaya & pola alur untuk project pribadi. **Bukan lagi blueprint utama portfolio.**
> - **Live demo:** https://programmershinobi.github.io/architecture-advisor/ — pelengkap project pribadi.
> - Target deploy portfolio baru: **GitHub repo + GitHub Pages (static site).**

---

## 0. Cara Memakai Prompt Ini

Salin seluruh isi bagian **"PROMPT UNTUK AI AGENT"** (Bagian 15) ke agent kamu. Bagian 1–12 adalah konteks/spesifikasi yang menjelaskan keputusan desain, **Bagian 13 adalah proses development & struktur dokumentasi** (yang membuat repo profesional sejak awal), **Bagian 14 adalah catatan implementasi & mitigasi risiko** (jebakan teknis jangka pendek/panjang — baca sebelum coding), dan Bagian 16 adalah checklist eksekusi.

---

## 1. Konsep Inti & Positioning

Portfolio ini menjual satu pesan utama:

> **"Saya membantu sistem yang rumit menjadi lebih jelas, lebih aman, lebih terhubung, dan lebih siap berkembang."**

Yang dijual **bukan** "saya bisa coding", melainkan kemampuan membaca sistem kompleks, memodernisasi legacy, mengintegrasikan data lintas sistem, dan membangun fondasi software yang stabil & scalable.

**Positioning utama:**
> **Software Engineer focused on backend systems, legacy modernization, integration, and architectural clarity.**

Versi Indonesia:
> **Saya membantu memodernisasi sistem legacy, menghubungkan data lintas sistem, dan membangun fondasi software yang lebih aman, stabil, dan scalable.**

Begitu pengunjung masuk, mereka langsung tahu: Faqih bergerak di area serius, bukan generalist abstrak, dan punya value nyata untuk bisnis & sistem operasional.

**Bentuk akhir yang dituju:**
> *A premium, consulting-style software engineering portfolio built around impact-driven case studies, capability mapping, and architectural thinking.*

Bukan galeri project biasa, bukan portfolio developer generik — tapi terasa seperti engineer yang siap menangani sistem serius, **problem solver untuk sistem kompleks, bukan sekadar pembuat fitur.**

### 1A. PRINSIP #1 — Impact-First, Bukan Daftar Teori

> **Aturan emas seluruh konten:** Setiap section dan studi kasus harus menjawab **"jadi hasilnya apa?"** — bukan sekadar menyebut teknologi.

- **Jangan** tulis: _"Built app using NestJS, Prisma, PostgreSQL."_
- **Tulis:** _"Built and maintained a monitoring platform that unified operational health data, improved visibility, and supported more proactive decision-making."_

Pola wajib untuk tiap studi kasus: **Problem → Action → Impact (Before → After)**. Impact diutamakan tampil lebih dulu/lebih besar. Tech stack tetap ditampilkan, tapi bukan kalimat utama. **Gunakan angka HANYA yang tercantum di CV** (sumber kebenaran) — mis. "100% temuan kritikal BSSN tertutup", "±40% kerja dokumen manual berkurang", "±35% waktu proses manual berkurang", "100% entri logbook manual hilang", "6+ sistem", "±3 tahun". **Jangan mengarang angka di luar CV**; selebihnya pakai dampak kualitatif yang jujur.

### 1B. PRINSIP #2 — Dua Audiens & Dua Bahasa (DUA Toggle Independen)

> Portfolio harus "klik" untuk **recruiter/manajer non-teknis** sekaligus **CTO/engineer**, dan untuk pembaca **Indonesia** maupun **Inggris**. Karena itu sediakan **DUA toggle global yang independen**, keduanya tampil di header dan persist di localStorage:
>
> 1. **Language toggle — `EN ⇄ ID`** (Inggris ⇄ Indonesia)
> 2. **Depth toggle — `Plain Language ⇄ Deep Tech`** (awam ⇄ expert)

Karena keduanya independen, **setiap teks naratif punya 4 varian** (`EN-Plain`, `EN-Tech`, `ID-Plain`, `ID-Tech`). Mengganti satu toggle tidak mengubah pilihan toggle lainnya — visitor bisa membaca, mis., *Indonesia + Deep Tech* atau *English + Plain Language*.

**Dimensi 1 — Depth (Plain ⇄ Deep Tech):**
- **Plain Language (default):** analogi sederhana, fokus dampak bisnis, minim jargon.
  > _"Sistem lama seperti gedung tua yang masih dipakai — kita renovasi ruang per ruang tanpa menutup gedung, jadi operasional tetap jalan."_ (Strangler Fig)
- **Deep Tech (untuk expert):** istilah presisi, trade-off, pola desain (Strangler Fig, anti-corruption layer, FDW, caching strategy), keputusan teknis.

**Dimensi 2 — Language (EN ⇄ ID):**
- **English (default):** untuk recruiter/CTO internasional & remote roles.
- **Indonesia:** untuk audiens lokal & klien dalam negeri.

**Default awal:** `EN` + `Plain Language` (paling luas jangkauannya). Deteksi `navigator.language` boleh dipakai untuk menebak bahasa awal (`id-*` → `ID`), tapi pilihan manual menang & disimpan. Satu klik berpindah mode dengan transisi halus; **data yang sama** disajikan dalam kombinasi bahasa × kedalaman yang dipilih. Ini sekaligus menunjukkan skill komunikasi Faqih — nilai jual besar.

> **Catatan beban konten:** menulis 4 varian untuk seluruh situs itu banyak. Wajibkan 4 varian penuh pada **konten naratif bernilai jual** (hero, impact studi kasus, spotlight AHI, How I Think, Personal Exploration, About). Untuk label UI pendek (tombol, judul section, nama axis radar) cukup string i18n biasa per-bahasa (tanpa dimensi depth). Sediakan **fallback**: jika varian belum terisi, mundur ke `tech`→`plain` lalu `id`→`en` agar UI tak pernah kosong.

---

## 2. Arsitektur Situs & Format

Format terbaik: **1 landing page utama + halaman detail untuk case study.**

Alasan: landing page cepat dipahami, recruiter bisa scan dalam 1–2 menit, yang tertarik bisa masuk lebih dalam, dan terlihat lebih profesional daripada single-page panjang tanpa struktur.

### Sitemap

1. **Home** — menjual positioning, capability, selected case studies, CTA.
2. **Case Studies** — halaman daftar studi kasus.
3. **Case Study Detail** — halaman per studi kasus:
   - AHI (spotlight)
   - E-Techpub
   - Cross-DB Integration
   - IERApps (Integrated Engineering Resource Applications)
   - opsional: XOPS / OLAPS / Electronic Logbook
4. **About** — siapa Faqih, cara berpikir, area spesialisasi.
5. **Contact** — simple, jelas, conversion-oriented.

> **Keputusan routing (penting untuk GitHub Pages):** Jadikan **Home satu halaman panjang** (semua section pakai anchor `#`), dan **satu-satunya route terpisah adalah Case Study Detail** (`/case-studies/:slug`). About & Contact = section di Home (bukan route terpisah) — ini mengurangi jumlah route dalam sehingga lebih tahan banting di static hosting. "Case Studies" sebagai daftar boleh jadi section di Home **atau** route ringan; detail tetap route sendiri.
>
> ⚠️ **GitHub Pages tidak punya SPA fallback** → deep-link/refresh ke `/case-studies/ahi` akan 404. **Wajib pilih salah satu mitigasi** (detail di Bagian 14): **HashRouter** (`/#/case-studies/ahi`, paling aman & nol konfigurasi server) — **rekomendasi default**, atau BrowserRouter + trik `404.html` (copy `index.html` → `404.html` saat build). Apa pun pilihannya, `basename` router harus = `base` di `vite.config.ts`.

### Urutan section landing page

1. Hero
2. Trust / Impact highlights
3. Capability Radar
4. Selected case studies
5. How I think
6. Technical focus / expertise
7. Personal exploration
8. About
9. Contact CTA

Flow-nya natural: orang tahu siapa kamu → lihat bukti value → lihat area kemampuan → lihat project nyata → paham cara berpikir → diakhiri ajakan kontak.

---

## 3. Section 1 — Hero

Section paling penting; menentukan apakah pengunjung lanjut scroll.

**Tujuan:** menjelaskan siapa kamu, value kamu, terasa profesional, CTA jelas.

**Struktur:**
- Kiri: headline, subheadline, CTA utama, CTA sekunder.
- Kanan: visual identitas / abstract technical visual / preview capability radar / architecture motif.

**Pilihan headline:**
- **(Opsi 1, profesional)** _Software Engineer building clarity for complex systems._
- **(Opsi 2, paling kuat untuk client)** _I help modernize legacy systems, connect fragmented data, and build reliable backend platforms._
- **(Opsi 3, strategis)** _Turning complex systems into secure, maintainable, and scalable software._
- **(Opsi 4, Indonesia)** _Software Engineer yang membantu sistem kompleks menjadi lebih modern, terhubung, dan dapat diandalkan._

**Subheadline contoh:**
> _With experience in backend engineering, system integration, security remediation, and legacy modernization, I build solutions that don't just run — they create real operational impact._

**CTA:**
- Utama: **View Case Studies** / **See My Work**
- Sekunder: **Contact Me** / **Download CV** / **Let's Talk**

**3 mini highlights (outcome-based, di bawah headline):**
- **Modernize legacy workflows**
- **Connect data across systems**
- **Strengthen reliability and security**

---

## 4. Section 2 — Trust / Impact Highlights

Setelah hero, jangan langsung masuk project. Beri section singkat yang membangun kredibilitas.

**Bentuk:** 3–4 stat cards / short proof blocks.

**Contoh isi:**
- **Handled mission-critical operational systems**
- **Built across backend, data, and integration layers**
- **Contributed to security remediation and system hardening**
- **Modernized legacy workflows into scalable platforms**

**Copy pembuka:**
> _My work sits where complexity matters most: operational reliability, fragmented systems, legacy constraints, and technical decisions that affect real workflows._

> Tampilkan angka yang ada di CV (mis. 6+ sistem, 100% temuan BSSN tertutup). **Jangan menambah angka di luar CV** — narasi dampak sistem lebih penting daripada vanity metrics.

---

## 5. Section 3 — Capability Radar

Salah satu **signature section**. Membedakan dari portfolio software engineer biasa.

**Tujuan:** menunjukkan spektrum kompetensi secara visual; recruiter/client menilai kecocokan dalam 3 detik.

**Headline:** _Capability Map_
**Subheadline:** _A practical view of where I create the most value across software systems._

**Dimensi radar (6–8 axis, diturunkan dari resume):**

| Axis | Didukung oleh |
|---|---|
| **Backend Engineering** | Node.js, NestJS, Spring Boot — produksi aviation apps |
| **Database & Data Engineering** | PostgreSQL, MySQL, MSSQL, FDW, Elasticsearch |
| **System Integration** | Cross-DB via FDW, integrasi multi-sumber (AHI) |
| **Security & Remediation** | Hardening temuan kritikal penetration test BSSN |
| **Legacy Modernization** | E-Techpub, re-build legacy → scalable |
| **API Design** | REST, GraphQL (+optimasi), Swagger/OpenAPI |
| **Frontend Development** | Angular, React.js, Next.js |
| **DevOps & Delivery** | Docker, Git, CI/CD, Agile/Scrum |

> Versi fokus cukup 6 axis: Backend, Data, Integration, Security, Modernization, Frontend.

**Spesifikasi data (`src/data/skills.ts`):**
```ts
interface SkillAxis {
  axis: I18nText;          // nama axis per-bahasa, mis. { en: "Backend Engineering", id: "..." }
  level: number;           // 0–100 (self-assessed proficiency)
  label: RichText;         // penjelasan tooltip — 4 varian (bahasa × kedalaman)
  evidence: string[];      // proyek/teknologi pendukung (mis. ["AHI", "NestJS"])
}
```

**Note di bawah radar:**
> _This is not a generic skill list. It reflects the areas where I have repeatedly worked on real systems, operational workflows, and architecture decisions._

**Aturan agar jujur & menarik:**
- `level` adalah **self-assessment** — beri label eksplisit _"self-assessed proficiency"_. Nilai mudah diubah Faqih lewat satu file data.
- Tonjolkan Backend, Database & Data, System Integration, Security, Legacy Modernization sebagai area terkuat; Frontend & DevOps pendukung. **Jangan beri 100% di semua axis** — bentuk radar harus realistis & spesialis.
- Hover/klik tiap axis menampilkan `label` (mengikuti toggle bahasa **dan** kedalaman) + daftar `evidence`. Contoh evidence: _"System Integration → Worked with PostgreSQL FDW and cross-database access patterns for fragmented enterprise data."_
- **Aksesibilitas:** sediakan padanan tabel teks untuk pembaca layar.

**Library (pilih satu):** Recharts `RadarChart` (default, ringan) · `@nivo/radar` (lebih kaya) · Chart.js + `react-chartjs-2`.

---

## 6. Section 4 — Selected Case Studies

Inti portfolio. Yang menarik client bukan jumlah project terbanyak, tapi yang paling jelas **problem, tindakan, dan hasilnya.**

**Format preview tiap case study:** title · one-line summary · problem · my role/contribution · impact · stack · CTA ke detail page.

**Template detail page (konsisten untuk semua):**
1. **Overview** — paragraf singkat project + konteks.
2. **The Challenge** — masalah utama.
3. **My Contribution** — apa yang dikerjakan langsung.
4. **Technical Approach** — teknologi, arsitektur, pendekatan.
5. **Outcome / Impact** — apa yang berubah.
6. **Reflections** — pelajaran/insight engineering.

> Sumber konten lengkap & impact tiap studi kasus ada di **Bagian 9 (Knowledge Base)**. Tiap impact ditulis dalam **4 varian** (`RichText` — EN/ID × Plain/Tech).

### Spotlight — AHI (Aircraft Health Index)

Jadikan AHI **spotlight project**: paling depan, paling besar, paling detail.

**Angle:** _Security, integration, and analytics readiness in a mission-relevant operational context._

**Preview:** _A backend and data-focused platform that helped centralize aircraft health information, support analytics readiness, and strengthen system security._

**Impact line:** _Helped turn fragmented operational health data into a more integrated and secure platform foundation for monitoring and analytics._

### E-Techpub — Legacy Modernization

**Angle:** _Transforming slow, manual publishing workflows into a modern web-based platform._
**Impact line:** _Contributed to moving a legacy, manual-heavy workflow into a more maintainable and scalable digital system._

### Cross-Database Integration via FDW

**Angle:** _Making fragmented enterprise data more accessible through cross-database integration._
**Impact line:** _Reduced fragmentation by enabling a more unified access layer across multiple database systems._

### IERApps (Integrated Engineering Resource Applications) — Performance

**Angle:** _Improving mobile-app backend reliability and responsiveness._
**Impact line:** _Resolved critical bugs and addressed backend/query-level inefficiencies, improving reliability and responsiveness for the mobile app._

---

## 7. Section 5 — How I Think

Section ini **menggantikan "engine"** dengan sesuatu yang lebih matang: cara berpikir engineering Faqih. Menunjukkan judgement, bukan sekadar executor.

**Judul cocok:** _How I Think_ / _My Engineering Approach_ / _Architecture Thinking, Grounded in Delivery._

**4 prinsip:**

1. **Modernize with context** — Tidak semua sistem lama harus dirombak total. Pahami konteks operasional, keterbatasan, dan risiko perubahan sebelum menentukan langkah modernisasi.
2. **Integrate before you duplicate** — Saat sistem tersebar, solusi terbaik sering bukan membangun ulang, tapi menciptakan jalur integrasi yang lebih jelas & dapat dipelihara.
3. **Reliability matters as much as features** — Fitur baru penting, tapi sistem yang lambat, rapuh, atau tidak aman mengurangi nilai produk jangka panjang.
4. **Technical decisions should stay understandable** — Keputusan teknis harus tetap bisa dijelaskan, baik ke engineer maupun stakeholder non-teknis.

---

## 8. Section 6 — Technical Focus / Expertise

Setelah case studies & cara berpikir, tampilkan fokus teknis ringkas. **Jangan** skill cloud generik — kelompokkan:

**Backend & APIs** — NestJS, Node.js, TypeScript, GraphQL, REST
**Data & Databases** — PostgreSQL, MySQL, MSSQL, Prisma, Elasticsearch
**Frontend** — React.js, Next.js, Angular, Tailwind CSS
**Engineering Concerns** — System integration, security remediation, legacy modernization, operational tooling

**Copy pembuka:**
> _I work across the layers where system clarity matters most: backend logic, data access, integration boundaries, and the operational realities around them._

---

## 9. Knowledge Base (dari Resume — sumber konten WAJIB)

Semua studi kasus & data profil diambil dari sini. Jadikan data terstruktur (JSON/TS) di `src/data/`.

**Profil:**
- Nama: **Faqih Pratama Muhti**
- Role: Software Engineer · Backend Developer · Full Stack Developer
- Lokasi: Depok, West Java, Indonesia
- Email: faqihpratamamuhti@gmail.com
- GitHub: github.com/programmerShinobi
- LinkedIn: linkedin.com/in/faqihpratamamuhti

**Studi kasus (format Problem → Action → Impact):**

| Studi kasus | Problem (Before) | Action | Impact (After) |
|---|---|---|---|
| **E-Techpub** — Legacy Modernization | Sistem Technical Publications lama lambat me-load data; tim masih pakai Excel manual untuk reporting & distribusi | Re-build & modernisasi ke platform web (Spring Boot + PostgreSQL) dengan kontrol dokumen end-to-end | Proses manual/Excel digantikan workflow digital; **±40% kerja penanganan dokumen manual berkurang**; pengelolaan & distribusi jadi terpusat, terlacak, scalable |
| **AHI (Aircraft Health Index)** — Security, Integration & Analytics | Data kesehatan pesawat terpencar di banyak sistem & database; pemantauan manual; ada temuan keamanan kritikal **penetration test BSSN** | Bangun & maintain aplikasi monitoring (NestJS, Prisma ORM, PostgreSQL, **Elasticsearch**) terintegrasi berbagai database, alirkan hasil ke Elasticsearch sebagai fondasi analitik; pimpin **security hardening** | Satu pintu data kesehatan armada; data siap-analitik di Elasticsearch membuka analitik & prediksi tren (predictive maintenance); **100% temuan kritikal BSSN tertutup** |
| **Cross-DB Integration via FDW** — System Integration | Data tersebar di 3 DB berbeda (PostgreSQL, MSSQL, MySQL), rawan inkonsistensi & rekonsiliasi manual | Desain integrasi cross-database via **PostgreSQL Foreign Data Wrapper** menghubungkan 3 sistem database | Data antar-sistem dapat diakses sebagai satu sumber — mengurangi kerja manual & risiko data tidak sinkron |
| **IERApps (Integrated Engineering Resource Applications)** — Performance | Backend mobile app lambat & ada bug kritikal | Resolve critical bugs + optimasi **GraphQL query** & interaksi DB | Keandalan & responsivitas backend aplikasi mobile meningkat |
| **XOPS (Excellent Operations)** — Digitalisasi | Operasi maintenance pesawat masih manual | Bangun platform operasi (NestJS, PostgreSQL) + desain database | Workflow operasional maintenance terdigitalisasi; **±35% waktu proses manual berkurang** |
| **OLAPS & Electronic Logbook** — Stabilisasi | Logbook manual; aplikasi OLAPS kurang stabil | Stabilkan web OLAPS & kembangkan Electronic Logbook | **100% entri logbook manual dihapus** lewat alur sepenuhnya digital; stabilitas aplikasi meningkat |

> **Akurasi:** Gunakan metrik yang tercantum di CV (mis. 100% temuan BSSN, ±40% kerja manual, 100% logbook manual). **Jangan mengarang angka di luar CV.**

**Spotlight AHI — narasi acuan (tulis dalam 4 varian `RichText`: EN/ID × Plain/Tech).** Teks Indonesia di bawah adalah master untuk varian `id`; siapkan terjemahan `en` dengan makna setara untuk masing-masing kedalaman:

*Plain (awam) — varian `id.plain`:*
> Bayangkan kesehatan seluruh armada pesawat dipantau dari satu layar. Sebelumnya, informasinya tercecer di banyak sistem dan harus disatukan manual — lambat dan rawan salah. Saya membangun AHI sebagai **"satu pintu"** yang otomatis menyatukan data dari beragam sumber dan menyiapkannya untuk dianalisis. Data rapi ini menjadi **fondasi untuk memprediksi masalah sebelum terjadi**, sehingga perawatan lebih cerdas, downtime ditekan, biaya terkendali. Sistem juga **diperkuat keamanannya** — saya memimpin perbaikan untuk **menutup temuan kritikal** dari penilaian keamanan BSSN.

*Tech (engineer) — varian `id.tech`:*
> AHI adalah aviation health-monitoring platform (NestJS · Prisma · PostgreSQL) yang melakukan **integrasi multi-database heterogen**, lalu **mengindeks hasil ke Elasticsearch** sebagai analytical store. Pemisahan transactional store (PostgreSQL) dari analytical store (Elasticsearch) memberi **query analitik cepat di atas data tergabung** tanpa membebani sistem operasional — membuka jalan ke **predictive maintenance & trend analytics**. Pada sisi keamanan, saya memimpin **security hardening** menutup temuan kritikal penetration test **BSSN**.

**Kenapa AHI menjual:** menunjukkan rentang penuh **integrasi data → analytics → security**; berorientasi masa depan (prediksi); punya kredibilitas eksternal (menutup temuan kritikal BSSN). *Jangan tulis "lolos audit" — tulis "menutup temuan kritikal".*

**Tech stack dikuasai:**
- Bahasa: TypeScript, JavaScript, Java, PHP, C++
- Backend: Node.js, **NestJS**, **Spring Boot**
- Frontend: Angular, React.js, Next.js
- PHP: Laravel, CodeIgniter
- DB: PostgreSQL, MySQL, Microsoft SQL Server
- ORM/Tools: Prisma, TypeORM, Sequelize, **Foreign Data Wrapper**
- API: REST, GraphQL, Swagger/OpenAPI
- Cache/Search: Redis, Elasticsearch
- DevOps: Docker, Git, GitHub, Bitbucket, Figma
- Metodologi: Agile, Scrum · OS: Linux, Windows

**Pengalaman:**
- Backend & Full Stack Developer — OpenCloud | Nuxatech (GMF AeroAsia Project), Jul 2023–Sekarang
- UI/UX Designer (Volunteer) — Saqinah.id, Sep–Nov 2023
- IT Analyst & Programmer (Intern) — Karawang Regency Archives & Library, Jun 2019–Jul 2020

**Pendidikan & Award:** S1 Ilmu Komputer — Buana Perjuangan University (GPA 3.85/4.00), Best Graduate Award (Faculty Level), Certified Programmer.

---

## 10. Section 7 — Personal Exploration

Karena "engine" bukan lagi pusat narasi, project pribadi tetap ditampilkan tapi **bukan inti**.

**Judul:** _Personal Exploration_
**Subcopy:** _I also build side projects to explore architectural thinking, developer experience, and how technical reasoning can be turned into useful tools._

Tampilkan `architecture-advisor` sebagai **ongoing exploration / experimental concept**, dengan badge **"🚧 In Progress"**, link repo + live demo. **Jangan angkat melebihi case study kerja nyata.**

- **Repo:** https://github.com/programmerShinobi/architecture-advisor
- **Live demo:** https://programmershinobi.github.io/architecture-advisor/

> Narasi di bawah ditulis sebagai master `id`; siapkan padanan `en` juga (total 4 varian `RichText`, sama seperti section naratif lain).

*Plain (varian `id.plain`):*
> Lewat `architecture-advisor`, saya mengubah cara berpikir seorang konsultan arsitektur menjadi **alat interaktif** — cukup jelaskan kebutuhan sistemnya, dan alat ini memandu ke rekomendasi yang masuk akal. Lahir dari inisiatif pribadi.

*Tech (varian `id.tech`):*
> Web app yang **mengkodekan reasoning pemilihan arsitektur menjadi recommendation engine berbasis aturan**, berjalan di sisi klien, deploy via GitHub Pages. Membuktikan kemampuan menerjemahkan decision-making arsitektur kompleks menjadi sistem deterministik, reusable, mudah dipelihara.

> **Status sengaja belum difinalkan.** Tulis copy pada level konsep & arah ("sedang dikembangkan", "diarahkan menjadi"), hindari klaim fitur final/angka. CTA halus: _"Follow the build on GitHub."_

---

## 11. Section 8–9 — About & Contact

### About

Tidak terlalu panjang. Fokus positioning personal, bukan cerita hidup.

**Struktur:** Paragraf 1 (siapa kamu) · Paragraf 2 (area fokus & cara kerja) · Paragraf 3 (apa yang kamu cari/tawarkan).

**Contoh copy:**
> _I'm a software engineer with a strong interest in backend systems, data integration, and modernization work. I enjoy problems where technical decisions have real operational consequences — especially systems that are complex, legacy-heavy, or spread across multiple sources of truth._
>
> _My approach is grounded in clarity: understanding existing constraints, improving what matters most, and building solutions that are maintainable, reliable, and understandable across teams._

### Contact / Final CTA

Harus kuat, jelas, profesional.

**Headline:** _Let's build better systems_ / _Need help with backend, integration, or modernization work?_ / _Let's talk about your system challenges._
**Subheadline:** _If you're working on legacy modernization, backend platforms, or integration-heavy systems, I'd be happy to connect._
**Tombol:** Email Me · Connect on LinkedIn · View GitHub · Download CV

---

## 12. Tech Stack, Struktur Proyek & Desain

> Static site di GitHub Pages (tanpa server). Stack modern & ringan.

**Core (wajib):** Vite · React 18 + TypeScript · Tailwind CSS.
**UI & interaksi:** shadcn/ui + Radix UI · Framer Motion (transisi halus) · lucide-react · Recharts `RadarChart` (Capability Radar). Diagram arsitektur di detail page (opsional): React Flow atau Mermaid.js.
**Quality & DX:** ESLint (strict) + Prettier · TypeScript strict · Vitest + React Testing Library (unit: `resolve()` + helper konten `RichText`) · **Playwright (E2E: alur navigasi + 3 toggle) · axe-core (a11y)** sesuai `test-plan.md`. Husky + lint-staged (opsional).
**Deploy & CI/CD:** GitHub Actions → GitHub Pages. Conventional Commits + README profesional + screenshot/GIF.
**SEO & Sharing:** meta tags + Open Graph/Twitter Card · sitemap.xml + favicon · judul/desc jelas.

**Struktur proyek:** (lihat **Bagian 13** untuk isi `docs/` & file governance secara lengkap)
```
portfolio/
├─ .github/
│  ├─ workflows/ (ci.yml [lint+test+build], deploy.yml)
│  ├─ dependabot.yml
│  └─ ISSUE_TEMPLATE/ + PULL_REQUEST_TEMPLATE.md
├─ docs/                               # dokumentasi SDLC 7-fase (Bagian 13)
│  ├─ README.md                        # documentation map + status
│  ├─ 01-discovery-and-planning/ … 07-maintenance/
│  ├─ adr/ (README.md + NNNN-*.md)     # Architecture Decision Records
│  ├─ guides/  └─ specs/
├─ README.md  CHANGELOG.md  CONTRIBUTING.md  CODE_OF_CONDUCT.md
├─ SECURITY.md  DECISIONS.md  LICENSE  LICENSE-docs.md
├─ public/ (favicon.svg, og-image.png, cv-faqih-pratama-muhti.pdf)
├─ src/
│  ├─ main.tsx
│  ├─ App.tsx
│  ├─ components/
│  │  ├─ layout/ (Header, Footer, ThemeToggle, LanguageToggle, DepthToggle)
│  │  ├─ hero/ (HeroSection, OutcomeHighlights)
│  │  ├─ home/ (ImpactHighlights, HowIThink, TechnicalFocus, PersonalExploration)
│  │  ├─ caseStudies/ (CaseStudyList, CaseStudyCard, CaseStudyDetail, BeforeAfterCard)
│  │  ├─ skills/ (SkillsRadar.tsx, SkillDetailPanel.tsx)
│  │  ├─ about/ (AboutSection)
│  │  ├─ contact/ (ContactCTA)
│  │  └─ ui/ (shadcn components)
│  ├─ data/
│  │  ├─ profile.ts            # data profil Faqih
│  │  ├─ caseStudies.ts        # AHI, E-Techpub, Cross-DB, dst. (Before→After, RichText 4 varian)
│  │  ├─ skills.ts             # Capability Radar (axis I18nText, level, label RichText, evidence)
│  │  ├─ principles.ts         # "How I Think" 4 prinsip (RichText)
│  │  ├─ ui-strings.ts         # label UI pendek per-bahasa (I18nText)
│  │  └─ techStack.ts
│  ├─ lib/ (richText.ts: resolve()+fallback, paths.ts: BASE_URL helper, utils)
│  ├─ context/ (LangProvider, DepthProvider, ThemeProvider — persist localStorage)
│  ├─ hooks/ (useLang [EN/ID], useDepth [plain/tech], useTheme)
│  ├─ routes/ (Home [single-page + anchors], CaseStudyDetail [/case-studies/:slug])
│  └─ styles/ (globals.css + tailwind)
├─ index.html  ├─ vite.config.ts  ├─ tailwind.config.ts
├─ tsconfig.json  ├─ playwright.config.ts  └─ package.json
```

```ts
// ── Dua dimensi independen ────────────────────────────────
type Lang  = 'en' | 'id';          // toggle bahasa
type Depth = 'plain' | 'tech';     // toggle kedalaman

// Konten naratif bernilai jual: 4 varian (bahasa × kedalaman).
// `DualText` lama (hanya plain/tech) digantikan `RichText`.
interface RichText {
  en: { plain: string; tech: string };
  id: { plain: string; tech: string };
}

// Helper resolusi + fallback (lib/richText.ts):
//   resolve(text, lang, depth) → string; `||` memperlakukan string kosong sbg "belum diisi".
//   urutan fallback: kedalaman (tech→plain) lalu bahasa (id→en), agar UI tak pernah kosong.
function resolve(t: RichText, lang: Lang, depth: Depth): string {
  const block = t[lang] ?? t.en;                    // fallback bahasa: id → en
  return block[depth] || block.plain                // fallback kedalaman: tech → plain
      || t.en[depth] || t.en.plain;                 // jaring terakhir: en
}

// Label UI pendek (tombol, judul section, nama axis) cukup per-bahasa:
interface I18nText { en: string; id: string }

interface CaseStudy {
  slug: string;
  name: string;
  angle: I18nText;
  summary: I18nText;
  before: I18nText;
  action: I18nText;
  impact: RichText;          // tampil paling menonjol — 4 varian
  techUsed: string[];
  detail: {
    overview: RichText;
    challenge: RichText;
    contribution: RichText;
    approach: RichText;
    outcome: RichText;
    reflections: RichText;
  };
  spotlight?: boolean;
}
```

**Desain & branding — technical-premium (bukan playful/startup-template):**
- **Dark mode default** + light toggle.
- Aksen biru-cyan / electric blue / steel blue + teal; banyak ruang kosong; grid rapi; garis halus seperti blueprint/system map; iconography tipis; sedikit elemen terminal/code aesthetic (jangan berlebihan).
- **Palet (opsi aman):** background near-black/deep navy · primary cyan blue · secondary muted purple · text off-white · border soft slate.
- **Font:** heading **Space Grotesk** / **Sora** / **Inter Tight** · body **Inter** · technical labels/metadata **JetBrains Mono** / **IBM Plex Mono**.
- **DUA toggle konten di header (independen, di luar toggle tema di atas → total 3 toggle):** `EN ⇄ ID` (bahasa) dan `Plain Language ⇄ Deep Tech` (kedalaman). Keduanya mengganti seluruh konten `RichText` sekaligus dengan transisi halus; state masing-masing persist di localStorage. Default `EN` + `Plain`. Tooltip/glossary mini untuk istilah teknis (Strangler Fig, FDW), juga dwibahasa. Tampilkan ketiga toggle dengan jelas tapi ringkas (mis. segmented control / pill) agar tidak mengganggu hierarki visual.
- **Before → After cards** di studi kasus: kiri (masalah) → panah → kanan (hasil), hasil ditonjolkan. Bullet hasil, bukan blok teks panjang.
- **Hero 3 outcome highlights** manusiawi.
- Responsif penuh (mobile-first) · aksesibel (kontras, keyboard-navigable, `aria-*`).

**Tone of voice:** tenang, yakin, technical but understandable, profesional, fokus dampak. **Hindari** "passionate developer", "love coding", "hardworking and dedicated", "I can do anything". **Pakai** "focused on complex systems", "working across backend, integration, and modernization", "building for clarity, reliability, and maintainability".

**Deploy GitHub Pages:** set `base: '/<NAMA-REPO>/'` di `vite.config.ts`; `.github/workflows/deploy.yml` (push `main` → checkout → setup-node → `npm ci` → `npm run build` → upload artifact → `actions/deploy-pages`); Settings → Pages source = GitHub Actions; README dengan judul, badge build, screenshot/GIF, link demo, konsep, cara run, stack.

---

## 13. Proses Development & Struktur Dokumentasi (mengikuti `architecture-advisor`)

> **Tujuan section ini:** Menjadikan repo portfolio ini **profesional & serius sejak commit pertama** — bukan sekadar "ngoding lalu jadi", tetapi mengikuti **alur SDLC berdokumentasi** seperti repo rujukan [`architecture-advisor`](https://github.com/programmerShinobi/architecture-advisor). Sebelum menulis kode, tentukan dulu **charter, requirement, dan blueprint**; selama development, catat **keputusan (ADR)** dan **changelog**; setelah rilis, jaga lewat **maintenance & iterasi**. Dokumentasi hidup di folder `docs/` dengan penomoran fase yang jelas.

### 13A. Tujuh Fase SDLC (folder `docs/`)

Replikasi struktur 7-fase dari repo rujukan, **disesuaikan untuk konteks portfolio** (tanpa scoring engine/model — diganti content model & design system):

| Fase | Folder | Output utama (file) | Status awal |
|---|---|---|---|
| **1. Discovery & Planning** | `docs/01-discovery-and-planning/` | `discovery-and-planning.md` — project charter: visi portfolio, target audiens (recruiter/CTO/klien), positioning, tujuan terukur, scope & non-goals, governance | ✅ tentukan **sebelum** ngoding |
| **2. Requirement Analysis** | `docs/02-requirement-analysis/` | `software-requirements-specification.md` — SRS: functional (section, routing, dua toggle, radar, case study detail) + non-functional (a11y WCAG AA, performance/Lighthouse, SEO/OG, responsiveness, i18n) | 🔬 draft di awal |
| **3. Blueprint (Design)** | `docs/03-blueprint/` | `design-specification.md` (layout, design tokens, tipografi, dark/light), `content-model.md` (skema `RichText`/`I18nText`, struktur `caseStudies`/`skills`/`principles`), `prototype/index.html` (wireframe statis) | 🔬 sebelum/awal development |
| **4. Development** | `docs/04-development/` | `development-notes.md` — catatan implementasi, struktur komponen, konvensi kode | ✅ saat coding |
| **5. Testing / QA** | `docs/05-testing-qa/` | `test-plan.md` — strategi uji: Vitest (unit konten/`resolve()`), Playwright (E2E alur + toggle), axe (a11y), daftar test case | 🔬 paralel dgn development |
| **6. Deployment / Release** | `docs/06-deployment/` | `deployment-github-pages.md` — prosedur build & deploy via GitHub Actions, `base` path, verifikasi live | ✅ saat rilis |
| **7. Maintenance & Iteration** | `docs/07-maintenance/` | `CHANGELOG.md`, catatan iterasi, Dependabot, roadmap konten (mis. tambah case study baru) | 🔄 ongoing |

**Folder lintas-fase (cross-cutting):**

| Folder | Isi | Fungsi |
|---|---|---|
| `docs/adr/` | Architecture Decision Records — `README.md` + `NNNN-judul-keputusan.md` (4 digit, mis. `0001-pilih-vite-react-ts.md`, `0002-content-model-richtext-4-varian.md`, `0003-radar-pakai-recharts.md`) | Log keputusan teknis penting + alasan + konsekuensi |
| `docs/guides/` | Playbook eksekusi (mis. `ui-ux-execution-playbook.md`, `content-writing-playbook.md` — cara menulis impact-first & 4 varian) | Panduan kerja lintas fase |
| `docs/specs/` | Spesifikasi teknis lintas fase (mis. `build-spec.md` — rangkuman build menyeluruh) | Acuan teknis menyeluruh |
| `docs/README.md` | **Documentation map** — tabel fase + status + reading paths ("Overview", "Build the app", "Contribute") | Pintu masuk seluruh dokumentasi |

### 13B. File governance (root repo)

Tunjukkan keseriusan & keterbukaan project dengan file standar open-source profesional (ada di repo rujukan):

- `README.md` — judul, badge build, screenshot/GIF, link live demo, konsep, cara run lokal, tech stack, link ke `docs/`.
- `CHANGELOG.md` — format [Keep a Changelog] + [Semantic Versioning].
- `CONTRIBUTING.md` — alur kontribusi, konvensi commit, cara run test.
- `CODE_OF_CONDUCT.md` — Contributor Covenant.
- `SECURITY.md` — cara melaporkan isu keamanan.
- `DECISIONS.md` — ringkasan keputusan tingkat-tinggi (pelengkap ADR).
- `LICENSE` (MIT untuk kode) + `LICENSE-docs.md` (CC BY 4.0 untuk dokumentasi).
- `.github/` — `workflows/deploy.yml`, `workflows/ci.yml` (lint+test+build), `dependabot.yml`, issue/PR templates.

### 13C. Disiplin proses (cara kerja, bukan sekadar file)

- **Tentukan dulu, baru ngoding.** Fase 1–3 (charter → SRS → blueprint) ditulis **sebelum** komponen pertama. Ini inti "profesional dari awal".
- **Conventional Commits** + **Semantic Versioning** + **Conventional Branches** (`feat/`, `fix/`, `docs/`, `chore/`).
- **Setiap keputusan arsitektur penting → satu ADR.** Mis. pilihan content model 4-varian, library radar, strategi i18n.
- **PR kecil & terfokus**, lewat CI (lint + test + build) sebelum merge; deploy otomatis dari `main`.
- **Definition of Done per fase:** dokumen fase terisi, test hijau, a11y & Lighthouse dicek, changelog di-update.
- **Strict mode di mana-mana:** TypeScript strict, ESLint strict, Prettier — konsistensi sejak awal.
- **Status transparan:** tandai tiap dokumen `✅ complete` / `🔬 in progress` / `🔄 ongoing` di `docs/README.md` (intellectual honesty, seperti repo rujukan).

> **Catatan adaptasi:** Karena portfolio lebih sederhana dari `architecture-advisor` (tidak ada scoring engine/model formulation/option content sheet), dokumen yang berbasis "model" diganti dengan **content model + design system**. Struktur fase, penomoran folder, ADR, governance files, dan disiplin proses **dipertahankan sama persis** agar repo terasa sama seriusnya.

---

## 14. Catatan Implementasi & Mitigasi Risiko (Jangka Pendek & Panjang)

> Section ini mengunci jebakan teknis yang **pasti muncul** saat membangun stack ini (Vite + React + TS + GitHub Pages + i18n + Recharts). Tujuannya: implementasi mulus tanpa kejutan, dan repo tetap sehat jangka panjang.

### 14A. Risiko jangka pendek (bisa langsung memblokir saat build/deploy)

1. **Routing SPA di GitHub Pages (deep-link 404)** — Pages tidak punya server rewrite, jadi refresh/akses langsung ke route dalam akan 404. **Mitigasi (pilih satu):**
   - **HashRouter** → URL `/#/case-studies/ahi`, nol konfigurasi, paling tahan banting. ⚠️ **Tapi hash dipakai untuk route**, jadi **jangan** pakai `<a href="#contact">` untuk navigasi antar-section Home (akan bentrok dijadikan route). Navigasi section Home lewat **`scrollIntoView`/tombol JS**, bukan raw hash anchor.
   - **BrowserRouter + `404.html`** → tambahkan langkah build yang menyalin `dist/index.html` → `dist/404.html` (+ skrip redirect SPA). URL lebih bersih **dan** anchor `#contact` native tetap jalan untuk section Home — **rekomendasi bila ingin anchor link standar**. Konsekuensi: sedikit lebih banyak moving parts.
   - **Rekomendasi praktis:** kalau Home banyak mengandalkan anchor `#section`, pilih **BrowserRouter + 404.html**; kalau ingin sesederhana mungkin & navigasi section via tombol JS, pilih **HashRouter**. Putuskan di **ADR** dan konsisten.
2. **Konsistensi `base` ↔ `basename` ↔ aset** — `vite.config.ts` `base: '/<repo>/'` harus sama dengan `basename` router. **Semua path aset wajib lewat `import.meta.env.BASE_URL`** (CV, og-image, favicon, gambar case study). Hardcode `/cv.pdf` akan 404 di subpath Pages. Sediakan `lib/paths.ts` helper kecil.
3. **Aset wajib disiapkan (prasyarat konten):** `public/cv-faqih-pratama-muhti.pdf`, `public/og-image.png` (1200×630), `public/favicon.svg`. Build tetap jalan tanpa ini, tapi tombol Download CV & preview share rusak diam-diam. Pakai placeholder bila belum ada, dan **OG image URL harus absolut** (origin + BASE_URL) agar preview muncul saat dibagikan.
4. **shadcn/ui bukan dependency npm** — ia CLI yang menyalin komponen. Set **path alias `@/*`** di `tsconfig.json` + `vite.config.ts` (`resolve.alias`) + `components.json` **sebelum** `npx shadcn add`. Tanpa alias, import komponen gagal.
5. **Recharts `ResponsiveContainer` butuh tinggi eksplisit** — radar render 0px kalau parent tak bertinggi. Bungkus dalam container tinggi tetap (mis. `h-[420px]`). **Lazy-load** radar (`React.lazy`) agar tak membebani first paint.
6. **FOUC tema & bahasa** — bila `theme`/`lang`/`depth` dibaca setelah React mount, akan ada kedip dari default ke pilihan user. **Mitigasi:** skrip inline kecil di `<head>` `index.html` yang set class tema + atribut `lang` dari localStorage **sebelum** bundle dimuat.
7. **Tailwind dark mode** — set `darkMode: 'class'` dan default class `dark` di `<html>`. Pastikan token warna (Bagian 12) terdefinisi untuk dark **dan** light agar light mode tidak rusak.

### 14B. Risiko jangka panjang (muncul saat tumbuh & dirawat)

1. **SEO pada SPA (CSR)** — Vite mengirim HTML shell kosong; konten dirender di klien. OG/Twitter tag statis di `index.html` **tetap bekerja** untuk preview share (cukup untuk recruiter via link), tapi indexing mesin pencari lemah. Jika discoverability penting, tambahkan **prerender statis** (`vite-react-ssg` atau `react-snap`) agar konten masuk HTML. Catat trade-off ini sebagai **ADR**.
2. **`<html lang>` dinamis & dua bahasa di satu URL** — saat toggle EN/ID, update atribut `lang` + `meta description` yang sesuai (a11y + SEO). Karena dua bahasa berbagi satu URL, **jangan** janjikan `hreflang` (akan menyesatkan). Cukup `lang` dinamis; bila ingin SEO dwibahasa serius, itu keputusan terpisah (route per bahasa) — di luar scope awal.
3. **Beban konten 4 varian** — tiap case study baru ≈ 6 field detail × 4 varian = ~24 string. **Mitigasi:** isi `en` lengkap dulu (fallback `resolve()` menjaga UI saat `id` menyusul); pakai `docs/guides/content-writing-playbook.md` sebagai template; unit test sudah memaksa keempat varian terisi sebelum dianggap "selesai".
4. **Bundle size** — Recharts + Framer Motion + (opsional) Mermaid/React Flow berat. **Mitigasi:** code-split per route, `React.lazy` untuk radar & diagram, pakai Mermaid/React Flow **hanya bila benar dipakai**. Pantau via Lighthouse + `rollup-plugin-visualizer`.
5. **`prefers-reduced-motion`** — hormati untuk semua animasi Framer Motion (matikan/redam). Penting untuk a11y & menghindari motion sickness.
6. **Dependency drift** — Dependabot aktif; jaga agar update tak merusak lewat **CI gating (lint + test + build)** sebelum merge. Pin versi mayor di `package.json`.
7. **Font loading** — self-host via `@fontsource/*` (bukan Google Fonts CDN) untuk performa & privasi; `font-display: swap` agar teks tak invisible saat load.

### 14C. Inkonsistensi yang sudah ditutup di spec ini

- Routing disederhanakan: **Home single-page + hanya Case Study Detail sebagai route** (About/Contact jadi section Home) — mengurangi permukaan masalah routing Pages.
- Test stack diselaraskan: **Vitest (unit) + Playwright (E2E) + axe (a11y)** muncul konsisten di Bagian 12, struktur proyek, `test-plan.md`, dan checklist.
- Helper i18n: satu sumber kebenaran `RichText` + `resolve()` dengan fallback berlapis; tak ada sisa konsep "engine"/share-URL lama.

---

## 15. PROMPT UNTUK AI AGENT (salin bagian ini)

> Kamu adalah senior frontend engineer. Bangun **portfolio web statis** untuk **Faqih Pratama Muhti** (Software Engineer · Backend · Full Stack) yang **bisa di-deploy ke GitHub Pages**. Konsepnya adalah **portfolio gaya konsultan yang dewasa** — *bukan* mesin/engine interaktif sebagai pusat. Positioning: **"Software Engineer focused on backend systems, legacy modernization, integration, and architectural clarity."** Pesan inti: _"Saya membantu sistem yang rumit menjadi lebih jelas, lebih aman, lebih terhubung, dan lebih siap berkembang."_
>
> **DUA PRINSIP YANG TIDAK BOLEH DILANGGAR:**
> 1. **Impact-first, bukan daftar teori.** Setiap studi kasus & section mengikuti pola **Problem → Action → Impact (Before → After)**, menonjolkan HASIL (proses manual hilang, temuan keamanan kritikal tertutup, data terpusat, respons lebih cepat) — bukan sekadar nama teknologi. **Gunakan angka hanya dari CV** (mis. 100% temuan BSSN, ±40% kerja manual); jangan mengarang angka di luar CV.
> 2. **Dua audiens & dua bahasa — DUA toggle global yang INDEPENDEN.** Sediakan (a) toggle bahasa **`EN ⇄ ID`** dan (b) toggle kedalaman **`Plain Language ⇄ Deep Tech`**, keduanya di header, independen, persist di localStorage, default `EN` + `Plain`. Semua teks naratif bertipe `RichText { en:{plain;tech}; id:{plain;tech} }` (4 varian); `plain` pakai analogi & bahasa hasil bisnis, `tech` pakai istilah presisi/pola desain/trade-off. Render via helper `resolve(text, lang, depth)` dengan fallback (tech→plain, id→en) agar tak pernah kosong. Label UI pendek cukup `I18nText { en; id }`. Sediakan tooltip/glossary dwibahasa untuk istilah teknis.
>
> **Arsitektur situs:** **Home satu halaman panjang** (semua section pakai anchor) + **satu route terpisah: Case Study Detail** (`/case-studies/:slug`). About & Contact = section di Home, bukan route. Urutan section Home: **Hero → Impact Highlights → Capability Radar → Selected Case Studies → How I Think → Technical Focus → Personal Exploration → About → Contact CTA.** (Detail routing & mitigasi GitHub Pages: lihat blok Routing & deploy di bawah.)
>
> **Stack wajib:** Vite + React 18 + TypeScript + Tailwind CSS. Pakai shadcn/ui + Radix, Framer Motion (transisi halus), lucide-react, dan Recharts `RadarChart` untuk Capability Radar. Diagram arsitektur di detail page opsional (React Flow / Mermaid). **Tidak ada backend** — semua konten dari data terstruktur di `src/data/`. Jangan hardcode secret apa pun.
>
> **Section yang harus dibangun:**
> 1. **Hero** — headline (mis. _"Software Engineer building clarity for complex systems."_), subheadline pengalaman, CTA utama (View Case Studies) + sekunder (Contact / Download CV), 3 outcome highlights (_Modernize legacy workflows · Connect data across systems · Strengthen reliability and security_), visual technical/blueprint atau preview radar.
> 2. **Impact Highlights** — 3–4 proof blocks kredibilitas tanpa angka palsu.
> 3. **Capability Radar** — radar chart 6–8 axis (Backend, Database & Data, System Integration, Security & Remediation, Legacy Modernization, API Design, Frontend, DevOps) dari `src/data/skills.ts` (`{ axis: I18nText, level 0–100, label: RichText, evidence[] }`). Label **"self-assessed proficiency"**, **jangan 100% di semua axis** (bentuk realistis/spesialis), hover/klik tiap axis tampilkan penjelasan mengikuti toggle bahasa **dan** kedalaman + evidence proyek, sediakan tabel teks untuk a11y.
> 4. **Selected Case Studies** — kartu preview (title, summary, problem, contribution, impact, stack, CTA) + halaman detail per studi kasus dengan template: Overview → The Challenge → My Contribution → Technical Approach → Outcome/Impact → Reflections. **AHI = spotlight** (paling menonjol). Gunakan kartu **Before → After** dengan hasil ditonjolkan.
> 5. **How I Think** — 4 prinsip engineering (Modernize with context · Integrate before you duplicate · Reliability matters as much as features · Technical decisions should stay understandable).
> 6. **Technical Focus** — dikelompokkan (Backend & APIs / Data & Databases / Frontend / Engineering Concerns), bukan skill cloud generik.
> 7. **Personal Exploration** — `architecture-advisor` sebagai eksperimen *sekunder* dengan badge **"🚧 In Progress"**, link repo (https://github.com/programmerShinobi/architecture-advisor) + demo (https://programmershinobi.github.io/architecture-advisor/). Copy level konsep/arah, jangan diangkat melebihi case study kerja nyata.
> 8. **About** — 3 paragraf positioning personal (tenang, yakin, technical but understandable; hindari "passionate developer"/"love coding").
> 9. **Contact CTA** — headline kuat + Email / LinkedIn / GitHub / Download CV.
>
> **Knowledge base (hardcode di `src/data/`):** pakai studi kasus nyata Faqih — **E-Techpub** (modernisasi Technical Publications legacy → Spring Boot + PostgreSQL); **AHI** (spotlight: integrasi multi-database → Elasticsearch sebagai fondasi analitik → arah predictive maintenance, + menutup temuan kritikal **BSSN penetration test** — tulis "menutup temuan kritikal", bukan "lolos audit"); **Cross-DB Integration** (PostgreSQL FDW menghubungkan PostgreSQL ↔ MSSQL ↔ MySQL); **IERApps** (resolve critical bugs + optimasi GraphQL query & DB pada aplikasi mobile); plus **XPREAM (Angular), XOPS, OLAPS & Electronic Logbook** di GMF AeroAsia. Profil: github.com/programmerShinobi, linkedin.com/in/faqihpratamamuhti, faqihpratamamuhti@gmail.com, S1 Ilmu Komputer (GPA 3.85), Best Graduate Award. Stack: TypeScript, NestJS, Spring Boot, Node.js, Angular, React/Next, PostgreSQL/MySQL/MSSQL, Prisma/TypeORM/Sequelize, REST/GraphQL/Swagger, Redis, Elasticsearch, Docker.
>
> **Desain:** technical-premium, **dark mode default** + light toggle, aksen cyan/electric blue/steel blue, ruang kosong lega, garis blueprint halus, sedikit code aesthetic. Font heading Space Grotesk/Sora/Inter Tight, body Inter, label monospace (JetBrains/IBM Plex Mono). **Tiga toggle di header:** tema (dark/light), bahasa (**EN ⇄ ID**), kedalaman (**Plain ⇄ Deep Tech**) — semua persist localStorage. Before→After cards, fully responsive (mobile-first), aksesibel.
>
> **Proses development (WAJIB — buat repo profesional sejak awal, ikuti `architecture-advisor`):** Sebelum menulis kode, buat folder `docs/` dengan **struktur SDLC 7-fase** dan **tentukan dulu** charter & requirement: `docs/01-discovery-and-planning/discovery-and-planning.md` (visi, audiens, positioning, scope, non-goals), `docs/02-requirement-analysis/software-requirements-specification.md` (functional + non-functional), `docs/03-blueprint/` (`design-specification.md`, `content-model.md` untuk skema `RichText`/`I18nText`, `prototype/index.html`), lalu `04-development/`, `05-testing-qa/test-plan.md`, `06-deployment/deployment-github-pages.md`, `07-maintenance/CHANGELOG.md`. Tambahkan `docs/adr/` (Architecture Decision Records bernomor 4-digit `NNNN-*.md` untuk tiap keputusan penting: pilih Vite+React+TS, content model 4-varian, Recharts untuk radar, strategi i18n), `docs/guides/`, `docs/specs/`, dan `docs/README.md` (documentation map + status `✅/🔬/🔄` tiap dokumen). Sertakan file governance root: `README.md`, `CHANGELOG.md` (Keep a Changelog + SemVer), `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md` (Contributor Covenant), `SECURITY.md`, `DECISIONS.md`, `LICENSE` (MIT) + `LICENSE-docs.md` (CC BY 4.0). Disiplin: **TypeScript strict + ESLint strict + Prettier**, Conventional Commits, CI workflow (`ci.yml`: lint+test+build) + `dependabot.yml` + issue/PR templates, Definition of Done per fase, status dokumen transparan. Setiap dokumen fase ditandai status secara jujur (`✅ complete / 🔬 in progress / 🔄 ongoing`).
>
> **Routing & deploy (HINDARI jebakan GitHub Pages — wajib, lihat Bagian 14):** **Home = satu halaman panjang** dengan section pakai anchor; **satu-satunya route terpisah = Case Study Detail** (`/case-studies/:slug`); About & Contact = section di Home. Karena Pages tak punya SPA fallback (deep-link → 404), pilih: **BrowserRouter + trik `404.html`** (rekomendasi bila Home pakai anchor `#section` native) **atau** `HashRouter` (paling sederhana, tapi navigasi section Home harus via `scrollIntoView`/tombol JS karena hash dipakai routing — jangan `<a href="#contact">`). Putuskan di ADR. `basename` router = `base` di `vite.config.ts`. **Semua path aset lewat `import.meta.env.BASE_URL`** (jangan hardcode `/`). Set `base: '/<NAMA-REPO>/'`, buat `.github/workflows/deploy.yml` (build + deploy via GitHub Actions). Cegah FOUC tema/bahasa dengan skrip inline di `<head>` yang membaca localStorage sebelum bundle dimuat; update `<html lang>` saat toggle bahasa. Siapkan aset wajib: `og-image.png` (1200×630, URL absolut), `favicon`, `cv-faqih-pratama-muhti.pdf` (placeholder bila belum ada). Tambah meta Open Graph/Twitter Card di `index.html` + tombol Download CV.
>
> **Output:** project lengkap siap `npm install && npm run dev`, `README.md` profesional (judul, konsep, screenshot/GIF, link demo, cara run, stack), kode rapi (ESLint + Prettier), unit test (Vitest) untuk `resolve()` + helper konten — termasuk test bahwa tiap `RichText` punya keempat varian (`en.plain`, `en.tech`, `id.plain`, `id.tech`) terisi, dan test bahwa fallback bekerja. Tidak ada secret di-commit.

---

## 16. Checklist Eksekusi

**Fase 1–3 — Tentukan dulu SEBELUM ngoding (lihat Bagian 13):**
- [ ] `docs/` struktur 7-fase + `docs/README.md` (documentation map + status).
- [ ] **Fase 1:** `01-discovery-and-planning/discovery-and-planning.md` (charter: visi, audiens, positioning, scope, non-goals, governance).
- [ ] **Fase 2:** `02-requirement-analysis/software-requirements-specification.md` (functional + non-functional: a11y, perf, SEO, i18n).
- [ ] **Fase 3:** `03-blueprint/` — `design-specification.md`, `content-model.md` (skema `RichText`/`I18nText`), `prototype/index.html`.
- [ ] `docs/adr/` (README + ADR `0001`…: pilih stack, content model 4-varian, library radar, strategi i18n) + `docs/guides/` + `docs/specs/`.
- [ ] File governance root: `README.md`, `CHANGELOG.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `DECISIONS.md`, `LICENSE`, `LICENSE-docs.md`.
- [ ] `.github/`: `ci.yml` (lint+test+build), `deploy.yml`, `dependabot.yml`, issue/PR templates.

**Fase 4–7 — Development & seterusnya:**
- [ ] Inisialisasi repo: `npm create vite@latest` (React + TS), init git, Conventional Commits, **TypeScript strict + ESLint strict + Prettier**.
- [ ] Setup Tailwind (`darkMode: 'class'`) + path alias `@/*` (tsconfig + vite) **sebelum** `npx shadcn add` + Framer Motion + lucide-react + Recharts.
- [ ] **Routing aman Pages (Bagian 14, putuskan via ADR):** BrowserRouter + `404.html` (bila Home pakai anchor native) **atau** HashRouter (navigasi section via `scrollIntoView`); `basename` = `base`; Home single-page + route `/case-studies/:slug`. Semua aset via `import.meta.env.BASE_URL` (`lib/paths.ts`).
- [ ] Skrip inline anti-FOUC di `<head>` (set tema + `lang` dari localStorage sebelum bundle).
- [ ] Data layer dari resume (`profile`, `caseStudies` Before→After, `skills`, `principles`, `ui-strings`, `techStack`) — **tiap konten naratif `RichText` (4 varian: EN/ID × Plain/Tech)**, label UI pendek `I18nText` (EN/ID).
- [ ] Helper `lib/richText.ts` (`resolve()` + fallback) + hooks `useLang` (EN/ID) & `useDepth` (plain/tech).
- [ ] **Dua toggle global** di header: `EN ⇄ ID` dan `Plain ⇄ Deep Tech` (independen, persist localStorage, default EN+Plain, deteksi `navigator.language` untuk tebakan awal) + tooltip/glossary dwibahasa.
- [ ] Home sections berurutan: Hero (3 outcome highlights) → Impact Highlights → Capability Radar → Selected Case Studies → How I Think → Technical Focus → Personal Exploration → About → Contact CTA.
- [ ] **Capability Radar**: `skills.ts` + `SkillsRadar.tsx` (Recharts) + panel detail per-axis (ikut toggle bahasa & kedalaman) + tabel teks (a11y); label "self-assessed", bentuk realistis (bukan serba 100).
- [ ] Case Study Detail pages (template Overview→Reflections), AHI sebagai spotlight, kartu Before→After.
- [ ] Personal Exploration: `architecture-advisor` badge "In Progress", level konsep, link repo + demo.
- [ ] Dark/light toggle + technical-premium styling (cyan/blueprint, font pairing) + responsif + aksesibilitas.
- [ ] **Uji 4 kombinasi toggle** (EN/ID × Plain/Tech): semua varian terisi, transisi mulus, fallback bekerja; minta 1 non-teknis & 1 engineer baca konten EN & ID — pastikan semua paham "hasilnya apa".
- [ ] Unit test (Vitest): tiap `RichText` punya 4 varian terisi + `resolve()` fallback teruji.
- [ ] **E2E (Playwright)**: alur navigasi Home → Case Study Detail (deep-link/refresh tidak 404) + ketiga toggle berfungsi & persist; **axe**: a11y dark & light.
- [ ] SEO/OG meta (OG image URL absolut) + favicon + og-image + Download CV (path via BASE_URL).
- [ ] `vite.config.ts` `base` benar + GitHub Actions deploy workflow.
- [ ] README profesional + screenshot/GIF.
- [ ] Push ke GitHub → aktifkan Pages (source: GitHub Actions) → verifikasi live.
- [ ] Cek Lighthouse (performance/SEO/accessibility) & perbaiki temuan.
- [ ] **Fase 5–7:** isi `test-plan.md`, `deployment-github-pages.md`, update `CHANGELOG.md`; tandai status tiap dokumen `docs/` secara jujur; catat keputusan baru sebagai ADR berikutnya.

---

_Disusun sebagai spesifikasi prompt untuk portfolio Faqih Pratama Muhti — konsep consulting-style software engineering portfolio: impact-driven case studies, capability mapping, dan architectural thinking._
