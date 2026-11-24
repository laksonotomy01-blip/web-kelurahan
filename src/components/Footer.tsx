import { KELURAHAN_INFO, PageId } from '../data/kelurahanData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          <div className="md:col-span-5 space-y-4">
            <h2 className="text-lg font-bold text-white tracking-wide">
              {KELURAHAN_INFO.nama}
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Portal resmi informasi pemerintahan dan layanan administrasi publik{' '}
              {KELURAHAN_INFO.kecamatan}, {KELURAHAN_INFO.kota}, {KELURAHAN_INFO.provinsi}.
            </p>
            <div className="text-sm text-slate-300 space-y-1.5 pt-1">
              <p>{KELURAHAN_INFO.alamat}</p>
              <p className="font-mono text-xs text-slate-400 tabular-nums">
                Telp: {KELURAHAN_INFO.telepon} · WhatsApp: {KELURAHAN_INFO.whatsapp}
              </p>
              <p className="text-xs text-slate-400">{KELURAHAN_INFO.email}</p>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold text-white">Profil & Layanan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('beranda')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('profil')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Profil Kelurahan
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('layanan')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Informasi Pelayanan
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('persyaratan')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Persyaratan Administrasi
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('unduh-surat')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Unduh Surat Pengantar
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h3 className="text-sm font-semibold text-white">Informasi Publik & Jam Layanan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('berita')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Berita dan Kegiatan
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('pengumuman')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Pengumuman Resmi
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('galeri')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Galeri Dokumentasi
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('kontak')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Kontak & Kirim Pesan
                </button>
              </li>
            </ul>
            <p className="text-xs text-slate-400 pt-3 leading-relaxed">
              Jam Operasional: {KELURAHAN_INFO.jamHariIni}. Seluruh layanan surat pengantar kelurahan
              tidak dipungut biaya.
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Pemerintah {KELURAHAN_INFO.nama}, {KELURAHAN_INFO.kota}. Hak cipta dilindungi.</p>
          <p>Pelayanan Publik Transparan · Gratis tanpa pungutan liar</p>
        </div>
      </div>
    </footer>
  );
}
