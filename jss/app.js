// ===== DATA CONTOH =====

// PROGRAM: STM - Sijil Teknologi Maklumat
//          SAU - Sijil Teknologi Automotif
//          SKE - Sijil Teknologi Elektrik
//          SPL - Sijil Pengembaraan & Pelancongan
// UNIT:    UPA - Unit Pengajian Am (pensyarah sahaja, mengajar subjek am)

const dataKursus = [
  // STM - Sijil Teknologi Maklumat
  { kod: 'STM-101', nama: 'Asas Pengaturcaraan', pensyarah: 'En. Syafiq Azlan', program: 'STM', pelajar: 28, status: 'Aktif', cidos: 'Aktif' },
  { kod: 'STM-102', nama: 'Rangkaian Komputer', pensyarah: 'En. Syafiq Azlan', program: 'STM', pelajar: 28, status: 'Aktif', cidos: 'Aktif' },
  { kod: 'STM-103', nama: 'Pembangunan Aplikasi Web', pensyarah: 'Pn. Hidayah Mustafa', program: 'STM', pelajar: 28, status: 'Aktif', cidos: 'Aktif' },
  { kod: 'STM-104', nama: 'Keselamatan Siber', pensyarah: 'Pn. Hidayah Mustafa', program: 'STM', pelajar: 28, status: 'Aktif', cidos: 'Tidak Aktif' },
  // SAU - Sijil Teknologi Automotif
  { kod: 'SAU-101', nama: 'Enjin Petrol & Diesel', pensyarah: 'En. Hafizi Ramlan', program: 'SAU', pelajar: 24, status: 'Aktif', cidos: 'Aktif' },
  { kod: 'SAU-102', nama: 'Sistem Elektrik Kenderaan', pensyarah: 'En. Hafizi Ramlan', program: 'SAU', pelajar: 24, status: 'Aktif', cidos: 'Tidak Aktif' },
  { kod: 'SAU-103', nama: 'Sistem Transmisi & Casis', pensyarah: 'En. Faizal Nordin', program: 'SAU', pelajar: 24, status: 'Aktif', cidos: 'Aktif' },
  // SKE - Sijil Teknologi Elektrik
  { kod: 'SKE-101', nama: 'Litar Elektrik Asas', pensyarah: 'En. Razali Hashim', program: 'SKE', pelajar: 20, status: 'Aktif', cidos: 'Aktif' },
  { kod: 'SKE-102', nama: 'Pendawaian Domestik', pensyarah: 'En. Razali Hashim', program: 'SKE', pelajar: 20, status: 'Aktif', cidos: 'Aktif' },
  { kod: 'SKE-103', nama: 'Mesin Elektrik & Kawalan', pensyarah: 'En. Khairul Azmi', program: 'SKE', pelajar: 20, status: 'Aktif', cidos: 'Tidak Aktif' },
  // SPL - Sijil Pengembaraan & Pelancongan
  { kod: 'SPL-101', nama: 'Pengurusan Pelancongan', pensyarah: 'Pn. Faridah Zainal', program: 'SPL', pelajar: 18, status: 'Aktif', cidos: 'Aktif' },
  { kod: 'SPL-102', nama: 'Operasi Hospitaliti', pensyarah: 'Pn. Faridah Zainal', program: 'SPL', pelajar: 18, status: 'Aktif', cidos: 'Aktif' },
  { kod: 'SPL-103', nama: 'Pemanduan Pelancong', pensyarah: 'En. Firdaus Lokman', program: 'SPL', pelajar: 18, status: 'Aktif', cidos: 'Tidak Aktif' },
  // UPA - Unit Pengajian Am
  { kod: 'UPA-101', nama: 'Pendidikan Islam', pensyarah: 'Ustaz Mohd Nizam', program: 'UPA', pelajar: 90, status: 'Aktif', cidos: 'Aktif' },
  { kod: 'UPA-102', nama: 'Pendidikan Moral', pensyarah: 'Pn. Salmah Daud', program: 'UPA', pelajar: 20, status: 'Aktif', cidos: 'Tidak Aktif' },
  { kod: 'UPA-103', nama: 'Bahasa Kebangsaan', pensyarah: 'Pn. Zainab Hussain', program: 'UPA', pelajar: 110, status: 'Aktif', cidos: 'Aktif' },
  { kod: 'UPA-104', nama: 'Bahasa Inggeris Komunikasi', pensyarah: 'Pn. Noraini Ahmad', program: 'UPA', pelajar: 110, status: 'Aktif', cidos: 'Aktif' },
  { kod: 'UPA-105', nama: 'Matematik', pensyarah: 'En. Azrul Nizam', program: 'UPA', pelajar: 72, status: 'Aktif', cidos: 'Tidak Aktif' },
];

// Pensyarah sahaja (Urus Pengguna)
const dataPengguna = [
  { nama: 'En. Syafiq Azlan', email: 'syafiq@kkss.edu.my', unit: 'STM', bilKursus: 2, status: 'Aktif' },
  { nama: 'Pn. Hidayah Mustafa', email: 'hidayah@kkss.edu.my', unit: 'STM', bilKursus: 2, status: 'Aktif' },
  { nama: 'En. Hafizi Ramlan', email: 'hafizi@kkss.edu.my', unit: 'SAU', bilKursus: 2, status: 'Aktif' },
  { nama: 'En. Faizal Nordin', email: 'faizal@kkss.edu.my', unit: 'SAU', bilKursus: 1, status: 'Aktif' },
  { nama: 'En. Razali Hashim', email: 'razali@kkss.edu.my', unit: 'SKE', bilKursus: 2, status: 'Aktif' },
  { nama: 'En. Khairul Azmi', email: 'khairul@kkss.edu.my', unit: 'SKE', bilKursus: 1, status: 'Aktif' },
  { nama: 'Pn. Faridah Zainal', email: 'faridah@kkss.edu.my', unit: 'SPL', bilKursus: 2, status: 'Aktif' },
  { nama: 'En. Firdaus Lokman', email: 'firdaus@kkss.edu.my', unit: 'SPL', bilKursus: 1, status: 'Aktif' },
  { nama: 'Ustaz Mohd Nizam', email: 'nizam.upa@kkss.edu.my', unit: 'UPA', bilKursus: 1, status: 'Aktif' },
  { nama: 'Pn. Salmah Daud', email: 'salmah.upa@kkss.edu.my', unit: 'UPA', bilKursus: 1, status: 'Aktif' },
  { nama: 'Pn. Zainab Hussain', email: 'zainab.upa@kkss.edu.my', unit: 'UPA', bilKursus: 1, status: 'Aktif' },
  { nama: 'Pn. Noraini Ahmad', email: 'noraini.upa@kkss.edu.my', unit: 'UPA', bilKursus: 1, status: 'Aktif' },
  { nama: 'En. Azrul Nizam', email: 'azrul.upa@kkss.edu.my', unit: 'UPA', bilKursus: 1, status: 'Aktif' },
];

// Data Laporan CIDOS
const dataCIDOS = [
  { pensyarah: 'En. Syafiq Azlan', unit: 'STM', bilKursus: 2, tarikhAktif: '18 Nov 2024', kandungan: 8, status: 'Aktif' },
  { pensyarah: 'Pn. Hidayah Mustafa', unit: 'STM', bilKursus: 1, tarikhAktif: '15 Nov 2024', kandungan: 4, status: 'Aktif' },
  { pensyarah: 'En. Hafizi Ramlan', unit: 'SAU', bilKursus: 1, tarikhAktif: '12 Nov 2024', kandungan: 3, status: 'Aktif' },
  { pensyarah: 'En. Faizal Nordin', unit: 'SAU', bilKursus: 1, tarikhAktif: '10 Nov 2024', kandungan: 5, status: 'Aktif' },
  { pensyarah: 'En. Razali Hashim', unit: 'SKE', bilKursus: 2, tarikhAktif: '17 Nov 2024', kandungan: 6, status: 'Aktif' },
  { pensyarah: 'En. Khairul Azmi', unit: 'SKE', bilKursus: 0, tarikhAktif: '-', kandungan: 0, status: 'Tidak Aktif' },
  { pensyarah: 'Pn. Faridah Zainal', unit: 'SPL', bilKursus: 2, tarikhAktif: '14 Nov 2024', kandungan: 7, status: 'Aktif' },
  { pensyarah: 'En. Firdaus Lokman', unit: 'SPL', bilKursus: 0, tarikhAktif: '-', kandungan: 0, status: 'Tidak Aktif' },
  { pensyarah: 'Ustaz Mohd Nizam', unit: 'UPA', bilKursus: 1, tarikhAktif: '11 Nov 2024', kandungan: 4, status: 'Aktif' },
  { pensyarah: 'Pn. Salmah Daud', unit: 'UPA', bilKursus: 0, tarikhAktif: '-', kandungan: 0, status: 'Tidak Aktif' },
  { pensyarah: 'Pn. Zainab Hussain', unit: 'UPA', bilKursus: 1, tarikhAktif: '8 Nov 2024', kandungan: 3, status: 'Aktif' },
  { pensyarah: 'Pn. Noraini Ahmad', unit: 'UPA', bilKursus: 1, tarikhAktif: '5 Nov 2024', kandungan: 2, status: 'Aktif' },
  { pensyarah: 'En. Azrul Nizam', unit: 'UPA', bilKursus: 0, tarikhAktif: '-', kandungan: 0, status: 'Tidak Aktif' },
];

// Data Pencapaian SKU — by Unit/Program
// Setiap rekod = 1 item SKU yang dihasilkan oleh sesebuah unit
const dataSKU = [
  // Video PdP
  { tahun: 2026, unit: 'STM', jenis: 'Video PdP', tajuk: 'Tutorial Pengaturcaraan Python Asas', pensyarah: 'En. Syafiq Azlan', status: 'Lengkap' },
  // E-Book Interaktif
  { tahun: 2026, unit: 'SAU', jenis: 'E-Book Interaktif', tajuk: 'Manual Pembaikan Enjin Petrol & Diesel', pensyarah: 'En. Hafizi Ramlan', status: 'Lengkap' },
  { tahun: 2026, unit: 'UPA', jenis: 'E-Book Interaktif', tajuk: 'Modul Bahasa Kebangsaan Interaktif', pensyarah: 'Pn. Zainab Hussain', status: 'Lengkap' },
  // Penggunaan CIDOS Lengkap
  { tahun: 2026, unit: 'STM', jenis: 'CIDOS Lengkap', tajuk: 'Kursus Pembangunan Aplikasi Web (STM-103)', pensyarah: 'Pn. Hidayah Mustafa', status: 'Lengkap' },
  { tahun: 2026, unit: 'SPL', jenis: 'CIDOS Lengkap', tajuk: 'Kursus Pengurusan Pelancongan (SPL-101)', pensyarah: 'Pn. Faridah Zainal', status: 'Lengkap' },
];

// Data Rekod EDOLA — by Unit/Program
// Setiap rekod = 1 penyertaan pertandingan EDOLA oleh sesebuah unit
const dataEDOLA = [
  { tahun: 2026, unit: 'STM', pertandingan: 'EduVision', tajuk: 'Visualisasi Data Pemandu Rentas Negara', pensyarah: 'En. Syafiq Azlan', tarikh: '15 Okt 2026', status: 'Diterima' },
  { tahun: 2026, unit: 'SKE', pertandingan: 'TikTok Tutor', tajuk: 'Cara Pasang Pendawaian Domestik yang Selamat', pensyarah: 'En. Razali Hashim', tarikh: '20 Okt 2026', status: 'Diterima' },
  { tahun: 2025, unit: 'SPL', pertandingan: 'EduVision', tajuk: 'Eksplorasi Destinasi Warisan Perak', pensyarah: 'Pn. Faridah Zainal', tarikh: '10 Okt 2025', status: 'Diterima' },
  { tahun: 2025, unit: 'UPA', pertandingan: 'TikTok Tutor', tajuk: 'Teknik Hafazan Ayat Al-Quran', pensyarah: 'Ustaz Mohd Nizam', tarikh: '5 Okt 2025', status: 'Diterima' },
  { tahun: 2024, unit: 'SAU', pertandingan: 'EduVision', tajuk: 'Simulasi Diagnosis Enjin Moden', pensyarah: 'En. Faizal Nordin', tarikh: '12 Okt 2024', status: 'Diterima' },
  { tahun: 2024, unit: 'STM', pertandingan: 'TikTok Tutor', tajuk: 'Asas Python dalam 60 Saat', pensyarah: 'En. Syafiq Azlan', tarikh: '8 Okt 2024', status: 'Diterima' },
];

const dataPengumuman = [
  { tajuk: 'Pendaftaran Pelajar Baharu Sesi 1/2025 Dibuka', kandungan: 'Pendaftaran pelajar baharu bagi program STM, SAU, SKE dan SPL dibuka mulai 1 Disember 2024. Sila hubungi pejabat untuk maklumat lanjut.', tarikh: '18 Nov 2024' },
  { tajuk: 'Penyelenggaraan Sistem E-Learning KKSS', kandungan: 'Sistem e-learning akan diselenggara pada 25 Nov 2024 (10:00 pagi - 12:00 tengah hari). Semua akses akan terganggu buat sementara.', tarikh: '15 Nov 2024' },
  { tajuk: 'Jadual Peperiksaan Akhir Semester 2/2024', kandungan: 'Peperiksaan akhir semester bagi semua program akan diadakan pada 10–20 Disember 2024. Jadual lengkap boleh dimuat turun di portal.', tarikh: '10 Nov 2024' },
  { tajuk: 'Penyerahan Tugasan Akhir Semester', kandungan: 'Tarikh akhir penyerahan tugasan akhir semester bagi semua program adalah 30 November 2024. Tugasan lewat tidak akan diterima.', tarikh: '5 Nov 2024' },
  { tajuk: 'Taklimat Keselamatan Bengkel SAU & SKE', kandungan: 'Taklimat keselamatan bengkel wajib dihadiri oleh semua pelajar SAU dan SKE pada 22 Nov 2024, jam 8:00 pagi di Dewan Utama.', tarikh: '1 Nov 2024' },
];

const dataForum = [
  { tajuk: 'Cara akses modul video STM-103 yang tidak boleh dibuka?', penulis: 'Muhammad Hafiz', tarikh: '18 Nov 2024', balas: 5 },
  { tajuk: 'Jadual ujian amali SAU - Sistem Transmisi & Casis', penulis: 'Mohd Farid', tarikh: '17 Nov 2024', balas: 12 },
  { tajuk: 'Masalah log masuk selepas tukar kata laluan', penulis: 'Fatin Liyana', tarikh: '16 Nov 2024', balas: 3 },
  { tajuk: 'Nota SKE-102 Pendawaian Domestik boleh dapat di mana?', penulis: 'Khairul Nizam', tarikh: '14 Nov 2024', balas: 8 },
  { tajuk: 'Panduan tugasan UPA-103 Bahasa Kebangsaan', penulis: 'Ain Sofiya', tarikh: '12 Nov 2024', balas: 6 },
  { tajuk: 'Tarikh lawatan industri SPL - minta pengesahan', penulis: 'Nurul Izzah', tarikh: '10 Nov 2024', balas: 4 },
];

const dataSijil = [
  { no: 'KKSS-2024-001', nama: 'MUHAMMAD HAFIZ BIN ZULKIFLI', kursus: 'Sijil Teknologi Maklumat (STM)', tarikh: '15 November 2024', status: 'Sah' },
  { no: 'KKSS-2024-002', nama: 'NURUL IZZAH BINTI RAMLI', kursus: 'Sijil Teknologi Maklumat (STM)', tarikh: '15 November 2024', status: 'Sah' },
  { no: 'KKSS-2024-003', nama: 'MOHD FARID BIN HAMDAN', kursus: 'Sijil Teknologi Automotif (SAU)', tarikh: '15 November 2024', status: 'Sah' },
  { no: 'KKSS-2024-004', nama: 'IZZUDDIN BIN SHAHRIL', kursus: 'Sijil Teknologi Automotif (SAU)', tarikh: '10 November 2024', status: 'Sah' },
  { no: 'KKSS-2024-005', nama: 'KHAIRUL NIZAM BIN DAUD', kursus: 'Sijil Teknologi Elektrik (SKE)', tarikh: '10 November 2024', status: 'Sah' },
  { no: 'KKSS-2024-006', nama: 'SYAFINA BINTI ZAHARI', kursus: 'Sijil Teknologi Elektrik (SKE)', tarikh: '5 November 2024', status: 'Sah' },
  { no: 'KKSS-2024-007', nama: 'AIN SOFIYA BINTI HAMID', kursus: 'Sijil Pengembaraan & Pelancongan (SPL)', tarikh: '5 November 2024', status: 'Sah' },
  { no: 'KKSS-2024-008', nama: 'FATIN LIYANA BINTI SAID', kursus: 'Sijil Pengembaraan & Pelancongan (SPL)', tarikh: '1 November 2024', status: 'Sah' },
];

// ===== NAVIGASI SIDEBAR =====

function showSection(seksyenId) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('section-' + seksyenId).classList.add('active');

  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  const navAktif = document.querySelector('.nav-item[data-section="' + seksyenId + '"]');
  if (navAktif) navAktif.classList.add('active');

  const tajuk = {
    utama: 'Utama',
    kursus: 'Urus Kursus',
    pengguna: 'Urus Pengguna',
    laporan: 'Laporan',
    forum: 'Forum & Pengumuman',
    sijil: 'Sijil Digital'
  };
  document.getElementById('pageTitle').textContent = tajuk[seksyenId] || '';

  if (seksyenId === 'laporan') {
    renderCIDOS();
    renderSKU();
    renderEDOLA();
  }
}

// ===== JADUAL KURSUS =====

function renderKursus(data) {
  const tbody = document.getElementById('tbodyKursus');
  tbody.innerHTML = data.map((k) => `
    <tr>
      <td>${k.kod}</td>
      <td><strong>${k.nama}</strong></td>
      <td>${k.pensyarah}</td>
      <td><span class="badge-status pensyarah">${k.program}</span></td>
      <td><span class="badge-status ${k.status === 'Aktif' ? 'aktif' : k.status === 'Draf' ? 'draf' : 'tidak-aktif'}">${k.status}</span></td>
      <td><span class="badge-status ${k.cidos === 'Aktif' ? 'aktif' : 'tidak-aktif'}">${k.cidos}</span></td>
      <td>${adaAksesTindakan() ? `
        <button class="btn btn-icon edit" title="Edit" onclick="bukaEditKursus(${dataKursus.indexOf(k)})"><i class="fas fa-edit"></i></button>
        <button class="btn btn-icon hapus" title="Padam" onclick="padamKursus(${dataKursus.indexOf(k)})"><i class="fas fa-trash"></i></button>
      ` : '<span style="color:var(--teks-ringan);font-size:12px;">—</span>'}</td>
    </tr>
  `).join('');
}

function bukaEditKursus(indeks) {
  const k = dataKursus[indeks];
  document.getElementById('editIndeksKursus').value = indeks;
  document.getElementById('editKodKursus').value = k.kod;
  document.getElementById('editNamaKursus').value = k.nama;
  document.getElementById('editPensyarah').value = k.pensyarah;
  document.getElementById('editPelajarKursus').value = k.pelajar;
  document.getElementById('editStatusKursus').value = k.status;
  bukaModal('modalEditKursus');
}

function submitEditKursus(e) {
  e.preventDefault();
  const indeks = parseInt(document.getElementById('editIndeksKursus').value);
  dataKursus[indeks] = {
    kod: document.getElementById('editKodKursus').value,
    nama: document.getElementById('editNamaKursus').value,
    pensyarah: document.getElementById('editPensyarah').value,
    program: dataKursus[indeks].program,
    pelajar: parseInt(document.getElementById('editPelajarKursus').value),
    status: document.getElementById('editStatusKursus').value,
    cidos: dataKursus[indeks].cidos
  };
  renderKursus(dataKursus);
  tutupModal('modalEditKursus');
}

function padamKursus(indeks) {
  if (confirm('Padam rekod ini?')) {
    dataKursus.splice(indeks, 1);
    renderKursus(dataKursus);
  }
}

function cariKursus() {
  const carian = document.getElementById('searchKursus').value.toLowerCase();
  const statusCIDOS = document.getElementById('filterCIDOS').value;
  const hasil = dataKursus.filter(k =>
    (k.nama.toLowerCase().includes(carian) ||
     k.pensyarah.toLowerCase().includes(carian) ||
     k.kod.toLowerCase().includes(carian)) &&
    (statusCIDOS === '' || k.cidos === statusCIDOS)
  );
  renderKursus(hasil);
}

function submitKursus(e) {
  e.preventDefault();
  const baru = {
    kod: document.getElementById('inputKodKursus').value,
    nama: document.getElementById('inputNamaKursus').value,
    pensyarah: document.getElementById('inputPensyarah').value,
    program: document.getElementById('inputKodKursus').value.split('-')[0] || '-',
    pelajar: 0,
    status: document.getElementById('inputStatusKursus').value,
    cidos: 'Tidak Aktif'
  };
  dataKursus.unshift(baru);
  renderKursus(dataKursus);
  tutupModal('modalTambahKursus');
  document.getElementById('formKursus').reset();
}

// ===== JADUAL PENGGUNA =====

function renderPengguna(data) {
  const tbody = document.getElementById('tbodyPengguna');
  tbody.innerHTML = data.map((p, i) => `
    <tr>
      <td>${i + 1}</td>
      <td><strong>${p.nama}</strong></td>
      <td>${p.email}</td>
      <td><span class="badge-status pensyarah">${p.unit}</span></td>
      <td>${p.bilKursus}</td>
      <td><span class="badge-status ${p.status === 'Aktif' ? 'aktif' : 'tidak-aktif'}">${p.status}</span></td>
      <td>${adaAksesTindakan() ? `
        <button class="btn btn-icon edit" title="Edit" onclick="bukaEditPengguna(${dataPengguna.indexOf(p)})"><i class="fas fa-edit"></i></button>
        <button class="btn btn-icon hapus" title="Padam" onclick="padamPengguna(${dataPengguna.indexOf(p)})"><i class="fas fa-trash"></i></button>
      ` : '<span style="color:var(--teks-ringan);font-size:12px;">—</span>'}</td>
    </tr>
  `).join('');
}

function bukaEditPengguna(indeks) {
  const p = dataPengguna[indeks];
  document.getElementById('editIndeksPengguna').value = indeks;
  document.getElementById('editNamaPengguna').value = p.nama;
  document.getElementById('editEmailPengguna').value = p.email;
  document.getElementById('editPeranan').value = p.peranan;
  document.getElementById('editStatusPengguna').value = p.status;
  bukaModal('modalEditPengguna');
}

function submitEditPengguna(e) {
  e.preventDefault();
  const indeks = parseInt(document.getElementById('editIndeksPengguna').value);
  dataPengguna[indeks] = {
    nama: document.getElementById('editNamaPengguna').value,
    email: document.getElementById('editEmailPengguna').value,
    peranan: document.getElementById('editPeranan').value,
    kursus: dataPengguna[indeks].kursus,
    status: document.getElementById('editStatusPengguna').value
  };
  renderPengguna(dataPengguna);
  tutupModal('modalEditPengguna');
}

function padamPengguna(indeks) {
  if (confirm('Padam rekod ini?')) {
    dataPengguna.splice(indeks, 1);
    renderPengguna(dataPengguna);
  }
}

function cariPengguna() {
  const carian = document.getElementById('searchPengguna').value.toLowerCase();
  const unit = document.getElementById('filterUnit').value;
  const hasil = dataPengguna.filter(p =>
    p.nama.toLowerCase().includes(carian) &&
    (unit === '' || p.unit === unit)
  );
  renderPengguna(hasil);
}

function submitPengguna(e) {
  e.preventDefault();
  const baru = {
    nama: document.getElementById('inputNamaPengguna').value,
    email: document.getElementById('inputEmail').value,
    unit: document.getElementById('inputPeranan').value,
    bilKursus: 0,
    status: document.getElementById('inputStatusPengguna').value
  };
  dataPengguna.unshift(baru);
  renderPengguna(dataPengguna);
  tutupModal('modalTambahPengguna');
  document.getElementById('formPengguna').reset();
}

// ===== PENGUMUMAN =====

function renderPengumuman(data) {
  const bekas = document.getElementById('senaraiPengumuman');
  bekas.innerHTML = data.map(p => `
    <div class="announcement-card">
      <h4>${p.tajuk}</h4>
      <p>${p.kandungan}</p>
      <p class="ann-date"><i class="fas fa-calendar-alt"></i> ${p.tarikh}</p>
    </div>
  `).join('');
}

function submitPengumuman(e) {
  e.preventDefault();
  const baru = {
    tajuk: document.getElementById('inputTajukPengumuman').value,
    kandungan: document.getElementById('inputKandunganPengumuman').value,
    tarikh: new Date(document.getElementById('inputTarikhPengumuman').value)
      .toLocaleDateString('ms-MY', { day: 'numeric', month: 'long', year: 'numeric' })
  };
  dataPengumuman.unshift(baru);
  renderPengumuman(dataPengumuman);
  tutupModal('modalTambahPengumuman');
  e.target.reset();
}

// ===== FORUM =====

function renderForum(data) {
  const tbody = document.getElementById('tbodyForum');
  tbody.innerHTML = data.map(f => `
    <tr>
      <td><strong>${f.tajuk}</strong></td>
      <td>${f.penulis}</td>
      <td>${f.tarikh}</td>
      <td><span class="badge-status aktif">${f.balas}</span></td>
    </tr>
  `).join('');
}

// ===== CARIAN SIJIL =====

function cariSijil() {
  const carian = document.getElementById('searchSijil').value.toLowerCase();
  const hasil = dataSijil.filter(s =>
    s.nama.toLowerCase().includes(carian) ||
    s.kursus.toLowerCase().includes(carian) ||
    s.no.toLowerCase().includes(carian)
  );
  renderSijil(hasil);
}

// ===== SIJIL =====

function renderSijil(data) {
  const tbody = document.getElementById('tbodySijil');
  tbody.innerHTML = data.map((s, i) => `
    <tr>
      <td>${s.no}</td>
      <td><strong>${s.nama}</strong></td>
      <td>${s.kursus}</td>
      <td>${s.tarikh}</td>
      <td><span class="badge-status aktif">${s.status}</span></td>
      <td>
        <button class="btn btn-sm btn-primary" onclick="pratononSijil(${i})">
          <i class="fas fa-eye"></i> Lihat
        </button>
      </td>
    </tr>
  `).join('');
}

function pratononSijil(indeks) {
  const s = dataSijil[indeks];
  document.getElementById('sijilNama').textContent = s.nama;
  document.getElementById('sijilKursus').textContent = s.kursus;
  document.getElementById('sijilTarikh').textContent = s.tarikh;
  document.getElementById('sijilNo').textContent = s.no;
  bukaModal('modalSijil');
}

// ===== CARTA HALAMAN UTAMA =====

function renderCartaUtama() {
  const ctx = document.getElementById('chartAktiviti').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ogs', 'Sep', 'Okt', 'Nov', 'Dis'],
      datasets: [{
        label: 'Bilangan Pelajar Aktif',
        data: [45, 60, 75, 80, 95, 110, 120, 105, 130, 145, 160, 148],
        backgroundColor: 'rgba(0, 48, 135, 0.7)',
        borderColor: '#003087',
        borderWidth: 1,
        borderRadius: 4,
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, grid: { color: '#f0f0f0' } },
        x: { grid: { display: false } }
      }
    }
  });
}

// ===== LAPORAN: CIDOS, SKU, EDOLA, TAB =====

function renderCIDOS() {
  const tbody = document.getElementById('tbodyCIDOS');
  tbody.innerHTML = dataCIDOS.map(c => `
    <tr>
      <td><strong>${c.pensyarah}</strong></td>
      <td><span class="badge-status pensyarah">${c.unit}</span></td>
      <td>${c.bilKursus}</td>
      <td>${c.tarikhAktif}</td>
      <td>${c.kandungan} fail</td>
      <td><span class="badge-status ${c.status === 'Aktif' ? 'aktif' : 'tidak-aktif'}">${c.status}</span></td>
    </tr>
  `).join('');
}

function renderSKU() {
  const tbody = document.getElementById('tbodySKU');
  tbody.innerHTML = dataSKU.map((s, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${s.tahun}</td>
      <td><span class="badge-status pensyarah">${s.unit}</span></td>
      <td><span class="badge-status ${s.jenis === 'Video PdP' ? 'aktif' : s.jenis === 'E-Book Interaktif' ? 'draf' : 'admin'}">${s.jenis}</span></td>
      <td>${s.tajuk}</td>
      <td>${s.pensyarah}</td>
      <td><span class="badge-status aktif">${s.status}</span></td>
    </tr>
  `).join('');
}

function renderEDOLA() {
  const tbody = document.getElementById('tbodyEDOLA');
  tbody.innerHTML = dataEDOLA.map((e, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${e.tahun}</td>
      <td><span class="badge-status pensyarah">${e.unit}</span></td>
      <td><strong>${e.pertandingan}</strong></td>
      <td>${e.tajuk}</td>
      <td>${e.pensyarah}</td>
      <td>${e.tarikh}</td>
      <td><span class="badge-status aktif">${e.status}</span></td>
    </tr>
  `).join('');
}

function tukarTabLaporan(tab, btn) {
  // Sembunyikan semua panel
  document.querySelectorAll('.tab-panel').forEach(p => p.style.display = 'none');
  // Buang aktif dari semua butang
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('aktif'));
  // Tunjukkan panel berkaitan
  const idMap = { cidos: 'tabCIDOS', sku: 'tabSKU', edola: 'tabEDOLA', carta: 'tabCarta' };
  document.getElementById(idMap[tab]).style.display = 'block';
  btn.classList.add('aktif');
  // Render carta hanya bila tab carta dipilih
  if (tab === 'carta') renderCartaLaporan();
}

// ===== CARTA LAPORAN =====

let cartaLaporanDirender = false;

function renderCartaLaporan() {
  if (cartaLaporanDirender) return;
  cartaLaporanDirender = true;

  const ctxPai = document.getElementById('chartPai').getContext('2d');
  new Chart(ctxPai, {
    type: 'pie',
    data: {
      labels: ['STM (Teknologi Maklumat)', 'SAU (Teknologi Automotif)', 'SKE (Teknologi Elektrik)', 'SPL (Pengembaraan & Pelancongan)'],
      datasets: [{
        data: [28, 24, 20, 18],
        backgroundColor: ['#003087', '#FFD700', '#16a34a', '#0891b2'],
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'bottom', labels: { font: { size: 11 } } } }
    }
  });

  const ctxBar = document.getElementById('chartPenyiapan').getContext('2d');
  new Chart(ctxBar, {
    type: 'bar',
    data: {
      labels: ['STM', 'SAU', 'SKE', 'SPL'],
      datasets: [{
        label: 'Kadar Penyiapan (%)',
        data: [79, 75, 70, 67],
        backgroundColor: ['#003087', '#FFD700', '#16a34a', '#0891b2'],
        borderRadius: 4,
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, max: 100, ticks: { callback: v => v + '%' } },
        x: { grid: { display: false } }
      }
    }
  });
}

// ===== MODAL =====

function bukaModal(id) {
  document.getElementById(id).classList.add('aktif');
}

function tutupModal(id) {
  document.getElementById(id).classList.remove('aktif');
}

function padamBaris(btn) {
  if (confirm('Padam rekod ini?')) btn.closest('tr').remove();
}


// ===== TOGGLE SIDEBAR =====

document.getElementById('toggleSidebar').addEventListener('click', function () {
  const sidebar = document.getElementById('sidebar');
  const wrapper = document.querySelector('.main-wrapper');
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle('mobile-open');
  } else {
    sidebar.classList.toggle('collapsed');
    wrapper.classList.toggle('full');
  }
});

// ===== EVENT LISTENER NAVIGASI =====

document.querySelectorAll('.nav-item[data-section]').forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    showSection(this.dataset.section);
    if (window.innerWidth <= 768) {
      document.getElementById('sidebar').classList.remove('mobile-open');
    }
  });
});

// Tutup modal bila klik luar
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', function (e) {
    if (e.target === this) this.classList.remove('aktif');
  });
});

// ===== KAWALAN AKSES — PENYELARAS & ADMIN =====

// Kata laluan (dalam projek sebenar, pengesahan dibuat di server)
const KATA_LALUAN_ADMIN = 'kkss@admin2024';
const KATA_LALUAN_PENYELARAS = 'kkss@penyelaras2024';

// Helper — semak sama ada sesi Penyelaras ATAU Admin aktif
function adaAksesTindakan() {
  return sessionStorage.getItem('kkss_admin') === '1' ||
         !!sessionStorage.getItem('kkss_penyelaras');
}

// ----- MOD ADMIN -----

function aktifkanModeAdmin() {
  sessionStorage.setItem('kkss_admin', '1');
  document.getElementById('butangAdminSijil').style.display = 'block';
  document.getElementById('butangCiptaPengumuman').style.display = 'inline-flex';
  document.getElementById('butangTambahKursus').style.display = 'inline-flex';
  document.getElementById('butangTambahPensyarah').style.display = 'inline-flex';
  document.getElementById('badgeAdmin').style.display = 'flex';
  document.getElementById('btnLogKeluarAdmin').style.display = 'block';
  // Sembunyikan ikon penyelaras jika admin dah log masuk
  document.getElementById('ikonPenyelaras').style.display = 'none';
}

function nyahaktifkanModeAdmin() {
  sessionStorage.removeItem('kkss_admin');
  document.getElementById('butangAdminSijil').style.display = 'none';
  document.getElementById('butangCiptaPengumuman').style.display = 'none';
  document.getElementById('butangTambahKursus').style.display = 'none';
  document.getElementById('butangTambahPensyarah').style.display = 'none';
  document.getElementById('badgeAdmin').style.display = 'none';
  document.getElementById('btnLogKeluarAdmin').style.display = 'none';
  document.getElementById('ikonPenyelaras').style.display = 'block';
  // Render semula jadual supaya butang tindakan hilang
  renderKursus(dataKursus);
  renderPengguna(dataPengguna);
}

// ----- MOD PENYELARAS -----

function aktifkanModePenyelaras(unit) {
  sessionStorage.setItem('kkss_penyelaras', unit);
  document.getElementById('butangTambahKursus').style.display = 'inline-flex';
  document.getElementById('butangTambahPensyarah').style.display = 'inline-flex';
  document.getElementById('badgePenyelaras').style.display = 'flex';
  document.getElementById('badgePenyelarasNama').textContent = 'Penyelaras ' + unit;
  document.getElementById('badgePenyelarasUnit').textContent = 'Unit ' + unit + ' — E-Learning';
  document.getElementById('badgePenyelarasAvatar').textContent = unit[0];
  document.getElementById('btnLogKeluarPenyelaras').style.display = 'block';
  document.getElementById('ikonPenyelaras').style.display = 'none';
  // Render semula jadual supaya butang tindakan muncul
  renderKursus(dataKursus);
  renderPengguna(dataPengguna);
}

function nyahaktifkanModePenyelaras() {
  sessionStorage.removeItem('kkss_penyelaras');
  document.getElementById('butangTambahKursus').style.display = 'none';
  document.getElementById('butangTambahPensyarah').style.display = 'none';
  document.getElementById('badgePenyelaras').style.display = 'none';
  document.getElementById('btnLogKeluarPenyelaras').style.display = 'none';
  document.getElementById('ikonPenyelaras').style.display = 'block';
  // Render semula jadual supaya butang tindakan hilang
  renderKursus(dataKursus);
  renderPengguna(dataPengguna);
}

// ----- SEMAK SESI -----

function semakSesi() {
  if (sessionStorage.getItem('kkss_admin') === '1') {
    aktifkanModeAdmin();
  } else if (sessionStorage.getItem('kkss_penyelaras')) {
    aktifkanModePenyelaras(sessionStorage.getItem('kkss_penyelaras'));
  }
}

// ----- SUBMIT LOGIN -----

function submitLoginAdmin(e) {
  e.preventDefault();
  const input = document.getElementById('inputKataLaluan').value;
  const errEl = document.getElementById('errorLoginAdmin');
  if (input === KATA_LALUAN_ADMIN) {
    errEl.style.display = 'none';
    tutupModal('modalLoginAdmin');
    document.getElementById('formLoginAdmin').reset();
    // Jika penyelaras dah login, log keluar dulu
    nyahaktifkanModePenyelaras();
    aktifkanModeAdmin();
  } else {
    errEl.style.display = 'block';
    document.getElementById('inputKataLaluan').value = '';
  }
}

function submitLoginPenyelaras(e) {
  e.preventDefault();
  const unit = document.getElementById('inputUnitPenyelaras').value;
  const input = document.getElementById('inputKataLaluanPenyelaras').value;
  const errEl = document.getElementById('errorLoginPenyelaras');
  if (!unit || input !== KATA_LALUAN_PENYELARAS) {
    errEl.style.display = 'block';
    document.getElementById('inputKataLaluanPenyelaras').value = '';
    return;
  }
  errEl.style.display = 'none';
  tutupModal('modalLoginPenyelaras');
  document.getElementById('formLoginPenyelaras').reset();
  aktifkanModePenyelaras(unit);
}

// Klik logo KK → buka modal login admin
document.getElementById('logoKK').addEventListener('click', function () {
  if (sessionStorage.getItem('kkss_admin') === '1') return;
  document.getElementById('errorLoginAdmin').style.display = 'none';
  document.getElementById('formLoginAdmin').reset();
  bukaModal('modalLoginAdmin');
});

// Klik ikon 👤 → buka modal login penyelaras
document.getElementById('ikonPenyelaras').addEventListener('click', function () {
  if (sessionStorage.getItem('kkss_penyelaras')) return;
  document.getElementById('errorLoginPenyelaras').style.display = 'none';
  document.getElementById('formLoginPenyelaras').reset();
  bukaModal('modalLoginPenyelaras');
});

// Log Keluar Admin
document.getElementById('btnLogKeluarAdmin').addEventListener('click', function (e) {
  e.preventDefault();
  if (confirm('Log keluar dari Mod Admin?')) {
    nyahaktifkanModeAdmin();
  }
});

// Log Keluar Penyelaras
document.getElementById('btnLogKeluarPenyelaras').addEventListener('click', function (e) {
  e.preventDefault();
  if (confirm('Log keluar dari Mod Penyelaras?')) {
    nyahaktifkanModePenyelaras();
  }
});

// ===== JANA SIJIL BAHARU (ADMIN) =====

function kemaskiniNoCadangan() {
  const tahun = new Date().getFullYear();
  const noTerkini = dataSijil.length + 1;
  document.getElementById('janaNoSijil').value = `KKSS-${tahun}-${String(noTerkini).padStart(3, '0')}`;
}

function submitJanaSijil(e) {
  e.preventDefault();
  const nama = document.getElementById('janaNamaPelajar').value.toUpperCase();
  const program = document.getElementById('janaProgram');
  const tarikhRaw = document.getElementById('janaTarikh').value;
  const noSijil = document.getElementById('janaNoSijil').value;

  const tarikhFormat = new Date(tarikhRaw).toLocaleDateString('ms-MY', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  const sijilBaharu = {
    no: noSijil,
    nama: nama,
    kursus: program.options[program.selectedIndex].text,
    tarikh: tarikhFormat,
    status: 'Sah'
  };

  dataSijil.unshift(sijilBaharu);
  renderSijil(dataSijil);
  tutupModal('modalJanaSijil');
  document.getElementById('formJanaSijil').reset();
  kemaskiniNoCadangan();

  // Terus pratonton sijil baharu
  pratononSijil(0);
}

// ===== INIT =====

document.addEventListener('DOMContentLoaded', function () {
  renderKursus(dataKursus);
  renderPengguna(dataPengguna);
  renderPengumuman(dataPengumuman);
  renderForum(dataForum);
  renderSijil(dataSijil);
  renderCartaUtama();
  kemaskiniNoCadangan();
  semakSesi(); // Semak sesi admin jika ada
});