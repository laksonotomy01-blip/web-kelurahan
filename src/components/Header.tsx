import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { PageId } from '../data/kelurahanData';

interface HeaderProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export function Header({ activePage, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'layanan' | 'publikasi' | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSelect = (page: PageId) => {
    onNavigate(page);
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  const isLayananGroup = activePage === 'layanan' || activePage === 'persyaratan';
  const isPublikasiGroup =
    activePage === 'berita' || activePage === 'pengumuman' || activePage === 'galeri';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div
        ref={navRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8"
      >
        {/* Zone 1: Single-line Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleSelect('beranda')}
          className="text-lg font-bold tracking-tight text-slate-900 hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800 rounded"
        >
          Kelurahan Mekarwangi
        </button>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden md:flex items-center gap-6 text-sm font-medium"
        >
          <button
            type="button"
            onClick={() => handleSelect('beranda')}
            className={`py-1.5 border-b-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800 ${
              activePage === 'beranda'
                ? 'border-emerald-800 text-emerald-900 font-semibold'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            Beranda
          </button>

          <button
            type="button"
            onClick={() => handleSelect('profil')}
            className={`py-1.5 border-b-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800 ${
              activePage === 'profil'
                ? 'border-emerald-800 text-emerald-900 font-semibold'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            Profil
          </button>

          <div className="relative">
            <button
              type="button"
              aria-expanded={openDropdown === 'layanan'}
              onClick={() =>
                setOpenDropdown((prev) => (prev === 'layanan' ? null : 'layanan'))
              }
              className={`py-1.5 border-b-2 inline-flex items-center gap-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800 ${
                isLayananGroup
                  ? 'border-emerald-800 text-emerald-900 font-semibold'
                  : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              <span>Layanan</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  openDropdown === 'layanan' ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            {openDropdown === 'layanan' && (
              <div className="absolute left-0 top-full mt-2 w-60 bg-white border border-slate-200 rounded-lg shadow-lg py-1.5 z-50">
                <button
                  type="button"
                  onClick={() => handleSelect('layanan')}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer ${
                    activePage === 'layanan'
                      ? 'bg-emerald-50 text-emerald-900 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  Informasi Pelayanan
                </button>
                <button
                  type="button"
                  onClick={() => handleSelect('persyaratan')}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer ${
                    activePage === 'persyaratan'
                      ? 'bg-emerald-50 text-emerald-900 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  Persyaratan Administrasi
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleSelect('unduh-surat')}
            className={`py-1.5 border-b-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800 ${
              activePage === 'unduh-surat'
                ? 'border-emerald-800 text-emerald-900 font-semibold'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            Unduh Surat
          </button>

          <div className="relative">
            <button
              type="button"
              aria-expanded={openDropdown === 'publikasi'}
              onClick={() =>
                setOpenDropdown((prev) => (prev === 'publikasi' ? null : 'publikasi'))
              }
              className={`py-1.5 border-b-2 inline-flex items-center gap-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800 ${
                isPublikasiGroup
                  ? 'border-emerald-800 text-emerald-900 font-semibold'
                  : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              <span>Publikasi</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  openDropdown === 'publikasi' ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            {openDropdown === 'publikasi' && (
              <div className="absolute left-0 top-full mt-2 w-56 bg-white border border-slate-200 rounded-lg shadow-lg py-1.5 z-50">
                <button
                  type="button"
                  onClick={() => handleSelect('berita')}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer ${
                    activePage === 'berita'
                      ? 'bg-emerald-50 text-emerald-900 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  Berita & Kegiatan
                </button>
                <button
                  type="button"
                  onClick={() => handleSelect('pengumuman')}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer ${
                    activePage === 'pengumuman'
                      ? 'bg-emerald-50 text-emerald-900 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  Pengumuman Resmi
                </button>
                <button
                  type="button"
                  onClick={() => handleSelect('galeri')}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer ${
                    activePage === 'galeri'
                      ? 'bg-emerald-50 text-emerald-900 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  Galeri Dokumentasi
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: 1 Primary CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleSelect('kontak')}
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
          >
            Kontak Layanan
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 cursor-pointer focus-visible:outline-2 focus-visible:outline-emerald-800"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav aria-label="Navigasi Mobile" className="px-4 py-3 space-y-1">
            {(
              [
                ['beranda', 'Beranda'],
                ['profil', 'Profil Kelurahan'],
                ['layanan', 'Informasi Pelayanan'],
                ['persyaratan', 'Persyaratan Administrasi'],
                ['unduh-surat', 'Unduh Surat Pengantar'],
                ['berita', 'Berita dan Kegiatan'],
                ['pengumuman', 'Pengumuman'],
                ['galeri', 'Galeri'],
                ['kontak', 'Kontak'],
              ] as [PageId, string][]
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => handleSelect(id)}
                className={`w-full text-left px-3 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  activePage === id
                    ? 'bg-emerald-50 text-emerald-900 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
