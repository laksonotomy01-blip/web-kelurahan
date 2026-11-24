import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { GALERI_LIST, GaleriItem } from '../data/kelurahanData';
import { SafeImage } from './SafeImage';

const KATEGORI_GALERI: ('Semua' | GaleriItem['kategori'])[] = [
  'Semua',
  'Pelayanan & Kantor',
  'Kegiatan Warga',
  'Kesehatan & Sosial',
];

export function GaleriView() {
  const [selectedKategori, setSelectedKategori] = useState<'Semua' | GaleriItem['kategori']>(
    'Semua'
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (selectedKategori === 'Semua') return GALERI_LIST;
    return GALERI_LIST.filter((item) => item.kategori === selectedKategori);
  }, [selectedKategori]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (activeIndex === null) return;
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) =>
          prev === null ? null : (prev + 1) % filtered.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) =>
          prev === null ? null : (prev - 1 + filtered.length) % filtered.length
        );
      }
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [activeIndex, filtered.length]);

  const activeItem = activeIndex !== null ? filtered[activeIndex] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="border-b border-slate-200 pb-8 space-y-3 max-w-3xl">
        <p className="text-xs font-medium text-emerald-800">Arsip Foto Wilayah</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Galeri Dokumentasi Kegiatan
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Dokumentasi visual fasilitas kantor kelurahan, musyawarah warga, layanan kesehatan
          masyarakat, dan kerja bakti lingkungan. Klik gambar untuk melihat pratinjau ukuran penuh.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg w-fit">
        {KATEGORI_GALERI.map((kat) => (
          <button
            key={kat}
            type="button"
            onClick={() => {
              setSelectedKategori(kat);
              setActiveIndex(null);
            }}
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(idx)}
            className="group text-left bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-emerald-700 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-emerald-800"
          >
            <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
              <SafeImage
                src={item.gambar}
                alt={item.judul}
                fallbackTitle={item.judul}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
              />
              <span
                aria-hidden="true"
                className="absolute right-3 bottom-3 w-9 h-9 rounded-lg bg-slate-900/75 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Expand className="w-4 h-4" />
              </span>
            </div>
            <div className="p-5 space-y-1.5">
              <p className="text-xs text-slate-500">
                {item.kategori} · {item.tanggal}
              </p>
              <h2 className="text-base font-bold text-slate-900 leading-snug">{item.judul}</h2>
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {item.deskripsi}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeItem && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div className="bg-white rounded-xl w-full max-w-4xl overflow-hidden shadow-2xl">
            <div className="px-5 py-3.5 border-b border-slate-200 flex items-center justify-between gap-4">
              <p className="text-xs text-slate-500 tabular-nums">
                Foto {activeIndex + 1} dari {filtered.length} · {activeItem.lokasi}
              </p>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label="Tutup galeri pratinjau"
                className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative bg-slate-950 aspect-[16/10] max-h-[62vh] flex items-center justify-center">
              <SafeImage
                src={activeItem.gambar}
                alt={activeItem.judul}
                fallbackTitle={activeItem.judul}
                className="w-full h-full object-contain"
              />

              {filtered.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Foto sebelumnya"
                    onClick={() =>
                      setActiveIndex((activeIndex - 1 + filtered.length) % filtered.length)
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center shadow cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Foto berikutnya"
                    onClick={() => setActiveIndex((activeIndex + 1) % filtered.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center shadow cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            <div className="p-6 space-y-1.5">
              <p className="text-xs text-slate-500">
                {activeItem.kategori} · {activeItem.tanggal} · {activeItem.lokasi}
              </p>
              <h3 id="lightbox-title" className="text-lg font-bold text-slate-900">
                {activeItem.judul}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{activeItem.deskripsi}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
