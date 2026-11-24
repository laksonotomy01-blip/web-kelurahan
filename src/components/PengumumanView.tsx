import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { PENGUMUMAN_LIST, PengumumanItem } from '../data/kelurahanData';

interface PengumumanViewProps {
  selectedPengumumanId?: string | null;
  onClearSelected?: () => void;
}

const KATEGORI_PENGUMUMAN: ('Semua' | PengumumanItem['kategori'])[] = [
  'Semua',
  'Pemberitahuan Layanan',
  'Jadwal Kegiatan',
  'Bantuan Sosial',
  'Informasi Penting',
];

export function PengumumanView({
  selectedPengumumanId,
  onClearSelected,
}: PengumumanViewProps) {
  const [selectedKategori, setSelectedKategori] = useState<
    'Semua' | PengumumanItem['kategori']
  >('Semua');
  const [activeItem, setActiveItem] = useState<PengumumanItem | null>(null);

  useEffect(() => {
    if (selectedPengumumanId) {
      const found = PENGUMUMAN_LIST.find((p) => p.id === selectedPengumumanId);
      if (found) setActiveItem(found);
      onClearSelected?.();
    }
  }, [selectedPengumumanId, onClearSelected]);

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setActiveItem(null);
    }
    if (activeItem) {
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
    }
  }, [activeItem]);

  const filtered = useMemo(() => {
    if (selectedKategori === 'Semua') return PENGUMUMAN_LIST;
    return PENGUMUMAN_LIST.filter((p) => p.kategori === selectedKategori);
  }, [selectedKategori]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="border-b border-slate-200 pb-8 space-y-3 max-w-3xl">
        <p className="text-xs font-medium text-amber-700">Papan Pengumuman Resmi</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Pengumuman Kelurahan
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Informasi resmi terkait pemberitahuan jam layanan, jadwal penyaluran bantuan sosial,
          kegiatan warga, serta edaran penting dari Pemerintah Kelurahan Mekarwangi.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg w-fit">
        {KATEGORI_PENGUMUMAN.map((kat) => (
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

      <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-200">
        {filtered.map((item) => (
          <article
            key={item.id}
            className="p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-slate-50/70 transition-colors"
          >
            <div className="space-y-2 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span className="font-semibold text-emerald-800">{item.kategori}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">Diterbitkan {item.tanggal}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">No. {item.nomor}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">{item.judul}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{item.ringkasan}</p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <span className="text-xs text-slate-500 tabular-nums">
                Berlaku s.d. {item.berlakuHingga}
              </span>
              <button
                type="button"
                onClick={() => setActiveItem(item)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Detail</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-pengumuman-title"
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div className="bg-white border border-slate-200 rounded-xl w-full max-w-2xl shadow-xl overflow-hidden">
            <div className="border-b border-slate-200 px-6 py-4 flex items-center justify-between gap-4">
              <p className="text-xs font-medium text-emerald-800">
                {activeItem.kategori} · {activeItem.tanggal}
              </p>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                aria-label="Tutup pengumuman"
                className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 sm:p-8 space-y-5">
              <div className="space-y-2">
                <p className="text-xs font-mono text-slate-500 tabular-nums">
                  Nomor Pengumuman: {activeItem.nomor}
                </p>
                <h2
                  id="modal-pengumuman-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug"
                >
                  {activeItem.judul}
                </h2>
              </div>
              <p className="text-base text-slate-700 leading-relaxed">{activeItem.detail}</p>
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>Masa berlaku: {activeItem.berlakuHingga}</span>
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="px-4 py-2 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
