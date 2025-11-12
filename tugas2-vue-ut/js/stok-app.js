var app = new Vue({
  el: '#app',
  data: {
    upbjjList: ["Jakarta", "Surabaya", "Makassar", "Padang", "Denpasar"],
    kategoriList: ["MK Wajib", "MK Pilihan", "Praktikum", "Problem-Based"],

    stok: [
      {
        kode: "EKMA4116",
        judul: "Pengantar Manajemen",
        kategori: "MK Wajib",
        upbjj: "Jakarta",
        lokasiRak: "R1-A3",
        harga: 65000,
        qty: 28,
        safety: 20,
        catatanHTML: "<em>Edisi 2024, cetak ulang</em>"
      },
      {
        kode: "EKMA4115",
        judul: "Pengantar Akuntansi",
        kategori: "MK Wajib",
        upbjj: "Jakarta",
        lokasiRak: "R1-A4",
        harga: 60000,
        qty: 7,
        safety: 15,
        catatanHTML: "<strong>Cover baru</strong>"
      },
      {
        kode: "BIOL4201",
        judul: "Biologi Umum (Praktikum)",
        kategori: "Praktikum",
        upbjj: "Surabaya",
        lokasiRak: "R3-B2",
        harga: 80000,
        qty: 12,
        safety: 10,
        catatanHTML: "Butuh <u>pendingin</u> untuk kit basah"
      },
      {
        kode: "FISIP4001",
        judul: "Dasar-Dasar Sosiologi",
        kategori: "MK Pilihan",
        upbjj: "Makassar",
        lokasiRak: "R2-C1",
        harga: 55000,
        qty: 2,
        safety: 8,
        catatanHTML: "Stok <i>menipis</i>, prioritaskan reorder"
      }
    ],

    filter: {
      kategori: '',
      upbjj: ''
    },

    form: {
      kode: '',
      judul: '',
      kategori: '',
      upbjj: '',
      lokasiRak: '',
      harga: '',
      qty: '',
      safety: '',
      catatanHTML: ''
    },

    editingKode: null,
  },

  computed: {
    // Filter stok berdasarkan kategori & upbjj
    filteredStok() {
      return this.stok.filter(item => {
        const matchKategori = this.filter.kategori ? item.kategori === this.filter.kategori : true;
        const matchUpbjj = this.filter.upbjj ? item.upbjj === this.filter.upbjj : true;
        return matchKategori && matchUpbjj;
      });
    }
  },

  methods: {
    // Tambah stok baru
    tambahStok() {
      if (!this.form.kode || !this.form.judul) {
        iziToast.warning({
          title: 'Peringatan',
          message: 'Kode dan Judul wajib diisi!',
          position: 'topRight'
        });
        return;
      }

      const sudahAda = this.stok.find(s => s.kode === this.form.kode);
      if (sudahAda) {
        iziToast.error({
          title: 'Duplikat',
          message: 'Kode sudah terdaftar!',
          position: 'topRight'
        });
        return;
      }

      this.stok.push({ ...this.form });
      iziToast.success({
        title: 'Berhasil',
        message: 'Data stok berhasil ditambahkan!',
        position: 'topRight'
      });
      this.resetForm();
    },

    // reset filter
    resetFilter() {
      this.filter = { kategori: '', upbjj: '' };
    },

    // reset form
    resetForm() {
      this.form = {
        kode: '',
        judul: '',
        kategori: '',
        upbjj: '',
        lokasiRak: '',
        harga: '',
        qty: '',
        safety: '',
        catatanHTML: ''
      };
    },

    // edit stok qty
    editQty(kode) {
      this.editingKode = kode;
    },

    finishEdit() {
      if (this.editingKode) {
        iziToast.success({
          title: 'Tersimpan',
          message: 'Stok berhasil diperbarui!',
          position: 'topRight'
        });
      }
      this.editingKode = null;
    }
  }
});
