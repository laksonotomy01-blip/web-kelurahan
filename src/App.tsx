import { useCallback, useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { ProfilView } from './components/ProfilView';
import { LayananView } from './components/LayananView';
import { PersyaratanView } from './components/PersyaratanView';
import { UnduhSuratView } from './components/UnduhSuratView';
import { BeritaView } from './components/BeritaView';
import { PengumumanView } from './components/PengumumanView';
import { GaleriView } from './components/GaleriView';
import { KontakView } from './components/KontakView';
import { PageId } from './data/kelurahanData';

const VALID_PAGES: PageId[] = [
  'beranda',
  'profil',
  'layanan',
  'persyaratan',
  'unduh-surat',
  'berita',
  'pengumuman',
  'galeri',
  'kontak',
];

function getInitialPage(): PageId {
  const hash = window.location.hash.replace('#', '') as PageId;
  return VALID_PAGES.includes(hash) ? hash : 'beranda';
}

export default function App() {
  const [activePage, setActivePage] = useState<PageId>(getInitialPage);
  const [highlightedTemplateId, setHighlightedTemplateId] = useState<string | null>(null);
  const [selectedBeritaId, setSelectedBeritaId] = useState<string | null>(null);
  const [selectedPengumumanId, setSelectedPengumumanId] = useState<string | null>(null);

  const navigateTo = useCallback((page: PageId) => {
    setActivePage(page);
    if (window.location.hash !== `#${page}`) {
      window.history.pushState(null, '', `#${page}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    function handleHashChange() {
      setActivePage(getInitialPage());
    }
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenTemplate = useCallback(
    (templateId: string) => {
      setHighlightedTemplateId(templateId);
      navigateTo('unduh-surat');
    },
    [navigateTo]
  );

  const handleSelectBerita = useCallback(
    (id: string) => {
      setSelectedBeritaId(id);
      navigateTo('berita');
    },
    [navigateTo]
  );

  const handleSelectPengumuman = useCallback(
    (id: string) => {
      setSelectedPengumumanId(id);
      navigateTo('pengumuman');
    },
    [navigateTo]
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header activePage={activePage} onNavigate={navigateTo} />

      <main className="flex-1">
        {activePage === 'beranda' && (
          <HomeView
            onNavigate={navigateTo}
            onSelectBerita={handleSelectBerita}
            onSelectPengumuman={handleSelectPengumuman}
          />
        )}
        {activePage === 'profil' && <ProfilView />}
        {activePage === 'layanan' && <LayananView onNavigate={navigateTo} />}
        {activePage === 'persyaratan' && (
          <PersyaratanView onOpenTemplate={handleOpenTemplate} />
        )}
        {activePage === 'unduh-surat' && (
          <UnduhSuratView
            highlightedTemplateId={highlightedTemplateId}
            onClearHighlight={() => setHighlightedTemplateId(null)}
          />
        )}
        {activePage === 'berita' && (
          <BeritaView
            selectedBeritaId={selectedBeritaId}
            onClearSelected={() => setSelectedBeritaId(null)}
          />
        )}
        {activePage === 'pengumuman' && (
          <PengumumanView
            selectedPengumumanId={selectedPengumumanId}
            onClearSelected={() => setSelectedPengumumanId(null)}
          />
        )}
        {activePage === 'galeri' && <GaleriView />}
        {activePage === 'kontak' && <KontakView />}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}
