import { FormEvent, useState } from 'react';
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { KELURAHAN_INFO } from '../data/kelurahanData';

interface FormErrors {
  nama?: string;
  kontak?: string;
  pesan?: string;
}

export function KontakView() {
  const [nama, setNama] = useState('');
  const [kontak, setKontak] = useState('');
  const [kategori, setKategori] = useState('Pertanyaan Administrasi');
  const [pesan, setPesan] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: FormErrors = {};

    if (nama.trim().length < 3) {
      nextErrors.nama = 'Masukkan nama lengkap minimal 3 karakter.';
    }
    if (kontak.trim().length < 6) {
      nextErrors.kontak = 'Masukkan nomor WhatsApp atau alamat email yang valid.';
    }
    if (pesan.trim().length < 10) {
      nextErrors.pesan = 'Tuliskan pertanyaan atau pesan Anda minimal 10 karakter.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    const randomRef = `MW-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedTicket(randomRef);
    setNama('');
    setKontak('');
    setPesan('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="border-b border-slate-200 pb-8 space-y-3 max-w-3xl">
        <p className="text-xs font-medium text-emerald-800">Layanan Informasi & Pengaduan</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Kontak {KELURAHAN_INFO.nama}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Hubungi kami untuk konsultasi persyaratan administrasi, konfirmasi jadwal kegiatan, atau
          sampaikan aspirasi dan pertanyaan Anda melalui formulir resmi di bawah ini.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Office Contact Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-6">
            <h2 className="text-lg font-bold text-slate-900">Informasi Kantor Resmi</h2>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-slate-900">Alamat Kantor</p>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">{KELURAHAN_INFO.alamat}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-slate-900">Telepon & WhatsApp Layanan</p>
                  <p className="text-slate-600 mt-0.5 font-mono tabular-nums">
                    Telp: {KELURAHAN_INFO.telepon}
                  </p>
                  <p className="text-slate-600 font-mono tabular-nums">
                    WhatsApp: {KELURAHAN_INFO.whatsapp}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-slate-900">Email Resmi</p>
                  <p className="text-slate-600 mt-0.5">{KELURAHAN_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-slate-900">Jam Buka Pelayanan</p>
                  <p className="text-slate-600 mt-0.5 tabular-nums">
                    Senin – Kamis: 08.00 – 15.30 WIB
                  </p>
                  <p className="text-slate-600 tabular-nums">Jumat: 08.00 – 16.00 WIB</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Sabtu, Minggu & Hari Libur Nasional tutup
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-3">
              <a
                href={KELURAHAN_INFO.koordinat.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors"
              >
                <span>Buka Peta Lokasi</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={KELURAHAN_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <span>Chat WhatsApp</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="bg-slate-100 border border-slate-200 rounded-xl overflow-hidden h-64">
            <iframe
              title="Peta Kantor Kelurahan Mekarwangi"
              src="https://www.openstreetmap.org/export/embed.html?bbox=107.5934%2C-6.9600%2C107.6134%2C-6.9460&layer=mapnik&marker=-6.9532%2C107.6034"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* Citizen Inquiry Form */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
          <div className="space-y-1.5">
            <h2 className="text-xl font-bold text-slate-900">
              Kirim Pesan atau Pertanyaan Warga
            </h2>
            <p className="text-sm text-slate-600">
              Pesan Anda akan diteruskan ke petugas loket informasi Kelurahan Mekarwangi dan
              ditanggapi pada hari kerja.
            </p>
          </div>

          {submittedTicket && (
            <div
              role="status"
              className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 space-y-2"
            >
              <div className="flex items-center gap-2 text-emerald-900 font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" aria-hidden="true" />
                <span>Pesan Anda telah diterima oleh layanan Kelurahan Mekarwangi.</span>
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed">
                Nomor referensi pesan:{' '}
                <span className="font-mono font-semibold tabular-nums">{submittedTicket}</span>.
                Petugas kami akan menghubungi Anda melalui kontak yang dicantumkan maksimal 1×24 jam
                hari kerja.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="kontak-nama"
                  className="block text-sm font-medium text-slate-800 mb-1.5"
                >
                  Nama Lengkap
                </label>
                <input
                  id="kontak-nama"
                  type="text"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Masukkan nama lengkap Anda"
                  aria-invalid={Boolean(errors.nama)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
                {errors.nama && (
                  <p className="text-xs text-red-700 mt-1.5" role="alert">
                    {errors.nama}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="kontak-info"
                  className="block text-sm font-medium text-slate-800 mb-1.5"
                >
                  No. WhatsApp atau Email
                </label>
                <input
                  id="kontak-info"
                  type="text"
                  value={kontak}
                  onChange={(e) => setKontak(e.target.value)}
                  placeholder="0812xxxx atau email@contoh.id"
                  aria-invalid={Boolean(errors.kontak)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
                {errors.kontak && (
                  <p className="text-xs text-red-700 mt-1.5" role="alert">
                    {errors.kontak}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="kontak-kategori"
                className="block text-sm font-medium text-slate-800 mb-1.5"
              >
                Topik Pesan
              </label>
              <select
                id="kontak-kategori"
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
              >
                <option value="Pertanyaan Administrasi">Pertanyaan Administrasi & Persyaratan</option>
                <option value="Permintaan Surat Pengantar">Kendala Unduh / Format Surat Pengantar</option>
                <option value="Informasi Bantuan Sosial">Informasi Bantuan Sosial / DTKS</option>
                <option value="Saran & Pengaduan Lingkungan">Saran & Pengaduan Lingkungan</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="kontak-pesan"
                className="block text-sm font-medium text-slate-800 mb-1.5"
              >
                Isi Pesan atau Pertanyaan
              </label>
              <textarea
                id="kontak-pesan"
                rows={5}
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                placeholder="Tuliskan pertanyaan, lokasi RT/RW (bila perlu), atau kendala pelayanan Anda secara jelas..."
                aria-invalid={Boolean(errors.pesan)}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
              />
              {errors.pesan && (
                <p className="text-xs text-red-700 mt-1.5" role="alert">
                  {errors.pesan}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <p className="text-xs text-slate-500">
                Data kontak hanya digunakan untuk menindaklanjuti pesan Anda.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                <span>Kirim Pesan</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
