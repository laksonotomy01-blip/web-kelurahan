import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import { BERITA_LIST, BeritaItem } from '../data/kelurahanData';
import { SafeImage } from './SafeImage';

interface BeritaViewProps {
  selectedBeritaId?: string | null;
  onClearSelected?: () => void;
}

const KATEGORI_BERITA: ('Semua' | BeritaItem['kategori'])[] = [
  'Semua',
  'Pemerintahan',
  'Kesehatan & Sosial',
  'Lingkungan',
];

export function BeritaView({ selectedBeritaId, onClearSelected }: BeritaViewProps) {
  const [query, setQuery] = useState('');
  const [selectedKategori, setSelectedKategori] = useState<'Semua' | BeritaItem['kategori']>(
    'Semua'
  );
  const [activeArticle, setActiveArticle] = useState<BeritaItem | null>(null);

  useEffect(() => {
    if (selectedBeritaId) {
      const found = BERITA_LIST.find((b) => b.id === selectedBeritaId);
      if (found) {
        setActiveArticle(found);
      }
      onClearSelected?.();
    }
  }, [selectedBeritaId, onClearSelected]);

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setActiveArticle(null);
    }
    if (activeArticle) {
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
    }
  }, [activeArticle]);

  const filteredNews = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BERITA_LIST.filter((item) => {
      const matchesCat =
        selectedKategori === 'Semua' || item.kategori === selectedKategori;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        item.judul.toLowerCase().includes(q) ||
        item.ringkasan.toLowerCase().includes(q) ||
        item.penulis.toLowerCase().includes(q)
      );
    });
  }, [query, selectedKategori]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="border-b border-slate-200 pb-8 space-y-3 max-w-3xl">
        <p className="text-xs font-medium text-emerald-800">Publikasi & Dokumentasi</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Berita dan Kegiatan Kelurahan
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Kabar terkini mengenai program pembangunan wilayah, pelayanan publik, kesehatan
          masyarakat, serta kegiatan gotong royong warga Kelurahan Mekarwangi.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="relative w-full lg:max-w-md">
          <Search
            className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari berita atau kegiatan..."
            aria-label="Cari artikel berita"
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-700"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
          {KATEGORI_BERITA.map((kat) => (
            <button
              key={kat}
              type="button"
              onClick={() => setSelectedKategori(kat)}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedKategori === kat
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {kat}
            </button>
          ))}
        </div>
      </div>

      {filteredNews.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-xl p-10 text-center space-y-3">
          <p className="text-base font-semibold text-slate-900">
            Belum ada berita yang sesuai dengan pencarian Anda
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setSelectedKategori('Semua');
            }}
            className="px-4 py-2 text-sm font-semibold text-emerald-800 bg-emerald-50 rounded-lg cursor-pointer"
          >
            Tampilkan Semua Berita
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredNews.map((item) => (
            <article
              key={item.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <SafeImage
                  src={item.gambar}
                  alt={item.judul}
                  fallbackTitle={item.judul}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2.5">
                  <p className="text-xs text-slate-500">
                    {item.kategori} · {item.tanggal} · {item.penulis}
                  </p>
                  <h2 className="text-xl font-bold text-slate-900 leading-snug">
                    {item.judul}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.ringkasan}</p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveArticle(item)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-emerald-900 w-fit cursor-pointer"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Article Reader Modal */}
      {activeArticle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-berita-title"
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
        >
          <div className="bg-white border border-slate-200 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between gap-4 z-10">
              <p className="text-xs text-slate-500">
                {activeArticle.kategori} · {activeArticle.tanggal}
              </p>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                aria-label="Tutup artikel"
                className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-3">
                <h2
                  id="modal-berita-title"
                  className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight"
                >
                  {activeArticle.judul}
                </h2>
                <p className="text-xs text-slate-500">
                  Disusun oleh {activeArticle.penulis}
                </p>
              </div>

              <div className="aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <SafeImage
                  src={activeArticle.gambar}
                  alt={activeArticle.judul}
                  fallbackTitle={activeArticle.judul}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="max-w-prose space-y-4 text-base text-slate-700 leading-relaxed">
                {activeArticle.isi.map((paragraf, idx) => (
                  <p key={idx}>{paragraf}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
