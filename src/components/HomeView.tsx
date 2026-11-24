import { ArrowRight, Download, FileText, MapPin } from 'lucide-react';
import {
  ALUR_PELAYANAN,
  BERITA_LIST,
  IMAGES,
  KELURAHAN_INFO,
  LETTER_TEMPLATES,
  PageId,
  PENGUMUMAN_LIST,
  PROFIL_DATA,
} from '../data/kelurahanData';
import { SafeImage } from './SafeImage';
import { generateLetterPdf } from '../utils/documentGenerator';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onSelectBerita: (id: string) => void;
  onSelectPengumuman: (id: string) => void;
}

export function HomeView({
  onNavigate,
  onSelectBerita,
  onSelectPengumuman,
}: HomeViewProps) {
  const featuredNews = BERITA_LIST.slice(0, 2);
  const latestAnnouncements = PENGUMUMAN_LIST.slice(0, 3);
  const featuredTemplates = LETTER_TEMPLATES.slice(0, 4);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Split Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <p className="text-xs font-medium tracking-wide text-emerald-800">
                {KELURAHAN_INFO.kota} · {KELURAHAN_INFO.kecamatan}
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.15]">
                Pelayanan Publik Kelurahan Mekarwangi yang Tertib dan Ramah Warga
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Akses informasi profil wilayah, cek persyaratan administrasi kependudukan, serta
                unduh format surat pengantar resmi secara mandiri sebelum datang ke loket layanan.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('unduh-surat')}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  <span>Unduh Surat Pengantar</span>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('layanan')}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
                >
                  <span>Informasi Layanan</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full min-h-[280px] sm:min-h-[340px] lg:min-h-[400px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <SafeImage
                  src={IMAGES.heroKantor}
                  alt="Gedung Pelayanan Publik Kantor Kelurahan Mekarwangi"
                  fallbackTitle="Kantor Kelurahan Mekarwangi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* 4-Column Operational Utility & Wilayah Ribbon */}
          <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <p className="text-xs font-medium text-slate-500">Jam Layanan Loket</p>
              <p className="mt-1 text-sm font-semibold text-slate-900 tabular-nums">
                Senin–Kamis 08.00–15.30 WIB
              </p>
              <p className="text-xs text-slate-500 mt-0.5 tabular-nums">
                Jumat 08.00–16.00 WIB
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">Wilayah Administratif</p>
              <p className="mt-1 text-sm font-semibold text-slate-900 tabular-nums">
                11 RW · 68 RT · 148,5 Ha
              </p>
              <p className="text-xs text-slate-500 mt-0.5 tabular-nums">
                24.680 Jiwa · 7.420 KK
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">Biaya Administrasi</p>
              <p className="mt-1 text-sm font-semibold text-emerald-800 tabular-nums">
                Gratis (Rp 0)
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Seluruh surat pengantar kelurahan
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">Alamat & Layanan Info</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                {KELURAHAN_INFO.alamatRingkas}
              </p>
              <p className="text-xs text-slate-500 mt-0.5 font-mono tabular-nums">
                Telp. {KELURAHAN_INFO.telepon}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sambutan Lurah & Ringkasan Profil */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="aspect-square max-w-xs mx-auto lg:max-w-none rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <SafeImage
                  src={IMAGES.fotoLurah}
                  alt={`Foto ${KELURAHAN_INFO.lurah.nama}, Lurah Mekarwangi`}
                  fallbackTitle={KELURAHAN_INFO.lurah.nama}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5">
              <div className="text-xs font-medium text-slate-500">
                Sambutan Pimpinan · {KELURAHAN_INFO.lurah.jabatan}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Melayani Warga dengan Kejelasan Prosedur dan Transparansi
              </h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                {KELURAHAN_INFO.lurah.sambutanLengkap}
              </p>
              <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {KELURAHAN_INFO.lurah.nama}
                  </p>
                  <p className="text-xs text-slate-500 font-mono tabular-nums">
                    NIP. {KELURAHAN_INFO.lurah.nip}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('profil')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-900 cursor-pointer"
                >
                  <span>Baca Profil & Struktur Organisasi</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ringkasan Alur Pelayanan & Template Surat Cepat */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-medium text-emerald-800">Standar Pelayanan Publik</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Alur Pengurusan Surat & Layanan Administrasi
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('persyaratan')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-900 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Cek Persyaratan Lengkap</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ALUR_PELAYANAN.map((step) => (
            <div
              key={step.langkah}
              className="bg-white border border-slate-200 rounded-xl p-6 space-y-3"
            >
              <span className="block font-mono text-sm font-semibold text-emerald-800 tabular-nums">
                {step.langkah}.
              </span>
              <h3 className="text-base font-semibold text-slate-900">{step.judul}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.deskripsi}</p>
            </div>
          ))}
        </div>

        {/* Quick Download Strip */}
        <div className="bg-slate-100 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Akses Cepat Formulir & Surat Pengantar
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Unduh langsung dokumen templat siap pakai atau lengkapi data sebelum dicetak.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('unduh-surat')}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-emerald-800 bg-white border border-slate-200 hover:border-emerald-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Lihat Semua 8 Surat</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredTemplates.map((tpl) => (
              <div
                key={tpl.id}
                className="bg-white border border-slate-200 rounded-lg p-4 flex items-center justify-between gap-4"
              >
                <div className="min-w-0">
                  <p className="text-xs text-slate-500">
                    {tpl.kategori} · {tpl.kodeSurat}
                  </p>
                  <p className="text-sm font-semibold text-slate-900 truncate mt-0.5">
                    {tpl.judul}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => generateLetterPdf(tpl)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Unduh PDF</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sorotan Berita Terbaru & Pengumuman Resmi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Berita Terkini (70%) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-emerald-800">Publikasi Warga</p>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
                  Berita dan Kegiatan Terbaru
                </h2>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('berita')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-emerald-900 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Semua Berita</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featuredNews.map((item) => (
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
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <p className="text-xs text-slate-500">
                        {item.kategori} · {item.tanggal}
                      </p>
                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {item.judul}
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {item.ringkasan}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onSelectBerita(item.id)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-emerald-900 w-fit cursor-pointer"
                    >
                      <span>Baca Selengkapnya</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Pengumuman Resmi (30%) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-amber-700">Papan Informasi</p>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
                  Pengumuman
                </h2>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('pengumuman')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-emerald-900 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Semua</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-200">
              {latestAnnouncements.map((ann) => (
                <button
                  key={ann.id}
                  type="button"
                  onClick={() => onSelectPengumuman(ann.id)}
                  className="w-full text-left p-5 hover:bg-slate-50 transition-colors space-y-1.5 cursor-pointer block"
                >
                  <p className="text-xs text-slate-500">
                    {ann.kategori} · {ann.tanggal}
                  </p>
                  <h3 className="text-sm font-semibold text-slate-900 leading-snug">
                    {ann.judul}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {ann.ringkasan}
                  </p>
                </button>
              ))}
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Kunjungi Kantor Kelurahan
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {KELURAHAN_INFO.alamat}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => onNavigate('kontak')}
                  className="text-xs font-semibold text-emerald-800 hover:text-emerald-900 cursor-pointer"
                >
                  Kirim Pesan Warga →
                </button>
                <span className="text-slate-300" aria-hidden="true">·</span>
                <span className="text-xs text-slate-500 tabular-nums">
                  {PROFIL_DATA.statistik[3].nilai} RW/RT
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
