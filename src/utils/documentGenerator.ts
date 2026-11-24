import { jsPDF } from 'jspdf';
import {
  AlignmentType,
  BorderStyle,
  Document,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from 'docx';
import { KELURAHAN_INFO, LetterTemplate } from '../data/kelurahanData';

export interface ApplicantData {
  nama: string;
  nik: string;
  ttl: string;
  jenisKelamin: string;
  agama: string;
  pekerjaan: string;
  alamat: string;
  keperluan: string;
}

export const DEFAULT_TEMPLATE_PLACEHOLDERS: ApplicantData = {
  nama: '[Nama Lengkap Pemohon]',
  nik: '[Nomor Induk Kependudukan / 16 Digit]',
  ttl: '[Kota, Tanggal-Bulan-Tahun]',
  jenisKelamin: '[Laki-laki / Perempuan]',
  agama: '[Agama]',
  pekerjaan: '[Pekerjaan Saat Ini]',
  alamat: '[Alamat Lengkap RT/RW Kelurahan Mekarwangi]',
  keperluan: '',
};

function resolveApplicant(template: LetterTemplate, custom?: Partial<ApplicantData>): ApplicantData {
  return {
    nama: custom?.nama?.trim() || DEFAULT_TEMPLATE_PLACEHOLDERS.nama,
    nik: custom?.nik?.trim() || DEFAULT_TEMPLATE_PLACEHOLDERS.nik,
    ttl: custom?.ttl?.trim() || DEFAULT_TEMPLATE_PLACEHOLDERS.ttl,
    jenisKelamin: custom?.jenisKelamin?.trim() || DEFAULT_TEMPLATE_PLACEHOLDERS.jenisKelamin,
    agama: custom?.agama?.trim() || DEFAULT_TEMPLATE_PLACEHOLDERS.agama,
    pekerjaan: custom?.pekerjaan?.trim() || DEFAULT_TEMPLATE_PLACEHOLDERS.pekerjaan,
    alamat: custom?.alamat?.trim() || DEFAULT_TEMPLATE_PLACEHOLDERS.alamat,
    keperluan: custom?.keperluan?.trim() || template.defaultKeperluan,
  };
}

function slugifyFileName(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function getFormattedDateIndonesian(): string {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date());
}

export function generateLetterPdf(template: LetterTemplate, custom?: Partial<ApplicantData>): void {
  const applicant = resolveApplicant(template, custom);
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const marginX = 22;
  const contentWidth = pageWidth - marginX * 2;
  let y = 20;

  // Kop Surat
  doc.setFont('times', 'bold');
  doc.setFontSize(12);
  doc.text('PEMERINTAH KOTA BANDUNG', pageWidth / 2, y, { align: 'center' });
  y += 5.5;
  doc.setFontSize(13);
  doc.text('KECAMATAN BOJONGLOA KIDUL', pageWidth / 2, y, { align: 'center' });
  y += 6.5;
  doc.setFontSize(16);
  doc.text('KELURAHAN MEKARWANGI', pageWidth / 2, y, { align: 'center' });
  y += 5.5;
  doc.setFont('times', 'normal');
  doc.setFontSize(9.5);
  doc.text(
    `Jl. Mekarwangi Raya No. 42 Bandung 40237 · Telp. ${KELURAHAN_INFO.telepon} · Email: ${KELURAHAN_INFO.email}`,
    pageWidth / 2,
    y,
    { align: 'center' }
  );

  // Double horizontal line under Kop Surat
  y += 3.5;
  doc.setLineWidth(0.8);
  doc.line(marginX, y, pageWidth - marginX, y);
  doc.setLineWidth(0.25);
  doc.line(marginX, y + 1.2, pageWidth - marginX, y + 1.2);

  // Title & Nomor Surat
  y += 12;
  doc.setFont('times', 'bold');
  doc.setFontSize(12.5);
  doc.text(template.judulResmi, pageWidth / 2, y, { align: 'center' });
  const titleWidth = doc.getTextWidth(template.judulResmi);
  doc.setLineWidth(0.35);
  doc.line((pageWidth - titleWidth) / 2, y + 1.2, (pageWidth + titleWidth) / 2, y + 1.2);

  y += 6;
  doc.setFont('times', 'normal');
  doc.setFontSize(11);
  doc.text(`Nomor: ${template.kodeSurat}`, pageWidth / 2, y, { align: 'center' });

  // Pembuka
  y += 12;
  const pembukaLines = doc.splitTextToSize(template.pembuka, contentWidth);
  doc.text(pembukaLines, marginX, y);
  y += pembukaLines.length * 5.5 + 5;

  // Biodata rows
  const fields: [string, string][] = [
    ['Nama Lengkap', applicant.nama],
    ['NIK', applicant.nik],
    ['Tempat / Tgl. Lahir', applicant.ttl],
    ['Jenis Kelamin', applicant.jenisKelamin],
    ['Agama', applicant.agama],
    ['Pekerjaan', applicant.pekerjaan],
    ['Alamat', applicant.alamat],
    ['Keperluan', applicant.keperluan],
  ];

  const labelWidth = 44;
  const colonX = marginX + labelWidth;
  const valueX = colonX + 4;
  const valueMaxWidth = contentWidth - labelWidth - 4;

  fields.forEach(([label, value]) => {
    doc.setFont('times', 'normal');
    doc.text(label, marginX + 4, y);
    doc.text(':', colonX, y);
    const wrappedVal = doc.splitTextToSize(value, valueMaxWidth);
    doc.setFont('times', 'bold');
    doc.text(wrappedVal, valueX, y);
    y += Math.max(wrappedVal.length, 1) * 5.5 + 1.5;
  });

  // Isi & Penutup
  y += 5;
  doc.setFont('times', 'normal');
  const isiLines = doc.splitTextToSize(template.isiParagraf, contentWidth);
  doc.text(isiLines, marginX, y);
  y += isiLines.length * 5.5 + 5;

  const penutupLines = doc.splitTextToSize(template.penutup, contentWidth);
  doc.text(penutupLines, marginX, y);
  y += penutupLines.length * 5.5 + 16;

  // Signature Block
  const sigX = pageWidth - marginX - 68;
  doc.text(`Bandung, ${getFormattedDateIndonesian()}`, sigX, y);
  y += 5.5;
  doc.text('Lurah Mekarwangi,', sigX, y);
  y += 24;
  doc.setFont('times', 'bold');
  doc.text(KELURAHAN_INFO.lurah.nama, sigX, y);
  const nameWidth = doc.getTextWidth(KELURAHAN_INFO.lurah.nama);
  doc.line(sigX, y + 1, sigX + nameWidth, y + 1);
  y += 5;
  doc.setFont('times', 'normal');
  doc.setFontSize(10);
  doc.text(`NIP. ${KELURAHAN_INFO.lurah.nip}`, sigX, y);

  // Subtle footer note
  doc.setFontSize(8.5);
  doc.setTextColor(110);
  doc.text(
    'Dokumen templat resmi Portal Kelurahan Mekarwangi · Bawa pengantar RT/RW saat verifikasi loket.',
    pageWidth / 2,
    282,
    { align: 'center' }
  );

  doc.save(`${slugifyFileName(template.judul)}.pdf`);
}

export async function generateLetterDocx(
  template: LetterTemplate,
  custom?: Partial<ApplicantData>
): Promise<void> {
  const applicant = resolveApplicant(template, custom);

  const fields: [string, string][] = [
    ['Nama Lengkap', applicant.nama],
    ['NIK', applicant.nik],
    ['Tempat / Tgl. Lahir', applicant.ttl],
    ['Jenis Kelamin', applicant.jenisKelamin],
    ['Agama', applicant.agama],
    ['Pekerjaan', applicant.pekerjaan],
    ['Alamat', applicant.alamat],
    ['Keperluan', applicant.keperluan],
  ];

  const noBorder = {
    style: BorderStyle.NONE,
    size: 0,
    color: 'FFFFFF',
  };

  const biodataRows = fields.map(
    ([label, value]) =>
      new TableRow({
        children: [
          new TableCell({
            width: { size: 30, type: WidthType.PERCENTAGE },
            borders: { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder },
            children: [
              new Paragraph({
                spacing: { after: 80 },
                children: [new TextRun({ text: label, font: 'Times New Roman', size: 22 })],
              }),
            ],
          }),
          new TableCell({
            width: { size: 4, type: WidthType.PERCENTAGE },
            borders: { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder },
            children: [
              new Paragraph({
                spacing: { after: 80 },
                children: [new TextRun({ text: ':', font: 'Times New Roman', size: 22 })],
              }),
            ],
          }),
          new TableCell({
            width: { size: 66, type: WidthType.PERCENTAGE },
            borders: { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder },
            children: [
              new Paragraph({
                spacing: { after: 80 },
                children: [new TextRun({ text: value, bold: true, font: 'Times New Roman', size: 22 })],
              }),
            ],
          }),
        ],
      })
  );

  const wordDoc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: 'PEMERINTAH KOTA BANDUNG',
                bold: true,
                font: 'Times New Roman',
                size: 24,
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: 'KECAMATAN BOJONGLOA KIDUL',
                bold: true,
                font: 'Times New Roman',
                size: 26,
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: 'KELURAHAN MEKARWANGI',
                bold: true,
                font: 'Times New Roman',
                size: 32,
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 160 },
            border: {
              bottom: {
                style: BorderStyle.DOUBLE,
                size: 12,
                color: '000000',
              },
            },
            children: [
              new TextRun({
                text: `Jl. Mekarwangi Raya No. 42 Bandung 40237 · Telp. ${KELURAHAN_INFO.telepon} · Email: ${KELURAHAN_INFO.email}`,
                font: 'Times New Roman',
                size: 18,
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 280, after: 60 },
            children: [
              new TextRun({
                text: template.judulResmi,
                bold: true,
                underline: {},
                font: 'Times New Roman',
                size: 24,
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 280 },
            children: [
              new TextRun({
                text: `Nomor: ${template.kodeSurat}`,
                font: 'Times New Roman',
                size: 22,
              }),
            ],
          }),
          new Paragraph({
            spacing: { after: 180 },
            children: [
              new TextRun({
                text: template.pembuka,
                font: 'Times New Roman',
                size: 22,
              }),
            ],
          }),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: biodataRows,
          }),
          new Paragraph({
            spacing: { before: 200, after: 160 },
            children: [
              new TextRun({
                text: template.isiParagraf,
                font: 'Times New Roman',
                size: 22,
              }),
            ],
          }),
          new Paragraph({
            spacing: { after: 360 },
            children: [
              new TextRun({
                text: template.penutup,
                font: 'Times New Roman',
                size: 22,
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: [
              new TextRun({
                text: `Bandung, ${getFormattedDateIndonesian()}`,
                font: 'Times New Roman',
                size: 22,
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.RIGHT,
            spacing: { after: 640 },
            children: [
              new TextRun({
                text: 'Lurah Mekarwangi,',
                font: 'Times New Roman',
                size: 22,
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: [
              new TextRun({
                text: KELURAHAN_INFO.lurah.nama,
                bold: true,
                underline: {},
                font: 'Times New Roman',
                size: 22,
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: [
              new TextRun({
                text: `NIP. ${KELURAHAN_INFO.lurah.nip}`,
                font: 'Times New Roman',
                size: 20,
              }),
            ],
          }),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(wordDoc);
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `${slugifyFileName(template.judul)}.docx`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}
