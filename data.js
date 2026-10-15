/* =========================================================
   data.js -- isi ensiklopedi
   ========================================================= */
window.DATA = (function () {
  "use strict";

  /* ---------- WILAYAH / PERSEBARAN ---------- */
  var WILAYAH = [
    {
      id: "w1",
      nama: "Tenun Ikat",
      sub: "Sumba dan Flores",
      daerah: "Nusa Tenggara Timur",
      zona: "NTT",
      teknik: "Ikat / warp ikat",
      bahan: "Kapas, indigo",
      warna: "Indigo, merah tanah, kuning kunyit, putih kapur",
      motif: "Belah ketupat, saddul, roh",
      tahun: "Warisan tak bertanggal",
      lead: "Benang diikat satu per satu sebelum dianyam, lalu diwarnai bersama. Karena itu batas warnanya selalu sedikit kabur. Bagi pengrajin, kabur itu bukan cacat, melainkan bukti tangan manusia ada di dalamnya.",
      makna: "Bentuk belah ketupat dibaca sebagai dua hal yang selalu berpasangan. Motif bagian dalam menandai batas; motif bagian luar menandai perjalanan. Kain menjadi peta antara dunia yang ditinggali dan dunia yang dituju.",
      poin: [
        "Ikat dibentuk manual satu per satu, bisa ratusan titik dalam satu kepeng",
        "Pewarna alam dari indigo, akar mengkudu, dan daun jati",
        "Motif sosial dibaca lewat bentuk, bukan tulisan"
      ],
      palet: "sumba",
      motifType: "ketupat",
      border: true
    },
    {
      id: "w2",
      nama: "Ulos",
      sub: "Batak Toba",
      daerah: "Sumatera Utara",
      zona: "Sumatera",
      teknik: "Tenun ATBM / songket shuttle",
      bahan: "Serat sutra, benang emas",
      warna: "Merah bata, hitam, putih, hijau, emas",
      motif: "Ragi na metoh, sulur, ulos pangsi",
      tahun: "Kerajaan Batak, abad ke-19",
      lead: "Ulos menyimpan silsilah keluarga. Setiap jenis ulos punya nama, pemakai, dan fungsinya sendiri: kain untuk penghormatan, kain untuk seragam, dan kain yang dipinjamkan saat acara adat.",
      makna: "Pita merah yang membelah kain diibaratkan sebagai sumbu arah. Ulos punya awal dan ada akhir. Motifnya bukan hiasan, melainkan peta keluarga.",
      poin: [
        "Warna emas ditenun dengan teknik ATBM, bukan disulam",
        "Ragi na metoh melambangkan kerukunan dan kasih sayang",
        "Tiga fungsi resmi: kain adat, seragam, dan kain penghormatan"
      ],
      palet: "batak",
      motifType: "ulos",
      border: true
    },
    {
      id: "w3",
      nama: "Songket",
      sub: "Palembang dan Melayu",
      daerah: "Sumatera Selatan, Kalimantan, Maluku",
      zona: "Sumatera",
      teknik: "Songket (sulam benang emas)",
      bahan: "Serat sutra, benang emas",
      warna: "Merah marun, hijau, emas, krem",
      motif: "Beskap, tampuk manggis",
      tahun: "Kesultanan Sriwijaya",
      lead: "Kata songket berasal dari Minangkabau, sungket, yang berarti menyulam dengan benang emas. Songket selalu punya nilai yang tinggi dan sering dipakai untuk gaun, hadap dekorasi, serta seragam keraton.",
      makna: "Motif beskap disusun menyerupai sisik ikan yang tertata rapi. Diibaratkan sebagai kesatuan yang baik: setiap individu berpadu menjadi satu bulatan dan tidak saling menutupi.",
      poin: [
        "Tidak semua songket memakai emas, sebagian sengaja polos",
        "Nilai ditentukan motif dan kerapatan, bukan bahan",
        "Songket Palembang warnanya lebih gelap daripada songket Melayu"
      ],
      palet: "palembang",
      motifType: "beskap",
      border: true
    },
    {
      id: "w4",
      nama: "Sasag",
      sub: "Batak Karo",
      daerah: "Sumatera Utara",
      zona: "Sumatera",
      teknik: "Tenun dengan shuttle",
      bahan: "Kapas, sutra",
      warna: "Merah, hitam, putih, kuning, hijau",
      motif: "Sasag rapat",
      tahun: "Masyarakat Karo",
      lead: "Sasag adalah tenun dengan motif berulang yang sangat rapat, tanpa ruang kosong. Karo membaca tenun sebagai sesuatu yang harus ditampilkan penuh tanpa ada yang disembunyikan.",
      makna: "Motif sasag mengambil bentuk pelepah daun dan tubuh manusia yang disederhanakan. Bentuk yang rapat dibaca sebagai kejujuran: tidak ada ruang untuk menyembunyikan sesuatu.",
      poin: [
        "Jumlah baris menentukan nilai dan keanggunan tenun",
        "Dipakai sebagai hadap depan pada ritual adat",
        "Motifnya rapat sekali, menjadi ciri khas Karo"
      ],
      palet: "karo",
      motifType: "sasag",
      border: true
    },
    {
      id: "w5",
      nama: "Lurik",
      sub: "Jawa",
      daerah: "Jawa Tengah, Yogyakarta, Jawa Timur",
      zona: "Jawa",
      teknik: "Tenun ATBM / lugs",
      bahan: "Kapas, linen, pandan",
      warna: "Biru laut, putih, merah bata, cokelat",
      motif: "Garis lurus, lurik kapur, lurik delapan",
      tahun: "Abad ke-19",
      lead: "Lurik sepenuhnya tanpa bentuk, hanya garis. Justru karena itu ia paling mudah dipelajari dan paling cepat turun ke generasi muda. Lurik adalah pintu masuk paling sederhana ke dunia tenun.",
      makna: "Garis lurus dibaca sebagai sawah dan halaman: keteraturan, disiplin, dan pengulangan. Seri indigo tertentu dibaca sebagai warna penenang dan pelindung.",
      poin: [
        "Motifnya tidak punya nama, hanya jenis warna dan jumlah garis",
        "Lurik indigo paling mudah dijangkau secara harga",
        "Banyak dipakai untuk seragam sekolah dan dinas"
      ],
      palet: "jawa",
      motifType: "lurik",
      border: false
    },
    {
      id: "w6",
      nama: "Tenun Warpatah",
      sub: "Banten dan Priangan",
      daerah: "Banten, Jawa Barat",
      zona: "Jawa",
      teknik: "Tenun ATBM / sody dyeng",
      bahan: "Kapas, sutra",
      warna: "Biru, merah marun, krem, emas",
      motif: "Kawung, ceplok, naga",
      tahun: "Kesultanan Banten",
      lead: "Warpatah berasal dari kata warta, tanah, karena dulu seratnya tumbuh di sekitar rumah. Kain ini pesaing utama tenun ikat Jawa: motif lebih halus, warna lebih gelap, dan jauh lebih cepat selesai.",
      makna: "Motif naga dan jaran pada warpatah dibaca sebagai penjaga rumah. Kain dipakai bukan sekadar sebagai pakaian, tetapi sebagai dinding yang memisahkan yang suci dari yang biasa.",
      poin: [
        "Seratnya diolah lebih kasar daripada tenun ikat, karena itu lebih cepat diselesaikan",
        "Warna merahnya pekat dan hasilnya berkilau",
        "Pernah menjadi andalan perdagangan dan pejabat Kesultanan Banten"
      ],
      palet: "banten",
      motifType: "kawung",
      border: true
    },
    {
      id: "w7",
      nama: "Lasima",
      sub: "Bugis dan Makassar",
      daerah: "Sulawesi Selatan",
      zona: "Sulawesi",
      teknik: "Tenun adat / kepang",
      bahan: "Kapas, sutra, benang emas",
      warna: "Hitam, emas, merah, putih, hijau",
      motif: "Jlamprang, kattoa, bandang",
      tahun: "Kerajaan Bugis",
      lead: "Lasima adalah tenun adat yang paling dihormati di Bugis. Motifnya bukan sekadar dekorasi, tetapi kosmologi: lingkungan dan jenis tempat dikunci ke dalam pola geometris yang berulang.",
      makna: "Motif jlamprang dibaca sebagai perjalanan panjang yang tak pernah putus. Karena Bugis adalah etnik pelayar, motif ini juga dibaca sebagai jalur pulang: kompas yang diubah menjadi gambar.",
      poin: [
        "Warna emas mendominasi dan dipakai untuk upacara resmi",
        "Setiap Bone punya versi motif lasima sendiri",
        "Motifnya kerap dibandingkan dengan peta kuno"
      ],
      palet: "sulsel",
      motifType: "jlamprang",
      border: true
    },
    {
      id: "w8",
      nama: "Tais",
      sub: "Timor dan Rote",
      daerah: "Nusa Tenggara Timur, Nusa Tenggara Barat",
      zona: "NTT",
      teknik: "Ikat dan tenun pitral",
      bahan: "Kapas, sutra, dakron (kontemporer)",
      warna: "Merah, kuning, hitam, putih, hijau",
      motif: "Sapu tangan, ikat tangguh",
      tahun: "Abad ke-18",
      lead: "Tais adalah kain yang paling dekat dengan keseharian di Timor. Ia sering dipakai sebagai selimut dan kain pinggang, tidak seperti songket yang dipakai untuk upacara besar.",
      makna: "Motif tangan yang menangkap tikus dan mata dibaca sebagai penjaga pintu rumah. Motif merah menandakan keberanian penghuni, motif hitam menjaga batas halaman.",
      poin: [
        "Ada versi untuk ritual dan versi untuk keseharian",
        "Kini banyak yang memakai dakron agar lebih kuat",
        "Dijual sebagai sarung, gaun, tas, dan pelapis"
      ],
      palet: "timor",
      motifType: "ikat",
      border: true
    },
    {
      id: "w9",
      nama: "Nitto",
      sub: "Rote, Sabu, Nageke",
      daerah: "Nusa Tenggara Timur",
      zona: "NTT",
      teknik: "Ikat lintar dan lungs",
      bahan: "Kapas, sutra",
      warna: "Biru, merah, kuning, cokelat tua",
      motif: "Ketupat, pola kotak bersusun",
      tahun: "Tradisi turun-temurun",
      lead: "Di Rote, tenun nitto bukan kebutuhan hidup, melainkan bahasa. Seseorang bisa dibaca asalnya hanya dari warna dan pola kainnya. Motifnya paling seragam di antara seluruh tenun Nusantara.",
      makna: "Warna biru dibaca sebagai kesetiaan pada tanah, warna kuning sebagai tanda kesuburan. Kombinasi keduanya menjadi penanda wilayah yang tidak boleh dilanggar.",
      poin: [
        "Motif paling seragam di antara seluruh tenun Nusantara",
        "Dipakai sebagai pakaian adat sekaligus busana harian",
        "Fungsinya serbaguna: seragam, selendang, sampai dekorasi"
      ],
      palet: "fuji",
      motifType: "typeeh",
      border: true
    }
  ];

  /* ---------- FILOSOFI MOTIF ---------- */
  var FILOSOFI = [
    {
      no: "01",
      kicker: "Bentuk",
      judul: "Kawung, motif yang tidak pernah berhenti",
      motifType: "kawung",
      palet: "bali",
      label: "Kawung",
      asal: "Jawa dan Bali",
      paragraf: "Kawung adalah motif tertua yang kita kenal. Empat buah pitula ditata bergantian sehingga tidak pernah ada ruang kosong, dan tidak ada satu pun yang menutupi yang lain. Motif ini bukan hasil dekorasi, melainkan cara paling rapi untuk menggambar siklus.",
      pull: "Tidak ada yang menimpa. Tidak ada yang lupa. Hanya ada yang bergantian.",
      cite: "Tafsir motif kawung",
      poin: [
        "Empat pitula dibaca sebagai empat arah mata angin",
        "Susunan matematisnya membuat kain ini tidak pernah gagal ditenun",
        "Boleh berbeda warna, bentuknya tetap sama dari Jawa sampai Bali"
      ]
    },
    {
      no: "02",
      kicker: "Warna",
      judul: "Poleng, dua kekuatan yang tidak boleh menang sendiri",
      motifType: "poleng",
      palet: "bali",
      label: "Poleng",
      asal: "Jawa dan Bali",
      paragraf: "Poleng hanya punya dua warna, tetapi dua warna itu selalu berpasangan. Tidak ada kotak putih yang berdiri sendiri, dan tidak ada kotak hitam yang boleh lebih luas dari pasangannya. Motif paling sederhana sekaligus paling keras tentang kesetimbangan.",
      pull: "Yang penting bukan yang mana yang menang, tetapi bahwa keduanya tetap di tempatnya.",
      cite: "Prasarjana poleng, Makassar",
      poin: [
        "Hitam dan putih dibaca sebagai baik dan buruk, keduanya wajib ada",
        "Bentuk kotak-kotaknya dibaca sebagai ladang dan halaman",
        "Poleng paling sering dipakai di bagian kain yang paling biasa"
      ]
    },
    {
      no: "03",
      kicker: "Pengulangan",
      judul: "Ketupat, empat sisi yang tidak pernah berubah arah",
      motifType: "ketupat",
      palet: "sumba",
      label: "Belah ketupat",
      asal: "Nusa Tenggara Timur",
      paragraf: "Bentuk ketupat muncul di hampir semua tenun Nusantara: di Sumba, di Flores, di Rote. Empat sisinya menggambarkan empat arah dan empat unsur yang harus dilalui supaya sesuatu menjadi utuh.",
      pull: "Sisi bisa diwarnai berbeda, tetapi bentuknya tidak pernah berubah lintas pulau.",
      cite: "Catatan tenun ikat",
      poin: [
        "Empat arah, empat mata angin, empat unsur",
        "Kecil di tengah dan besar di luar: kerendahan hati dimulai dari yang kecil",
        "Dibaca sebagai metafora: jalan panjang yang harus dilalui bertahap"
      ]
    },
    {
      no: "04",
      kicker: "Gerak",
      judul: "Sulur, tumbuhan yang belum selesai tumbuh",
      motifType: "sulur",
      palet: "flores",
      label: "Sulur",
      asal: "Sumba dan Flores",
      paragraf: "Sulur menggambar tumbuhan yang sedang tumbuh dan belum berhenti. Garisnya tidak pernah kembali ke titik awal dan tidak pernah membentuk lingkaran sempurna. Ada maksud di dalam bentuknya.",
      pull: "Tidak ada satu pun sulur yang kembali ke tempat ia mulai. Itu disengaja.",
      cite: "Wacana motif Sumba",
      poin: [
        "Titik awal dan titik akhir sengaja dibedakan",
        "Bentuknya meniru sulur yang sedang merambat",
        "Membentuk pengulangan: bentuk yang sama, arah yang berbeda"
      ]
    },
    {
      no: "05",
      kicker: "Tanah",
      judul: "Pinggan, bingkai yang menjaga isi kain",
      motifType: "typeeh",
      palet: "timor",
      label: "Pinggan / bingkai",
      asal: "Semua daerah",
      paragraf: "Hampir setiap tenun punya pinggan, yaitu bingkai di sekeliling kain. Pinggan bukan hiasan penutup: ia menandai batas antara yang duniawi dan yang sakral, antara yang boleh dipamerkan dan yang disimpan rapat.",
      pull: "Motif yang baik tidak pernah berdiri sendiri. Ia selalu tahu di mana dirinya berhenti.",
      cite: "Tata letak tenun tradisional",
      poin: [
        "Lebar pinggan menandakan tingkat keresmian kain",
        "Setiap daerah punya lebar dan warna pinggan sendiri",
        "Pinggan melindungi motif supaya tidak keluar dari batas"
      ]
    }
  ];

  /* ---------- PROSES ---------- */
  var PROSES = [
    { judul: "Memilin serat", teks: "Kapas atau sutra dipilin oleh tangan, bukan mesin. Serat yang panjang dan rata menentukan seberapa teliti motif bisa dibentuk.", durasi: "3 hari" },
    { judul: "Menyusun ikat", teks: "Untuk tenun ikat, benang diikat satu per satu sesuai motif. Ini tahap paling lama karena ikat tidak bisa dibatalkan.", durasi: "1 sampai 4 bulan" },
    { judul: "Mencelup warna", teks: "Kain dicelup beberapa kali dengan indigo, akar mengkudu, daun jati, atau tanah. Makin banyak lapisan, makin dalam warnanya.", durasi: "2 sampai 8 minggu" },
    { judul: "Menenun", teks: "Pengrajin menenun berjam-jam tanpa mesin. Kain panjang dilipat, bukan digulung, supaya motif di dalamnya tidak pecah.", durasi: "2 sampai 6 bulan" },
    { judul: "Mempoles", teks: "Kain dilumuri damar, dililit, lalu dipukul dengan kayu. Kilau damar membuat motif terlihat jatuh dan kaya.", durasi: "1 sampai 3 hari" }
  ];

  /* ---------- CARA BERKONTRIBUSI ---------- */
  var CARA = [
    {
      judul: "Beli dari pengrajin",
      teks: "Pembelian langsung adalah dukungan paling nyata.",
      icon: '<path d="M4 7h16l-1.5 12H5.5L4 7Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 10V6a3 3 0 0 1 6 0v4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'
    },
    {
      judul: "Belajar satu motif",
      teks: "Kelas singkat di sekolah, kampus, atau desa.",
      icon: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" fill="none" stroke="currentColor" stroke-width="1.6"/>'
    },
    {
      judul: "Dokumentasikan",
      teks: "Foto, tulis, atau unggah cerita motifnya.",
      icon: '<path d="M4 8h3l1.5-2h7L17 8h3v11H4V8Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="13" r="3.2" fill="none" stroke="currentColor" stroke-width="1.6"/>'
    },
    {
      judul: "Kenakan harian",
      teks: "Pakai, bukan hanya pajang. Itu bukti nyata.",
      icon: '<path d="M9 3h6l5 4-2.5 3-2-1.2V21H8.5V8.8l-2 1.2L4 7l5-4Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>'
    }
  ];

  /* ---------- GALERI ---------- */
  var GALERI = [
    { nama: "Lipat Manur", daerah: "Sumba Barat, NTT", motif: "Belah ketupat bersusun", palet: "sumba", motifType: "ketupat", ket: "Lipatan yang menyimpan pesan", zona: "NTT", span: true },
    { nama: "Ulos Gonggong", daerah: "Samosir, Sumatera Utara", motif: "Ragi na metoh", palet: "batak", motifType: "ulos", ket: "Pita yang menjadi jalan pulang", zona: "Sumatera" },
    { nama: "Songket Timbul", daerah: "Palembang, Sumatera Selatan", motif: "Beskap emas", palet: "palembang", motifType: "beskap", ket: "Permata emas di atas dasar krem", zona: "Sumatera" },
    { nama: "Sasag Bulu Burung", daerah: "Karo, Sumatera Utara", motif: "Sasag rapat", palet: "karo", motifType: "sasag", ket: "Bulu burung yang menyimpan kehangatan", zona: "Sumatera" },
    { nama: "Kawung Gede", daerah: "Bali dan Jawa Timur", motif: "Kawung besar", palet: "bali", motifType: "kawung", ket: "Empat arah, satu perjalanan panjang", zona: "Jawa" },
    { nama: "Lurik Indigo", daerah: "Pekalongan, Jawa Tengah", motif: "Garis lurus indigo", palet: "jawa", motifType: "lurik", ket: "Tenun paling mudah ditiru", zona: "Jawa" },
    { nama: "Jlamprang Bone", daerah: "Bone, Sulawesi Selatan", motif: "Meander tanpa sudut", palet: "sulsel", motifType: "jlamprang", ket: "Peta jalur bahari Bugis", zona: "Sulawesi" },
    { nama: "Tais Tangan", daerah: "Kupang, Nusa Tenggara Timur", motif: "Tangan menangkap tikus", palet: "timor", motifType: "ikat", ket: "Penjaga pintu rumah", zona: "NTT" },
    { nama: "Nitto Rojo", daerah: "Rote, Nusa Tenggara Timur", motif: "Ketupat merah dan biru", palet: "fuji", motifType: "typeeh", ket: "Warna sebagai identitas", zona: "NTT", span: true }
  ];

  return {
    wilayah: WILAYAH,
    filosofi: FILOSOFI,
    proses: PROSES,
    cara: CARA,
    galeri: GALERI
  };
})();
