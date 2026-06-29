import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PreferencesProvider } from '@/context/PreferencesProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Home from '@/routes/Home';

// Code-split the detail route.
const CaseStudyDetail = lazy(() => import('@/routes/CaseStudyDetail'));

export default function App() {
  return (
    <PreferencesProvider>
      {/* basename === Vite `base`, so routes line up with the GitHub Pages sub-path. */}
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Suspense fallback={<div className="p-10 text-center text-sm text-slate-500">Loading…</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </PreferencesProvider>
  );
}
