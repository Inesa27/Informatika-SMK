const XP_PER_CORRECT = 10;
const XP_PER_SLIDE = 4;
const XP_PER_MATERIAL = 20;
const STORAGE_KEY = 'infora-progress-v3';

function q(question, options, answer, explanation) {
  return { question, options, answer, explanation };
}

const materials = [
  {
    id: 'sistem-komputer',
    title: 'Sistem Komputer',
    subtitle: 'Hardware, software, brainware, dan cara komputer mengolah data.',
    badge: 'Materi 1',
    accent: '#2563eb',
    visual: 'monitor',
    image: 'computer',
    slides: [
      slide('Konsep sistem komputer', 'Sistem komputer adalah gabungan perangkat keras, perangkat lunak, dan pengguna yang bekerja sama untuk mengolah data menjadi informasi.', ['Hardware menjalankan fungsi fisik.', 'Software memberi instruksi kerja.', 'Brainware menentukan tujuan penggunaan.'], 'Sistem komputer bekerja baik jika tiga komponen utamanya saling mendukung.'),
      slide('Data, informasi, dan instruksi', 'Data adalah fakta mentah, informasi adalah hasil pengolahan data, sedangkan instruksi adalah perintah yang dijalankan komputer.', ['Data bisa berupa angka, teks, gambar, audio, dan video.', 'Informasi harus akurat dan relevan.', 'Instruksi diproses secara berurutan.'], 'Komputer tidak memahami maksud pengguna, tetapi menjalankan instruksi.'),
      slide('Input, process, output, storage', 'Siklus kerja komputer dimulai dari input, dilanjutkan process, menghasilkan output, dan disimpan melalui storage.', ['Input: keyboard, mouse, kamera, scanner.', 'Process: CPU dan memori.', 'Output: monitor, printer, speaker.'], 'Siklus IPOS muncul pada hampir semua aktivitas komputasi.'),
      slide('CPU, RAM, dan penyimpanan', 'CPU memproses instruksi, RAM menyimpan data sementara, sedangkan SSD atau HDD menyimpan data jangka panjang.', ['CPU menentukan kemampuan pemrosesan.', 'RAM membantu multitasking.', 'SSD mempercepat akses file.'], 'Performa komputer ditentukan oleh keseimbangan komponen.'),
      slide('Perangkat input dan output', 'Perangkat input memasukkan data, sementara perangkat output menampilkan hasil proses kepada pengguna.', ['Touchscreen bisa menjadi input sekaligus output.', 'Printer menghasilkan output fisik.', 'Mikrofon memasukkan data suara.'], 'Pilih perangkat sesuai kebutuhan pekerjaan.'),
      slide('Perawatan sistem komputer', 'Perawatan komputer meliputi pembersihan file, pembaruan sistem, pengaturan penyimpanan, dan penggunaan perangkat secara aman.', ['Tutup aplikasi yang tidak dipakai.', 'Update sistem secara berkala.', 'Simpan data penting dengan backup.'], 'Perawatan rutin membuat komputer lebih awet dan stabil.'),
    ],
    quiz: [
      q('Gabungan hardware, software, dan brainware disebut...', ['Sistem komputer', 'Folder komputer', 'Jaringan sosial', 'File dokumen'], 0, 'Sistem komputer terdiri dari perangkat keras, perangkat lunak, dan pengguna.'),
      q('Bagian komputer yang bisa disentuh secara fisik adalah...', ['Software', 'Hardware', 'Brainware', 'Cloud'], 1, 'Hardware adalah komponen fisik seperti monitor, CPU, dan keyboard.'),
      q('CPU berfungsi untuk...', ['Menyimpan file selamanya', 'Memproses instruksi', 'Mencetak dokumen', 'Menampilkan suara'], 1, 'CPU memproses instruksi dan mengendalikan operasi utama komputer.'),
      q('RAM bersifat...', ['Sementara', 'Selalu permanen', 'Tidak dipakai aplikasi', 'Hanya untuk printer'], 0, 'RAM menyimpan data sementara saat program berjalan.'),
      q('Contoh perangkat input adalah...', ['Monitor', 'Keyboard', 'Speaker', 'Printer'], 1, 'Keyboard digunakan untuk memasukkan teks dan perintah.'),
      q('Contoh perangkat output adalah...', ['Mouse', 'Scanner', 'Monitor', 'Touchpad'], 2, 'Monitor menampilkan hasil proses berupa visual.'),
      q('Siklus IPOS terdiri dari...', ['Input, process, output, storage', 'Internet, printer, output, scan', 'Install, power, open, save', 'Input, password, online, system'], 0, 'IPOS adalah siklus input, process, output, storage.'),
      q('Data yang sudah diolah dan bermakna disebut...', ['Informasi', 'Cache', 'Driver', 'Port'], 0, 'Informasi adalah data yang sudah diproses sehingga berguna.'),
      q('SSD umumnya unggul karena...', ['Akses data lebih cepat', 'Tidak butuh listrik sama sekali', 'Selalu gratis', 'Menghapus virus otomatis'], 0, 'SSD menggunakan memori flash sehingga akses data biasanya lebih cepat.'),
      q('Kebiasaan perawatan komputer yang baik adalah...', ['Update sistem dan backup data', 'Menutup ventilasi', 'Mengunduh aplikasi sembarang', 'Membiarkan storage penuh'], 0, 'Update dan backup membantu komputer tetap aman dan data tetap terlindungi.'),
    ],
  },
  {
    id: 'perakitan-k3lh',
    title: 'Perakitan Komputer dan K3LH',
    subtitle: 'Komponen PC, prosedur perakitan, keselamatan kerja, dan troubleshooting awal.',
    badge: 'Materi 2',
    accent: '#e11d48',
    visual: 'cpu',
    image: 'hardware',
    slides: [
      slide('Mengenal komponen PC', 'Perakitan komputer membutuhkan pemahaman motherboard, CPU, RAM, storage, power supply, casing, dan perangkat pendingin.', ['Motherboard menjadi papan utama.', 'PSU memasok daya.', 'Cooling menjaga suhu komponen.'], 'Kenali fungsi komponen sebelum mulai merakit.'),
      slide('K3LH saat praktik', 'K3LH adalah keselamatan, kesehatan kerja, dan lingkungan hidup yang wajib diperhatikan saat praktik perakitan.', ['Matikan sumber listrik.', 'Gunakan gelang antistatis bila ada.', 'Rapikan kabel dan area kerja.'], 'Keselamatan lebih penting daripada kecepatan merakit.'),
      slide('Persiapan alat', 'Sebelum merakit, siapkan obeng, baut, thermal paste, alas kerja, wadah kecil, dan dokumentasi spesifikasi komponen.', ['Cek kompatibilitas motherboard dan CPU.', 'Cek kapasitas PSU.', 'Baca manual motherboard.'], 'Persiapan mengurangi risiko salah pasang.'),
      slide('Langkah umum perakitan', 'Urutan umum perakitan dimulai dari memasang CPU, RAM, storage, motherboard ke casing, PSU, kabel, lalu pengujian.', ['Pasang CPU dengan posisi benar.', 'Tekan RAM sampai terkunci.', 'Hubungkan front panel sesuai manual.'], 'Ikuti manual karena tiap motherboard bisa berbeda.'),
      slide('POST dan BIOS/UEFI', 'Setelah dirakit, komputer menjalankan POST untuk mengecek komponen utama, kemudian pengguna dapat masuk BIOS atau UEFI.', ['POST gagal bisa ditandai bunyi beep.', 'BIOS/UEFI mengatur boot priority.', 'Cek apakah storage terdeteksi.'], 'POST adalah tanda awal komputer siap digunakan.'),
      slide('Troubleshooting awal', 'Jika komputer tidak menyala, periksa kabel power, konektor PSU, RAM, tombol power casing, dan pemasangan CPU.', ['Lepas pasang RAM dengan hati-hati.', 'Pastikan kabel 24-pin dan CPU power terpasang.', 'Cek indikator motherboard.'], 'Troubleshooting dilakukan bertahap dari penyebab paling sederhana.'),
    ],
    quiz: [
      q('K3LH dalam praktik komputer berkaitan dengan...', ['Keselamatan kerja dan lingkungan', 'Nama aplikasi desain', 'Jenis kabel audio', 'Kode warna monitor'], 0, 'K3LH menekankan keselamatan, kesehatan kerja, dan lingkungan hidup.'),
      q('Motherboard berfungsi sebagai...', ['Papan utama penghubung komponen', 'Alat mencetak kertas', 'Layar utama', 'Aplikasi pengolah kata'], 0, 'Motherboard menjadi tempat komponen utama saling terhubung.'),
      q('PSU bertugas untuk...', ['Memasok daya listrik ke komponen', 'Menyimpan file', 'Mengatur wallpaper', 'Mengetik perintah'], 0, 'Power supply mengubah dan menyalurkan daya ke komponen PC.'),
      q('Sebelum merakit komputer, sumber listrik sebaiknya...', ['Dimatikan', 'Diperbesar', 'Dibiarkan terbuka', 'Dihubungkan ke air'], 0, 'Mematikan listrik mengurangi risiko sengatan dan kerusakan.'),
      q('Thermal paste digunakan pada...', ['CPU dan heatsink', 'Keyboard dan mouse', 'Monitor dan speaker', 'Printer dan kertas'], 0, 'Thermal paste membantu perpindahan panas dari CPU ke heatsink.'),
      q('POST dilakukan untuk...', ['Mengecek komponen saat komputer menyala', 'Mencetak poster', 'Menghapus semua file', 'Membuat email baru'], 0, 'POST memeriksa komponen dasar saat proses awal boot.'),
      q('BIOS/UEFI dapat digunakan untuk mengatur...', ['Boot priority', 'Warna meja', 'Nama guru', 'Ukuran ruangan'], 0, 'Boot priority menentukan perangkat mana yang dipakai untuk boot.'),
      q('RAM yang tidak terpasang benar dapat menyebabkan...', ['Komputer gagal boot', 'Printer otomatis penuh', 'Monitor berubah jadi scanner', 'Mouse menjadi speaker'], 0, 'RAM longgar sering membuat komputer tidak tampil atau gagal POST.'),
      q('Saat memasang CPU, hal yang perlu diperhatikan adalah...', ['Posisi tanda segitiga/pin', 'Warna wallpaper', 'Nama folder', 'Volume speaker'], 0, 'CPU harus dipasang sesuai orientasi soket.'),
      q('Troubleshooting yang baik dilakukan secara...', ['Bertahap dan sistematis', 'Acak tanpa catatan', 'Dengan mencabut semua komponen paksa', 'Sambil menyalakan air'], 0, 'Pengecekan bertahap membantu menemukan penyebab masalah dengan aman.'),
    ],
  },
  {
    id: 'sistem-operasi',
    title: 'Sistem Operasi dan Manajemen File',
    subtitle: 'Fungsi OS, instalasi dasar, pengelolaan file, backup, dan utilitas sistem.',
    badge: 'Materi 3',
    accent: '#16a34a',
    visual: 'layers',
    image: 'os',
    slides: [
      slide('Fungsi sistem operasi', 'Sistem operasi mengelola hardware, memori, proses, file, keamanan, dan antarmuka pengguna.', ['Menjadi penghubung aplikasi dan hardware.', 'Mengatur proses yang berjalan.', 'Menyediakan manajemen file.'], 'Tanpa OS, komputer sulit digunakan oleh pengguna umum.'),
      slide('Jenis sistem operasi', 'Contoh sistem operasi adalah Windows, Linux, macOS, Android, dan iOS. Setiap OS memiliki target perangkat dan kebutuhan berbeda.', ['Windows banyak dipakai di sekolah/kantor.', 'Linux kuat untuk server dan praktik jaringan.', 'Android digunakan di perangkat mobile.'], 'Pilih OS berdasarkan kebutuhan dan kompatibilitas.'),
      slide('Instalasi dan driver', 'Setelah OS dipasang, driver diperlukan agar perangkat seperti audio, Wi-Fi, printer, dan kartu grafis dikenali dengan baik.', ['Driver berasal dari vendor resmi.', 'Update driver saat diperlukan.', 'Hindari driver dari sumber tidak jelas.'], 'Driver membantu OS berkomunikasi dengan hardware.'),
      slide('File dan folder', 'File menyimpan data, folder mengelompokkan file. Struktur folder yang rapi membuat pekerjaan mudah dicari dan diamankan.', ['Gunakan nama file jelas.', 'Pisahkan tugas berdasarkan mata pelajaran.', 'Hindari duplikasi file tidak perlu.'], 'Manajemen file adalah keterampilan digital dasar.'),
      slide('Backup dan restore', 'Backup adalah salinan cadangan data. Restore adalah proses mengembalikan data dari cadangan saat file utama hilang atau rusak.', ['Backup bisa ke drive eksternal.', 'Cloud dapat menjadi pilihan cadangan.', 'Jadwalkan backup untuk data penting.'], 'Data penting sebaiknya punya lebih dari satu salinan.'),
      slide('Utilitas sistem', 'Task Manager, Disk Cleanup, antivirus, dan update manager membantu memantau serta merawat sistem operasi.', ['Cek aplikasi yang memakai banyak RAM.', 'Bersihkan file sementara.', 'Update keamanan secara berkala.'], 'Utilitas sistem membantu komputer tetap stabil.'),
    ],
    quiz: [
      q('Sistem operasi berfungsi untuk...', ['Mengelola hardware dan aplikasi', 'Menghias casing', 'Mengganti kursi', 'Membuat kabel'], 0, 'OS mengelola sumber daya komputer dan menyediakan antarmuka.'),
      q('Contoh sistem operasi adalah...', ['Windows', 'Keyboard', 'Monitor', 'RJ45'], 0, 'Windows adalah salah satu sistem operasi.'),
      q('Driver dibutuhkan agar...', ['OS mengenali perangkat', 'File selalu hilang', 'Meja menjadi rapi', 'Printer jadi monitor'], 0, 'Driver menghubungkan OS dengan hardware.'),
      q('Folder digunakan untuk...', ['Mengelompokkan file', 'Memperbesar layar', 'Mengganti CPU', 'Mengisi tinta'], 0, 'Folder membantu pengelompokan dan pencarian file.'),
      q('Backup berarti...', ['Membuat salinan cadangan data', 'Menghapus sistem', 'Menutup aplikasi selamanya', 'Mengganti password dengan nama'], 0, 'Backup melindungi data dari kehilangan.'),
      q('Restore data adalah...', ['Mengembalikan data dari cadangan', 'Membuang file penting', 'Mengganti keyboard', 'Membuat casing'], 0, 'Restore mengembalikan data dari backup.'),
      q('Task Manager dapat membantu melihat...', ['Aplikasi dan penggunaan resource', 'Warna sepatu', 'Nama ruangan', 'Jenis kertas'], 0, 'Task Manager menampilkan proses, CPU, RAM, dan lainnya.'),
      q('Update OS penting karena...', ['Memperbaiki celah keamanan', 'Selalu menghapus file', 'Membuat komputer basah', 'Mengganti meja'], 0, 'Update sering berisi perbaikan keamanan dan stabilitas.'),
      q('Nama file yang baik sebaiknya...', ['Jelas dan mudah dicari', 'Acak semua', 'Kosong saja', 'Sama semua'], 0, 'Nama file jelas memudahkan pencarian.'),
      q('Linux banyak digunakan untuk...', ['Server dan praktik jaringan', 'Menghapus internet', 'Mengganti monitor', 'Membuka casing otomatis'], 0, 'Linux sering dipakai di server dan pembelajaran jaringan.'),
    ],
  },
  {
    id: 'jaringan-dasar',
    title: 'Jaringan Komputer Dasar',
    subtitle: 'LAN, perangkat jaringan, IP address, topologi, dan layanan jaringan.',
    badge: 'Materi 4',
    accent: '#f59e0b',
    visual: 'wifi',
    image: 'network',
    slides: [
      slide('Konsep jaringan komputer', 'Jaringan komputer menghubungkan perangkat agar dapat bertukar data, berbagi perangkat, dan menggunakan layanan bersama.', ['LAN untuk area lokal.', 'WAN untuk area luas.', 'Internet adalah jaringan global.'], 'Jaringan membuat perangkat bisa saling berkomunikasi.'),
      slide('Perangkat jaringan', 'Router, switch, access point, modem, NIC, dan kabel UTP memiliki peran berbeda dalam jaringan.', ['Switch menghubungkan perangkat dalam LAN.', 'Router menghubungkan jaringan berbeda.', 'Access point menyediakan Wi-Fi.'], 'Perangkat jaringan dipilih sesuai kebutuhan koneksi.'),
      slide('Alamat IP', 'IP address adalah alamat logis perangkat di jaringan. IP membantu perangkat saling menemukan dan mengirim data.', ['IPv4 umum ditulis seperti 192.168.1.10.', 'Subnet membagi jaringan.', 'Gateway mengarah ke jaringan lain.'], 'IP address mirip alamat rumah untuk perangkat.'),
      slide('Topologi jaringan', 'Topologi menggambarkan pola hubungan antar perangkat, misalnya star, bus, ring, mesh, dan tree.', ['Topologi star umum di lab sekolah.', 'Topologi mesh punya banyak jalur.', 'Topologi memengaruhi biaya dan keandalan.'], 'Topologi membantu merancang jaringan yang rapi.'),
      slide('Layanan jaringan', 'Layanan jaringan mencakup DHCP, DNS, file sharing, print sharing, web server, dan remote access.', ['DHCP memberi alamat IP otomatis.', 'DNS menerjemahkan domain ke IP.', 'File sharing memudahkan berbagi dokumen.'], 'Layanan jaringan membuat koneksi lebih praktis.'),
      slide('Troubleshooting jaringan', 'Pengecekan jaringan dimulai dari kabel, Wi-Fi, IP address, gateway, DNS, lalu koneksi ke server atau internet.', ['Gunakan ping untuk menguji koneksi.', 'Cek indikator lampu port.', 'Pastikan IP tidak bentrok.'], 'Troubleshooting jaringan dilakukan dari lapisan paling dasar.'),
    ],
    quiz: [
      q('LAN digunakan untuk jaringan...', ['Area lokal', 'Antar planet', 'Tanpa perangkat', 'Hanya suara'], 0, 'LAN mencakup area lokal seperti lab atau rumah.'),
      q('Router berfungsi untuk...', ['Menghubungkan jaringan berbeda', 'Mencetak kertas', 'Menambah tinta', 'Mengetik dokumen'], 0, 'Router meneruskan paket antar jaringan.'),
      q('Switch digunakan untuk...', ['Menghubungkan perangkat dalam LAN', 'Menghapus file', 'Mengganti monitor', 'Membuat email'], 0, 'Switch menghubungkan banyak perangkat dalam jaringan lokal.'),
      q('Access point menyediakan...', ['Koneksi Wi-Fi', 'Kertas cetak', 'Tinta printer', 'Keyboard virtual'], 0, 'Access point menyediakan akses nirkabel.'),
      q('DNS berfungsi untuk...', ['Menerjemahkan domain ke IP', 'Mencetak file', 'Mengganti casing', 'Menghapus RAM'], 0, 'DNS membantu nama domain diarahkan ke alamat IP.'),
      q('DHCP berguna untuk...', ['Memberi IP otomatis', 'Menghapus OS', 'Mematikan monitor', 'Menyalakan printer'], 0, 'DHCP membagikan konfigurasi IP otomatis.'),
      q('Topologi star biasanya menggunakan pusat berupa...', ['Switch', 'Printer', 'Keyboard', 'Scanner'], 0, 'Topologi star menghubungkan node ke perangkat pusat seperti switch.'),
      q('Perintah untuk menguji koneksi dasar adalah...', ['ping', 'paint', 'print', 'paste'], 0, 'Ping digunakan untuk menguji respons jaringan.'),
      q('Gateway digunakan untuk...', ['Akses ke jaringan lain', 'Mengubah warna kabel', 'Menyalin keyboard', 'Mencetak layar'], 0, 'Gateway menjadi pintu keluar ke jaringan lain.'),
      q('IP bentrok terjadi saat...', ['Dua perangkat memakai IP sama', 'Kabel berwarna sama', 'Monitor terlalu terang', 'Printer kehabisan kertas'], 0, 'IP yang sama pada dua perangkat dapat menyebabkan gangguan koneksi.'),
    ],
  },
  {
    id: 'internet-cloud',
    title: 'Internet, Cloud, dan Kolaborasi',
    subtitle: 'Pemanfaatan web, email, cloud storage, kolaborasi, dan literasi informasi.',
    badge: 'Materi 5',
    accent: '#0891b2',
    visual: 'cloud',
    image: 'cloud',
    slides: [
      slide('Internet sebagai sumber belajar', 'Internet menyediakan informasi, kelas daring, dokumentasi, video pembelajaran, forum diskusi, dan referensi praktik.', ['Gunakan kata kunci yang spesifik.', 'Bandingkan beberapa sumber.', 'Catat sumber referensi.'], 'Internet kuat jika dipakai dengan literasi informasi.'),
      slide('Browser dan mesin pencari', 'Browser membuka halaman web, sedangkan mesin pencari membantu menemukan informasi berdasarkan kata kunci.', ['Contoh browser: Chrome, Edge, Firefox.', 'Gunakan operator pencarian sederhana.', 'Periksa tanggal dan kredibilitas sumber.'], 'Tidak semua hasil pencarian otomatis benar.'),
      slide('Email profesional', 'Email digunakan untuk komunikasi resmi, mengirim tugas, membuat akun, dan menerima notifikasi layanan.', ['Gunakan subjek yang jelas.', 'Tulis salam dan isi singkat.', 'Lampirkan file sesuai kebutuhan.'], 'Email yang rapi mencerminkan etika komunikasi digital.'),
      slide('Cloud storage', 'Cloud storage menyimpan file di server internet sehingga dapat diakses dari berbagai perangkat dan dibagikan kepada orang lain.', ['Atur izin akses file.', 'Gunakan folder yang rapi.', 'Backup file penting.'], 'Cloud memudahkan kolaborasi jika izin akses diatur benar.'),
      slide('Kolaborasi daring', 'Dokumen kolaboratif memungkinkan beberapa pengguna mengedit, memberi komentar, dan melihat perubahan secara real-time.', ['Gunakan komentar untuk diskusi.', 'Jangan menghapus pekerjaan teman sembarang.', 'Gunakan riwayat versi.'], 'Kolaborasi butuh teknis dan etika kerja sama.'),
      slide('Literasi informasi', 'Literasi informasi adalah kemampuan mencari, menilai, menggunakan, dan membagikan informasi secara bertanggung jawab.', ['Cek penulis atau lembaga.', 'Waspadai hoaks dan clickbait.', 'Gunakan sumber primer saat mungkin.'], 'Informasi benar membantu keputusan yang benar.'),
    ],
    quiz: [
      q('Cloud storage berguna untuk...', ['Menyimpan dan berbagi file online', 'Mendinginkan CPU', 'Mengganti kabel', 'Membuat casing'], 0, 'Cloud storage menyimpan file di server internet.'),
      q('Subjek email sebaiknya...', ['Jelas dan sesuai isi', 'Kosong selalu', 'Berisi simbol acak', 'Terlalu panjang tanpa arti'], 0, 'Subjek membantu penerima memahami tujuan email.'),
      q('Browser digunakan untuk...', ['Membuka halaman web', 'Memasang RAM', 'Mencetak casing', 'Mengecas baterai'], 0, 'Browser adalah aplikasi untuk mengakses web.'),
      q('Saat mencari informasi, sebaiknya...', ['Memeriksa kredibilitas sumber', 'Percaya judul saja', 'Menyalin tanpa baca', 'Mengabaikan tanggal'], 0, 'Sumber perlu diperiksa agar informasi valid.'),
      q('Izin akses pada cloud perlu diatur agar...', ['File tidak sembarang diakses orang lain', 'Keyboard lebih cepat', 'Monitor mati', 'RAM hilang'], 0, 'Izin akses melindungi privasi dan keamanan file.'),
      q('Kolaborasi real-time berarti...', ['Beberapa pengguna dapat bekerja bersamaan', 'File hanya bisa dibuka sendiri', 'Internet dimatikan', 'Dokumen tidak bisa diedit'], 0, 'Real-time memungkinkan perubahan terlihat langsung.'),
      q('Riwayat versi berguna untuk...', ['Melihat dan mengembalikan perubahan', 'Membuang laptop', 'Mengubah kabel', 'Menghapus semua akun'], 0, 'Version history membantu melacak perubahan dokumen.'),
      q('Contoh komunikasi resmi digital adalah...', ['Email tugas ke guru', 'Komentar spam', 'Menyebar hoaks', 'Mengirim password'], 0, 'Email dapat digunakan untuk komunikasi resmi.'),
      q('Clickbait adalah...', ['Judul yang memancing klik berlebihan', 'Jenis RAM', 'Kabel internet', 'Nama printer'], 0, 'Clickbait sering memakai judul bombastis yang belum tentu akurat.'),
      q('Literasi informasi membuat pengguna mampu...', ['Menilai kebenaran informasi', 'Menghapus hardware', 'Mengganti listrik', 'Membuat printer jadi router'], 0, 'Literasi informasi membantu menilai dan memakai informasi dengan benar.'),
    ],
  },
  {
    id: 'algoritma-pemrograman',
    title: 'Algoritma dan Pemrograman Dasar',
    subtitle: 'Logika, flowchart, pseudocode, variabel, percabangan, dan perulangan.',
    badge: 'Materi 6',
    accent: '#7c3aed',
    visual: 'code',
    image: 'code',
    slides: [
      slide('Apa itu algoritma?', 'Algoritma adalah langkah-langkah logis dan terurut untuk menyelesaikan masalah.', ['Langkah harus jelas.', 'Urutan memengaruhi hasil.', 'Algoritma bisa ditulis sebelum coding.'], 'Program yang baik dimulai dari algoritma yang jelas.'),
      slide('Flowchart dan pseudocode', 'Flowchart menggambarkan alur dengan simbol, sedangkan pseudocode menulis langkah seperti kode sederhana.', ['Flowchart cocok untuk visual.', 'Pseudocode cocok untuk logika teks.', 'Keduanya membantu sebelum coding.'], 'Rancangan mengurangi kesalahan saat membuat program.'),
      slide('Variabel dan tipe data', 'Variabel menyimpan nilai, sementara tipe data menentukan jenis nilai seperti angka, teks, boolean, atau daftar.', ['Integer untuk bilangan bulat.', 'String untuk teks.', 'Boolean untuk benar/salah.'], 'Pilih tipe data sesuai jenis informasi.'),
      slide('Input, proses, output program', 'Program biasanya menerima input, memproses data, lalu menghasilkan output.', ['Input bisa dari keyboard atau file.', 'Proses berisi perhitungan/logika.', 'Output bisa teks, grafik, atau file.'], 'Konsep IPO juga berlaku pada pemrograman.'),
      slide('Percabangan', 'Percabangan menjalankan instruksi berbeda berdasarkan kondisi, misalnya if, else if, dan else.', ['Kondisi menghasilkan true atau false.', 'Percabangan membantu pengambilan keputusan.', 'Urutan kondisi perlu diperhatikan.'], 'Percabangan membuat program responsif terhadap kondisi.'),
      slide('Perulangan', 'Perulangan menjalankan instruksi berulang selama kondisi terpenuhi atau sesuai jumlah tertentu.', ['For cocok untuk jumlah diketahui.', 'While cocok untuk kondisi tertentu.', 'Hindari infinite loop.'], 'Perulangan mengurangi kode berulang.'),
    ],
    quiz: [
      q('Algoritma adalah...', ['Langkah logis menyelesaikan masalah', 'Jenis monitor', 'Nama kabel', 'Ukuran casing'], 0, 'Algoritma berisi urutan langkah yang jelas.'),
      q('Flowchart menggunakan...', ['Simbol visual', 'Baut casing', 'Tinta printer', 'Kabel UTP'], 0, 'Flowchart menggambarkan alur dengan simbol.'),
      q('Pseudocode adalah...', ['Penulisan logika mirip kode sederhana', 'Foto komputer', 'Jenis printer', 'Alamat email'], 0, 'Pseudocode membantu merancang program sebelum coding.'),
      q('Variabel digunakan untuk...', ['Menyimpan nilai', 'Membersihkan layar', 'Mencetak casing', 'Memotong kabel'], 0, 'Variabel menyimpan data dalam program.'),
      q('Tipe data string digunakan untuk...', ['Teks', 'Kipas', 'Kabel', 'Baut'], 0, 'String menyimpan data berbentuk teks.'),
      q('Boolean memiliki nilai...', ['True atau false', 'Merah atau biru saja', 'Keyboard atau mouse', 'Folder atau file'], 0, 'Boolean menyatakan benar atau salah.'),
      q('Percabangan digunakan untuk...', ['Mengambil keputusan berdasarkan kondisi', 'Mendinginkan CPU', 'Menambah tinta', 'Mengubah casing'], 0, 'If/else menjalankan aksi berbeda berdasarkan kondisi.'),
      q('Perulangan digunakan untuk...', ['Menjalankan instruksi berulang', 'Menghapus OS', 'Mengganti monitor', 'Membuat kabel'], 0, 'Loop mengulang instruksi.'),
      q('Infinite loop adalah...', ['Perulangan yang tidak berhenti', 'File gambar', 'Jenis scanner', 'Alamat IP'], 0, 'Infinite loop terjadi saat kondisi berhenti tidak pernah tercapai.'),
      q('Konsep IPO dalam program adalah...', ['Input, process, output', 'Internet, printer, online', 'Install, password, open', 'Image, port, object'], 0, 'Program menerima input, memproses, lalu memberi output.'),
    ],
  },
  {
    id: 'basis-data-sql',
    title: 'Basis Data dan SQL',
    subtitle: 'Tabel, record, field, relasi, query, dan penggunaan database sederhana.',
    badge: 'Materi 7',
    accent: '#0f766e',
    visual: 'database',
    image: 'database',
    slides: [
      slide('Konsep basis data', 'Basis data adalah kumpulan data terstruktur yang disimpan agar mudah diakses, dikelola, dan diperbarui.', ['Data disimpan dalam tabel.', 'DBMS mengelola database.', 'Database membantu aplikasi menyimpan data.'], 'Database membuat data lebih tertata daripada file acak.'),
      slide('Tabel, field, dan record', 'Tabel berisi data sejenis, field adalah kolom, dan record adalah baris data.', ['Field contoh: nama, email, kelas.', 'Record contoh: satu data siswa.', 'Tabel perlu struktur yang jelas.'], 'Struktur tabel menentukan kualitas data.'),
      slide('Primary key', 'Primary key adalah identitas unik untuk setiap record, misalnya id siswa atau kode barang.', ['Tidak boleh duplikat.', 'Memudahkan pencarian data.', 'Sering dipakai untuk relasi.'], 'Primary key menjaga data tetap unik.'),
      slide('Relasi antar tabel', 'Relasi menghubungkan data antar tabel, misalnya siswa dengan nilai, atau pengguna dengan progres.', ['One-to-many sering digunakan.', 'Foreign key menunjuk ke tabel lain.', 'Relasi mengurangi duplikasi.'], 'Relasi membuat database lebih efisien.'),
      slide('Perintah SQL dasar', 'SQL digunakan untuk membuat, membaca, memperbarui, dan menghapus data.', ['SELECT untuk membaca data.', 'INSERT untuk menambah data.', 'UPDATE dan DELETE untuk mengubah/menghapus.'], 'SQL adalah bahasa utama untuk database relasional.'),
      slide('Database di aplikasi web', 'Aplikasi web memakai database untuk menyimpan akun, progres, kuis, transaksi, komentar, dan pengaturan pengguna.', ['Server menerima permintaan.', 'Database menyimpan data.', 'Frontend menampilkan hasil.'], 'Database membuat aplikasi tidak hanya statis.'),
    ],
    quiz: [
      q('Basis data adalah...', ['Kumpulan data terstruktur', 'Jenis mouse', 'Nama monitor', 'Kabel power'], 0, 'Database menyimpan data secara terstruktur.'),
      q('Field dalam tabel berarti...', ['Kolom data', 'Baris data', 'Warna casing', 'Jenis layar'], 0, 'Field adalah kolom seperti nama atau email.'),
      q('Record berarti...', ['Satu baris data', 'Satu kabel', 'Satu keyboard', 'Satu printer'], 0, 'Record adalah satu entri/baris dalam tabel.'),
      q('Primary key harus...', ['Unik', 'Selalu kosong', 'Sama semua', 'Berisi gambar'], 0, 'Primary key membedakan setiap record.'),
      q('Foreign key digunakan untuk...', ['Menghubungkan tabel', 'Mematikan monitor', 'Mengubah wallpaper', 'Membersihkan file'], 0, 'Foreign key menunjuk primary key tabel lain.'),
      q('Perintah SQL untuk membaca data adalah...', ['SELECT', 'INSERT', 'UPDATE', 'DELETE'], 0, 'SELECT digunakan untuk mengambil/membaca data.'),
      q('Perintah SQL untuk menambah data adalah...', ['INSERT', 'SELECT', 'DROP', 'PRINT'], 0, 'INSERT menambahkan record baru.'),
      q('Perintah SQL untuk memperbarui data adalah...', ['UPDATE', 'OPEN', 'RUN', 'STYLE'], 0, 'UPDATE mengubah data yang sudah ada.'),
      q('DBMS adalah...', ['Sistem pengelola database', 'Jenis kabel', 'Program menggambar saja', 'Nama printer'], 0, 'DBMS mengelola database.'),
      q('Database membuat aplikasi web bisa...', ['Menyimpan akun dan progres', 'Berjalan tanpa listrik', 'Mengganti hardware otomatis', 'Selalu offline tanpa data'], 0, 'Database menyimpan data aplikasi seperti akun dan progres.'),
    ],
  },
  {
    id: 'keamanan-etika',
    title: 'Keamanan Digital dan Etika Profesi',
    subtitle: 'Password, phishing, malware, privasi, hak cipta, dan etika bekerja di bidang TI.',
    badge: 'Materi 8',
    accent: '#dc2626',
    visual: 'shield',
    image: 'security',
    slides: [
      slide('Keamanan akun', 'Akun digital perlu dilindungi dengan password kuat, autentikasi dua faktor, dan kebiasaan login yang aman.', ['Gunakan password panjang dan unik.', 'Aktifkan 2FA jika tersedia.', 'Logout dari perangkat umum.'], 'Akun yang aman melindungi data pribadi.'),
      slide('Phishing dan rekayasa sosial', 'Phishing adalah upaya menipu pengguna agar memberikan password, OTP, atau data sensitif melalui pesan palsu.', ['Periksa alamat website.', 'Jangan kirim OTP ke siapa pun.', 'Waspadai pesan mendesak.'], 'Berpikir sebelum klik dapat mencegah banyak serangan.'),
      slide('Malware', 'Malware adalah perangkat lunak berbahaya yang dapat mencuri data, merusak sistem, atau mengganggu kerja komputer.', ['Unduh aplikasi dari sumber resmi.', 'Update antivirus jika digunakan.', 'Hindari file mencurigakan.'], 'Pencegahan malware dimulai dari sumber aplikasi yang aman.'),
      slide('Privasi digital', 'Privasi digital berkaitan dengan data pribadi, izin aplikasi, lokasi, kamera, mikrofon, dan jejak aktivitas online.', ['Atur izin aplikasi.', 'Jangan unggah data sensitif sembarang.', 'Gunakan pengaturan privasi akun.'], 'Data pribadi punya nilai dan perlu dijaga.'),
      slide('Hak cipta dan lisensi', 'Karya digital seperti gambar, musik, video, kode, dan tulisan memiliki hak cipta. Pengguna harus memperhatikan izin penggunaan.', ['Cantumkan sumber jika diperlukan.', 'Gunakan aset berlisensi bebas saat tugas.', 'Jangan mengklaim karya orang lain.'], 'Etika digital menghargai karya pembuat.'),
      slide('Etika profesi TI', 'Bidang TI membutuhkan tanggung jawab, kerahasiaan data, komunikasi baik, dokumentasi, dan tidak menyalahgunakan kemampuan teknis.', ['Jaga data pengguna.', 'Laporkan celah keamanan secara bertanggung jawab.', 'Kerja tim dan dokumentasi penting.'], 'Kemampuan teknis harus disertai etika.'),
    ],
    quiz: [
      q('Password yang baik sebaiknya...', ['Panjang, unik, dan sulit ditebak', 'Nama sendiri saja', 'Sama untuk semua akun', 'Dibagikan ke teman'], 0, 'Password kuat mengurangi risiko pembobolan.'),
      q('2FA berguna untuk...', ['Menambah lapisan keamanan login', 'Menghapus printer', 'Mengubah casing', 'Mematikan internet'], 0, '2FA membutuhkan verifikasi tambahan.'),
      q('Phishing bertujuan untuk...', ['Menipu pengguna agar memberi data sensitif', 'Memperbaiki RAM', 'Mengatur font', 'Mencetak gambar'], 0, 'Phishing mencuri password, OTP, atau data penting.'),
      q('OTP sebaiknya...', ['Tidak dibagikan kepada siapa pun', 'Dikirim ke orang asing', 'Diunggah ke komentar', 'Ditulis di profil publik'], 0, 'OTP adalah kode rahasia.'),
      q('Malware adalah...', ['Software berbahaya', 'Jenis monitor', 'Kabel jaringan', 'Nama folder'], 0, 'Malware dapat merusak atau mencuri data.'),
      q('Aplikasi paling aman diunduh dari...', ['Sumber resmi', 'Link acak', 'Komentar anonim', 'File tidak dikenal'], 0, 'Sumber resmi mengurangi risiko malware.'),
      q('Privasi digital berkaitan dengan...', ['Perlindungan data pribadi', 'Ukuran meja', 'Warna casing', 'Jumlah baut'], 0, 'Privasi menjaga data pribadi dan aktivitas digital.'),
      q('Hak cipta mengatur...', ['Penggunaan karya orang lain', 'Kecepatan kipas', 'Ukuran RAM', 'Bentuk monitor'], 0, 'Hak cipta melindungi karya digital.'),
      q('Etika profesi TI menuntut kita untuk...', ['Menjaga data pengguna', 'Membocorkan password', 'Menghapus sistem tanpa izin', 'Menyebar data pribadi'], 0, 'Profesional TI harus menjaga kerahasiaan dan keamanan data.'),
      q('Saat menemukan celah keamanan, sebaiknya...', ['Melaporkan secara bertanggung jawab', 'Menyebarkannya untuk merusak', 'Menyalahgunakan akses', 'Menghapus semua bukti'], 0, 'Responsible disclosure adalah sikap profesional.'),
    ],
  },
];

function slide(heading, body, bullets, keyPoint, image = '') {
  return { heading, body, bullets, keyPoint, image };
}

const slideImagePool = ['computer', 'hardware', 'os', 'network', 'cloud', 'code', 'database', 'security'];

const extraSlidesByMaterial = {
  'sistem-komputer': [
    slide('Peran brainware', 'Brainware adalah manusia yang merencanakan, mengoperasikan, merawat, dan mengevaluasi penggunaan komputer.', ['Pengguna memberi tujuan kerja.', 'Teknisi menjaga perangkat tetap siap.', 'Admin mengatur akun dan akses.'], 'Komputer membutuhkan arahan manusia agar hasilnya tepat.', 'computer'),
    slide('Hubungan hardware dan software', 'Software tidak dapat bekerja tanpa hardware, sementara hardware tidak berguna tanpa instruksi dari software.', ['Aplikasi berjalan di atas sistem operasi.', 'Driver mengenalkan perangkat ke sistem.', 'Firmware mengatur perangkat tingkat dasar.'], 'Kinerja komputer lahir dari kerja sama lapisan fisik dan instruksi.', 'code'),
    slide('Motherboard sebagai pusat koneksi', 'Motherboard menghubungkan CPU, RAM, storage, kartu tambahan, port, dan sumber daya listrik dalam satu sistem.', ['Slot RAM dipakai untuk memori utama.', 'Port I/O menghubungkan perangkat luar.', 'Chipset membantu koordinasi data.'], 'Motherboard menentukan kompatibilitas banyak komponen.', 'hardware'),
    slide('Memori utama dan cache', 'RAM membantu program aktif, sedangkan cache menyimpan data kecil yang sering dipakai agar CPU lebih cepat bekerja.', ['Cache berada dekat dengan CPU.', 'RAM lebih besar tetapi lebih lambat dari cache.', 'Keduanya bersifat sementara.'], 'Memori cepat membantu komputer merespons instruksi lebih efisien.', 'database'),
    slide('Penyimpanan internal dan eksternal', 'Data dapat disimpan di SSD, HDD, flash drive, kartu memori, atau penyimpanan jaringan sesuai kebutuhan.', ['SSD cocok untuk sistem operasi.', 'HDD masih berguna untuk arsip besar.', 'Flash drive praktis untuk memindahkan file.'], 'Pilih media penyimpanan berdasarkan kecepatan, kapasitas, dan keamanan.', 'cloud'),
    slide('Port dan konektor komputer', 'Port seperti USB, HDMI, audio jack, LAN, dan power connector digunakan untuk menghubungkan komputer dengan perangkat lain.', ['USB umum untuk keyboard, mouse, dan flash drive.', 'HDMI membawa gambar dan suara.', 'LAN menghubungkan komputer ke jaringan kabel.'], 'Mengenali port membantu pengguna memasang perangkat dengan benar.', 'network'),
    slide('Perangkat mobile sebagai sistem komputer', 'Smartphone dan tablet juga merupakan sistem komputer karena memiliki prosesor, memori, penyimpanan, OS, aplikasi, dan pengguna.', ['Sensor menjadi perangkat input.', 'Layar sentuh menjadi input dan output.', 'Aplikasi mobile menjalankan instruksi khusus.'], 'Prinsip sistem komputer tidak hanya berlaku pada PC.', 'os'),
    slide('Alur booting komputer', 'Booting adalah proses komputer menyalakan hardware, menjalankan firmware, membaca media boot, lalu memuat sistem operasi.', ['Power supply mengalirkan daya.', 'Firmware melakukan pemeriksaan awal.', 'OS dimuat ke memori.'], 'Booting berhasil menandakan komponen dasar siap dipakai.', 'security'),
    slide('Bottleneck performa', 'Bottleneck terjadi ketika satu komponen terlalu lambat sehingga membatasi kinerja komponen lain.', ['RAM kecil membuat multitasking berat.', 'Storage lambat memperlambat membuka file.', 'CPU lemah membatasi proses berat.'], 'Upgrade sebaiknya berdasarkan sumber hambatan utama.', 'hardware'),
    slide('Praktik penggunaan yang aman', 'Penggunaan komputer yang baik mencakup posisi kerja ergonomis, pengaturan listrik aman, kebiasaan backup, dan pengelolaan akun.', ['Gunakan stop kontak yang aman.', 'Jaga ventilasi perangkat.', 'Kunci layar saat meninggalkan komputer.'], 'Kebiasaan sederhana dapat mencegah kerusakan dan kehilangan data.', 'security'),
  ],
  'perakitan-k3lh': [
    slide('Membaca spesifikasi komponen', 'Sebelum membeli atau memasang komponen, teknisi perlu membaca soket CPU, jenis RAM, ukuran motherboard, dan kebutuhan daya.', ['Soket CPU harus cocok.', 'RAM harus sesuai generasi motherboard.', 'Casing harus cukup untuk ukuran papan.'], 'Kompatibilitas mengurangi risiko komponen tidak bisa dipasang.', 'hardware'),
    slide('Memasang motherboard ke casing', 'Motherboard dipasang pada standoff agar tidak menyentuh langsung logam casing dan terhindar dari korsleting.', ['Pasang standoff di titik yang benar.', 'Jangan memaksa baut terlalu kencang.', 'Pastikan I/O shield sejajar.'], 'Pemasangan yang rapi menjaga papan utama tetap aman.', 'computer'),
    slide('Memasang RAM dengan benar', 'RAM harus dipasang pada slot yang sesuai, ditekan merata sampai pengunci slot menutup dengan sempurna.', ['Perhatikan lekukan pada modul RAM.', 'Gunakan slot dual channel sesuai manual.', 'Hindari menyentuh pin emas.'], 'RAM yang longgar sering menjadi penyebab komputer tidak tampil.', 'database'),
    slide('Storage SATA dan NVMe', 'Storage SATA memakai kabel data dan power, sedangkan NVMe dipasang langsung ke slot M.2 pada motherboard.', ['SATA umum untuk HDD dan SSD 2.5 inci.', 'NVMe biasanya lebih cepat.', 'Sekrup kecil M.2 perlu disimpan hati-hati.'], 'Jenis storage menentukan cara pemasangan dan kecepatannya.', 'cloud'),
    slide('Kabel front panel', 'Kabel power switch, reset switch, power LED, dan HDD LED harus dipasang sesuai pin pada motherboard.', ['Baca diagram front panel.', 'Polaritas penting untuk LED.', 'Power switch biasanya tidak bergantung polaritas.'], 'Kesalahan front panel dapat membuat tombol casing tidak berfungsi.', 'code'),
    slide('Manajemen kabel', 'Kabel yang tertata membantu aliran udara, memudahkan perawatan, dan membuat bagian dalam casing lebih aman.', ['Ikuti jalur kabel belakang casing.', 'Gunakan cable tie secukupnya.', 'Jauhkan kabel dari kipas.'], 'Rapi bukan hanya soal tampilan, tetapi juga keselamatan kerja.', 'network'),
    slide('Pengujian awal setelah rakit', 'Setelah semua komponen terpasang, lakukan pemeriksaan visual, nyalakan sistem, masuk BIOS, dan cek suhu serta perangkat terdeteksi.', ['Pastikan kipas berputar.', 'Cek RAM dan storage di BIOS.', 'Amati pesan error saat POST.'], 'Pengujian awal memastikan komputer siap dipasang sistem operasi.', 'os'),
    slide('Keselamatan listrik', 'Praktik perakitan harus memperhatikan kabel, stop kontak, tangan kering, dan posisi sumber daya agar tidak membahayakan pengguna.', ['Jangan bekerja di area basah.', 'Cabut kabel power sebelum bongkar pasang.', 'Gunakan peralatan yang kondisinya baik.'], 'Risiko listrik harus dikendalikan sejak awal praktik.', 'security'),
    slide('Menangani listrik statis', 'Listrik statis dari tubuh dapat merusak komponen sensitif, sehingga teknisi perlu membuang muatan sebelum menyentuh komponen.', ['Sentuh bagian logam casing yang ter-ground.', 'Gunakan gelang antistatis jika tersedia.', 'Simpan komponen dalam kemasan antistatis.'], 'Perlindungan antistatis menjaga komponen tetap aman.', 'hardware'),
    slide('Dokumentasi perakitan', 'Mencatat komponen, foto pemasangan kabel, dan hasil pengujian membantu troubleshooting serta laporan praktik.', ['Catat merk dan kapasitas komponen.', 'Foto sebelum dan sesudah pemasangan.', 'Tulis gejala jika terjadi masalah.'], 'Dokumentasi membuat pekerjaan teknisi lebih mudah dilacak.', 'code'),
    slide('Troubleshooting tampilan kosong', 'Jika layar tidak menampilkan gambar, cek kabel monitor, sumber input, RAM, GPU, dan indikator POST secara bertahap.', ['Uji dengan kabel display lain.', 'Pasang ulang RAM.', 'Cek apakah monitor memilih input yang benar.'], 'Mulai dari penyebab paling sederhana sebelum membongkar semua komponen.', 'computer'),
  ],
  'sistem-operasi': [
    slide('Kernel dan antarmuka', 'Kernel mengatur sumber daya inti, sedangkan antarmuka membantu pengguna memberi perintah lewat tampilan grafis atau terminal.', ['Kernel mengatur proses dan memori.', 'GUI mudah dipakai pemula.', 'CLI kuat untuk administrasi.'], 'OS memiliki lapisan inti dan lapisan interaksi pengguna.', 'os'),
    slide('Manajemen proses', 'Sistem operasi mengatur program yang sedang berjalan, membagi waktu CPU, dan menangani aplikasi yang berhenti merespons.', ['Process memiliki status berjalan atau menunggu.', 'Task Manager menampilkan proses aktif.', 'End task dipakai jika aplikasi macet.'], 'Manajemen proses membuat banyak aplikasi bisa berjalan bergantian.', 'code'),
    slide('Manajemen memori', 'OS membagi RAM untuk aplikasi, sistem, cache, dan layanan latar belakang agar komputer tetap stabil.', ['RAM penuh dapat membuat sistem lambat.', 'Virtual memory membantu saat RAM terbatas.', 'Tutup aplikasi yang tidak diperlukan.'], 'Pemakaian memori yang sehat menjaga performa komputer.', 'database'),
    slide('Struktur direktori', 'Setiap OS memiliki struktur folder untuk sistem, program, pengguna, dokumen, unduhan, dan konfigurasi.', ['Pisahkan file pribadi dan file sistem.', 'Jangan menghapus folder sistem sembarang.', 'Gunakan folder proyek yang konsisten.'], 'Struktur direktori membantu pengguna menemukan file dengan cepat.', 'computer'),
    slide('Ekstensi file', 'Ekstensi seperti .docx, .xlsx, .jpg, .png, .zip, dan .exe membantu OS mengenali jenis file dan aplikasi pembukanya.', ['Ekstensi tidak sama dengan isi file.', 'File executable perlu diperiksa sumbernya.', 'Aktifkan tampilan ekstensi saat belajar.'], 'Memahami ekstensi mengurangi kesalahan membuka file.', 'security'),
    slide('Hak akses pengguna', 'OS membedakan akun biasa dan administrator untuk melindungi sistem dari perubahan yang tidak diizinkan.', ['Akun admin dapat mengubah pengaturan penting.', 'Akun standar lebih aman untuk penggunaan harian.', 'Password melindungi akses akun.'], 'Hak akses membatasi tindakan agar sistem lebih aman.', 'shield'),
    slide('Update dan patch', 'Update OS memperbaiki bug, menutup celah keamanan, dan meningkatkan kompatibilitas perangkat.', ['Jadwalkan update saat tidak mengganggu praktik.', 'Restart jika diminta sistem.', 'Baca catatan update penting.'], 'Update adalah bagian dari perawatan sistem.', 'cloud'),
    slide('Instalasi aplikasi', 'Aplikasi sebaiknya dipasang dari sumber resmi dengan memperhatikan kebutuhan sistem, lisensi, dan izin yang diminta.', ['Cek versi 32-bit atau 64-bit.', 'Hindari installer yang menambahkan program tidak perlu.', 'Uninstall aplikasi yang tidak dipakai.'], 'Instalasi yang rapi membuat OS tetap bersih.', 'code'),
    slide('Strategi backup 3-2-1', 'Strategi 3-2-1 berarti memiliki tiga salinan data, dua jenis media, dan satu salinan di lokasi berbeda.', ['Simpan file utama di komputer.', 'Gunakan drive eksternal.', 'Tambahkan cloud untuk cadangan luar perangkat.'], 'Backup yang baik mengurangi dampak kehilangan data.', 'cloud'),
  ],
  'jaringan-dasar': [
    slide('Model komunikasi data', 'Komunikasi jaringan terjadi saat data dibagi menjadi paket, dikirim melalui media, lalu disusun kembali di tujuan.', ['Paket membawa alamat sumber dan tujuan.', 'Protokol mengatur cara komunikasi.', 'Kesalahan pengiriman dapat diperiksa ulang.'], 'Jaringan bekerja dengan aturan yang disepakati perangkat.', 'network'),
    slide('Media transmisi', 'Media jaringan dapat berupa kabel tembaga, fiber optic, atau nirkabel seperti Wi-Fi dan bluetooth.', ['UTP umum untuk LAN sekolah.', 'Fiber optic cepat untuk jarak jauh.', 'Wi-Fi praktis tetapi dipengaruhi sinyal.'], 'Media dipilih berdasarkan jarak, kecepatan, dan kondisi lokasi.', 'hardware'),
    slide('Kabel UTP dan konektor RJ45', 'Kabel UTP memakai konektor RJ45 dan urutan warna tertentu agar sinyal dapat terkirim dengan benar.', ['Standar T568A dan T568B sering dipakai.', 'Crimping harus kuat dan rapi.', 'Gunakan LAN tester setelah membuat kabel.'], 'Kabel yang benar adalah fondasi jaringan kabel yang stabil.', 'network'),
    slide('Alamat MAC dan IP', 'MAC address adalah identitas fisik perangkat jaringan, sedangkan IP address adalah alamat logis yang dapat berubah.', ['MAC dipakai pada lapisan lokal.', 'IP dipakai untuk pengalamatan jaringan.', 'Router membaca alamat tujuan paket.'], 'MAC dan IP bekerja pada kebutuhan yang berbeda.', 'database'),
    slide('Subnet mask', 'Subnet mask menentukan bagian alamat IP yang menjadi network dan bagian yang menjadi host.', ['255.255.255.0 umum pada jaringan kecil.', 'Subnet membantu membagi jaringan.', 'Perhitungan subnet perlu teliti.'], 'Subnet membantu jaringan dikelola lebih rapi.', 'code'),
    slide('Gateway dan internet', 'Gateway adalah pintu keluar dari jaringan lokal menuju jaringan lain, termasuk internet.', ['Gateway biasanya alamat router.', 'Tanpa gateway, LAN tetap bisa lokal tetapi sulit ke internet.', 'Default gateway diatur di konfigurasi IP.'], 'Gateway menghubungkan perangkat lokal dengan dunia luar.', 'cloud'),
    slide('DNS dalam kehidupan sehari-hari', 'DNS menerjemahkan nama domain menjadi alamat IP sehingga pengguna tidak perlu mengingat angka alamat server.', ['Domain lebih mudah diingat.', 'DNS server bisa dari router atau penyedia internet.', 'DNS bermasalah membuat domain sulit dibuka.'], 'DNS membuat web lebih mudah digunakan manusia.', 'os'),
    slide('Keamanan Wi-Fi', 'Wi-Fi perlu diamankan dengan password kuat, enkripsi yang tepat, dan pengaturan akses pengguna.', ['Gunakan WPA2 atau WPA3 jika tersedia.', 'Ganti password default perangkat.', 'Pisahkan jaringan tamu bila perlu.'], 'Jaringan nirkabel yang terbuka mudah disalahgunakan.', 'security'),
    slide('Berbagi file di LAN', 'File sharing memungkinkan beberapa komputer mengakses folder tertentu selama izin dan jaringan diatur benar.', ['Atur permission folder.', 'Gunakan nama komputer yang mudah dikenali.', 'Matikan sharing jika tidak diperlukan.'], 'Berbagi file harus mempertimbangkan kemudahan dan keamanan.', 'computer'),
    slide('Print sharing', 'Printer jaringan dapat dipakai bersama oleh banyak komputer melalui server, router, atau fitur sharing OS.', ['Pastikan driver sesuai.', 'Cek antrean cetak.', 'Atur akses pengguna.'], 'Print sharing menghemat perangkat tetapi butuh pengelolaan.', 'hardware'),
    slide('Perintah ipconfig', 'Di Windows, ipconfig membantu melihat alamat IP, subnet mask, gateway, dan informasi adapter jaringan.', ['Gunakan ipconfig /all untuk detail.', 'Cek apakah IP sesuai jaringan.', 'Bandingkan gateway dengan konfigurasi router.'], 'Perintah dasar mempercepat pengecekan masalah jaringan.', 'code'),
    slide('Urutan cek koneksi', 'Troubleshooting koneksi sebaiknya dimulai dari perangkat, kabel atau sinyal, konfigurasi IP, gateway, DNS, lalu layanan tujuan.', ['Cek indikator fisik dahulu.', 'Ping gateway sebelum ping internet.', 'Catat hasil setiap langkah.'], 'Pengecekan berurutan membuat masalah lebih mudah ditemukan.', 'security'),
  ],
  'internet-cloud': [
    slide('Kata kunci efektif', 'Pencarian informasi menjadi lebih tepat jika kata kunci spesifik, memakai tanda kutip, dan menyertakan konteks topik.', ['Gunakan istilah utama.', 'Tambahkan kelas atau bidang jika perlu.', 'Bandingkan beberapa hasil.'], 'Pencarian yang baik dimulai dari pertanyaan yang jelas.', 'code'),
    slide('Mengevaluasi sumber', 'Sumber informasi perlu dinilai dari penulis, lembaga, tanggal terbit, bukti, dan kesesuaian dengan kebutuhan belajar.', ['Cari identitas penulis.', 'Perhatikan tanggal pembaruan.', 'Waspadai klaim tanpa rujukan.'], 'Tidak semua informasi di internet memiliki kualitas yang sama.', 'security'),
    slide('Etika mengirim email', 'Email resmi perlu subjek, salam, isi singkat, lampiran tepat, dan bahasa yang sopan.', ['Sebutkan tujuan dengan jelas.', 'Gunakan nama file lampiran yang rapi.', 'Periksa kembali sebelum kirim.'], 'Etika komunikasi digital membuat pesan mudah dipahami.', 'mail'),
    slide('Manajemen cloud folder', 'Folder cloud yang tertata membantu siswa menemukan tugas, membagikan file, dan menghindari duplikasi dokumen.', ['Buat folder per mata pelajaran.', 'Gunakan nama versi jika diperlukan.', 'Arsipkan file lama.'], 'Kerapian cloud memudahkan kolaborasi jangka panjang.', 'cloud'),
    slide('Izin akses berbagi file', 'Saat membagikan file, pengguna perlu memilih apakah orang lain hanya dapat melihat, memberi komentar, atau mengedit.', ['Viewer hanya membaca.', 'Commenter memberi masukan.', 'Editor dapat mengubah isi.'], 'Hak akses yang tepat mencegah perubahan yang tidak diinginkan.', 'security'),
    slide('Riwayat versi dokumen', 'Riwayat versi membantu melihat perubahan, mengembalikan versi lama, dan mengetahui kontribusi anggota tim.', ['Nama versi penting dapat diberi label.', 'Perubahan besar sebaiknya dicatat.', 'Versi lama bisa dipulihkan jika terjadi kesalahan.'], 'Version history membuat kerja kelompok lebih aman.', 'database'),
    slide('Rapat daring produktif', 'Pertemuan online lebih efektif jika peserta menyiapkan agenda, mengecek audio, membagikan materi, dan mencatat keputusan.', ['Gunakan mikrofon saat perlu bicara.', 'Matikan notifikasi yang mengganggu.', 'Simpan catatan hasil diskusi.'], 'Kolaborasi digital tetap membutuhkan aturan kerja.', 'computer'),
    slide('Netiket di ruang digital', 'Netiket adalah etika berkomunikasi online agar diskusi tetap sopan, jelas, dan menghargai orang lain.', ['Hindari huruf kapital berlebihan.', 'Baca pesan sebelum merespons.', 'Jangan menyebarkan data pribadi teman.'], 'Sikap sopan tetap penting walaupun komunikasi lewat layar.', 'network'),
    slide('Jejak digital', 'Setiap komentar, unggahan, akun, dan riwayat aktivitas dapat membentuk jejak digital yang berdampak pada reputasi.', ['Pikirkan sebelum mengunggah.', 'Atur privasi akun.', 'Hapus informasi yang tidak perlu.'], 'Jejak digital perlu dikelola sejak dini.', 'os'),
    slide('Sinkronisasi lintas perangkat', 'Layanan cloud dapat menyamakan file di laptop, ponsel, dan tablet selama akun serta koneksi internet tersedia.', ['Pastikan akun yang dipakai benar.', 'Cek status sinkronisasi.', 'Selesaikan konflik versi dengan hati-hati.'], 'Sinkronisasi membuat belajar lebih fleksibel.', 'cloud'),
  ],
  'algoritma-pemrograman': [
    slide('Masalah dan solusi langkah', 'Sebelum menulis program, pembuat aplikasi perlu memahami masalah, input, batasan, dan hasil yang diharapkan.', ['Tanyakan data apa yang tersedia.', 'Tentukan keluaran yang ingin dibuat.', 'Catat aturan khusus.'], 'Program yang jelas dimulai dari pemahaman masalah.', 'code'),
    slide('Dekomposisi masalah', 'Dekomposisi berarti memecah masalah besar menjadi bagian kecil agar lebih mudah dirancang dan diuji.', ['Pisahkan input, validasi, proses, dan output.', 'Kerjakan bagian paling penting dulu.', 'Gabungkan setelah tiap bagian benar.'], 'Masalah kecil lebih mudah diselesaikan daripada masalah besar sekaligus.', 'layers'),
    slide('Pola urutan instruksi', 'Instruksi program dijalankan berurutan dari atas ke bawah kecuali ada percabangan, perulangan, atau pemanggilan fungsi.', ['Urutan salah menghasilkan output salah.', 'Komentar membantu membaca alur.', 'Tes setiap langkah penting.'], 'Urutan adalah dasar logika program.', 'computer'),
    slide('Operator aritmatika', 'Operator aritmatika dipakai untuk penjumlahan, pengurangan, perkalian, pembagian, dan sisa bagi.', ['Gunakan tanda kurung untuk prioritas.', 'Hati-hati pembagian bilangan bulat.', 'Modulo berguna untuk cek ganjil genap.'], 'Perhitungan program harus mengikuti aturan matematika.', 'database'),
    slide('Operator perbandingan', 'Operator perbandingan menghasilkan nilai benar atau salah, misalnya sama dengan, lebih besar, dan lebih kecil.', ['Dipakai dalam kondisi if.', 'Perhatikan beda = dan == pada banyak bahasa.', 'Hasilnya bertipe boolean.'], 'Perbandingan adalah dasar pengambilan keputusan.', 'security'),
    slide('Operator logika', 'Operator AND, OR, dan NOT membantu menggabungkan beberapa kondisi dalam percabangan.', ['AND benar jika semua kondisi benar.', 'OR benar jika salah satu kondisi benar.', 'NOT membalik nilai boolean.'], 'Logika gabungan membuat aturan program lebih lengkap.', 'code'),
    slide('Nested if', 'Nested if adalah percabangan di dalam percabangan, digunakan saat keputusan bergantung pada beberapa tingkat kondisi.', ['Gunakan dengan rapi agar mudah dibaca.', 'Pertimbangkan else if jika lebih sederhana.', 'Tes setiap kemungkinan kondisi.'], 'Terlalu banyak nested if dapat membuat program sulit dipahami.', 'os'),
    slide('Loop dengan counter', 'Loop dengan counter memakai variabel penghitung untuk mengontrol berapa kali instruksi diulang.', ['Inisialisasi nilai awal.', 'Tentukan kondisi berhenti.', 'Ubah counter setiap putaran.'], 'Counter mencegah perulangan berjalan tanpa akhir.', 'code'),
    slide('Array atau list', 'Array atau list menyimpan banyak nilai dalam satu nama variabel sehingga data dapat diolah dengan perulangan.', ['Indeks biasanya dimulai dari 0.', 'List cocok untuk daftar nilai.', 'Perulangan dapat membaca tiap elemen.'], 'Struktur data sederhana membuat program lebih efisien.', 'database'),
    slide('Fungsi dan prosedur', 'Fungsi membungkus langkah tertentu agar dapat dipakai ulang, membuat program lebih pendek dan mudah diuji.', ['Nama fungsi harus menggambarkan tugas.', 'Parameter membawa data masuk.', 'Return mengirim hasil keluar.'], 'Kode yang dipakai ulang sebaiknya dijadikan fungsi.', 'code'),
    slide('Debugging dasar', 'Debugging adalah proses menemukan, memahami, dan memperbaiki kesalahan dalam program.', ['Baca pesan error.', 'Cetak nilai variabel penting.', 'Uji dengan data sederhana.'], 'Kesalahan program diselesaikan dengan penelusuran yang sabar.', 'security'),
    slide('Testing dengan contoh data', 'Program perlu diuji menggunakan data normal, data batas, dan data salah agar perilakunya lebih terpercaya.', ['Gunakan contoh mudah dihitung manual.', 'Coba nilai kosong atau nol.', 'Bandingkan output dengan harapan.'], 'Testing membantu menemukan masalah sebelum program digunakan.', 'monitor'),
    slide('Membaca flowchart program', 'Flowchart dapat dibaca dari start, input, proses, decision, output, lalu end sesuai arah panah.', ['Oval untuk start dan end.', 'Jajar genjang untuk input atau output.', 'Belah ketupat untuk decision.'], 'Simbol flowchart membantu logika terlihat secara visual.', 'network'),
  ],
  'basis-data-sql': [
    slide('Mengapa database dibutuhkan', 'Database membantu aplikasi menyimpan data dalam struktur yang konsisten sehingga mudah dicari, diubah, dan diamankan.', ['File biasa sulit untuk relasi kompleks.', 'Database mendukung banyak pengguna.', 'Data bisa dicari dengan query.'], 'Database membuat aplikasi lebih teratur dan dapat berkembang.', 'database'),
    slide('Entitas dan atribut', 'Entitas adalah objek yang datanya disimpan, sedangkan atribut adalah ciri atau kolom dari entitas tersebut.', ['Siswa dapat menjadi entitas.', 'Nama dan kelas adalah atribut.', 'Setiap entitas menjadi kandidat tabel.'], 'Perancangan database dimulai dari mengenali entitas.', 'computer'),
    slide('Tipe data kolom', 'Kolom database memiliki tipe data seperti integer, varchar, date, boolean, atau text agar nilai yang tersimpan sesuai.', ['Integer untuk angka bulat.', 'Varchar untuk teks pendek.', 'Date untuk tanggal.'], 'Tipe data menjaga isi tabel tetap rapi.', 'code'),
    slide('Normalisasi sederhana', 'Normalisasi mengurangi duplikasi data dengan memisahkan informasi ke tabel yang tepat.', ['Pisahkan data siswa dan nilai.', 'Gunakan relasi antar tabel.', 'Hindari menulis data yang sama berkali-kali.'], 'Normalisasi membantu data lebih konsisten.', 'layers'),
    slide('ERD sebagai rancangan', 'Entity Relationship Diagram menggambarkan entitas, atribut, primary key, dan relasi sebelum database dibuat.', ['ERD membantu diskusi desain.', 'Relasi digambar dengan garis.', 'Kardinalitas menunjukkan jumlah hubungan.'], 'Rancangan visual mengurangi kesalahan struktur tabel.', 'network'),
    slide('SELECT dengan kondisi', 'Query SELECT dapat memakai WHERE untuk mengambil data tertentu sesuai syarat.', ['WHERE kelas = "X" mengambil kelas tertentu.', 'AND dan OR menggabungkan syarat.', 'ORDER BY mengurutkan hasil.'], 'Query yang spesifik membuat data lebih mudah dianalisis.', 'database'),
    slide('INSERT data baru', 'Perintah INSERT menambahkan record baru ke tabel dengan nilai yang sesuai urutan atau nama kolom.', ['Isi kolom wajib tidak boleh kosong.', 'Gunakan format tanggal yang benar.', 'Periksa pesan error jika gagal.'], 'Data baru harus mengikuti struktur tabel.', 'code'),
    slide('UPDATE dengan hati-hati', 'UPDATE mengubah data yang sudah ada dan sebaiknya memakai WHERE agar tidak semua record berubah.', ['Cek data dulu dengan SELECT.', 'Gunakan WHERE berdasarkan primary key.', 'Backup data penting sebelum perubahan besar.'], 'Update tanpa kondisi dapat merusak banyak data.', 'security'),
    slide('DELETE dan risiko data', 'DELETE menghapus record, sehingga perlu digunakan dengan teliti dan sebaiknya didahului pengecekan data.', ['Pastikan record yang dipilih benar.', 'Gunakan WHERE.', 'Pertimbangkan soft delete pada aplikasi nyata.'], 'Menghapus data lebih mudah daripada memulihkannya.', 'security'),
    slide('Join antar tabel', 'JOIN menggabungkan data dari beberapa tabel berdasarkan kolom yang berelasi.', ['INNER JOIN menampilkan data yang cocok.', 'LEFT JOIN menjaga data dari tabel kiri.', 'Foreign key membantu hubungan antar tabel.'], 'JOIN membuat informasi dari beberapa tabel dapat dibaca bersama.', 'network'),
    slide('Backup database', 'Backup database menyimpan salinan struktur dan isi data agar dapat dipulihkan saat terjadi kerusakan atau kesalahan.', ['Jadwalkan backup rutin.', 'Simpan salinan di tempat berbeda.', 'Uji proses restore.'], 'Database penting harus punya cadangan yang jelas.', 'cloud'),
  ],
  'keamanan-etika': [
    slide('Membuat password kuat', 'Password kuat sebaiknya panjang, unik, tidak memakai data pribadi, dan disimpan dengan cara aman.', ['Gunakan kombinasi kata yang mudah diingat tetapi sulit ditebak.', 'Jangan pakai ulang password penting.', 'Pertimbangkan password manager.'], 'Password adalah pagar pertama akun digital.', 'security'),
    slide('Password manager', 'Password manager membantu menyimpan banyak password unik sehingga pengguna tidak perlu menghafal semuanya.', ['Kunci utama harus sangat kuat.', 'Aktifkan sinkronisasi aman jika perlu.', 'Jangan membagikan vault ke sembarang orang.'], 'Alat bantu keamanan tetap membutuhkan kebiasaan yang benar.', 'database'),
    slide('Autentikasi dua faktor', '2FA menambah langkah verifikasi seperti aplikasi autentikator, kode SMS, atau kunci keamanan fisik.', ['Aplikasi autentikator lebih aman dari SMS.', 'Simpan kode pemulihan.', 'Jangan berikan kode kepada orang lain.'], '2FA membantu melindungi akun walau password bocor.', 'shield'),
    slide('Ciri pesan phishing', 'Pesan phishing sering memakai nada mendesak, tautan mirip asli, lampiran aneh, dan permintaan data rahasia.', ['Periksa domain pengirim.', 'Jangan panik karena ancaman palsu.', 'Buka situs resmi secara manual jika ragu.'], 'Kewaspadaan sebelum klik adalah pertahanan penting.', 'mail'),
    slide('Lampiran berbahaya', 'File lampiran dapat menyamarkan malware, terutama jika berasal dari sumber tidak dikenal atau meminta izin aneh.', ['Waspadai file executable.', 'Scan file jika perlu.', 'Jangan aktifkan macro sembarang.'], 'Lampiran harus diperiksa sebelum dibuka.', 'computer'),
    slide('Update keamanan', 'Pembaruan aplikasi, browser, OS, dan antivirus menutup celah yang bisa dimanfaatkan penyerang.', ['Aktifkan update otomatis bila memungkinkan.', 'Restart perangkat setelah patch penting.', 'Hapus aplikasi usang.'], 'Sistem yang diperbarui lebih sulit diserang.', 'os'),
    slide('Privasi di media sosial', 'Pengaturan privasi membantu mengontrol siapa yang dapat melihat profil, unggahan, lokasi, dan daftar teman.', ['Batasi informasi pribadi.', 'Tinjau tag dari orang lain.', 'Pisahkan akun pribadi dan profesional jika perlu.'], 'Privasi online perlu diatur, bukan diasumsikan aman.', 'network'),
    slide('Izin aplikasi', 'Aplikasi bisa meminta akses kamera, mikrofon, lokasi, kontak, dan file; pengguna harus menilai apakah izin itu masuk akal.', ['Cabut izin yang tidak diperlukan.', 'Cek izin aplikasi secara berkala.', 'Hapus aplikasi yang mencurigakan.'], 'Izin berlebihan dapat membuka risiko privasi.', 'security'),
    slide('Hak cipta gambar dan musik', 'Gambar, musik, video, kode, dan tulisan punya aturan penggunaan yang perlu dihormati dalam tugas atau proyek.', ['Gunakan aset bebas lisensi.', 'Cantumkan sumber sesuai aturan.', 'Jangan menghapus watermark pencipta.'], 'Menghargai lisensi adalah bagian dari etika digital.', 'cloud'),
    slide('Creative Commons', 'Creative Commons memberi pilihan lisensi yang menjelaskan apakah karya boleh dipakai, diubah, atau digunakan komersial.', ['BY berarti perlu atribusi.', 'NC berarti non-komersial.', 'SA berarti berbagi dengan lisensi serupa.'], 'Membaca lisensi membantu menggunakan karya orang lain dengan benar.', 'code'),
    slide('Etika menjaga data pengguna', 'Orang yang bekerja di bidang TI sering memiliki akses ke data sensitif dan wajib menjaga kerahasiaannya.', ['Akses data hanya sesuai tugas.', 'Jangan membuka data pribadi tanpa alasan.', 'Laporkan kebocoran sesuai prosedur.'], 'Kepercayaan pengguna adalah tanggung jawab profesional.', 'database'),
    slide('Responsible disclosure', 'Celah keamanan sebaiknya dilaporkan kepada pemilik sistem dengan bukti secukupnya dan tanpa menyebarkan cara eksploitasi.', ['Hubungi kanal resmi.', 'Jangan mengambil data lebih dari perlu.', 'Beri waktu perbaikan sebelum publikasi.'], 'Melaporkan celah harus membantu, bukan merusak.', 'shield'),
    slide('Jejak digital profesional', 'Portofolio, komentar, email, dan akun publik dapat memengaruhi penilaian orang terhadap profesional TI.', ['Gunakan bahasa yang baik.', 'Tampilkan karya dengan izin.', 'Pisahkan eksperimen pribadi dari sistem nyata.'], 'Etika terlihat dari cara seseorang hadir di ruang digital.', 'computer'),
    slide('Keputusan etis dalam TI', 'Keputusan teknis sering memiliki dampak pada privasi, keamanan, kenyamanan, dan keadilan pengguna.', ['Pikirkan dampak sebelum membuat fitur.', 'Minta izin saat mengumpulkan data.', 'Dokumentasikan keputusan penting.'], 'Teknologi yang baik mempertimbangkan manusia yang menggunakannya.', 'security'),
  ],
};

materials.forEach((material, materialIndex) => {
  material.slides.push(...(extraSlidesByMaterial[material.id] || []));
  material.slides = material.slides.map((item, slideIndex) => {
    const fallbackImage = slideImagePool[(materialIndex + slideIndex) % slideImagePool.length];
    return {
      ...item,
      image: slideImagePool.includes(item.image) ? item.image : fallbackImage,
    };
  });
});

const icons = {
  award:
    '<path d="m15.5 7.5 1 2.1 2.3.3-1.7 1.6.4 2.3-2-1.1-2 1.1.4-2.3-1.7-1.6 2.3-.3 1-2.1Z"/><path d="M8.5 14.8 6.7 22l5.3-3 5.3 3-1.8-7.2"/><circle cx="12" cy="9" r="7"/>',
  book:
    '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5Z"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  chart:
    '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-7"/><path d="M7 19v-4"/><path d="M12 19v-8"/><path d="M17 19v-6"/>',
  check: '<path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/>',
  circle: '<circle cx="12" cy="12" r="9"/>',
  close: '<path d="m18 6-12 12"/><path d="m6 6 12 12"/>',
  cloud: '<path d="M17.5 19H7a5 5 0 0 1-.7-9.9A6.5 6.5 0 0 1 18.8 11 4 4 0 0 1 17.5 19Z"/>',
  code: '<path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/>',
  cpu: '<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 14h3"/><path d="M1 9h3"/><path d="M1 14h3"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h5"/>',
  home:
    '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
  layers: '<path d="m12 2 9 5-9 5-9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
  login:
    '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path d="m10 17 5-5-5-5"/><path d="M15 12H3"/>',
  logout:
    '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  monitor:
    '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8"/><path d="M12 16v4"/><path d="m8 8 2 2 3-4 3 6 2-3"/>',
  note:
    '<path d="M5 4h11l3 3v13H5z"/><path d="M16 4v4h4"/><path d="M8 10h8"/><path d="M8 14h8"/><path d="M8 18h5"/>',
  play: '<circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4Z"/>',
  printer: '<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/><path d="M18 12h.01"/>',
  refresh:
    '<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-5"/>',
  star: '<path d="m12 2 2.8 6 6.2.7-4.6 4.2 1.2 6.1L12 15.8 6.4 19l1.2-6.1L3 8.7 9.2 8Z"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  trophy:
    '<path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0Z"/><path d="M5 5H3v2a4 4 0 0 0 4 4"/><path d="M19 5h2v2a4 4 0 0 1-4 4"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  wifi: '<path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M12 20h.01"/><path d="M2 9a15 15 0 0 1 20 0"/>',
  left: '<path d="m15 18-6-6 6-6"/>',
  right: '<path d="m9 18 6-6-6-6"/>',
};

const defaultActivities = [
  { label: 'Selamat datang di Infora', meta: 'Platform belajar Informatika SMK', time: 'Hari ini' },
];

const saved = loadSaved();

const state = {
  screen: 'landing',
  activePage: 'dashboard',
  activeMaterial: 0,
  activeSlide: 0,
  profileEditing: false,
  showAllActivities: false,
  reportPreviewOpen: false,
  reportGenerating: false,
  reportProgress: 0,
  reportMessage: '',
  authNotice: '',
  toast: '',
  user: saved.user,
  progress: saved.progress,
  quiz: createQuizState(0),
};

let toastTimer;
let syncTimer;

function icon(name, size = 24) {
  return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
}

function defaultProgress() {
  return {
    xp: 0,
    viewedSlides: {},
    completedMaterials: {},
    quizAttempts: {},
    quizHistory: [],
    activities: defaultActivities,
    profileMeta: {
      className: '',
      school: '',
    },
  };
}

function normalizeProgress(progress) {
  const fallback = defaultProgress();
  const activities = progress?.activities?.length
    ? progress.activities.filter((activity) => activity.label !== 'Database SQLite siap dipakai')
    : fallback.activities;

  return {
    ...fallback,
    ...(progress || {}),
    xp: Number(progress?.xp || 0),
    viewedSlides: progress?.viewedSlides || {},
    completedMaterials: progress?.completedMaterials || {},
    quizAttempts: progress?.quizAttempts || {},
    quizHistory: progress?.quizHistory || [],
    activities: activities.length ? activities : fallback.activities,
    profileMeta: {
      ...fallback.profileMeta,
      ...(progress?.profileMeta || {}),
    },
  };
}

function loadSaved() {
  const fallback = {
    user: {
      id: null,
      name: 'Siswa Demo',
      email: '',
      className: '',
      school: '',
    },
    progress: defaultProgress(),
  };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return {
      user: { ...fallback.user, ...(parsed.user || {}) },
      progress: normalizeProgress(parsed.progress),
    };
  } catch {
    return fallback;
  }
}

function save() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      user: state.user,
      progress: state.progress,
    }),
  );
}

function scheduleSync() {
  if (!state.user.id) return;
  window.clearTimeout(syncTimer);
  syncTimer = window.setTimeout(() => {
    apiPost('/api/progress', {
      userId: state.user.id,
      progress: state.progress,
    }).catch(() => {
      flash('Progres lokal tersimpan. Buka lewat localhost agar data tersinkron.');
    });
  }, 450);
}

function createQuizState(materialIndex) {
  return {
    materialIndex,
    questionIndex: 0,
    selected: null,
    submitted: false,
    finished: false,
    correctCount: 0,
    xpEarned: 0,
    answers: Array.from({ length: materials[materialIndex].quiz.length }, () => null),
  };
}

function commit(message, options = {}) {
  if (message) flash(message);
  save();
  render();
  if (options.scrollTo) scrollToTarget(options.scrollTo, options.scrollBehavior || 'smooth');
  if (options.scrollToTop) scrollToTop(options.scrollToTop);
  if (options.sync !== false) scheduleSync();
}

function flash(message) {
  state.toast = message;
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    state.toast = '';
    render();
  }, 2800);
}

function scrollToTop(behavior = 'smooth') {
  const run = () => window.scrollTo({ top: 0, behavior });
  if (window.requestAnimationFrame) {
    window.requestAnimationFrame(run);
    return;
  }
  run();
}

function scrollToTarget(selector, behavior = 'smooth') {
  const run = () => {
    const target = document.querySelector(selector);
    if (!target) {
      window.scrollTo({ top: 0, behavior });
      return;
    }
    target.scrollIntoView({ behavior, block: 'start' });
  };

  if (window.requestAnimationFrame) {
    window.requestAnimationFrame(run);
    return;
  }
  run();
}

async function apiPost(path, body) {
  const response = await fetch(apiUrl(path), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Server tidak dapat memproses permintaan.');
  return data;
}

function apiUrl(path) {
  const isNodeServer = /^41\d{2}$/.test(window.location.port || '');
  if (isNodeServer) return path;

  const endpoint = path.replace(/^\/api\//, '');
  return `api/${endpoint}.php`;
}

function firstName(name) {
  return String(name || '').trim().split(/\s+/)[0] || 'Siswa';
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
    return entities[character];
  });
}

function todayLabel() {
  return new Intl.DateTimeFormat('id-ID', { day: '2-digit', month: 'short' }).format(new Date());
}

function slideKey(materialIndex, slideIndex) {
  return `${materials[materialIndex].id}:${slideIndex}`;
}

function viewedSlideCount(materialIndex) {
  return materials[materialIndex].slides.filter((_, slideIndex) => state.progress.viewedSlides[slideKey(materialIndex, slideIndex)]).length;
}

function materialSlidePercent(materialIndex) {
  return Math.round((viewedSlideCount(materialIndex) / materials[materialIndex].slides.length) * 100);
}

function quizBest(materialIndex) {
  return state.progress.quizAttempts[materials[materialIndex].id]?.best || 0;
}

function materialTotalPercent(materialIndex) {
  const readScore = materialSlidePercent(materialIndex) * 0.6;
  const quizScore = quizBest(materialIndex) * 0.4;
  return Math.round(readScore + quizScore);
}

function overallProgress() {
  const total = materials.reduce((sum, _, index) => sum + materialTotalPercent(index), 0);
  return Math.round(total / materials.length);
}

function level() {
  return Math.max(1, Math.floor(state.progress.xp / 140) + 1);
}

function addActivity(label, meta) {
  state.progress.activities.unshift({ label, meta, time: todayLabel() });
  state.progress.activities = state.progress.activities.slice(0, 30);
}

function addXp(amount, label) {
  state.progress.xp += amount;
  addActivity(label, `+${amount} XP`);
}

function saveCurrentSlideProgress(message = '', options = {}) {
  const key = slideKey(state.activeMaterial, state.activeSlide);
  const material = materials[state.activeMaterial];
  let changed = false;

  if (!state.progress.viewedSlides[key]) {
    state.progress.viewedSlides[key] = true;
    addXp(XP_PER_SLIDE, `Slide selesai: ${material.slides[state.activeSlide].heading}`);
    changed = true;
  }

  if (viewedSlideCount(state.activeMaterial) === material.slides.length && !state.progress.completedMaterials[material.id]) {
    state.progress.completedMaterials[material.id] = true;
    addXp(XP_PER_MATERIAL, `Materi selesai: ${material.title}`);
    changed = true;
  }

  commit(message, { sync: changed, ...options });
}

function selectMaterial(index, slideIndex = 0) {
  state.activePage = 'material-detail';
  state.screen = 'app';
  state.activeMaterial = clamp(index, 0, materials.length - 1);
  state.activeSlide = clamp(slideIndex, 0, materials[state.activeMaterial].slides.length - 1);
  saveCurrentSlideProgress('', { scrollTo: '.reader' });
}

function moveSlide(direction) {
  const material = materials[state.activeMaterial];
  const next = state.activeSlide + direction;

  if (next < 0) {
    commit('Ini slide pertama.', { sync: false });
    return;
  }

  if (next >= material.slides.length) {
    commit('Semua slide sudah terbuka. Kamu bisa mulai kuis.', { sync: false });
    return;
  }

  state.activeSlide = next;
  saveCurrentSlideProgress('', { scrollTo: '.reader' });
}

function startQuiz(materialIndex = state.activeMaterial) {
  state.screen = 'app';
  state.activePage = 'quiz-run';
  state.quiz = createQuizState(clamp(materialIndex, 0, materials.length - 1));
  commit(`Kuis ${materials[state.quiz.materialIndex].title} dimulai.`, { sync: false, scrollTo: '.question-card' });
}

function selectQuizAnswer(index) {
  if (state.quiz.finished) return;
  const quiz = state.quiz;
  const material = materials[quiz.materialIndex];
  const question = material.quiz[quiz.questionIndex];

  quiz.answers[quiz.questionIndex] = { selected: index, correct: index === question.answer };
  quiz.selected = index;
  commit('', { sync: false });
}

function moveQuestion(direction) {
  const quiz = state.quiz;
  const next = quiz.questionIndex + direction;

  if (direction > 0 && !quiz.answers[quiz.questionIndex]) {
    commit('Pilih jawaban dulu sebelum lanjut.', { sync: false });
    return;
  }

  if (next < 0) {
    commit('Ini soal pertama.', { sync: false });
    return;
  }

  if (next >= quiz.answers.length) {
    finishQuiz();
    return;
  }

  const answered = quiz.answers[next];
  quiz.questionIndex = next;
  quiz.selected = answered?.selected ?? null;
  quiz.submitted = false;
  commit('', { sync: false, scrollTo: '.question-card' });
}

function finishQuiz() {
  const quiz = state.quiz;
  if (quiz.finished) return;

  const material = materials[quiz.materialIndex];
  const answered = quiz.answers.filter(Boolean).length;

  if (answered < material.quiz.length) {
    commit('Selesaikan semua soal dulu.', { sync: false });
    return;
  }

  quiz.correctCount = quiz.answers.filter((answer) => answer?.correct).length;
  quiz.xpEarned = quiz.correctCount * XP_PER_CORRECT;

  const score = Math.round((quiz.correctCount / material.quiz.length) * 100);
  const previous = state.progress.quizAttempts[material.id] || { attempts: 0, best: 0 };
  state.progress.quizAttempts[material.id] = {
    attempts: previous.attempts + 1,
    best: Math.max(previous.best, score),
    last: score,
  };
  state.progress.quizHistory.unshift({
    material: material.title,
    date: new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date()),
    score,
    correct: quiz.correctCount,
    total: material.quiz.length,
    xp: quiz.xpEarned,
  });
  state.progress.quizHistory = state.progress.quizHistory.slice(0, 30);
  if (quiz.xpEarned > 0) {
    addXp(quiz.xpEarned, `XP kuis: ${material.title}`);
  }
  addActivity(`Kuis selesai: ${material.title}`, `${score} nilai`);
  quiz.finished = true;
  commit('Kuis selesai. Hasil tersimpan ke progres.', { scrollToTop: 'smooth' });
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function brand() {
  return `
    <div class="brand">
      <span class="brand-mark">${icon('monitor', 30)}</span>
      <span><b>Infora</b><strong>Informatika SMK</strong></span>
    </div>
  `;
}

function landing() {
  return `
    <main class="landing">
      <header class="topbar">
        ${brand()}
        <nav aria-label="Navigasi utama">
          <a href="#beranda">Beranda</a>
          <a href="#fitur">Fitur</a>
          <a href="#tentang">Tentang</a>
          <a href="#cara-pakai">Cara Pakai</a>
          <button class="outline small" data-screen="login">${icon('login', 18)} Login</button>
        </nav>
      </header>

      <section class="hero" id="beranda">
        <div class="hero-copy">
          <span class="eyebrow">Infora - media pembelajaran interaktif</span>
          <h1>Membantu siswa SMK belajar Informatika lewat slide, kuis, XP, dan progres.</h1>
          <p>Belajar materi sesuai kebutuhan Informatika SMK, mulai dari sistem komputer, perakitan, jaringan, pemrograman, basis data, sampai keamanan digital.</p>
          <div class="actions">
            <button class="filled" data-screen="register">${icon('user', 19)} Daftar Sekarang</button>
            <button class="outline" data-demo="true">${icon('play', 19)} Coba Demo</button>
          </div>
        </div>
        <div class="hero-visual" aria-label="Ilustrasi aplikasi Infora">
          <div class="visual-window">
            <span class="window-dot coral"></span>
            <span class="window-dot amber"></span>
            <span class="window-dot green"></span>
            <div class="code-line wide"></div>
            <div class="code-line medium"></div>
            <div class="code-line short"></div>
            <div class="network-map">
              <span></span><span></span><span></span><span></span>
            </div>
          </div>
          <div class="floating-card xp-card">${icon('bolt', 24)} +10 XP</div>
          <div class="floating-card quiz-card">${icon('note', 24)} 8 materi</div>
        </div>
      </section>

      <section class="landing-band" id="fitur">
        ${feature('book', 'Materi Slide', `Setiap slide yang dibuka otomatis tersimpan dan menambah ${XP_PER_SLIDE} XP.`)}
        ${feature('bolt', 'XP Belajar', `Materi yang selesai memberi bonus ${XP_PER_MATERIAL} XP untuk menjaga motivasi belajar.`)}
        ${feature('note', 'Kuis Per Materi', `Setiap jawaban benar bernilai ${XP_PER_CORRECT} XP dan hasilnya direkap setelah kuis selesai.`)}
      </section>

      <section class="info-band" id="tentang">
        <div>
          <span class="eyebrow">Tentang Infora</span>
          <h2>Infora berfokus pada pembelajaran Informatika SMK yang ringkas, interaktif, dan mudah diikuti.</h2>
          <p>Aplikasi ini membantu siswa memahami konsep, menguatkan latihan, dan melihat perkembangan belajar dari satu tempat.</p>
        </div>
        <div class="info-list">
          <p><strong>Fokus SMK</strong><span>Materi dekat dengan praktik komputer, jaringan, basis data, pemrograman, dan keamanan.</span></p>
          <p><strong>Interaktif</strong><span>Belajar melalui slide, kuis, feedback, XP, progres, dan pencapaian.</span></p>
          <p><strong>Mandiri</strong><span>Siswa dapat melanjutkan materi, melihat riwayat, dan mengevaluasi hasil kuis.</span></p>
        </div>
      </section>

      <section class="steps-band" id="cara-pakai">
        ${stepCard('1', 'Pilih materi', 'Buka materi Informatika SMK sesuai topik yang ingin dipelajari.')}
        ${stepCard('2', 'Kerjakan kuis', 'Jawab latihan soal dan lihat pembahasan setelah kuis selesai.')}
        ${stepCard('3', 'Pantau progres', 'Cek XP, grafik, riwayat kuis, dan pencapaian belajar.')}
      </section>
    </main>
  `;
}

function feature(iconName, title, body) {
  return `
    <article class="feature-card">
      <span class="feature-icon">${icon(iconName, 28)}</span>
      <h2>${title}</h2>
      <p>${body}</p>
    </article>
  `;
}

function stepCard(number, title, body) {
  return `
    <article class="step-card">
      <span>${number}</span>
      <h3>${title}</h3>
      <p>${body}</p>
    </article>
  `;
}

function auth(mode) {
  if (mode === 'forgot') return forgotPasswordPage();

  const isRegister = mode === 'register';
  return `
    <main class="auth-page">
      <section class="auth-visual" aria-hidden="true">
        <div class="auth-device">
          ${icon('user', 82)}
          <span>Akun belajar membantu progresmu tersimpan rapi.</span>
        </div>
      </section>
      <form class="auth-card" id="auth-form" data-mode="${mode}">
        <button class="ghost back-home" type="button" data-screen="landing">${icon('left', 17)} Beranda</button>
        <h1>${isRegister ? 'Daftar Infora' : 'Login Infora'}</h1>
        <p>${isRegister ? 'Buat akun baru agar progres belajarmu tersimpan.' : 'Masuk dengan akun yang sudah terdaftar.'}</p>
        ${
          isRegister
            ? '<label>Nama Lengkap<input id="name" autocomplete="name" placeholder="Masukkan nama lengkap" required></label>'
            : ''
        }
        <label>Email<input id="email" type="email" autocomplete="email" placeholder="Masukkan email" required></label>
        <label>Password<input id="password" type="password" autocomplete="${isRegister ? 'new-password' : 'current-password'}" placeholder="Masukkan password" required minlength="4"></label>
        ${!isRegister ? '<button class="linklike" type="button" data-screen="forgot">Lupa Password?</button>' : ''}
        ${state.authNotice ? `<div class="auth-notice">${escapeHtml(state.authNotice)}</div>` : ''}
        <button class="filled full" type="submit">${isRegister ? icon('user', 18) + ' Daftar' : icon('login', 18) + ' Login'}</button>
        <p class="switcher">
          ${isRegister ? 'Sudah punya akun?' : 'Belum punya akun?'}
          <button type="button" data-screen="${isRegister ? 'login' : 'register'}">${isRegister ? 'Login' : 'Daftar'}</button>
        </p>
      </form>
    </main>
  `;
}

function forgotPasswordPage() {
  return `
    <main class="auth-page">
      <section class="auth-visual" aria-hidden="true">
        <div class="auth-device reset-device">
          ${icon('mail', 82)}
          <span>Fitur lupa password aktif sebagai kode reset demo.</span>
        </div>
      </section>
      <form class="auth-card forgot-card" id="forgot-form">
        <button class="ghost back-home" type="button" data-screen="login">${icon('left', 17)} Kembali Login</button>
        <h1>Lupa Password</h1>
        <p>Masukkan email akun untuk mendapatkan kode reset demo.</p>
        <label>Email<input id="forgot-email" type="email" autocomplete="email" placeholder="Masukkan email terdaftar" required></label>
        ${state.authNotice ? `<div class="auth-notice">${escapeHtml(state.authNotice)}</div>` : ''}
        <button class="filled full" type="submit">${icon('mail', 18)} Kirim Kode Reset</button>
      </form>
    </main>
  `;
}

function shell(content) {
  const items = [
    ['dashboard', 'Dashboard', 'home'],
    ['materi-list', 'Materi', 'book'],
    ['kuis-list', 'Kuis', 'note'],
    ['progres', 'Progres', 'chart'],
    ['profil', 'Profil', 'user'],
  ];

  return `
    <main class="app-shell">
      <aside class="sidebar">
        ${brand()}
        <nav aria-label="Menu aplikasi">
          ${items
            .map(([key, label, iconName]) => {
              const active = pageGroup(state.activePage) === pageGroup(key);
              return `
                <button class="${active ? 'active' : ''}" data-page="${key}">
                  ${icon(iconName, 22)} <span>${label}</span>
                </button>
              `;
            })
            .join('')}
        </nav>
        <div class="sidebar-level">
          <span>Level ${level()}</span>
          <strong>${state.progress.xp} XP</strong>
          <meter min="0" max="140" value="${state.progress.xp % 140 || (state.progress.xp ? 140 : 0)}"></meter>
        </div>
        <button class="logout" data-logout="true">${icon('logout', 22)} Keluar</button>
      </aside>
      <section class="content">${content}</section>
      ${state.toast ? `<div class="toast">${escapeHtml(state.toast)}</div>` : ''}
    </main>
  `;
}

function pageGroup(page) {
  if (page.includes('material') || page.includes('materi')) return 'materi';
  if (page.includes('quiz') || page.includes('kuis')) return 'kuis';
  if (page.includes('riwayat') || page === 'progres') return 'progres';
  return page;
}

function dashboard() {
  const nextMaterial = materials.findIndex((_, index) => materialTotalPercent(index) < 100);
  const continueIndex = nextMaterial === -1 ? 0 : nextMaterial;

  return `
    <section class="page dashboard-page">
      <div class="page-kicker">Dashboard Infora</div>
      <h1>Halo, ${escapeHtml(firstName(state.user.name))}!</h1>
      <p class="lead">Pilih materi, baca slide, lalu kerjakan kuis untuk mengumpulkan XP.</p>

      <div class="metric-row">
        ${metric('Level', String(level()), 'star')}
        ${metric('Total XP', String(state.progress.xp), 'bolt')}
        ${metric('Progres', `${overallProgress()}%`, 'target')}
        ${metric('Kuis selesai', String(state.progress.quizHistory.length), 'trophy')}
      </div>

      <div class="hero-dashboard">
        <div>
          <span class="eyebrow">Rekomendasi hari ini</span>
          <h2>${materials[continueIndex].title}</h2>
          <p>${materials[continueIndex].subtitle}</p>
          <div class="actions">
            <button class="filled" data-open-material="${continueIndex}">${icon('book', 18)} Lanjutkan Materi</button>
            <button class="outline" data-start-quiz="${continueIndex}">${icon('play', 18)} Mulai Kuis</button>
          </div>
        </div>
        <div class="dashboard-art" aria-hidden="true">
          <span>${icon(materials[continueIndex].visual, 64)}</span>
          <strong>${materialTotalPercent(continueIndex)}%</strong>
        </div>
      </div>

      <div class="section-title">
        <h2>Daftar Materi Pilihan</h2>
        <button class="ghost" data-page="materi-list">Buka Semua ${icon('right', 16)}</button>
      </div>
      <div class="dashboard-material-grid">
        ${materials.slice(0, 4).map((material, index) => materialCard(material, index, 'material')).join('')}
      </div>
    </section>
  `;
}

function metric(label, value, iconName) {
  return `
    <article class="metric-card">
      <span>${icon(iconName, 22)} ${label}</span>
      <strong>${value}</strong>
    </article>
  `;
}

function materialCard(material, index, mode) {
  const progress = materialTotalPercent(index);
  const isQuiz = mode === 'quiz';
  return `
    <article class="catalog-card" style="--accent: ${material.accent}">
      ${visualArt(material)}
      <div class="catalog-card-body">
        <span class="pill">${material.badge}</span>
        <h3>${material.title}</h3>
        <p>${material.subtitle}</p>
        <div class="mini-stats">
          <span>${material.slides.length} slide</span>
          <span>${material.quiz.length} soal</span>
          <span>${isQuiz ? `Best ${quizBest(index)}%` : `${progress}%`}</span>
        </div>
        <meter min="0" max="100" value="${progress}"></meter>
        <div class="card-actions">
          ${
            isQuiz
              ? `<button class="filled small" data-start-quiz="${index}">${icon('play', 17)} Mulai Kuis</button>
                 <button class="outline small" data-open-material="${index}">${icon('book', 17)} Baca Materi</button>`
              : `<button class="filled small" data-open-material="${index}">${icon('book', 17)} Buka Slide</button>
                 <button class="outline small" data-start-quiz="${index}">${icon('note', 17)} Kuis</button>`
          }
        </div>
      </div>
    </article>
  `;
}

function visualArt(material, currentSlide = null, slideIndex = 0) {
  const imageName = currentSlide?.image || material.image;
  const label = currentSlide ? `${currentSlide.heading} - ${material.title}` : material.title;

  return `
    <figure class="lesson-image image-${imageName}" style="--slide-order: ${slideIndex % 5}" aria-label="Gambar pendukung ${label}">
      <img src="./src/assets/materials/${imageName}.png" alt="Gambar pendukung ${label}">
      ${currentSlide ? `<figcaption>${currentSlide.heading}</figcaption>` : ''}
    </figure>
  `;
}

function materialListPage() {
  return `
    <section class="page catalog-page">
      <div class="page-heading">
        <div>
          <div class="page-kicker">Katalog materi</div>
          <h1>Daftar Materi Infora</h1>
        </div>
      </div>
      <div class="catalog-grid">
        ${materials.map((material, index) => materialCard(material, index, 'material')).join('')}
      </div>
    </section>
  `;
}

function materialDetailPage() {
  const selected = materials[state.activeMaterial];
  const slide = selected.slides[state.activeSlide];
  const slideProgress = materialSlidePercent(state.activeMaterial);
  const isViewed = Boolean(state.progress.viewedSlides[slideKey(state.activeMaterial, state.activeSlide)]);

  return `
    <section class="page material-page">
      <div class="page-heading">
        <div>
          <button class="ghost back-home" data-page="materi-list">${icon('left', 17)} Daftar Materi</button>
          <div class="page-kicker">Materi belajar</div>
          <h1>${selected.title}</h1>
          <p>${selected.subtitle}</p>
        </div>
        <div class="progress-mini">
          <span>Slide selesai</span>
          <meter min="0" max="100" value="${slideProgress}"></meter>
          <strong>${slideProgress}%</strong>
        </div>
      </div>

      <article class="reader" style="--accent: ${selected.accent}">
        <div class="slide-top">
          <span class="pill">${selected.badge}</span>
          <span>Slide ${state.activeSlide + 1} / ${selected.slides.length}</span>
        </div>
        <div class="reader-main">
          ${visualArt(selected, slide, state.activeSlide)}
          <div class="reader-copy">
            <h2>${slide.heading}</h2>
            <p>${slide.body}</p>
            <ul>${slide.bullets.map((item) => `<li>${item}</li>`).join('')}</ul>
            <div class="reader-note">
              ${icon('check', 22)}
              <span>${slide.keyPoint}</span>
            </div>
          </div>
        </div>
        <div class="slide-dots" aria-label="Navigasi slide">
          ${selected.slides
            .map(
              (_, index) => `
                <button class="${state.activeSlide === index ? 'active' : ''} ${state.progress.viewedSlides[slideKey(state.activeMaterial, index)] ? 'viewed' : ''}" data-slide="${index}" aria-label="Slide ${index + 1}"></button>
              `,
            )
            .join('')}
        </div>
        <div class="reader-actions">
          <button class="outline small" data-slide-step="-1">${icon('left', 17)} Sebelumnya</button>
          <button class="outline small" data-slide-step="1">Selanjutnya ${icon('right', 17)}</button>
          <button class="filled small" data-start-quiz="${state.activeMaterial}">${icon('play', 17)} Mulai Kuis</button>
        </div>
      </article>
    </section>
  `;
}

function quizListPage() {
  return `
    <section class="page catalog-page">
      <div class="page-heading">
        <div>
          <div class="page-kicker">Katalog kuis</div>
          <h1>Pilih Kuis Materi</h1>
        </div>
      </div>
      <div class="catalog-grid">
        ${materials.map((material, index) => materialCard(material, index, 'quiz')).join('')}
      </div>
    </section>
  `;
}

function quizRunPage() {
  const quiz = state.quiz;
  const material = materials[quiz.materialIndex];

  if (quiz.finished) return quizResult();

  const question = material.quiz[quiz.questionIndex];
  const answered = quiz.answers[quiz.questionIndex];
  const selectedIndex = answered?.selected ?? quiz.selected;
  const hasSelected = Number.isInteger(selectedIndex);
  const answeredCount = quiz.answers.filter(Boolean).length;
  const percent = Math.round(((quiz.questionIndex + 1) / material.quiz.length) * 100);

  return `
    <section class="page quiz-page">
      <div class="page-heading">
        <div>
          <button class="ghost back-home" data-page="kuis-list">${icon('left', 17)} Daftar Kuis</button>
          <div class="page-kicker">Kuis interaktif</div>
          <h1>${material.title}</h1>
          <p>Setiap jawaban benar menambah ${XP_PER_CORRECT} XP.</p>
        </div>
        <div class="progress-mini">
          <span>Soal ${quiz.questionIndex + 1} / ${material.quiz.length}</span>
          <meter min="0" max="100" value="${percent}"></meter>
          <strong>${answeredCount} terjawab</strong>
        </div>
      </div>

      <article class="question-card ${hasSelected ? 'has-selected' : ''}">
        <span class="pill">${material.badge}</span>
        <h2>${question.question}</h2>
        <div class="answers">
          ${question.options
            .map((option, index) => {
              const isSelected = selectedIndex === index;
              return `
                <button class="${isSelected ? 'selected' : ''}" data-answer="${index}" aria-pressed="${isSelected}">
                  ${icon(isSelected ? 'check' : 'circle', 23)}
                  <span>${String.fromCharCode(65 + index)}. ${option}</span>
                </button>
              `;
            })
            .join('')}
        </div>
        <div class="reader-actions quiz-actions">
          <button class="outline small" data-prev-question="true">${icon('left', 17)} Sebelumnya</button>
          <button class="outline small quiz-next ${hasSelected ? 'ready' : ''}" data-next-question="true" ${hasSelected ? '' : 'disabled'}>${quiz.questionIndex === material.quiz.length - 1 ? 'Lihat Hasil' : 'Selanjutnya'} ${icon('right', 17)}</button>
        </div>
      </article>
    </section>
  `;
}

function quizResult() {
  const quiz = state.quiz;
  const material = materials[quiz.materialIndex];
  const score = Math.round((quiz.correctCount / material.quiz.length) * 100);

  return `
    <section class="page quiz-page">
      <article class="result-panel">
        <span class="result-icon">${icon('trophy', 64)}</span>
        <div class="page-kicker">Hasil kuis</div>
        <h1>${material.title}</h1>
        <p>Kamu menjawab ${quiz.correctCount} dari ${material.quiz.length} soal dengan benar.</p>
        <div class="metric-row result-metrics">
          ${metric('Nilai', `${score}%`, 'target')}
          ${metric('XP kuis', `+${quiz.xpEarned}`, 'bolt')}
          ${metric('Best score', `${quizBest(quiz.materialIndex)}%`, 'star')}
        </div>
        ${answerReview(material, quiz)}
        <div class="actions center">
          <button class="filled" data-retry-quiz="${quiz.materialIndex}">${icon('refresh', 18)} Ulangi Kuis</button>
          <button class="outline" data-page="progres">${icon('chart', 18)} Lihat Progres</button>
          <button class="outline" data-page="kuis-list">${icon('note', 18)} Daftar Kuis</button>
        </div>
      </article>
    </section>
  `;
}

function answerReview(material, quiz) {
  return `
    <div class="answer-review">
      ${material.quiz
        .map((question, index) => {
          const answer = quiz.answers[index];
          const selected = answer ? question.options[answer.selected] : 'Belum dijawab';
          const correct = question.options[question.answer];
          return `
            <article class="${answer?.correct ? 'correct' : 'wrong'}">
              <span>${answer?.correct ? icon('check', 18) : icon('close', 18)}</span>
              <div>
                <strong>${index + 1}. ${question.question}</strong>
                <p>Jawaban kamu: ${selected}</p>
                ${answer?.correct ? '' : `<p>Jawaban benar: ${correct}</p>`}
                <small>${question.explanation}</small>
              </div>
            </article>
          `;
        })
        .join('')}
    </div>
  `;
}

function progressPage() {
  const points = materials.map((_, index) => {
    const x = 54 + index * 38;
    const y = 132 - materialTotalPercent(index);
    return [x, clamp(y, 30, 132)];
  });

  return `
    <section class="page progress-page">
      <div class="page-heading">
        <div>
          <div class="page-kicker">Analitik belajar</div>
          <h1>Progres Belajar</h1>
        </div>
      </div>

      <div class="progress-top">
        <article class="progress-card">
          <h2>Ringkasan</h2>
          <div class="donut" style="--value: ${overallProgress()};"><span>${overallProgress()}%</span></div>
          <strong>Total progres</strong>
          <span>${materials.filter((_, index) => materialTotalPercent(index) === 100).length} / ${materials.length} materi tuntas</span>
        </article>
        <article class="progress-card wide">
          <div class="card-title flush">
            <h2>Grafik Progress</h2>
            <span class="chart-caption">Sumbu Y: persentase progres materi</span>
          </div>
          <svg class="progress-chart" viewBox="0 0 390 190" role="img" aria-label="Grafik progress belajar dengan angka">
            <text x="8" y="34">100%</text>
            <text x="16" y="84">50%</text>
            <text x="22" y="136">0%</text>
            <line x1="48" x2="360" y1="32" y2="32"></line>
            <line x1="48" x2="360" y1="82" y2="82"></line>
            <line x1="48" x2="360" y1="132" y2="132"></line>
            <polyline points="${points.map((point) => point.join(',')).join(' ')}"></polyline>
            ${points
              .map(
                ([x, y], index) => `
                  <circle cx="${x}" cy="${y}" r="5"></circle>
                  <text class="point-label" x="${x - 10}" y="${y - 10}">${materialTotalPercent(index)}%</text>
                  <text class="x-label" x="${x - 8}" y="162">M${index + 1}</text>
                `,
              )
              .join('')}
          </svg>
        </article>
      </div>

      <div class="material-progress-list">
        ${materials
          .map(
            (material, index) => `
              <article style="--accent: ${material.accent}">
                <span>${icon(material.visual, 22)}</span>
                <strong>${material.title}</strong>
                <meter min="0" max="100" value="${materialTotalPercent(index)}"></meter>
                <small>${materialTotalPercent(index)}%</small>
              </article>
            `,
          )
          .join('')}
      </div>

      <article class="table-card">
        <div class="card-title">
          <h2>Riwayat Kuis Terbaru</h2>
          <button data-page="riwayat-kuis">Lihat Semua</button>
        </div>
        ${historyTable(state.progress.quizHistory.slice(0, 5))}
      </article>
    </section>
  `;
}

function historyPage() {
  return `
    <section class="page history-page">
      <div class="page-heading">
        <div>
          <button class="ghost back-home" data-page="progres">${icon('left', 17)} Kembali Progres</button>
          <div class="page-kicker">Riwayat lengkap</div>
          <h1>Daftar Riwayat Kuis</h1>
        </div>
      </div>
      <article class="table-card history-table-card">
        ${historyTable(state.progress.quizHistory)}
      </article>
    </section>
  `;
}

function historyTable(rows) {
  const history = rows.length ? rows : [{ material: 'Belum ada kuis', date: '-', score: 0, correct: 0, total: 10, xp: 0 }];
  return `
    <table>
      <thead>
        <tr><th>Materi</th><th>Tanggal</th><th>Benar</th><th>Skor</th><th>XP</th></tr>
      </thead>
      <tbody>
        ${history
          .map((row) => `<tr><td>${row.material}</td><td>${row.date}</td><td>${row.correct}/${row.total}</td><td>${row.score}%</td><td>+${row.xp} XP</td></tr>`)
          .join('')}
      </tbody>
    </table>
  `;
}

function profileClassName() {
  return state.user.className || state.progress.profileMeta?.className || '';
}

function profileSchool() {
  return state.user.school || state.progress.profileMeta?.school || '';
}

function reportAchievements() {
  return [
    { label: 'Mulai Infora', unlocked: true, iconName: 'star' },
    { label: 'Pembaca Slide', unlocked: totalViewedSlides() >= 1, iconName: 'book' },
    { label: 'Rajin Membaca', unlocked: totalViewedSlides() >= 12, iconName: 'layers' },
    { label: 'Kuis Pertama', unlocked: state.progress.quizHistory.length > 0, iconName: 'note' },
    { label: 'Skor 80+', unlocked: state.progress.quizHistory.some((item) => item.score >= 80), iconName: 'target' },
    { label: 'XP 300', unlocked: state.progress.xp >= 300, iconName: 'bolt' },
    { label: 'Progres 50%', unlocked: overallProgress() >= 50, iconName: 'chart' },
    { label: 'Progres 75%', unlocked: overallProgress() >= 75, iconName: 'trophy' },
    { label: 'Ahli Basis Data', unlocked: quizBest(6) >= 70, iconName: 'database' },
    { label: 'Sadar Keamanan', unlocked: quizBest(7) >= 70, iconName: 'shield' },
  ];
}

function reportMaterialRows() {
  return materials.map((material, index) => ({
    title: material.title,
    slides: `${viewedSlideCount(index)}/${material.slides.length}`,
    progress: materialTotalPercent(index),
    quizBest: quizBest(index),
    status: materialTotalPercent(index) >= 100 ? 'Tuntas' : materialTotalPercent(index) >= 50 ? 'Berjalan' : 'Perlu lanjut',
  }));
}

function reportLearningMinutes() {
  const slideMinutes = totalViewedSlides() * 2;
  const quizMinutes = state.progress.quizHistory.length * 5;
  const completedBonus = materials.filter((material) => state.progress.completedMaterials[material.id]).length * 3;
  return slideMinutes + quizMinutes + completedBonus;
}

function formatLearningTime(minutes) {
  if (minutes <= 0) return 'Belum ada aktivitas tercatat';
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (!hours) return `${minutes} menit`;
  return `${hours} jam ${rest} menit`;
}

function reportQuizSummary() {
  const history = state.progress.quizHistory;
  const totalQuestions = history.reduce((sum, item) => sum + Number(item.total || 0), 0);
  const correct = history.reduce((sum, item) => sum + Number(item.correct || 0), 0);
  const wrong = Math.max(totalQuestions - correct, 0);
  const average = history.length ? Math.round(history.reduce((sum, item) => sum + Number(item.score || 0), 0) / history.length) : 0;
  return { history, totalQuestions, correct, wrong, average };
}

function reportInsights(rows) {
  const attempted = rows.filter((row) => row.quizBest > 0 || row.progress > 0);
  const strongest = attempted.slice().sort((a, b) => b.quizBest + b.progress - (a.quizBest + a.progress))[0];
  const weakest = rows
    .filter((row) => row.progress < 70 || row.quizBest < 70)
    .sort((a, b) => a.quizBest + a.progress - (b.quizBest + b.progress))
    .slice(0, 2);

  return {
    strong: strongest
      ? `Siswa unggul pada materi ${strongest.title} dengan progres ${strongest.progress}% dan nilai kuis terbaik ${strongest.quizBest}%.`
      : 'Siswa mulai membangun dasar pembelajaran melalui aktivitas awal di Infora.',
    need:
      weakest.length > 0
        ? `Siswa perlu memahami lebih lanjut bagian ${weakest.map((item) => item.title).join(' dan ')}.`
        : 'Siswa menunjukkan progres merata pada seluruh materi yang tersedia.',
  };
}

function reportQuote() {
  const quotes = [
    'Belajar bertahap hari ini membangun kemampuan besar esok hari.',
    'Setiap slide yang dipahami adalah langkah menuju kompetensi baru.',
    'Teruskan progresmu, karena konsistensi adalah kunci belajar.',
    'Kesalahan saat kuis adalah petunjuk untuk belajar lebih tepat.',
  ];
  return quotes[(new Date().getDate() + level()) % quotes.length];
}

function buildReportData() {
  const materialRows = reportMaterialRows();
  const quiz = reportQuizSummary();
  const unlockedAchievements = reportAchievements().filter((item) => item.unlocked).map((item) => item.label);
  const completedCount = materialRows.filter((row) => row.progress >= 100).length;
  const totalQuest = completedCount + state.progress.quizHistory.length;
  const totalSlides = materials.reduce((sum, material) => sum + material.slides.length, 0);
  const insight = reportInsights(materialRows);
  const printedAt = new Intl.DateTimeFormat('id-ID', { dateStyle: 'long', timeStyle: 'short' }).format(new Date());

  return {
    user: {
      name: state.user.name || 'Siswa Demo',
      email: state.user.email || 'Mode demo',
      className: profileClassName() || 'Belum diisi',
      school: profileSchool() || 'Belum diisi',
    },
    printedAt,
    level: level(),
    xp: state.progress.xp,
    overall: overallProgress(),
    totalSlides,
    viewedSlides: totalViewedSlides(),
    completedCount,
    totalQuest,
    materialRows,
    quiz,
    unlockedAchievements,
    reward: [`Level ${level()}`, `${state.progress.xp} XP`, `${unlockedAchievements.length} achievement`],
    studyTime: formatLearningTime(reportLearningMinutes()),
    insight,
    quote: reportQuote(),
  };
}

function safeFileName(value) {
  return String(value || 'siswa')
    .replace(/[^a-z0-9]+/gi, '_')
    .replace(/^_+|_+$/g, '')
    .slice(0, 48)
    .toLowerCase();
}

function learningReportPanel() {
  return `
    <article class="learning-report-card">
      <div>
        <span class="report-badge">${icon('file', 18)} Progress report</span>
        <h2>Cetak Hasil Pembelajaran</h2>
        <p>Laporan PDF bergaya rapor game edukasi berisi identitas, XP, level, progres, kuis, achievement, reward, dan ringkasan hasil belajar.</p>
      </div>
      <div class="report-actions">
        <button class="filled" data-report-action="download-main">${icon('download', 18)} CETAK LAPORAN</button>
        <button class="outline" data-report-action="preview">${icon('eye', 18)} Preview PDF</button>
        <button class="outline" data-report-action="download">${icon('download', 18)} Download PDF</button>
        <button class="outline" data-report-action="print">${icon('printer', 18)} Print Langsung</button>
      </div>
      ${
        state.reportGenerating
          ? `<div class="report-loading" role="status" aria-live="polite">
              <div class="report-spinner"></div>
              <span>${escapeHtml(state.reportMessage || 'Creating report...')}</span>
              <meter min="0" max="100" value="${state.reportProgress}"></meter>
              <small>${state.reportProgress}% generating</small>
            </div>`
          : ''
      }
    </article>
  `;
}

function reportPreviewModal() {
  const report = buildReportData();
  return `
    <div class="report-preview-modal" role="dialog" aria-modal="true" aria-label="Preview laporan PDF">
      <div class="report-preview-toolbar">
        <strong>Preview Laporan PDF</strong>
        <div>
          <button class="outline small" data-report-action="download">${icon('download', 16)} Download</button>
          <button class="outline small" data-report-action="print">${icon('printer', 16)} Print</button>
          <button class="filled small" data-close-report-preview="true">${icon('close', 16)} Tutup</button>
        </div>
      </div>
      <section class="report-sheet">
        <header>
          <div class="report-logo">I</div>
          <div>
            <span>Infora - Informatika SMK</span>
            <h2>LAPORAN HASIL PEMBELAJARAN</h2>
            <p>Progress report game edukasi</p>
          </div>
        </header>
        <div class="report-user-grid">
          <p><b>Nama</b><span>${escapeHtml(report.user.name)}</span></p>
          <p><b>Email</b><span>${escapeHtml(report.user.email)}</span></p>
          <p><b>Kelas</b><span>${escapeHtml(report.user.className)}</span></p>
          <p><b>Sekolah</b><span>${escapeHtml(report.user.school)}</span></p>
          <p><b>Tanggal cetak</b><span>${escapeHtml(report.printedAt)}</span></p>
        </div>
        <div class="report-stat-grid">
          <p><b>${report.level}</b><span>Total Level</span></p>
          <p><b>${report.xp}</b><span>Total XP</span></p>
          <p><b>${report.overall}%</b><span>Progress</span></p>
          <p><b>${report.totalQuest}</b><span>Quest selesai</span></p>
        </div>
        <div class="report-progress-line"><span style="width:${report.overall}%"></span></div>
        <div class="report-preview-section">
          <h3>Ringkasan Hasil Pembelajaran</h3>
          <p>Siswa telah menyelesaikan ${report.completedCount} dari ${materials.length} materi dan membuka ${report.viewedSlides} dari ${report.totalSlides} slide pembelajaran.</p>
          <p>${escapeHtml(report.insight.strong)}</p>
          <p>${escapeHtml(report.insight.need)}</p>
        </div>
        <div class="report-preview-section">
          <h3>Quiz dan Statistik</h3>
          <p>Kuis selesai: ${report.quiz.history.length}. Rata-rata nilai: ${report.quiz.average}%. Jawaban benar: ${report.quiz.correct}. Jawaban salah: ${report.quiz.wrong}.</p>
        </div>
        <div class="report-preview-section">
          <h3>Pencapaian dan Reward</h3>
          <p>${escapeHtml(report.unlockedAchievements.join(', ') || 'Belum ada achievement terbuka.')}</p>
          <p>Reward: ${escapeHtml(report.reward.join(' | '))}. Total waktu belajar: ${escapeHtml(report.studyTime)}.</p>
        </div>
        <footer>
          <span>${escapeHtml(report.printedAt)}</span>
          <span>${escapeHtml(report.quote)}</span>
        </footer>
      </section>
    </div>
  `;
}

function setReportLoading(active, message = '', progress = 0) {
  state.reportGenerating = active;
  state.reportMessage = message;
  state.reportProgress = progress;
  render();
}

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function getJsPdf() {
  if (window.jspdf?.jsPDF) return Promise.resolve(window.jspdf.jsPDF);

  return new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-jspdf-loader="true"]');
    if (existing) {
      existing.addEventListener('load', () => resolve(window.jspdf.jsPDF), { once: true });
      existing.addEventListener('error', () => reject(new Error('Library PDF gagal dimuat.')), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = './src/vendor/jspdf.umd.min.js';
    script.dataset.jspdfLoader = 'true';
    script.onload = () => (window.jspdf?.jsPDF ? resolve(window.jspdf.jsPDF) : reject(new Error('Library PDF belum siap.')));
    script.onerror = () => reject(new Error('Library PDF gagal dimuat.'));
    document.head.appendChild(script);
  });
}

function addReportFrame(doc) {
  doc.setDrawColor(37, 99, 235);
  doc.setLineWidth(0.7);
  doc.roundedRect(10, 10, 190, 277, 4, 4);
  doc.setDrawColor(22, 163, 74);
  doc.setLineWidth(0.35);
  doc.roundedRect(13, 13, 184, 271, 3, 3);
}

function addReportHeader(doc) {
  doc.setFillColor(37, 99, 235);
  doc.roundedRect(18, 18, 174, 30, 5, 5, 'F');
  doc.setFillColor(255, 255, 255);
  doc.circle(32, 33, 8, 'F');
  doc.setTextColor(37, 99, 235);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.text('I', 30.3, 38);
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text('Infora - Informatika SMK', 45, 29);
  doc.setFontSize(16);
  doc.text('LAPORAN HASIL PEMBELAJARAN', 45, 38);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('Progress report game edukasi', 45, 44);
}

function addReportFooter(doc, report, pageLabel = '') {
  doc.setDrawColor(226, 232, 240);
  doc.line(18, 271, 192, 271);
  doc.setTextColor(100, 116, 139);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text(`Tanggal cetak: ${report.printedAt}`, 18, 277);
  doc.text(report.quote, 18, 282);
  doc.text(pageLabel, 182, 282, { align: 'right' });
}

function addProgressBar(doc, x, y, width, value) {
  const fillWidth = Math.max(0, Math.min(width, (width * value) / 100));
  doc.setFillColor(226, 232, 240);
  doc.roundedRect(x, y, width, 6, 3, 3, 'F');
  doc.setFillColor(22, 163, 74);
  doc.roundedRect(x, y, fillWidth, 6, 3, 3, 'F');
}

function addWrappedText(doc, text, x, y, maxWidth, lineHeight = 5) {
  const lines = doc.splitTextToSize(String(text), maxWidth);
  lines.forEach((line, index) => doc.text(line, x, y + index * lineHeight));
  return y + lines.length * lineHeight;
}

function addReportPill(doc, x, y, label, value, color = [37, 99, 235]) {
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(x, y, 40, 23, 4, 4, 'FD');
  doc.setTextColor(color[0], color[1], color[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text(String(value), x + 20, y + 10, { align: 'center' });
  doc.setTextColor(71, 85, 105);
  doc.setFontSize(7.5);
  doc.text(label, x + 20, y + 18, { align: 'center' });
}

function buildLearningReportPdf(jsPDF) {
  const report = buildReportData();
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

  addReportFrame(doc);
  addReportHeader(doc);

  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('Identitas User', 18, 59);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  const identity = [
    ['Nama', report.user.name],
    ['Email', report.user.email],
    ['Kelas', report.user.className],
    ['Sekolah', report.user.school],
    ['Tanggal cetak', report.printedAt],
  ];
  let y = 66;
  identity.forEach(([label, value]) => {
    doc.setTextColor(100, 116, 139);
    doc.text(label, 20, y);
    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'bold');
    doc.text(String(value), 56, y);
    doc.setFont('helvetica', 'normal');
    y += 7;
  });

  addReportPill(doc, 18, 106, 'Total Level', report.level, [37, 99, 235]);
  addReportPill(doc, 62, 106, 'Total XP', report.xp, [234, 88, 12]);
  addReportPill(doc, 106, 106, 'Progress', `${report.overall}%`, [22, 163, 74]);
  addReportPill(doc, 150, 106, 'Quest selesai', report.totalQuest, [124, 58, 237]);

  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('Progress Pembelajaran', 18, 143);
  addProgressBar(doc, 18, 148, 174, report.overall);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text(`${report.viewedSlides}/${report.totalSlides} slide dipelajari | ${report.completedCount}/${materials.length} materi tuntas | ${report.quiz.history.length} quiz selesai`, 18, 160);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('Hasil Pembelajaran', 18, 175);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  y = addWrappedText(
    doc,
    `Siswa telah menyelesaikan pembelajaran pada ${report.completedCount} materi dan memperoleh rata-rata nilai quiz ${report.quiz.average}%.`,
    18,
    184,
    174,
  );
  y = addWrappedText(doc, report.insight.strong, 18, y + 3, 174);
  y = addWrappedText(doc, report.insight.need, 18, y + 3, 174);

  doc.setFont('helvetica', 'bold');
  doc.text('Aktivitas dan Reward', 18, y + 10);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  y = addWrappedText(doc, `Total waktu belajar: ${report.studyTime}. Reward yang didapat: ${report.reward.join(', ')}.`, 18, y + 19, 174);
  y = addWrappedText(doc, `Achievement terbuka: ${report.unlockedAchievements.join(', ') || 'Belum ada achievement terbuka.'}`, 18, y + 3, 174);

  doc.setDrawColor(203, 213, 225);
  doc.line(120, 246, 185, 246);
  doc.setTextColor(100, 116, 139);
  doc.setFontSize(8);
  doc.text('Tanda tangan guru/orang tua', 133, 252);
  addReportFooter(doc, report, 'Halaman 1');

  doc.addPage();
  addReportFrame(doc);
  addReportHeader(doc);
  y = 62;
  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('Daftar Materi dan Progress', 18, y);
  y += 9;
  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105);
  doc.text('Materi', 18, y);
  doc.text('Slide', 105, y);
  doc.text('Progress', 132, y);
  doc.text('Quiz', 160, y);
  doc.text('Status', 181, y, { align: 'right' });
  y += 3;
  doc.setDrawColor(226, 232, 240);
  doc.line(18, y, 192, y);
  y += 7;

  report.materialRows.forEach((row) => {
    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.text(doc.splitTextToSize(row.title, 78), 18, y);
    doc.setFont('helvetica', 'normal');
    doc.text(row.slides, 105, y);
    doc.text(`${row.progress}%`, 132, y);
    doc.text(`${row.quizBest}%`, 160, y);
    doc.text(row.status, 181, y, { align: 'right' });
    addProgressBar(doc, 18, y + 3, 164, row.progress);
    y += 13;
  });

  y += 5;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('Quiz yang Sudah Diselesaikan', 18, y);
  y += 9;
  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105);
  doc.text('Materi', 18, y);
  doc.text('Tanggal', 92, y);
  doc.text('Benar/Salah', 132, y);
  doc.text('Nilai', 168, y);
  y += 3;
  doc.line(18, y, 192, y);
  y += 7;

  const quizRows = report.quiz.history.length
    ? report.quiz.history.slice(0, 9)
    : [{ material: 'Belum ada quiz selesai', date: '-', correct: 0, total: 0, score: 0 }];

  quizRows.forEach((row) => {
    const wrong = Math.max(Number(row.total || 0) - Number(row.correct || 0), 0);
    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text(doc.splitTextToSize(row.material, 68), 18, y);
    doc.text(String(row.date), 92, y);
    doc.text(`${row.correct}/${wrong}`, 132, y);
    doc.text(`${row.score}%`, 168, y);
    y += 9;
  });

  y += 4;
  doc.setFillColor(239, 246, 255);
  doc.setDrawColor(191, 219, 254);
  doc.roundedRect(18, y, 174, 29, 4, 4, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(37, 99, 235);
  doc.text('Statistik Jawaban', 24, y + 9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(15, 23, 42);
  doc.text(`Benar: ${report.quiz.correct} | Salah: ${report.quiz.wrong} | Rata-rata quiz: ${report.quiz.average}%`, 24, y + 18);
  addReportFooter(doc, report, 'Halaman 2');

  return { doc, report };
}

async function runReportAction(action) {
  if (action === 'preview') {
    state.reportPreviewOpen = true;
    render();
    scrollToTarget('.report-preview-modal', 'smooth');
    return;
  }

  if (state.reportGenerating) return;

  try {
    setReportLoading(true, 'Mengumpulkan data pembelajaran...', 20);
    await wait(240);
    const jsPDF = await getJsPdf();
    setReportLoading(true, 'Menyusun progress report...', 52);
    await wait(260);
    const { doc, report } = buildLearningReportPdf(jsPDF);
    setReportLoading(true, 'Creating report...', 82);
    await wait(260);

    const fileName = `laporan-infora-${safeFileName(report.user.name)}.pdf`;
    if (action === 'print') {
      doc.autoPrint();
      const blobUrl = doc.output('bloburl');
      const printWindow = window.open(blobUrl, '_blank');
      if (!printWindow) doc.save(fileName);
      flash('Laporan siap dicetak.');
    } else {
      doc.save(fileName);
      flash('PDF laporan berhasil diunduh.');
    }
  } catch (error) {
    flash(error.message || 'Laporan PDF belum bisa dibuat.');
  } finally {
    setReportLoading(false, '', 0);
  }
}

function profilePage() {
  const activities = state.showAllActivities ? state.progress.activities : state.progress.activities.slice(0, 6);
  const className = profileClassName();
  const school = profileSchool();
  const achievements = reportAchievements();

  return `
    <section class="page profile-page">
      <div class="page-heading">
        <div>
          <div class="page-kicker">Profil siswa</div>
          <h1>${escapeHtml(state.user.name)}</h1>
          <p>${escapeHtml(state.user.email || 'Mode demo')}</p>
        </div>
        <button class="filled small" data-edit-profile="true">${icon('edit', 17)} ${state.profileEditing ? 'Tutup Edit' : 'Edit Profil'}</button>
      </div>

      ${
        state.profileEditing
          ? `<form class="profile-form" id="profile-form">
              <label>Nama<input id="profile-name" value="${escapeHtml(state.user.name)}" required></label>
              <label>Email<input id="profile-email" type="email" value="${escapeHtml(state.user.email)}" required></label>
              <label>Kelas<input id="profile-class" value="${escapeHtml(className)}" placeholder="Contoh: XI RPL 1"></label>
              <label>Sekolah<input id="profile-school" value="${escapeHtml(school)}" placeholder="Contoh: SMK Negeri 1"></label>
              <button class="filled" type="submit">${icon('check', 18)} Simpan Profil</button>
            </form>`
          : ''
      }

      <div class="profile-top">
        <article class="identity-card">
          <div class="avatar">${icon('user', 44)}</div>
          <span>
            <strong>${escapeHtml(state.user.name)}</strong>
            <small>${escapeHtml(state.user.email || 'Akun demo')}</small>
            <small>${escapeHtml(className || 'Kelas belum diisi')} | ${escapeHtml(school || 'Sekolah belum diisi')}</small>
          </span>
        </article>
        ${metric('Level', String(level()), 'star')}
        ${metric('Total XP', String(state.progress.xp), 'bolt')}
      </div>

      ${learningReportPanel()}
      ${state.reportPreviewOpen ? reportPreviewModal() : ''}

      <div class="split-grid">
        <article class="achievement-card">
          <h2>Pencapaian</h2>
          <div class="badges achievement-scroll">
            ${achievements.map((item) => achievement(item.label, item.unlocked, item.iconName)).join('')}
          </div>
        </article>
        <article class="activity-card">
          <div class="card-title">
            <h2>Aktivitas Terbaru</h2>
            <button data-show-activities="true">${state.showAllActivities ? 'Ringkas' : 'Lihat Semua'}</button>
          </div>
          ${activities
            .map(
              (item) =>
                `<p><span>${escapeHtml(item.label)}<small>${escapeHtml(item.meta)}</small></span><time>${escapeHtml(item.time)}</time></p>`,
            )
            .join('')}
        </article>
      </div>
    </section>
  `;
}

function totalViewedSlides() {
  return Object.keys(state.progress.viewedSlides).length;
}

function achievement(label, unlocked, iconName) {
  return `
    <div class="${unlocked ? 'unlocked' : ''}">
      ${icon(iconName, 34)}
      <span>${label}</span>
      <small>${unlocked ? 'Terbuka' : 'Terkunci'}</small>
    </div>
  `;
}

function appContent() {
  if (state.activePage === 'materi-list') return materialListPage();
  if (state.activePage === 'material-detail') return materialDetailPage();
  if (state.activePage === 'kuis-list') return quizListPage();
  if (state.activePage === 'quiz-run') return quizRunPage();
  if (state.activePage === 'progres') return progressPage();
  if (state.activePage === 'riwayat-kuis') return historyPage();
  if (state.activePage === 'profil') return profilePage();
  return dashboard();
}

function render() {
  const root = document.querySelector('#root');
  if (state.screen === 'landing') root.innerHTML = landing();
  if (state.screen === 'login' || state.screen === 'register' || state.screen === 'forgot') root.innerHTML = auth(state.screen);
  if (state.screen === 'app') root.innerHTML = shell(appContent());
}

document.addEventListener('click', (event) => {
  const target = event.target.closest('button');
  if (!target) return;

  if (target.dataset.screen) {
    state.screen = target.dataset.screen;
    state.authNotice = '';
    commit('', { sync: false, scrollToTop: 'smooth' });
    return;
  }

  if (target.dataset.demo) {
    state.user = { id: null, name: 'Siswa Demo', email: '' };
    state.progress = defaultProgress();
    state.quiz = createQuizState(0);
    state.activeMaterial = 0;
    state.activeSlide = 0;
    state.profileEditing = false;
    state.showAllActivities = false;
    state.reportPreviewOpen = false;
    state.reportGenerating = false;
    state.reportProgress = 0;
    state.reportMessage = '';
    state.authNotice = '';
    state.screen = 'app';
    state.activePage = 'dashboard';
    commit('Mode demo dimulai dari awal.', { sync: false, scrollToTop: 'smooth' });
    return;
  }

  if (target.dataset.page) {
    state.screen = 'app';
    state.activePage = target.dataset.page;
    state.reportPreviewOpen = false;
    commit('', { sync: false, scrollToTop: 'smooth' });
    return;
  }

  if (target.dataset.openMaterial) {
    selectMaterial(Number(target.dataset.openMaterial));
    return;
  }

  if (target.dataset.slide) {
    state.activeSlide = Number(target.dataset.slide);
    saveCurrentSlideProgress('', { scrollToTop: 'smooth' });
    return;
  }

  if (target.dataset.slideStep) {
    moveSlide(Number(target.dataset.slideStep));
    return;
  }

  if (target.dataset.startQuiz) {
    startQuiz(Number(target.dataset.startQuiz));
    return;
  }

  if (target.dataset.answer) {
    selectQuizAnswer(Number(target.dataset.answer));
    return;
  }

  if (target.dataset.nextQuestion) {
    moveQuestion(1);
    return;
  }

  if (target.dataset.prevQuestion) {
    moveQuestion(-1);
    return;
  }

  if (target.dataset.retryQuiz) {
    startQuiz(Number(target.dataset.retryQuiz));
    return;
  }

  if (target.dataset.showActivities) {
    state.showAllActivities = !state.showAllActivities;
    commit('', { sync: false });
    return;
  }

  if (target.dataset.editProfile) {
    state.profileEditing = !state.profileEditing;
    commit('', { sync: false });
    return;
  }

  if (target.dataset.reportAction) {
    runReportAction(target.dataset.reportAction);
    return;
  }

  if (target.dataset.closeReportPreview) {
    state.reportPreviewOpen = false;
    commit('', { sync: false });
    return;
  }

  if (target.dataset.logout) {
    state.screen = 'landing';
    state.activePage = 'dashboard';
    state.authNotice = '';
    state.reportPreviewOpen = false;
    commit('Kamu sudah keluar dari aplikasi.', { sync: false, scrollToTop: 'smooth' });
  }
});

document.addEventListener('submit', async (event) => {
  if (event.target.id === 'auth-form') {
    event.preventDefault();
    const mode = event.target.dataset.mode;
    const name = document.querySelector('#name')?.value.trim() || '';
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value;

    try {
      const data = await apiPost(mode === 'register' ? '/api/register' : '/api/login', { name, email, password });
      state.user = data.user;
      state.progress = normalizeProgress(data.progress);
      state.screen = 'app';
      state.activePage = 'dashboard';
      state.authNotice = '';
      commit(data.message || `Selamat belajar, ${firstName(state.user.name)}.`);
    } catch (error) {
      state.authNotice = `${error.message} Pastikan aplikasi dibuka melalui localhost.`;
      commit('', { sync: false });
    }
    return;
  }

  if (event.target.id === 'forgot-form') {
    event.preventDefault();
    const email = document.querySelector('#forgot-email').value.trim();
    try {
      const data = await apiPost('/api/forgot-password', { email });
      state.authNotice = data.message;
    } catch (error) {
      state.authNotice = `${error.message} Pastikan aplikasi dibuka melalui localhost.`;
    }
    commit('', { sync: false });
    return;
  }

  if (event.target.id === 'profile-form') {
    event.preventDefault();
    const name = document.querySelector('#profile-name').value.trim();
    const email = document.querySelector('#profile-email').value.trim();
    const className = document.querySelector('#profile-class')?.value.trim() || '';
    const school = document.querySelector('#profile-school')?.value.trim() || '';
    state.user = { ...state.user, name, email, className, school };
    state.progress.profileMeta = { className, school };
    state.profileEditing = false;
    addActivity('Profil diperbarui', email);
    commit('Profil berhasil disimpan.');
  }
});

render();
