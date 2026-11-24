import { useState } from 'react';
import { ArrowRight, Clock, FileCheck2 } from 'lucide-react';
import {
  ALUR_PELAYANAN,
  JAM_OPERASIONAL,
  LAYANAN_LIST,
  LayananItem,
  PageId,
} from '../data/kelurahanData';

interface LayananViewProps {
  onNavigate: (page: PageId) => void;
}

const KATEGORI_FILTER: ('Semua' | LayananItem['kategori'])[] = [
  'Semua',
  'Administrasi Kependudukan',
  'Surat Menyurat',
  'Sosial Kemasyarakatan',
];

export function LayananView({ onNavigate }: LayananViewProps) {
  const [selectedKategori, setSelectedKategori] = useState<'Semua' | LayananItem['kategori']>(
    'Semua'
  );

  const filteredLayanan =
    selectedKategori === 'Semua'
      ? LAYANAN_LIST
      : LAYANAN_LIST.filter((item) => item.kategori === selectedKategori);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          <p className="text-xs font-medium text-emerald-800">Standar Pelayanan Minimal</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Informasi Pelayanan Publik
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Daftar layanan administrasi kependudukan, surat menyurat, dan sosial kemasyarakatan yang
            dilayani di loket Kantor Kelurahan Mekarwangi. Seluruh layanan gratis tanpa biaya.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('persyaratan')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-800 bg-white border border-slate-200 hover:border-emerald-700 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            <FileCheck2 className="w-4 h-4 text-emerald-800" aria-hidden="true" />
            <span>Cek Persyaratan Berkas</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigate('unduh-surat')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>Unduh Surat Pengantar</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Filter & Jenis Layanan */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-lg w-fit">
          {KATEGORI_FILTER.map((kategori) => (
            <button
              key={kategori}
              type="button"
              onClick={() => setSelectedKategori(kategori)}
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedKategori === kategori
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {kategori}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredLayanan.map((layanan) => (
            <div
              key={layanan.id}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-2.5">
                <p className="text-xs text-slate-500">
                  {layanan.kategori} · Estimasi {layanan.estimasi} · {layanan.biaya}
                </p>
                <h2 className="text-lg font-bold text-slate-900">{layanan.nama}</h2>
                <p className="text-sm text-slate-600 leading-relaxed">{layanan.deskripsi}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-xs text-slate-500">
                  <span className="font-medium text-slate-700">Hasil:</span> {layanan.output}
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate('persyaratan')}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 hover:text-emerald-900 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Lihat Persyaratan</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Jam Operasional Pelayanan */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5">
          <Clock className="w-5 h-5 text-emerald-800" aria-hidden="true" />
          <h2 className="text-2xl font-bold text-slate-900">Jam Operasional Loket Pelayanan</h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-3.5 px-6 text-xs font-semibold text-slate-600">Hari</th>
                  <th className="py-3.5 px-6 text-xs font-semibold text-slate-600">Jam Layanan</th>
                  <th className="py-3.5 px-6 text-xs font-semibold text-slate-600">Istirahat</th>
                  <th className="py-3.5 px-6 text-xs font-semibold text-slate-600">Keterangan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {JAM_OPERASIONAL.map((row) => (
                  <tr key={row.hari} className="hover:bg-slate-50/60">
                    <td className="py-4 px-6 font-semibold text-slate-900">{row.hari}</td>
                    <td className="py-4 px-6 text-slate-800 font-mono tabular-nums">
                      {row.jamLayanan}
                    </td>
                    <td className="py-4 px-6 text-slate-600 font-mono tabular-nums">
                      {row.istirahat}
                    </td>
                    <td className="py-4 px-6 text-slate-600">{row.keterangan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Alur Prosedur */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">Alur dan Prosedur Pengurusan</h2>
          <p className="text-sm text-slate-600">
            Ikuti empat langkah berikut agar pengurusan dokumen di loket kelurahan berjalan cepat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ALUR_PELAYANAN.map((step) => (
            <div
              key={step.langkah}
              className="bg-white border border-slate-200 rounded-xl p-6 space-y-3"
            >
              <span className="block font-mono text-sm font-semibold text-emerald-800 tabular-nums">
                Langkah {step.langkah}
              </span>
              <h3 className="text-base font-bold text-slate-900">{step.judul}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.deskripsi}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
