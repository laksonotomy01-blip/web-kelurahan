import { useMemo, useState } from 'react';
import { ArrowRight, Check, Search } from 'lucide-react';
import {
  KategoriPersyaratan,
  PERSYARATAN_LIST,
} from '../data/kelurahanData';

interface PersyaratanViewProps {
  onOpenTemplate: (templateId: string) => void;
}

const KATEGORI_LIST: KategoriPersyaratan[] = [
  'Semua',
  'Kependudukan',
  'Usaha & Ekonomi',
  'Sosial & Kemasyarakatan',
  'Nikah & Keluarga',
];

export function PersyaratanView({ onOpenTemplate }: PersyaratanViewProps) {
  const [query, setQuery] = useState('');
  const [selectedKategori, setSelectedKategori] = useState<KategoriPersyaratan>('Semua');

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PERSYARATAN_LIST.filter((item) => {
      const matchesCat =
        selectedKategori === 'Semua' || item.kategori === selectedKategori;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        item.layanan.toLowerCase().includes(q) ||
        item.catatan.toLowerCase().includes(q) ||
        item.dokumen.some((d) => d.toLowerCase().includes(q))
      );
    });
  }, [query, selectedKategori]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8 space-y-3 max-w-3xl">
        <p className="text-xs font-medium text-emerald-800">Panduan Berkas Pemohon</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Persyaratan Administrasi Layanan
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Periksa daftar lengkap dokumen yang perlu disiapkan sebelum datang ke loket pelayanan
          Kelurahan Mekarwangi. Gunakan kolom pencarian atau filter kategori di bawah ini.
        </p>
      </div>

      {/* Search & Filter Controls */}
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
            placeholder="Cari layanan atau nama berkas (misal: KTP, SKTM, Nikah)..."
            aria-label="Cari persyaratan administrasi"
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
          {KATEGORI_LIST.map((kat) => (
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

      {/* Results Count */}
      <p className="text-xs text-slate-500 tabular-nums">
        Menampilkan {filteredItems.length} dari {PERSYARATAN_LIST.length} jenis persyaratan layanan
      </p>

      {/* List */}
      {filteredItems.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-xl p-10 text-center space-y-4">
          <p className="text-base font-semibold text-slate-900">
            Persyaratan yang dicari tidak ditemukan
          </p>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Coba gunakan kata kunci lain seperti KTP, Kartu Keluarga, Domisili, SKU, atau tampilkan
            semua kategori.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setSelectedKategori('Semua');
            }}
            className="px-4 py-2 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors cursor-pointer"
          >
            Tampilkan Semua Persyaratan
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <p className="text-xs text-slate-500">
                    {item.kategori} · Estimasi {item.estimasi} · Biaya {item.biaya}
                  </p>
                  <h2 className="text-xl font-bold text-slate-900">{item.layanan}</h2>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  <p className="text-xs font-semibold text-slate-700">
                    Dokumen yang Harus Disiapkan:
                  </p>
                  <ul className="space-y-2">
                    {item.dokumen.map((dok, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <Check
                          className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="leading-relaxed">{dok}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  <span className="font-semibold text-slate-800">Catatan:</span> {item.catatan}
                </p>
                {item.relatedTemplateId && (
                  <button
                    type="button"
                    onClick={() => onOpenTemplate(item.relatedTemplateId!)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-900 cursor-pointer"
                  >
                    <span>Unduh Format Surat Pengantar Terkait</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
