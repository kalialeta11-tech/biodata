# ⚡ Web Portofolio Pribadi: Kalia Leta Al Gumaisha
**Tugas Mata Pelajaran Informatika — SMA Negeri 19 Bandung**

Proyek ini adalah website portofolio pribadi interaktif berbasis web yang dibangun menggunakan **HTML5 semantik, CSS3 murni, dan JavaScript modern (ES6)** dengan mengadopsi tren desain terkini: **Neobrutalism (Neo-Brutalism)**.

---

## 👤 Profil Siswi

| Informasi | Detail |
| :--- | :--- |
| **Nama Lengkap** | Kalia Leta Al Gumaisha |
| **Tempat, Tanggal Lahir** | Bandung, 23 Oktober 2010 |
| **Institusi Sekolah** | SMA Negeri 19 Bandung *(Siswi Aktif)* |
| **Sekolah Sebelumnya** | SMP Negeri 44 Bandung *(Alumni / Lulusan)* |
| **Cita-Cita** | Anggota Paskibraka 🇮🇩 |
| **Hobi** | Mendengarkan Musik *(Music Enthusiast)* 🎧 |
| **Lagu Favorit** | *"The Cure" — Olivia Rodrigo* |
| **Pengalaman Organisasi** | Paskibra (Pasukan Pengibar Bendera) & PMR (Palang Merah Remaja) |

---

## 🎨 Konsep Desain: Neobrutalism

Desain website ini mengusung estetika **Neobrutalism** yang berani, dinamis, dan penuh energi:
- **Garis Tepi Hitam Tebal (*Bold Black Borders*)**: Menggunakan garis batas solid `3px solid #000000` di setiap kartu, tombol, badge, dan avatar.
- **Bayangan Keras Tanpa Blur (*Hard Offset Shadows*)**: Bayangan padat kontras tinggi (`4px 4px 0px #000` s.d. `12px 12px 0px #000`).
- **Efek Gerak Tombol Nyata (*Tactile Click States*)**: Tombol dan kartu bergeser ke bawah saat ditekan (*press effect*).
- **Palet Warna Pop & Kontras**: Perpaduan kuning cerah (*Canary Yellow*), merah berani (*Crimson*), merah muda elektrik (*Electric Pink*), serta biru toska (*Cyan*).
- **Retro Dot Grid Background**: Kanvas latar belakang bintik-bintik matriks retro yang estetik.
- **Running Ticker Marquee Ribbon**: Pita pengumuman berjalan retro di bagian paling atas halaman.

---

## ✨ Fitur-Fitur Utama Website

### 1. 🎵 Pemutar Musik MP3 Asli (Bento Deck & Floating Bar)
- Memutar file lagu asli: `assets/Olivia Rodrigo - the cure (Lyric Video).mp3`.
- **Seeker Bar & Durasi Real-Time**: Slider untuk memilih menit lagu (*scrubbing*) lengkap dengan display menit berjalan (`0:00 / 3:15`).
- **Tombol Play/Pause & Replay**: Kontrol penuh untuk memutar, menjeda, atau mengulang lagu dari awal.
- **Kontrol Volume & Mute**: Slider pengatur volume suara dan tombol bisukan suara.
- **Piringan Hitam Berputar (*Vinyl Disc*)**: Animasi piringan berputar otomatis saat audio diputar.
- **Equalizer Soundbars**: Bar gelombang musik bergerak warna-warni saat audio aktif.
- **Floating Mini-Bar**: Saat lagu diputar dan pengunjung menggulir (*scroll*) halaman ke bawah, bar kontrol mini muncul di pojok kiri bawah layar agar musik tetap bisa diatur tanpa harus kembali ke atas.

### 2. 🪪 Modal Kartu Pelajar Digital (Pop-up ID Card)
- Tombol **"Lihat Kartu Pelajar"** membuka pop-up kartu identitas resmi siswi SMA Negeri 19 Bandung dengan simulasi microchip emas dan barcode digital unik.

### 3. ⏱️ Penghitung Usia Otomatis (JavaScript Dinamis)
- Usia dihitung secara otomatis dari tanggal lahir **23 Oktober 2010** menggunakan objek `Date()` di JavaScript, sehingga informasi usia selalu mutakhir.

### 4. 🌗 Switcher Mode Terang & Gelap (Light / Dark Mode)
- Pengunjung dapat beralih antara tema Neobrutalism Terang (kanvas krem) dan Cyber-Neobrutalism Gelap dengan tombol di navigasi atas. Pilihan tema tersimpan di `localStorage` peramban.

### 5. 📬 Formulir Sapaan / Buku Tamu Interaktif
- Formulir pesan interaktif di bagian bawah yang menyimpan data sapaan ke dalam `localStorage` dan menampilkan notifikasi pop-up hijau (*toast message*) saat pesan terkirim.

---

## 📂 Struktur Berkas Proyek

```
TugasInformatika/
│
├── assets/
│   ├── avatar.jpeg                                      # Foto profil resmi siswi
│   └── Olivia Rodrigo - the cure (Lyric Video).mp3      # Berkas audio lagu favorit
│
├── index.html                                           # Kerangka semantik HTML5 & struktur halaman
├── style.css                                            # Desain Neobrutalism murni & responsif
├── script.js                                            # Logika audio player, umur dinamis, tema, & modal
└── README.md                                            # Catatan dokumentasi proyek
```

---

## 🛠️ Teknologi yang Digunakan

1. **HTML5**: Struktur semantik (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<audio>`).
2. **CSS3**: Vanilla CSS (CSS Custom Properties / Variables, Grid Bento, Flexbox, Keyframe Animations, Transform).
3. **JavaScript (ES6)**: Vanilla JS murni tanpa framework eksternal untuk performa instan dan ringan.
4. **Google Fonts**: Tipografi modern [*Plus Jakarta Sans*](https://fonts.google.com/specimen/Plus+Jakarta+Sans).
5. **Font Awesome 6**: Ikonografi vektor untuk tombol, lencana, dan kontrol audio.

---

## 🚀 Cara Menjalankan Website

1. Pastikan seluruh berkas (`index.html`, `style.css`, `script.js`, serta folder `assets/`) berada dalam satu folder yang sama.
2. Buka aplikasi **File Explorer** di komputer.
3. Masuk ke folder `D:\Kalia\TugasInformatika\`.
4. **Klik dua kali** pada berkas **`index.html`**.
5. Website akan langsung terbuka di browser utama Anda (Google Chrome, Microsoft Edge, Mozilla Firefox, dll.) tanpa memerlukan instalasi server tambahan!

---

## 📝 Hak Cipta & Catatan Penilaian

Dibuat dengan penuh dedikasi dan semangat kreativitas untuk memenuhi **Tugas Mata Pelajaran Informatika** di **SMA Negeri 19 Bandung**.

*&copy; 2026 Kalia Leta Al Gumaisha. All rights reserved.*
