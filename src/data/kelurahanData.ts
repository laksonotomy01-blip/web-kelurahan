export type PageId =
  | 'beranda'
  | 'profil'
  | 'layanan'
  | 'persyaratan'
  | 'unduh-surat'
  | 'berita'
  | 'pengumuman'
  | 'galeri'
  | 'kontak';

export const IMAGES = {
  heroKantor: '/src/assets/images/hero_kantor_kelurahan_1795527216678.jpg',
  fotoLurah: '/src/assets/images/foto_lurah_sambutan_1795527217292.jpg',
  musrenbang: '/src/assets/images/kegiatan_musrenbang_1795527218404.jpg',
  posyandu: '/src/assets/images/kegiatan_posyandu_warga_1795527220709.jpg',
  kerjaBakti: '/src/assets/images/kegiatan_kerja_bakti_1795527219028.jpg',
} as const;

export const KELURAHAN_INFO = {
  nama: 'Kelurahan Mekarwangi',
  kecamatan: 'Kecamatan Bojongloa Kidul',
  kota: 'Kota Bandung',
  provinsi: 'Provinsi Jawa Barat',
  kodePos: '40237',
  alamat: 'Jl. Mekarwangi Raya No. 42, Kel. Mekarwangi, Kec. Bojongloa Kidul, Kota Bandung 40237',
  alamatRingkas: 'Jl. Mekarwangi Raya No. 42, Kota Bandung',
  telepon: '(022) 542-1890',
  whatsapp: '0811-2240-1890',
  whatsappLink: 'https://wa.me/6281122401890',
  email: 'pelayanan@kelurahanmekarwangi.go.id',
  jamHariIni: 'Senin–Kamis 08.00–15.30 WIB · Jumat 08.00–16.00 WIB',
  koordinat: {
    lat: -6.9532,
    lng: 107.6034,
    mapsUrl: 'https://maps.google.com/?q=-6.9532,107.6034',
  },
  lurah: {
    nama: 'H. Aji Wijaya, S.STP., M.Si.',
    nip: '19780514 200112 1 003',
    jabatan: 'Lurah Mekarwangi',
    sambutanSingkat:
      'Selamat datang di portal resmi Kelurahan Mekarwangi. Kami berkomitmen menghadirkan layanan administrasi yang cepat, tertib, transparan, dan bebas pungutan liar bagi seluruh warga.',
    sambutanLengkap:
      'Assalamu’alaikum Warahmatullahi Wabarakatuh dan salam sejahtera untuk seluruh warga Kelurahan Mekarwangi. Kehadiran portal layanan publik ini merupakan wujud nyata komitmen kami dalam mempermudah akses informasi pemerintahan, kejelasan persyaratan administrasi, serta penyediaan formulir surat pengantar yang dapat diunduh secara mandiri sebelum warga datang ke loket pelayanan.',
  },
};

export const PROFIL_DATA = {
  sejarah:
    'Kelurahan Mekarwangi resmi dibentuk pada tahun 1989 sebagai hasil pemekaran wilayah administratif di Kota Bandung bagian selatan. Berawal dari kawasan permukiman agraris dan sentra kerajinan rakyat, wilayah ini berkembang menjadi kawasan hunian tertata yang memadukan aktivitas niaga warga, ruang terbuka hijau berbasis RW, serta tata kelola pemerintahan kelurahan berbasis layanan digital terpadu.',
  visi: 'Terwujudnya Kelurahan Mekarwangi yang Tertib Administrasi, Ramah Layanan Publik, Mandiri Secara Ekonomi, dan Nyaman Dihuni.',
  misi: [
    'Menyelenggarakan pelayanan administrasi kependudukan dan surat menyurat yang cepat, transparan, dan tanpa biaya tambahan.',
    'Menguatkan koordinasi lembaga kemasyarakatan (RT, RW, LPM, PKK, dan Karang Taruna) dalam perencanaan pembangunan partisipatif.',
    'Mendorong kemandirian UMKM warga melalui pendampingan perizinan berusaha dan akses informasi ekonomi lokal.',
    'Menjaga kebersihan lingkungan, ketertiban umum, dan kesiapsiagaan sosial di tingkat rukun warga.',
  ],
  statistik: [
    { label: 'Jumlah Penduduk', nilai: '24.680', satuan: 'Jiwa' },
    { label: 'Kepala Keluarga', nilai: '7.420', satuan: 'KK' },
    { label: 'Luas Wilayah', nilai: '148,5', satuan: 'Hektare' },
    { label: 'Rukun Warga / RT', nilai: '11 / 68', satuan: 'RW / RT' },
  ],
  demografiDetail: [
    { kategori: 'Penduduk Laki-Laki', jumlah: '12.210 Jiwa', persentase: '49,5%' },
    { kategori: 'Penduduk Perempuan', jumlah: '12.470 Jiwa', persentase: '50,5%' },
    { kategori: 'Usia Produktif (15–64 Tahun)', jumlah: '16.940 Jiwa', persentase: '68,6%' },
    { kategori: 'Pelaku UMKM & Wiraswasta', jumlah: '2.180 Unit', persentase: '29,4% KK' },
    { kategori: 'Fasilitas Pendidikan & Kesehatan', jumlah: '14 Unit', persentase: 'Tersebar di 11 RW' },
    { kategori: 'Posyandu Aktif', jumlah: '11 Pos', persentase: '100% RW Tercakup' },
  ],
  perangkat: [
    {
      jabatan: 'Lurah Mekarwangi',
      nama: 'H. Aji Wijaya, S.STP., M.Si.',
      nip: '19780514 200112 1 003',
      tugas: 'Memimpin penyelenggaraan pemerintahan, pembangunan, dan pembinaan kemasyarakatan kelurahan.',
    },
    {
      jabatan: 'Sekretaris Kelurahan',
      nama: 'Dra. Ratna Sari Dewi',
      nip: '19801102 200604 2 011',
      tugas: 'Mengkoordinasikan administrasi umum, kepegawaian, keuangan, dan tata usaha kelurahan.',
    },
    {
      jabatan: 'Kasi Pemerintahan & Trantib',
      nama: 'Budi Santoso, S.Sos.',
      nip: '19840319 200902 1 004',
      tugas: 'Mengelola administrasi kependudukan, pertanahan, ketenteraman, dan ketertiban umum.',
    },
    {
      jabatan: 'Kasi Kesejahteraan Sosial',
      nama: 'Nita Kusumawati, S.AP.',
      nip: '19860725 201101 2 009',
      tugas: 'Menangani layanan sosial warga, pendataan bantuan sosial, kesehatan lingkungan, dan pendidikan.',
    },
    {
      jabatan: 'Kasi Ekonomi & Pembangunan',
      nama: 'Dedi Kurniawan, S.T.',
      nip: '19850912 201001 1 007',
      tugas: 'Mengkoordinasikan Musrenbang, sarana prasarana wilayah, dan pembinaan UMKM kelurahan.',
    },
    {
      jabatan: 'Koordinator Loket Pelayanan',
      nama: 'Rina Marlina, A.Md.',
      nip: '19910214 201503 2 005',
      tugas: 'Melayani registrasi berkas warga, verifikasi pengantar RT/RW, dan penerbitan surat keterangan.',
    },
  ],
};

export interface LayananItem {
  id: string;
  nama: string;
  kategori: 'Administrasi Kependudukan' | 'Surat Menyurat' | 'Sosial Kemasyarakatan';
  estimasi: string;
  biaya: string;
  deskripsi: string;
  output: string;
}

export const LAYANAN_LIST: LayananItem[] = [
  {
    id: 'layanan-ktp-kk',
    nama: 'Pengantar KTP-el & Kartu Keluarga',
    kategori: 'Administrasi Kependudukan',
    estimasi: '1 Hari Kerja',
    biaya: 'Gratis (Rp 0)',
    deskripsi: 'Penerbitan surat pengantar perekaman KTP-el baru, penggantian hilang/rusak, serta pembaruan data Kartu Keluarga.',
    output: 'Surat Pengantar & Register Kelurahan menuju Kecamatan/Disdukcapil',
  },
  {
    id: 'layanan-pindah',
    nama: 'Pengantar Pindah & Datang Penduduk',
    kategori: 'Administrasi Kependudukan',
    estimasi: '1–2 Hari Kerja',
    biaya: 'Gratis (Rp 0)',
    deskripsi: 'Pengurusan surat keterangan pindah antar kelurahan, antar kecamatan, atau pelaporan kedatangan warga baru.',
    output: 'Formulir F-1.03 & Surat Pengantar Pindah Datang',
  },
  {
    id: 'layanan-akta',
    nama: 'Keterangan Kelahiran & Kematian',
    kategori: 'Administrasi Kependudukan',
    estimasi: '1 Hari Kerja',
    biaya: 'Gratis (Rp 0)',
    deskripsi: 'Penerbitan surat keterangan kelurahan sebagai syarat pengajuan akta kelahiran maupun akta kematian di Disdukcapil.',
    output: 'Surat Keterangan Kelahiran / Kematian Bertanda Tangan Lurah',
  },
  {
    id: 'layanan-domisili',
    nama: 'Surat Keterangan Domisili',
    kategori: 'Surat Menyurat',
    estimasi: '30–60 Menit',
    biaya: 'Gratis (Rp 0)',
    deskripsi: 'Keterangan tempat tinggal resmi bagi penduduk setempat, warga kontrak/kos, maupun domisili lembaga dan yayasan.',
    output: 'Surat Keterangan Domisili Resmi Kelurahan',
  },
  {
    id: 'layanan-sku',
    nama: 'Surat Keterangan Usaha (SKU)',
    kategori: 'Surat Menyurat',
    estimasi: '1 Hari Kerja',
    biaya: 'Gratis (Rp 0)',
    deskripsi: 'Keterangan legalitas usaha mikro dan kecil di wilayah kelurahan untuk pengajuan NIB, perbankan, maupun pembinaan UMKM.',
    output: 'Surat Keterangan Usaha Bernomor Register Resmi',
  },
  {
    id: 'layanan-skck',
    nama: 'Pengantar SKCK & Surat Umum',
    kategori: 'Surat Menyurat',
    estimasi: '30 Menit',
    biaya: 'Gratis (Rp 0)',
    deskripsi: 'Pengantar penerbitan SKCK ke Polsek/Polres serta surat keterangan belum menikah atau keterangan beda nama.',
    output: 'Surat Pengantar SKCK / Keterangan Umum',
  },
  {
    id: 'layanan-sktm',
    nama: 'Surat Keterangan Tidak Mampu (SKTM)',
    kategori: 'Sosial Kemasyarakatan',
    estimasi: '1 Hari Kerja',
    biaya: 'Gratis (Rp 0)',
    deskripsi: 'Surat keterangan kondisi ekonomi keluarga untuk keperluan beasiswa pendidikan, keringanan biaya rumah sakit, dan bantuan sosial.',
    output: 'SKTM Terverifikasi DTKS / Muskel',
  },
  {
    id: 'layanan-nikah',
    nama: 'Surat Pengantar Nikah (N1–N4)',
    kategori: 'Sosial Kemasyarakatan',
    estimasi: '1–2 Hari Kerja',
    biaya: 'Gratis (Rp 0)',
    deskripsi: 'Kelengkapan administrasi perkawinan (Model N1, N2, N4) menuju Kantor Urusan Agama (KUA) atau Catatan Sipil.',
    output: 'Berkas Pengantar Nikah Lengkap (NA)',
  },
];

export const JAM_OPERASIONAL = [
  { hari: 'Senin – Kamis', jamLayanan: '08.00 – 15.30 WIB', istirahat: '12.00 – 13.00 WIB', keterangan: 'Semua loket pelayanan aktif' },
  { hari: 'Jumat', jamLayanan: '08.00 – 16.00 WIB', istirahat: '11.30 – 13.00 WIB', keterangan: 'Semua loket pelayanan aktif' },
  { hari: 'Sabtu, Minggu & Libur Nasional', jamLayanan: 'Tutup', istirahat: '-', keterangan: 'Layanan darurat via WhatsApp & Ketua RW' },
];

export const ALUR_PELAYANAN = [
  {
    langkah: '01',
    judul: 'Siapkan Pengantar RT/RW & Berkas',
    deskripsi: 'Warga meminta surat pengantar dari Ketua RT dan RW setempat serta menyiapkan fotokopi KTP-el, KK, dan dokumen pendukung sesuai daftar persyaratan.',
  },
  {
    langkah: '02',
    judul: 'Isi Formulir / Template Surat',
    deskripsi: 'Unduh template surat pengantar di portal ini atau isi formulir yang tersedia di meja informasi Kantor Kelurahan.',
  },
  {
    langkah: '03',
    judul: 'Verifikasi di Loket Pelayanan',
    deskripsi: 'Serahkan berkas ke petugas loket Kelurahan Mekarwangi untuk pemeriksaan kelengkapan dan pencatatan nomor register surat.',
  },
  {
    langkah: '04',
    judul: 'Penandatanganan & Pengambilan',
    deskripsi: 'Dokumen ditandatangani oleh Lurah atau Sekretaris Kelurahan dan langsung diserahkan kepada pemohon tanpa biaya apa pun.',
  },
];

export type KategoriPersyaratan =
  | 'Semua'
  | 'Kependudukan'
  | 'Usaha & Ekonomi'
  | 'Sosial & Kemasyarakatan'
  | 'Nikah & Keluarga';

export interface PersyaratanItem {
  id: string;
  layanan: string;
  kategori: Exclude<KategoriPersyaratan, 'Semua'>;
  estimasi: string;
  biaya: string;
  dokumen: string[];
  catatan: string;
  relatedTemplateId?: string;
}

export const PERSYARATAN_LIST: PersyaratanItem[] = [
  {
    id: 'req-ktp',
    layanan: 'Penerbitan / Penggantian KTP-el',
    kategori: 'Kependudukan',
    estimasi: '1 Hari Kerja (Pengantar)',
    biaya: 'Gratis',
    dokumen: [
      'Surat Pengantar asli dari Ketua RT dan Ketua RW setempat.',
      'Fotokopi Kartu Keluarga (KK) terbaru sebanyak 1 lembar.',
      'KTP-el asli yang rusak (untuk penggantian rusak) atau Surat Keterangan Kehilangan dari Kepolisian (jika hilang).',
      'Berusia minimal 17 tahun atau sudah pernah menikah.',
    ],
    catatan: 'Perekaman biometrik dilakukan di Kecamatan Bojongloa Kidul atau Mal Pelayanan Publik setelah membawa pengantar kelurahan.',
    relatedTemplateId: 'tpl-ktp-kk',
  },
  {
    id: 'req-kk',
    layanan: 'Pembuatan / Pembaruan Kartu Keluarga (KK)',
    kategori: 'Kependudukan',
    estimasi: '1 Hari Kerja',
    biaya: 'Gratis',
    dokumen: [
      'Surat Pengantar RT/RW dan formulir permohonan F-1.01.',
      'Kartu Keluarga asli lama (untuk pembaruan atau penambahan anggota).',
      'Fotokopi Buku Nikah / Akta Perkawinan (untuk pasangan baru).',
      'Surat Keterangan Lahir dari Bidan/RS (untuk penambahan anggota bayi) atau Surat Pindah (SKPWNI) bagi pendatang.',
    ],
    catatan: 'Perubahan elemen data pendidikan atau pekerjaan wajib melampirkan fotokopi ijazah terakhir atau SK kerja.',
    relatedTemplateId: 'tpl-ktp-kk',
  },
  {
    id: 'req-domisili',
    layanan: 'Surat Keterangan Domisili (Perorangan / Usaha)',
    kategori: 'Kependudukan',
    estimasi: '30–60 Menit',
    biaya: 'Gratis',
    dokumen: [
      'Surat Pengantar resmi dari Ketua RT dan RW lokasi domisili.',
      'Fotokopi KTP-el dan Kartu Keluarga pemohon.',
      'Surat perjanjian sewa/kontrak rumah atau surat pernyataan pemilik rumah (khusus warga pendatang non-KTP setempat).',
      'Pas foto berwarna 3×4 sebanyak 2 lembar (opsional untuk keperluan instansi tertentu).',
    ],
    catatan: 'Pemohon wajib hadir langsung atau diwakilkan oleh anggota keluarga satu KK dengan surat kuasa bermeterai.',
    relatedTemplateId: 'tpl-domisili',
  },
  {
    id: 'req-sku',
    layanan: 'Surat Keterangan Usaha (SKU)',
    kategori: 'Usaha & Ekonomi',
    estimasi: '1 Hari Kerja',
    biaya: 'Gratis',
    dokumen: [
      'Surat Pengantar RT/RW yang menerangkan jenis dan lokasi usaha.',
      'Fotokopi KTP-el pemilik usaha dan Kartu Keluarga.',
      'Foto tempat usaha atau produk usaha yang sedang berjalan (cetak 2 lembar).',
      'Bukti lunas PBB tahun berjalan atau surat izin pemilik tempat jika menyewa.',
    ],
    catatan: 'SKU berlaku selama 6 bulan sejak diterbitkan dan dapat digunakan sebagai pengantar pembuatan NIB melalui sistem OSS.',
    relatedTemplateId: 'tpl-sku',
  },
  {
    id: 'req-sktm',
    layanan: 'Surat Keterangan Tidak Mampu (SKTM)',
    kategori: 'Sosial & Kemasyarakatan',
    estimasi: '1 Hari Kerja',
    biaya: 'Gratis',
    dokumen: [
      'Surat Pengantar RT/RW yang menyatakan kondisi sosial ekonomi keluarga pemohon.',
      'Fotokopi KTP-el pemohon/orang tua dan Kartu Keluarga.',
      'Surat pernyataan tidak mampu bermeterai Rp10.000 yang ditandatangani pemohon.',
      'Bukti pendukung tujuan pengajuan (misal: surat rujukan RS, tagihan sekolah/kampus, atau keterangan BPJS PBI).',
    ],
    catatan: 'Petugas Kasi Kesejahteraan Sosial berhak melakukan verifikasi faktual ke alamat pemohon bila diperlukan.',
    relatedTemplateId: 'tpl-sktm',
  },
  {
    id: 'req-skck',
    layanan: 'Surat Pengantar Pembuatan SKCK',
    kategori: 'Sosial & Kemasyarakatan',
    estimasi: '30 Menit',
    biaya: 'Gratis',
    dokumen: [
      'Surat Pengantar RT dan RW.',
      'Fotokopi KTP-el yang masih berlaku.',
      'Fotokopi Kartu Keluarga (KK).',
      'Fotokopi Akta Kelahiran / Ijazah terakhir.',
    ],
    catatan: 'Penerbitan fisik SKCK dilakukan di Polsek Bojongloa Kidul atau Polrestabes Bandung sesuai keperluan lamaran kerja/CPNS.',
    relatedTemplateId: 'tpl-skck',
  },
  {
    id: 'req-nikah',
    layanan: 'Surat Pengantar Nikah (N1, N2, N4 / NA)',
    kategori: 'Nikah & Keluarga',
    estimasi: '1–2 Hari Kerja',
    biaya: 'Gratis',
    dokumen: [
      'Surat Pengantar RT/RW untuk keperluan nikah.',
      'Fotokopi KTP-el dan KK kedua calon mempelai serta orang tua/wali.',
      'Fotokopi Akta Kelahiran dan Ijazah terakhir calon mempelai.',
      'Surat pernyataan belum pernah menikah bermeterai Rp10.000 (atau Akta Cerai/Kematian pasangan bagi duda/janda).',
      'Pas foto latar biru ukuran 2×3 (4 lembar) dan 4×6 (2 lembar).',
    ],
    catatan: 'Pengajuan dianjurkan minimal 14 hari kerja sebelum hari pelaksanaan akad nikah di KUA.',
    relatedTemplateId: 'tpl-nikah',
  },
  {
    id: 'req-kelahiran-kematian',
    layanan: 'Surat Keterangan Kelahiran / Kematian',
    kategori: 'Nikah & Keluarga',
    estimasi: '1 Hari Kerja',
    biaya: 'Gratis',
    dokumen: [
      'Surat Pengantar RT/RW setempat.',
      'Surat Keterangan Lahir asli dari RS/Klinik/Bidan (untuk kelahiran) atau Surat Keterangan Kematian dari RS/Dokter (untuk kematian).',
      'Fotokopi KTP-el dan KK orang tua / almarhum serta KTP 2 orang saksi.',
      'Fotokopi Buku Nikah / Akta Perkawinan orang tua (khusus pengurusan kelahiran).',
    ],
    catatan: 'Pelaporan kematian dianjurkan maksimal 30 hari sejak tanggal kejadian untuk pemutakhiran data kependudukan.',
    relatedTemplateId: 'tpl-kelahiran',
  },
];

export type KategoriSurat =
  | 'Semua'
  | 'Kependudukan'
  | 'Domisili & Usaha'
  | 'Sosial & Bantuan'
  | 'Nikah & Keluarga';

export interface LetterTemplate {
  id: string;
  judul: string;
  kodeSurat: string;
  kategori: Exclude<KategoriSurat, 'Semua'>;
  kegunaan: string;
  persyaratanRingkas: string;
  formatTersedia: ('PDF' | 'DOCX')[];
  ukuranEstimasi: string;
  judulResmi: string;
  pembuka: string;
  isiParagraf: string;
  penutup: string;
  defaultKeperluan: string;
}

export const LETTER_TEMPLATES: LetterTemplate[] = [
  {
    id: 'tpl-ktp-kk',
    judul: 'Surat Pengantar KTP-el / Kartu Keluarga',
    kodeSurat: '474.4 / ... / Kel.MW',
    kategori: 'Kependudukan',
    kegunaan: 'Pengantar resmi ke Kecamatan/Disdukcapil untuk pembuatan KTP-el baru, penggantian KTP hilang/rusak, maupun pembaruan KK.',
    persyaratanRingkas: 'Pengantar RT/RW, Fotokopi KK lama, Surat Kehilangan Polisi (jika hilang).',
    formatTersedia: ['PDF', 'DOCX'],
    ukuranEstimasi: '124 KB',
    judulResmi: 'SURAT PENGANTAR ADMINISTRASI KEPENDUDUKAN',
    pembuka:
      'Yang bertanda tangan di bawah ini Lurah Mekarwangi Kecamatan Bojongloa Kidul Kota Bandung, dengan ini menerangkan bahwa:',
    isiParagraf:
      'Orang tersebut di atas adalah benar warga yang berdomisili dan tercatat dalam basis data kependudukan Kelurahan Mekarwangi. Surat pengantar ini diterbitkan sebagai kelengkapan administrasi pengurusan Kartu Tanda Penduduk Elektronik (KTP-el) / Kartu Keluarga (KK) pada tingkat Kecamatan dan Dinas Kependudukan dan Pencatatan Sipil.',
    penutup:
      'Demikian surat pengantar ini dibuat dengan sebenarnya untuk dapat dipergunakan sebagaimana mestinya.',
    defaultKeperluan: 'Permohonan Pembuatan / Pembaruan KTP-el dan Kartu Keluarga',
  },
  {
    id: 'tpl-domisili',
    judul: 'Surat Keterangan Domisili Warga',
    kodeSurat: '470 / ... / Kel.MW',
    kategori: 'Domisili & Usaha',
    kegunaan: 'Menerangkan alamat tempat tinggal aktif warga untuk keperluan perbankan, melamar pekerjaan, sekolah, atau administrasi kontrak.',
    persyaratanRingkas: 'Pengantar RT/RW, Fotokopi KTP & KK, Surat Keterangan Pemilik Rumah (jika mengontrak).',
    formatTersedia: ['PDF', 'DOCX'],
    ukuranEstimasi: '118 KB',
    judulResmi: 'SURAT KETERANGAN DOMISILI',
    pembuka:
      'Yang bertanda tangan di bawah ini Lurah Mekarwangi Kecamatan Bojongloa Kidul Kota Bandung, menerangkan dengan sesungguhnya bahwa:',
    isiParagraf:
      'Berdasarkan surat pengantar Ketua RT dan Ketua RW setempat serta catatan kependudukan kami, yang bersangkutan benar berdomisili tetap/sementara pada alamat tersebut di atas di wilayah Kelurahan Mekarwangi, Kecamatan Bojongloa Kidul, Kota Bandung.',
    penutup:
      'Demikian surat keterangan domisili ini diberikan kepada yang bersangkutan agar dapat dipergunakan sesuai peruntukannya.',
    defaultKeperluan: 'Persyaratan Administrasi Tempat Tinggal / Instansi Terkait',
  },
  {
    id: 'tpl-sktm',
    judul: 'Surat Keterangan Tidak Mampu (SKTM)',
    kodeSurat: '460 / ... / Kel.MW',
    kategori: 'Sosial & Bantuan',
    kegunaan: 'Pengajuan keringanan biaya pendidikan/beasiswa (KIP), layanan kesehatan rumah sakit, atau verifikasi bantuan sosial warga.',
    persyaratanRingkas: 'Pengantar RT/RW, Fotokopi KTP & KK, Surat Pernyataan Bermeterai, Dokumen Rujukan.',
    formatTersedia: ['PDF', 'DOCX'],
    ukuranEstimasi: '128 KB',
    judulResmi: 'SURAT KETERANGAN TIDAK MAMPU',
    pembuka:
      'Yang bertanda tangan di bawah ini Lurah Mekarwangi Kecamatan Bojongloa Kidul Kota Bandung, menerangkan bahwa:',
    isiParagraf:
      'Berdasarkan pengantar Ketua RT/RW setempat dan hasil verifikasi sosial kemasyarakatan kelurahan, nama tersebut di atas benar tergolong keluarga kurang mampu secara ekonomi dan layak memperoleh dukungan/keringanan layanan sosial.',
    penutup:
      'Demikian surat keterangan ini diterbitkan dengan penuh tanggung jawab untuk digunakan sebagaimana mestinya.',
    defaultKeperluan: 'Pengajuan Keringanan Biaya Pendidikan / Layanan Kesehatan',
  },
  {
    id: 'tpl-nikah',
    judul: 'Surat Pengantar Nikah (Model N1 / NA)',
    kodeSurat: '474.2 / ... / Kel.MW',
    kategori: 'Nikah & Keluarga',
    kegunaan: 'Dokumen pengantar resmi kelurahan menuju KUA atau Catatan Sipil sebagai syarat pencatatan pernikahan warga.',
    persyaratanRingkas: 'Pengantar RT/RW, KTP & KK Calon Mempelai & Orang Tua, Akta Lahir, Pas Foto 2×3 & 4×6.',
    formatTersedia: ['PDF', 'DOCX'],
    ukuranEstimasi: '132 KB',
    judulResmi: 'SURAT PENGANTAR PENCATATAN NIKAH (MODEL N1)',
    pembuka:
      'Yang bertanda tangan di bawah ini Lurah Mekarwangi Kecamatan Bojongloa Kidul Kota Bandung, menerangkan dengan sesungguhnya bahwa:',
    isiParagraf:
      'Yang bersangkutan berstatus belum pernah menikah / berhak melangsungkan perkawinan sesuai ketentuan peraturan perundang-undangan yang berlaku, dan seluruh data kependudukannya tercatat sah di wilayah Kelurahan Mekarwangi.',
    penutup:
      'Demikian surat pengantar nikah ini dibuat untuk disampaikan kepada Kantor Urusan Agama (KUA) / Dinas Kependudukan dan Pencatatan Sipil.',
    defaultKeperluan: 'Persyaratan Pencatatan Perkawinan di KUA Kecamatan Bojongloa Kidul',
  },
  {
    id: 'tpl-sku',
    judul: 'Surat Keterangan Usaha (SKU)',
    kodeSurat: '503 / ... / Kel.MW',
    kategori: 'Domisili & Usaha',
    kegunaan: 'Menerangkan keberadaan usaha mikro/kecil warga untuk pengurusan Nomor Induk Berusaha (NIB) atau pembiayaan modal kerja UMKM.',
    persyaratanRingkas: 'Pengantar RT/RW, Fotokopi KTP & KK, Foto tempat usaha, Bukti PBB tahun berjalan.',
    formatTersedia: ['PDF', 'DOCX'],
    ukuranEstimasi: '121 KB',
    judulResmi: 'SURAT KETERANGAN USAHA',
    pembuka:
      'Yang bertanda tangan di bawah ini Lurah Mekarwangi Kecamatan Bojongloa Kidul Kota Bandung, dengan ini menerangkan bahwa:',
    isiParagraf:
      'Menurut pengamatan dan surat pengantar RT/RW setempat, nama tersebut benar memiliki dan menjalankan kegiatan usaha produktif di wilayah Kelurahan Mekarwangi dengan kondisi usaha aktif, tertib lingkungan, dan tidak melanggar tata ruang kota.',
    penutup:
      'Surat keterangan usaha ini berlaku selama 6 (enam) bulan sejak tanggal diterbitkan dan dapat dipergunakan sebagaimana mestinya.',
    defaultKeperluan: 'Pendaftaran NIB UMKM dan Kelengkapan Pembiayaan Usaha Mikro',
  },
  {
    id: 'tpl-skck',
    judul: 'Surat Pengantar SKCK',
    kodeSurat: '331 / ... / Kel.MW',
    kategori: 'Sosial & Bantuan',
    kegunaan: 'Pengantar penerbitan Surat Keterangan Catatan Kepolisian di Polsek/Polres untuk melamar kerja, CPNS, atau studi lanjut.',
    persyaratanRingkas: 'Pengantar RT/RW, Fotokopi KTP-el, Fotokopi KK, Fotokopi Akta Kelahiran/Ijazah.',
    formatTersedia: ['PDF', 'DOCX'],
    ukuranEstimasi: '115 KB',
    judulResmi: 'SURAT PENGANTAR PEMBUATAN SKCK',
    pembuka:
      'Yang bertanda tangan di bawah ini Lurah Mekarwangi Kecamatan Bojongloa Kidul Kota Bandung, menerangkan bahwa:',
    isiParagraf:
      'Orang tersebut di atas benar merupakan penduduk Kelurahan Mekarwangi yang berkelakuan baik, tidak pernah tersangkut perkara tindak pidana berdasarkan catatan lingkungan RT/RW, dan memerlukan pengantar penerbitan Surat Keterangan Catatan Kepolisian (SKCK).',
    penutup:
      'Demikian surat pengantar ini dibuat untuk disampaikan kepada Kepolisian Sektor Bojongloa Kidul / Polrestabes Bandung.',
    defaultKeperluan: 'Pengajuan Penerbitan SKCK untuk Persyaratan Melamar Pekerjaan',
  },
  {
    id: 'tpl-kelahiran',
    judul: 'Surat Keterangan Kelahiran',
    kodeSurat: '474.1 / ... / Kel.MW',
    kategori: 'Nikah & Keluarga',
    kegunaan: 'Pengantar penerbitan Akta Kelahiran dan pembaruan Kartu Keluarga bagi bayi yang baru lahir di wilayah kelurahan.',
    persyaratanRingkas: 'Pengantar RT/RW, Surat Lahir RS/Bidan, KTP & KK Orang Tua, Buku Nikah.',
    formatTersedia: ['PDF', 'DOCX'],
    ukuranEstimasi: '122 KB',
    judulResmi: 'SURAT KETERANGAN KELAHIRAN',
    pembuka:
      'Yang bertanda tangan di bawah ini Lurah Mekarwangi Kecamatan Bojongloa Kidul Kota Bandung, menerangkan bahwa telah lahir seorang anak dari warga kami:',
    isiParagraf:
      'Berdasarkan Surat Keterangan Lahir dari fasilitas kesehatan dan pengantar RT/RW setempat, peristiwa kelahiran tersebut benar tercatat di wilayah Kelurahan Mekarwangi dan layak diproses penerbitan Akta Kelahirannya.',
    penutup:
      'Demikian surat keterangan kelahiran ini dibuat untuk kelengkapan administrasi kependudukan pada Disdukcapil Kota Bandung.',
    defaultKeperluan: 'Pengajuan Penerbitan Akta Kelahiran dan Pembaruan Kartu Keluarga',
  },
  {
    id: 'tpl-umum',
    judul: 'Surat Keterangan Belum Menikah / Umum',
    kodeSurat: '474 / ... / Kel.MW',
    kategori: 'Kependudukan',
    kegunaan: 'Surat keterangan status belum menikah atau keterangan umum lainnya untuk keperluan seleksi kerja, beasiswa, atau instansi.',
    persyaratanRingkas: 'Pengantar RT/RW, Fotokopi KTP-el & KK, Surat Pernyataan Pribadi Bermeterai.',
    formatTersedia: ['PDF', 'DOCX'],
    ukuranEstimasi: '116 KB',
    judulResmi: 'SURAT KETERANGAN BELUM MENIKAH',
    pembuka:
      'Yang bertanda tangan di bawah ini Lurah Mekarwangi Kecamatan Bojongloa Kidul Kota Bandung, menerangkan dengan sesungguhnya bahwa:',
    isiParagraf:
      'Berdasarkan catatan administrasi kependudukan kelurahan serta surat pengantar Ketua RT/RW setempat, nama tersebut di atas sampai dengan diterbitkannya surat ini berstatus Belum Pernah Menikah.',
    penutup:
      'Demikian surat keterangan ini dibuat dengan sebenarnya untuk dapat dipergunakan sebagaimana mestinya.',
    defaultKeperluan: 'Persyaratan Seleksi Administrasi Kerja / Beasiswa Pendidikan',
  },
];

export interface BeritaItem {
  id: string;
  judul: string;
  kategori: 'Pemerintahan' | 'Pembangunan' | 'Kesehatan & Sosial' | 'Lingkungan';
  tanggal: string;
  penulis: string;
  gambar: string;
  ringkasan: string;
  isi: string[];
}

export const BERITA_LIST: BeritaItem[] = [
  {
    id: 'berita-musrenbang-2026',
    judul: 'Musrenbang Kelurahan Mekarwangi Tetapkan 14 Program Prioritas Infrastruktur RW',
    kategori: 'Pemerintahan',
    tanggal: '18 November 2026',
    penulis: 'Seksi Ekonomi & Pembangunan',
    gambar: IMAGES.musrenbang,
    ringkasan:
      'Perwakilan 11 RW, LPM, serta tokoh masyarakat menyepakati peningkatan drainase lingkungan, penerangan jalan gang, dan rehabilitasi balai warga.',
    isi: [
      'Kelurahan Mekarwangi menggelar Musyawarah Perencanaan Pembangunan (Musrenbang) tingkat kelurahan di Aula Kantor Kelurahan dengan dihadiri oleh 11 Ketua RW, perwakilan PKK, Karang Taruna, Lembaga Pemberdayaan Masyarakat (LPM), serta tim pendamping kecamatan.',
      'Dari total 28 usulan fisik dan non-fisik yang dihimpun melalui pra-musrenbang tingkat RW, forum menyepakati 14 program prioritas utama. Fokus terbesar diarahkan pada normalisasi saluran drainase di RW 03 dan RW 07 guna mencegah genangan saat puncak musim hujan.',
      'Selain pembangunan fisik, alokasi pemberdayaan masyarakat juga mencakup pelatihan digitalisasi kemasan bagi 60 pelaku UMKM kuliner dan kerajinan rumah tangga serta pengadaan alat ukur antropometri terbaru untuk seluruh Posyandu.',
      'Lurah Mekarwangi menegaskan bahwa seluruh hasil kesepakatan Musrenbang akan dipublikasikan melalui papan informasi dan portal resmi agar warga dapat turut mengawal realisasi anggaran pada tahun berjalan.',
    ],
  },
  {
    id: 'berita-posyandu-lansia',
    judul: 'Layanan Posyandu Terintegrasi Layani 420 Balita dan Lansia di 11 RW',
    kategori: 'Kesehatan & Sosial',
    tanggal: '12 November 2026',
    penulis: 'Seksi Kesejahteraan Sosial',
    gambar: IMAGES.posyandu,
    ringkasan:
      'Kegiatan pemeriksaan kesehatan rutin bersama Puskesmas pembantu mencatat peningkatan partisipasi pemeriksaan tekanan darah lansia dan pemantauan gizi balita.',
    isi: [
      'Program Posyandu Siklus Hidup di Kelurahan Mekarwangi terus diperluas jangkauannya dengan menghadirkan layanan pemeriksaan kesehatan gratis bagi balita, ibu hamil, hingga warga lanjut usia dalam satu jadwal terpadu di masing-masing RW.',
      'Sepanjang pekan kedua November, sebanyak 420 warga menerima layanan penimbangan berkala, pemberian makanan tambahan (PMT) berbahan pangan lokal, pemeriksaan gula darah sewaktu, dan konsultasi gizi keluarga.',
      'Kader Posyandu bersama tenaga medis Puskesmas turut melakukan pendataan warga rentan yang memerlukan pendampingan kepesertaan Jaminan Kesehatan Nasional (JKN) agar seluruh keluarga terlindungi layanan kesehatan dasar.',
    ],
  },
  {
    id: 'berita-kerja-bakti',
    judul: 'Gerakan Jumat Bersih dan Tanam 250 Bibit Pohon Peneduh di Kawasan Permukiman',
    kategori: 'Lingkungan',
    tanggal: '06 November 2026',
    penulis: 'Seksi Pemerintahan & Trantib',
    gambar: IMAGES.kerjaBakti,
    ringkasan:
      'Warga bersama Karang Taruna dan petugas kebersihan membersihkan saluran air serta menanam pohon tabebuya dan pucuk merah di sepanjang jalan lingkungan.',
    isi: [
      'Antusiasme warga terlihat sejak pukul 06.30 WIB dalam kegiatan Gerakan Jumat Bersih serentak yang dipusatkan di koridor RW 02, RW 05, dan RW 09. Kegiatan ini menyasar pembersihan sedimen selokan, pemilahan sampah anorganik untuk Bank Sampah, serta penghijauan tepi jalan.',
      'Sebanyak 250 bibit pohon peneduh dan tanaman produktif ditanam bersama sebagai bagian dari target Kampung Iklim Kelurahan Mekarwangi. Setiap RT menunjuk tim perawat tanaman agar bibit tumbuh optimal.',
      'Kepala Seksi Pemerintahan mengimbau warga untuk terus memisahkan sampah organik rumah tangga menggunakan ember komposter dan biopori yang telah dibagikan secara bertahap.',
    ],
  },
  {
    id: 'berita-layanan-prima',
    judul: 'Kantor Kelurahan Mekarwangi Terapkan Antrean Terpadu dan Template Surat Mandiri',
    kategori: 'Pemerintahan',
    tanggal: '29 Oktober 2026',
    penulis: 'Sekretariat Kelurahan',
    gambar: IMAGES.heroKantor,
    ringkasan:
      'Warga kini dapat mengunduh format surat pengantar resmi secara daring sebelum datang ke loket sehingga waktu tunggu di kantor terpangkas hingga separuhnya.',
    isi: [
      'Dalam upaya meningkatkan mutu pelayanan publik, Sekretariat Kelurahan Mekarwangi meluncurkan penyederhanaan prosedur loket pelayanan administrasi kependudukan dan surat menyurat.',
      'Melalui portal resmi kelurahan, warga dapat memeriksa rincian dokumen yang wajib disiapkan sekaligus mengunduh format surat pengantar dalam format PDF maupun DOCX untuk diisi terlebih dahulu.',
      'Bagi warga lanjut usia atau penyandang disabilitas yang datang langsung ke kantor kelurahan, tersedia jalur akses landai (ramp) dan loket prioritas di lantai dasar agar seluruh layanan mudah dijangkau.',
    ],
  },
];

export interface PengumumanItem {
  id: string;
  nomor: string;
  judul: string;
  kategori: 'Pemberitahuan Layanan' | 'Jadwal Kegiatan' | 'Bantuan Sosial' | 'Informasi Penting';
  tanggal: string;
  berlakuHingga: string;
  ringkasan: string;
  detail: string;
}

export const PENGUMUMAN_LIST: PengumumanItem[] = [
  {
    id: 'pengumuman-1',
    nomor: '005 / 118 / Kel.MW / XI / 2026',
    judul: 'Jadwal Penyaluran Bantuan Pangan Beras Tahap IV Tahun 2026',
    kategori: 'Bantuan Sosial',
    tanggal: '21 November 2026',
    berlakuHingga: '30 November 2026',
    ringkasan:
      'Penyaluran bantuan pangan bagi 612 Keluarga Penerima Manfaat (KPM) dilaksanakan di Pendopo Kelurahan Mekarwangi secara bertahap per RW.',
    detail:
      'Diberitahukan kepada seluruh Keluarga Penerima Manfaat (KPM) terdata di Kelurahan Mekarwangi bahwa penyaluran bantuan pangan beras 10 kg Tahap IV dilaksanakan pada tanggal 25–27 November 2026 pukul 08.30–14.30 WIB di Pendopo Kelurahan. Warga wajib membawa KTP-el asli, Kartu Keluarga asli, dan surat undangan distribusi dari Ketua RT masing-masing.',
  },
  {
    id: 'pengumuman-2',
    nomor: '470 / 112 / Kel.MW / XI / 2026',
    judul: 'Layanan Keliling Perekaman KTP-el Pemula untuk Usia 17 Tahun',
    kategori: 'Pemberitahuan Layanan',
    tanggal: '15 November 2026',
    berlakuHingga: '05 Desember 2026',
    ringkasan:
      'Tim Disdukcapil bekerja sama dengan Kelurahan membuka layanan jemput bola perekaman biometrik bagi pelajar dan warga yang baru menginjak usia 17 tahun.',
    detail:
      'Pelayanan jemput bola perekaman KTP-el pemula akan digelar di Aula Kelurahan Mekarwangi pada hari Sabtu, 28 November 2026 pukul 09.00–13.00 WIB. Pemohon cukup membawa fotokopi Kartu Keluarga dan Akta Kelahiran tanpa dipungut biaya apa pun.',
  },
  {
    id: 'pengumuman-3',
    nomor: '660 / 105 / Kel.MW / XI / 2026',
    judul: 'Imbauan Kebersihan Saluran Drainase Menghadapi Puncak Musim Hujan',
    kategori: 'Informasi Penting',
    tanggal: '10 November 2026',
    berlakuHingga: '31 Desember 2026',
    ringkasan:
      'Seluruh Ketua RW dan warga diminta memastikan saluran air lingkungan bebas sampah plastik serta melaporkan pohon rawan tumbang ke Posko Trantib.',
    detail:
      'Memasuki puncak musim penghujan, Kelurahan Mekarwangi mengimbau seluruh pengurus RT/RW untuk mengaktifkan kembali kerja bakti pembersihan tali air setiap akhir pekan dan tidak membuang limbah rumah tangga ke saluran drainase. Laporan darurat genangan atau pohon miring dapat disampaikan langsung melalui WhatsApp layanan kelurahan.',
  },
  {
    id: 'pengumuman-4',
    nomor: '510 / 098 / Kel.MW / X / 2026',
    judul: 'Pendampingan Pembuatan NIB Gratis bagi Pelaku UMKM Mekarwangi',
    kategori: 'Jadwal Kegiatan',
    tanggal: '28 Oktober 2026',
    berlakuHingga: '15 Desember 2026',
    ringkasan:
      'Klinik Konsultasi UMKM dibuka setiap hari Rabu pukul 09.00–12.00 WIB di Ruang Ekonomi & Pembangunan untuk penerbitan NIB dan sertifikasi halal.',
    detail:
      'Pelaku usaha mikro dan kecil ber-KTP Kelurahan Mekarwangi dipersilakan mengikuti pendampingan penerbitan Nomor Induk Berusaha (NIB) secara gratis setiap hari Rabu. Siapkan KTP-el, nomor WhatsApp aktif, alamat email aktif, serta data perkiraan modal dan omzet usaha.',
  },
  {
    id: 'pengumuman-5',
    nomor: '800 / 091 / Kel.MW / X / 2026',
    judul: 'Penegasan Layanan Administrasi Bebas Pungutan Liar (Rp 0)',
    kategori: 'Pemberitahuan Layanan',
    tanggal: '20 Oktober 2026',
    berlakuHingga: 'Berlaku Seterusnya',
    ringkasan:
      'Seluruh penerbitan surat pengantar, surat keterangan domisili, SKU, maupun SKTM di Kantor Kelurahan Mekarwangi tidak dipungut biaya apa pun.',
    detail:
      'Pemerintah Kelurahan Mekarwangi menegaskan bahwa seluruh jenis pelayanan administrasi kependudukan dan penerbitan surat keterangan bersifat GRATIS (Rp 0). Apabila warga menemukan indikasi permintaan imbalan tidak resmi, segera laporkan melalui formulir kontak resmi atau WhatsApp pengaduan Lurah.',
  },
];

export interface GaleriItem {
  id: string;
  judul: string;
  kategori: 'Pelayanan & Kantor' | 'Kegiatan Warga' | 'Kesehatan & Sosial';
  tanggal: string;
  lokasi: string;
  gambar: string;
  deskripsi: string;
}

export const GALERI_LIST: GaleriItem[] = [
  {
    id: 'gal-1',
    judul: 'Gedung Pelayanan Publik Kelurahan Mekarwangi',
    kategori: 'Pelayanan & Kantor',
    tanggal: 'November 2026',
    lokasi: 'Jl. Mekarwangi Raya No. 42',
    gambar: IMAGES.heroKantor,
    deskripsi: 'Fasad kantor kelurahan dilengkapi jalur ramp ramah disabilitas dan taman terbuka hijau untuk kenyamanan warga yang mengurus administrasi.',
  },
  {
    id: 'gal-2',
    judul: 'Forum Musrenbang Partisipatif Tingkat Kelurahan',
    kategori: 'Kegiatan Warga',
    tanggal: '18 November 2026',
    lokasi: 'Aula Kantor Kelurahan Mekarwangi',
    gambar: IMAGES.musrenbang,
    deskripsi: 'Diskusi penyusunan skala prioritas pembangunan infrastruktur lingkungan bersama para Ketua RW dan perwakilan lembaga masyarakat.',
  },
  {
    id: 'gal-3',
    judul: 'Posyandu Terintegrasi Lansia dan Balita',
    kategori: 'Kesehatan & Sosial',
    tanggal: '12 November 2026',
    lokasi: 'Pendopo RW 04 Mekarwangi',
    gambar: IMAGES.posyandu,
    deskripsi: 'Kader kesehatan kelurahan memeriksa tekanan darah warga lanjut usia serta memantau tumbuh kembang balita secara berkala.',
  },
  {
    id: 'gal-4',
    judul: 'Kerja Bakti dan Penanaman Pohon Lingkungan',
    kategori: 'Kegiatan Warga',
    tanggal: '06 November 2026',
    lokasi: 'Koridor RW 02 & RW 05',
    gambar: IMAGES.kerjaBakti,
    deskripsi: 'Gotong royong warga membersihkan selokan lingkungan dan menanam bibit pohon peneduh untuk menjaga keasrian kawasan permukiman.',
  },
  {
    id: 'gal-5',
    judul: 'Ruang Kerja & Koordinasi Pimpinan Kelurahan',
    kategori: 'Pelayanan & Kantor',
    tanggal: 'Oktober 2026',
    lokasi: 'Kantor Kelurahan Mekarwangi',
    gambar: IMAGES.fotoLurah,
    deskripsi: 'Lurah Mekarwangi meninjau kesiapan pelayanan harian dan pengawasan standar waktu penyelesaian berkas administrasi warga.',
  },
];
