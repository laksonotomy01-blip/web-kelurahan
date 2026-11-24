import { ExternalLink, MapPin } from 'lucide-react';
import { IMAGES, KELURAHAN_INFO, PROFIL_DATA } from '../data/kelurahanData';
import { SafeImage } from './SafeImage';

export function ProfilView() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-8 space-y-3 max-w-3xl">
        <p className="text-xs font-medium text-emerald-800">
          Profil Wilayah · {KELURAHAN_INFO.kecamatan}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Profil {KELURAHAN_INFO.nama}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Gambaran sejarah, visi dan misi pelayanan, susunan perangkat kelurahan, data demografi
          penduduk, serta lokasi resmi kantor kelurahan.
        </p>
      </div>

      {/* Sejarah Singkat & Foto */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-center space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Sejarah Singkat Kelurahan</h2>
          <p className="text-base text-slate-600 leading-relaxed">{PROFIL_DATA.sejarah}</p>
          <p className="text-sm text-slate-500 leading-relaxed">
            Saat ini wilayah {KELURAHAN_INFO.nama} mencakup 11 Rukun Warga (RW) dan 68 Rukun
            Tetangga (RT) dengan fasilitas layanan administrasi terpadu serta posko pemberdayaan
            UMKM dan kesehatan masyarakat.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="h-full min-h-[260px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
            <SafeImage
              src={IMAGES.heroKantor}
              alt="Kantor Kelurahan Mekarwangi Kota Bandung"
              fallbackTitle="Kantor Kelurahan Mekarwangi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Visi dan Misi */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 bg-emerald-900 text-white rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-medium text-emerald-200">Arah Kebijakan Wilayah</p>
            <h2 className="text-2xl font-bold tracking-tight">Visi Kelurahan</h2>
            <p className="text-lg font-medium leading-relaxed text-emerald-50">
              “{PROFIL_DATA.visi}”
            </p>
          </div>
          <p className="text-xs text-emerald-200 border-t border-emerald-800 pt-4">
            Periode Rencana Kerja Pemerintahan Kelurahan 2025–2029
          </p>
        </div>

        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-5">
          <h2 className="text-2xl font-bold text-slate-900">Misi Pelayanan & Pembangunan</h2>
          <ol className="divide-y divide-slate-200">
            {PROFIL_DATA.misi.map((item, idx) => (
              <li key={idx} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                <span className="font-mono text-sm font-semibold text-emerald-800 tabular-nums shrink-0 mt-0.5">
                  0{idx + 1}.
                </span>
                <span className="text-sm sm:text-base text-slate-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Data Demografi & Wilayah */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">Data Demografi dan Wilayah</h2>
          <p className="text-sm text-slate-600">
            Rekapitulasi data administrasi kependudukan dan cakupan wilayah semester berjalan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROFIL_DATA.statistik.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-slate-200 rounded-xl p-6 space-y-1"
            >
              <p className="text-xs font-medium text-slate-500">{stat.label}</p>
              <p className="text-3xl font-bold text-slate-900 tabular-nums">{stat.nilai}</p>
              <p className="text-xs text-emerald-800 font-medium">{stat.satuan}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-3.5 px-6 text-xs font-semibold text-slate-600">
                    Indikator Kependudukan & Fasilitas
                  </th>
                  <th className="py-3.5 px-6 text-xs font-semibold text-slate-600">Jumlah</th>
                  <th className="py-3.5 px-6 text-xs font-semibold text-slate-600">Proporsi / Cakupan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {PROFIL_DATA.demografiDetail.map((row) => (
                  <tr key={row.kategori} className="hover:bg-slate-50/60">
                    <td className="py-3.5 px-6 font-medium text-slate-900">{row.kategori}</td>
                    <td className="py-3.5 px-6 text-slate-700 tabular-nums">{row.jumlah}</td>
                    <td className="py-3.5 px-6 text-slate-600 tabular-nums">{row.persentase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi / Perangkat Kelurahan */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">
            Struktur Organisasi & Perangkat Kelurahan
          </h2>
          <p className="text-sm text-slate-600">
            Susunan pejabat dan koordinator pelaksana pelayanan publik Kelurahan Mekarwangi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFIL_DATA.perangkat.map((p, index) => (
            <div
              key={p.nip}
              className="bg-white border border-slate-200 rounded-xl p-6 space-y-3"
            >
              <div className="text-xs font-medium text-emerald-800">
                0{index + 1}. {p.jabatan}
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">{p.nama}</h3>
                <p className="text-xs font-mono text-slate-500 tabular-nums mt-0.5">
                  NIP. {p.nip}
                </p>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                {p.tugas}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Peta & Lokasi Kantor */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">Lokasi Kantor Kelurahan</h2>
          <p className="text-sm text-slate-600">
            Peta lokasi Kantor {KELURAHAN_INFO.nama}, {KELURAHAN_INFO.kecamatan}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-8 bg-slate-100 border border-slate-200 rounded-xl overflow-hidden min-h-[320px]">
            <iframe
              title="Peta Lokasi Kantor Kelurahan Mekarwangi"
              src="https://www.openstreetmap.org/export/embed.html?bbox=107.5934%2C-6.9600%2C107.6134%2C-6.9460&layer=mapnik&marker=-6.9532%2C107.6034"
              className="w-full h-full min-h-[320px] border-0"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900">{KELURAHAN_INFO.nama}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{KELURAHAN_INFO.alamat}</p>
                </div>
              </div>
              <div className="text-sm text-slate-600 space-y-1.5 pt-3 border-t border-slate-200">
                <p>
                  <span className="text-slate-500">Telepon:</span>{' '}
                  <span className="font-mono tabular-nums text-slate-900">
                    {KELURAHAN_INFO.telepon}
                  </span>
                </p>
                <p>
                  <span className="text-slate-500">WhatsApp:</span>{' '}
                  <span className="font-mono tabular-nums text-slate-900">
                    {KELURAHAN_INFO.whatsapp}
                  </span>
                </p>
                <p>
                  <span className="text-slate-500">Koordinat:</span>{' '}
                  <span className="font-mono text-xs tabular-nums text-slate-700">
                    {KELURAHAN_INFO.koordinat.lat}, {KELURAHAN_INFO.koordinat.lng}
                  </span>
                </p>
              </div>
            </div>

            <a
              href={KELURAHAN_INFO.koordinat.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors"
            >
              <span>Buka di Google Maps</span>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
