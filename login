<!DOCTYPE html>
<html lang="ms">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Log Masuk | E-Learning KKSS</title>
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
  <style>
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: var(--biru);
    }
    .login-wrapper {
      width: 100%;
      max-width: 420px;
      padding: 16px;
    }
    .login-card {
      background: var(--putih);
      border-radius: 14px;
      padding: 40px 36px;
      box-shadow: 0 12px 40px rgba(0,0,0,0.25);
    }
    .login-logo {
      text-align: center;
      margin-bottom: 28px;
    }
    .login-logo-icon {
      width: 64px; height: 64px;
      background: var(--biru);
      color: var(--kuning);
      border-radius: 14px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      font-weight: 900;
      margin-bottom: 12px;
    }
    .login-logo h1 {
      font-size: 18px;
      font-weight: 800;
      color: var(--biru);
    }
    .login-logo p {
      font-size: 12px;
      color: var(--teks-ringan);
      margin-top: 2px;
    }
    .login-title {
      font-size: 15px;
      font-weight: 700;
      color: var(--teks);
      margin-bottom: 20px;
      text-align: center;
    }
    .role-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 24px;
    }
    .role-card {
      border: 2px solid var(--abu-gelap);
      border-radius: 10px;
      padding: 16px 12px;
      text-align: center;
      cursor: pointer;
      transition: all 0.2s;
    }
    .role-card:hover {
      border-color: var(--biru-cerah);
      background: #f0f5ff;
    }
    .role-card.selected {
      border-color: var(--biru);
      background: #eef3fb;
    }
    .role-card i {
      font-size: 26px;
      color: var(--biru);
      margin-bottom: 8px;
      display: block;
    }
    .role-card span {
      font-size: 13px;
      font-weight: 600;
      color: var(--teks);
      display: block;
    }
    .role-card small {
      font-size: 11px;
      color: var(--teks-ringan);
    }
    .login-error {
      display: none;
      background: #fee2e2;
      color: var(--merah);
      border-radius: 7px;
      padding: 10px 14px;
      font-size: 13px;
      margin-bottom: 16px;
      text-align: center;
    }
    .login-error.aktif { display: block; }
  </style>
</head>
<body>
  <div class="login-wrapper">
    <div class="login-card">
      <div class="login-logo">
        <div class="login-logo-icon">KK</div>
        <h1>Kolej Komuniti Sungai Siput</h1>
        <p>Sistem E-Learning | BIPD, JPPKK</p>
      </div>

      <p class="login-title">Pilih jenis pengguna untuk log masuk</p>

      <div class="role-grid">
        <div class="role-card" id="roleAdmin" onclick="pilihPeranan('admin')">
          <i class="fas fa-user-shield"></i>
          <span>Admin</span>
          <small>Akses penuh sistem</small>
        </div>
        <div class="role-card" id="rolePengguna" onclick="pilihPeranan('pengguna')">
          <i class="fas fa-user-graduate"></i>
          <span>Pelajar / Pensyarah</span>
          <small>Akses terhad</small>
        </div>
      </div>

      <div class="form-group">
        <label>Nama Pengguna / E-mel</label>
        <input type="text" id="inputUser" placeholder="Masukkan nama atau e-mel" />
      </div>
      <div class="form-group">
        <label>Kata Laluan</label>
        <input type="password" id="inputPass" placeholder="Masukkan kata laluan" />
      </div>

      <div class="login-error" id="loginError">
        <i class="fas fa-exclamation-circle"></i> Sila pilih peranan dan isi maklumat log masuk.
      </div>

      <button class="btn btn-primary" style="width:100%; justify-content:center;" onclick="submitLogin()">
        <i class="fas fa-sign-in-alt"></i> Log Masuk
      </button>

      <p style="text-align:center; font-size:11px; color:var(--teks-ringan); margin-top:20px;">
        Sistem E-Learning &copy; 2024 Kolej Komuniti Sungai Siput
      </p>
    </div>
  </div>

  <script>
    let perananDipilih = '';

    function pilihPeranan(peranan) {
      perananDipilih = peranan;
      document.getElementById('roleAdmin').classList.toggle('selected', peranan === 'admin');
      document.getElementById('rolePengguna').classList.toggle('selected', peranan === 'pengguna');
      document.getElementById('loginError').classList.remove('aktif');
    }

    function submitLogin() {
      const user = document.getElementById('inputUser').value.trim();
      const pass = document.getElementById('inputPass').value.trim();
      const errEl = document.getElementById('loginError');

      if (!perananDipilih) {
        errEl.textContent = 'Sila pilih peranan (Admin atau Pelajar/Pensyarah) terlebih dahulu.';
        errEl.classList.add('aktif');
        return;
      }
      if (!user || !pass) {
        errEl.textContent = 'Sila isi nama pengguna dan kata laluan.';
        errEl.classList.add('aktif');
        return;
      }

      // Simpan sesi peranan
      sessionStorage.setItem('kkss_peranan', perananDipilih);
      sessionStorage.setItem('kkss_nama', perananDipilih === 'admin' ? 'Admin KKSS' : user);

      window.location.href = 'index.html';
    }

    // Jika sudah log masuk, terus ke dashboard
    if (sessionStorage.getItem('kkss_peranan')) {
      window.location.href = 'index.html';
    }

    // Tekan Enter untuk submit
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') submitLogin();
    });
  </script>
</body>
</html>
