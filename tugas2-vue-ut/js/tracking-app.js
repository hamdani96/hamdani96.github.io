var app = new Vue({
  el: "#app",
  data: {
    pengirimanList: [
      { kode: "REG", nama: "Reguler (3-5 hari)" },
      { kode: "EXP", nama: "Ekspres (1-2 hari)" }
    ],
    paket: [
      { kode: "PAKET-UT-001", nama: "PAKET IPS Dasar", isi: ["EKMA4116", "EKMA4115"], harga: 120000 },
      { kode: "PAKET-UT-002", nama: "PAKET IPA Dasar", isi: ["BIOL4201", "FISIP4001"], harga: 140000 }
    ],
    tracking: {
      "DO2025-0001": {
        nim: "123456789",
        nama: "Rina Wulandari",
        status: "Dalam Perjalanan",
        ekspedisi: "JNE",
        tanggalKirim: "2025-08-25",
        paket: "PAKET-UT-001",
        total: 120000,
        perjalanan: [
          { waktu: "2025-08-25 10:12:20", keterangan: "Penerimaan di Loket: TANGSEL" },
          { waktu: "2025-08-25 14:07:56", keterangan: "Tiba di Hub: JAKSEL" },
          { waktu: "2025-08-26 08:44:01", keterangan: "Diteruskan ke Kantor Tujuan" }
        ]
      }
    },

    // form tambah
    form: {
      noDO: "DO2025-0002",
      nim: "",
      nama: "",
      ekspedisi: "",
      paket: "",
      totalHarga: 0,
      tanggalKirim: ""
    },

    // data list do
    daftarDO: [
      {
        noDO: "DO2025-0001",
        nim: "123456789",
        nama: "Rina Wulandari",
        ekspedisi: "JNE",
        paket: "PAKET-UT-001",
        total: 120000,
        tanggalKirim: "2025-08-25",
        perjalanan: [
          { waktu: "2025-08-25 10:12:20", keterangan: "Penerimaan di Loket: TANGSEL" },
          { waktu: "2025-08-25 14:07:56", keterangan: "Tiba di Hub: JAKSEL" },
          { waktu: "2025-08-26 08:44:01", keterangan: "Diteruskan ke Kantor Tujuan" }
        ]
      }
    ],

    filterCari: "",

    cariDO: "",
    hasilTracking: null
  },

  computed: {
    // Paket yang sedang dipilih di dropdown
    selectedPaket() {
      return this.paket.find(p => p.kode === this.form.paket) || null;
    },

    // Filter data DO berdasarkan nama atau No DO
    filteredDO() {
      if (!this.filterCari) return this.daftarDO;
      const keyword = this.filterCari.toLowerCase();
      return this.daftarDO.filter(d =>
        d.nama.toLowerCase().includes(keyword) ||
        d.noDO.toLowerCase().includes(keyword)
      );
    }
  },

  methods: {
    // Update harga total saat paket dipilih
    updateHarga() {
      const selected = this.paket.find(p => p.kode === this.form.paket);
      this.form.totalHarga = selected ? selected.harga : 0;
    },

    // save do ke daftar
    simpanDO() {
      if (!this.form.nim || !this.form.nama || !this.form.ekspedisi || !this.form.paket) {
        iziToast.warning({
          title: "Peringatan",
          message: "Mohon lengkapi semua field sebelum menyimpan.",
          position: "topRight"
        });
        return;
      }

      this.daftarDO.push({
        noDO: this.form.noDO,
        nim: this.form.nim,
        nama: this.form.nama,
        ekspedisi: this.form.ekspedisi,
        paket: this.form.paket,
        total: this.form.totalHarga,
        tanggalKirim: this.form.tanggalKirim || new Date().toISOString().split("T")[0]
      });

      iziToast.success({
        title: "Berhasil",
        message: "Data DO berhasil disimpan.",
        position: "topRight"
      });

      // Reset form
      this.form = {
        noDO: "DO2025-" + String(this.daftarDO.length + 1).padStart(4, "0"),
        nim: "",
        nama: "",
        ekspedisi: "",
        paket: "",
        totalHarga: 0,
        tanggalKirim: ""
      };
    },

    // Fungsi cari tracking berdasarkan No DO
    cariTracking() {
      if (!this.cariDO) {
        iziToast.warning({
          title: "Peringatan",
          message: "Masukkan nomor DO terlebih dahulu.",
          position: "topRight"
        });
        return;
      }

      const hasilTracking  = this.tracking[this.cariDO];
      // Jika tidak ada di tracking, cari di daftarDO
  if (hasilTracking) {
    this.hasilTracking = hasilTracking;
  } else {
    const hasilDO = this.daftarDO.find(d => d.noDO === this.cariDO);

    if (hasilDO) {
      this.hasilTracking = {
        ...hasilDO,
        status: "Belum ada tracking",
        perjalanan: []
      };
      iziToast.info({
        title: "Informasi",
        message: "Data DO ditemukan, namun belum memiliki riwayat tracking.",
        position: "topRight"
      });
    } else {
      iziToast.error({
        title: "Tidak ditemukan",
        message: "Nomor DO tidak ditemukan dalam sistem.",
        position: "topRight"
      });
      this.hasilTracking = null;
    }
  }
    }
  }
});
