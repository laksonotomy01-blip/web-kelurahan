import { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, Download, Eye, FileText, Search, X } from 'lucide-react';
import {
  KELURAHAN_INFO,
  KategoriSurat,
  LETTER_TEMPLATES,
  LetterTemplate,
} from '../data/kelurahanData';
import {
  ApplicantData,
  generateLetterDocx,
  generateLetterPdf,
} from '../utils/documentGenerator';

interface UnduhSuratViewProps {
  highlightedTemplateId?: string | null;
  onClearHighlight?: () => void;
}

const KATEGORI_SURAT: KategoriSurat[] = [
  'Semua',
  'Kependudukan',
  'Domisili & Usaha',
  'Sosial & Bantuan',
  'Nikah & Keluarga',
];

export function UnduhSuratView({
  highlightedTemplateId,
  onClearHighlight,
}: UnduhSuratViewProps) {
  const [query, setQuery] = useState('');
  const [selectedKategori, setSelectedKategori] = useState<KategoriSurat>('Semua');
  const [previewTemplate, setPreviewTemplate] = useState<LetterTemplate | null>(null);
  const [downloadingKey, setDownloadingKey] = useState<string | null>(null);
  const [downloadFeedback, setDownloadFeedback] = useState<string | null>(null);

  const [formData, setFormData] = useState<ApplicantData>({
    nama: '',
    nik: '',
    ttl: '',
    jenisKelamin: 'Laki-laki',
    agama: 'Islam',
    pekerjaan: '',
    alamat: '',
    keperluan: '',
  });

  useEffect(() => {
    if (highlightedTemplateId) {
      const found = LETTER_TEMPLATES.find((t) => t.id === highlightedTemplateId);
      if (found) {
        setSelectedKategori('Semua');
        setQuery('');
        setPreviewTemplate(found);
        setFormData((prev) => ({ ...prev, keperluan: found.defaultKeperluan }));
      }
      onClearHighlight?.();
    }
  }, [highlightedTemplateId, onClearHighlight]);

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setPreviewTemplate(null);
      }
    }
    if (previewTemplate) {
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
    }
  }, [previewTemplate]);

  const filteredTemplates = useMemo(() => {
    const q = query.trim().toLowerCase();
    return LETTER_TEMPLATES.filter((tpl) => {
      const matchesCat =
        selectedKategori === 'Semua' || tpl.kategori === selectedKategori;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        tpl.judul.toLowerCase().includes(q) ||
        tpl.kegunaan.toLowerCase().includes(q) ||
        tpl.persyaratanRingkas.toLowerCase().includes(q) ||
        tpl.kodeSurat.toLowerCase().includes(q)
      );
    });
  }, [query, selectedKategori]);

  const handleOpenPreview = (tpl: LetterTemplate) => {
    setPreviewTemplate(tpl);
    setFormData((prev) => ({
      ...prev,
      keperluan: tpl.defaultKeperluan,
    }));
  };

  const handleDownloadPdf = (tpl: LetterTemplate, custom?: Partial<ApplicantData>) => {
    setDownloadingKey(`${tpl.id}-pdf`);
    try {
      generateLetterPdf(tpl, custom);
      setDownloadFeedback(`Berhasil mengunduh ${tpl.judul} (PDF).`);
    } finally {
      setDownloadingKey(null);
    }
  };

  const handleDownloadDocx = async (
    tpl: LetterTemplate,
    custom?: Partial<ApplicantData>
  ) => {
    setDownloadingKey(`${tpl.id}-docx`);
    try {
      await generateLetterDocx(tpl, custom);
      setDownloadFeedback(`Berhasil mengunduh ${tpl.judul} (DOCX).`);
    } finally {
      setDownloadingKey(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-8 space-y-3 max-w-3xl">
        <p className="text-xs font-medium text-emerald-800">
          Formulir & Templat Mandiri
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Unduh Surat Pengantar Kelurahan
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Unduh langsung format surat pengantar resmi dalam format PDF siap cetak atau DOCX yang
          dapat disunting di Microsoft Word / Google Docs. Anda juga dapat mengisi data pemohon
          terlebih dahulu melalui tombol Pratinjau & Isi Data.
        </p>
      </div>

      {/* Download Confirmation Banner */}
      {downloadFeedback && (
        <div
          role="status"
          className="bg-emerald-50 border border-emerald-200 text-emerald-950 rounded-xl px-5 py-3.5 flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2.5 text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" aria-hidden="true" />
            <span>{downloadFeedback}</span>
          </div>
          <button
            type="button"
            onClick={() => setDownloadFeedback(null)}
            aria-label="Tutup pemberitahuan unduhan"
            className="text-emerald-800 hover:text-emerald-950 p-1 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Search & Category Filter */}
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
            placeholder="Cari surat (misal: Domisili, SKTM, Nikah, SKU)..."
            aria-label="Cari template surat pengantar"
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
          {KATEGORI_SURAT.map((kat) => (
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

      <p className="text-xs text-slate-500 tabular-nums">
        Menampilkan {filteredTemplates.length} dari {LETTER_TEMPLATES.length} templat surat pengantar
      </p>

      {/* Templates Grid */}
      {filteredTemplates.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-xl p-10 text-center space-y-4">
          <p className="text-base font-semibold text-slate-900">
            Templat surat tidak ditemukan
          </p>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Sesuaikan kata kunci pencarian atau pilih kategori Semua untuk melihat seluruh formulir
            surat yang tersedia.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setSelectedKategori('Semua');
            }}
            className="px-4 py-2 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors cursor-pointer"
          >
            Reset Pencarian
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTemplates.map((tpl) => (
            <article
              key={tpl.id}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <p className="text-xs text-slate-500 font-mono tabular-nums">
                  {tpl.kategori} · Kode {tpl.kodeSurat} · {tpl.ukuranEstimasi}
                </p>
                <h2 className="text-xl font-bold text-slate-900">{tpl.judul}</h2>
                <p className="text-sm text-slate-600 leading-relaxed">{tpl.kegunaan}</p>
                <div className="pt-2 border-t border-slate-100 text-xs text-slate-600 leading-relaxed">
                  <span className="font-semibold text-slate-800">Persyaratan ringkas: </span>
                  {tpl.persyaratanRingkas}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  disabled={downloadingKey === `${tpl.id}-pdf`}
                  onClick={() => handleDownloadPdf(tpl)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 disabled:opacity-60 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  <span>
                    {downloadingKey === `${tpl.id}-pdf` ? 'Menyiapkan...' : 'Unduh PDF'}
                  </span>
                </button>

                <button
                  type="button"
                  disabled={downloadingKey === `${tpl.id}-docx`}
                  onClick={() => handleDownloadDocx(tpl)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 disabled:opacity-60 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-slate-700" aria-hidden="true" />
                  <span>
                    {downloadingKey === `${tpl.id}-docx` ? 'Menyiapkan...' : 'Unduh DOCX'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenPreview(tpl)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-emerald-800 hover:text-emerald-900 hover:bg-emerald-50 rounded-lg transition-colors whitespace-nowrap cursor-pointer ml-auto"
                >
                  <Eye className="w-4 h-4" aria-hidden="true" />
                  <span>Isi & Pratinjau</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Preview & Custom Fill Modal */}
      {previewTemplate && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-surat-title"
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
        >
          <div className="bg-white border border-slate-200 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between gap-4 z-10">
              <div>
                <p className="text-xs text-slate-500">Pratinjau & Pengisian Mandiri</p>
                <h2 id="modal-surat-title" className="text-lg font-bold text-slate-900">
                  {previewTemplate.judul}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setPreviewTemplate(null)}
                aria-label="Tutup pratinjau surat"
                className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Optional Quick Fill Form */}
              <div className="lg:col-span-5 space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Isi Data Pemohon (Opsional)
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Kosongkan jika ingin mengunduh templat kosong bertanda kurung siku untuk diisi
                    manual.
                  </p>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      value={formData.nama}
                      onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                      placeholder="Contoh: Budi Hartono"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      NIK (16 Digit)
                    </label>
                    <input
                      type="text"
                      value={formData.nik}
                      onChange={(e) => setFormData({ ...formData, nik: e.target.value })}
                      placeholder="Contoh: 3273171204900001"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Tempat / Tgl Lahir
                      </label>
                      <input
                        type="text"
                        value={formData.ttl}
                        onChange={(e) => setFormData({ ...formData, ttl: e.target.value })}
                        placeholder="Bandung, 12-04-1990"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Jenis Kelamin
                      </label>
                      <select
                        value={formData.jenisKelamin}
                        onChange={(e) =>
                          setFormData({ ...formData, jenisKelamin: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                      >
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Agama
                      </label>
                      <input
                        type="text"
                        value={formData.agama}
                        onChange={(e) => setFormData({ ...formData, agama: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Pekerjaan
                      </label>
                      <input
                        type="text"
                        value={formData.pekerjaan}
                        onChange={(e) =>
                          setFormData({ ...formData, pekerjaan: e.target.value })
                        }
                        placeholder="Wiraswasta"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Alamat Domisili
                    </label>
                    <input
                      type="text"
                      value={formData.alamat}
                      onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
                      placeholder="Jl. Mekarwangi RT 02 RW 04"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Keperluan Surat
                    </label>
                    <textarea
                      rows={2}
                      value={formData.keperluan}
                      onChange={(e) =>
                        setFormData({ ...formData, keperluan: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleDownloadPdf(previewTemplate, formData)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg cursor-pointer"
                  >
                    <Download className="w-4 h-4" aria-hidden="true" />
                    <span>Unduh PDF</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDownloadDocx(previewTemplate, formData)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
                  >
                    <FileText className="w-4 h-4" aria-hidden="true" />
                    <span>Unduh DOCX</span>
                  </button>
                </div>
              </div>

              {/* Paper Document Preview */}
              <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-8 font-serif text-slate-900 text-xs sm:text-sm space-y-4">
                <div className="text-center border-b-2 border-slate-900 pb-3 space-y-0.5">
                  <p className="font-bold text-xs sm:text-sm">PEMERINTAH KOTA BANDUNG</p>
                  <p className="font-bold text-sm sm:text-base">KECAMATAN BOJONGLOA KIDUL</p>
                  <p className="font-bold text-base sm:text-lg">KELURAHAN MEKARWANGI</p>
                  <p className="text-[11px] font-sans text-slate-600">
                    {KELURAHAN_INFO.alamatRingkas} · Telp. {KELURAHAN_INFO.telepon}
                  </p>
                </div>

                <div className="text-center pt-2 space-y-1">
                  <p className="font-bold underline uppercase">
                    {previewTemplate.judulResmi}
                  </p>
                  <p className="text-xs">Nomor: {previewTemplate.kodeSurat}</p>
                </div>

                <p className="leading-relaxed">{previewTemplate.pembuka}</p>

                <div className="space-y-1.5 pl-2">
                  {[
                    ['Nama Lengkap', formData.nama || '[Nama Lengkap Pemohon]'],
                    ['NIK', formData.nik || '[Nomor Induk Kependudukan / 16 Digit]'],
                    ['Tempat / Tgl. Lahir', formData.ttl || '[Kota, Tanggal-Bulan-Tahun]'],
                    ['Jenis Kelamin', formData.jenisKelamin],
                    ['Agama', formData.agama],
                    ['Pekerjaan', formData.pekerjaan || '[Pekerjaan Saat Ini]'],
                    ['Alamat', formData.alamat || '[Alamat Lengkap RT/RW Kelurahan Mekarwangi]'],
                    ['Keperluan', formData.keperluan || previewTemplate.defaultKeperluan],
                  ].map(([k, v]) => (
                    <div key={k} className="grid grid-cols-12 gap-2">
                      <span className="col-span-4">{k}</span>
                      <span className="col-span-8 font-semibold">: {v}</span>
                    </div>
                  ))}
                </div>

                <p className="leading-relaxed">{previewTemplate.isiParagraf}</p>
                <p className="leading-relaxed">{previewTemplate.penutup}</p>

                <div className="pt-4 flex justify-end">
                  <div className="text-left w-52 space-y-10">
                    <div>
                      <p>Bandung, 24 November 2026</p>
                      <p>Lurah Mekarwangi,</p>
                    </div>
                    <div>
                      <p className="font-bold underline">{KELURAHAN_INFO.lurah.nama}</p>
                      <p className="text-xs">NIP. {KELURAHAN_INFO.lurah.nip}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
