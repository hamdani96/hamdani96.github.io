Vue.component("do-stock", function (resolve) {
  fetch("./templates/do-stock.html")
    .then((res) => res.text())
    .then((html) => {
      resolve({
        template: html,
        data() {
          return {
            stokList: [],
            kategoriList: [],
            upbjjList: [],

            // form tambah
            form: {
              kode: "",
              judul: "",
              kategori: "",
              upbjj: "",
              lokasiRak: "",
              qty: 0,
              safety: 0,
              harga: 0,
              catatanHTML: "",
            },

            // filter
            filter: {
              kategori: "",
              upbjj: "",
              reOrder: false, // filter stok menipis/0
            },

            // sort
            sortKey: "", // "judul", "qty", "harga"
            sortAsc: true, // ascending / descending

            editingKode: null,
          };
        },

        computed: {
          filteredStok() {
            let list = this.stokList;

            // filter kategori
            if (this.filter.kategori) {
              list = list.filter(
                (item) => item.kategori === this.filter.kategori
              );
            }

            // filter UPBJJ
            if (this.filter.upbjj) {
              list = list.filter((item) => item.upbjj === this.filter.upbjj);
            }

            // filter re-order
            if (this.filter.reOrder) {
              list = list.filter(
                (item) => item.qty === 0 || item.qty < item.safety
              );
            }

            // sort
            if (this.sortKey) {
              list = list.slice().sort((a, b) => {
                let valA = a[this.sortKey];
                let valB = b[this.sortKey];

                if (typeof valA === "string") valA = valA.toLowerCase();
                if (typeof valB === "string") valB = valB.toLowerCase();

                if (valA < valB) return this.sortAsc ? -1 : 1;
                if (valA > valB) return this.sortAsc ? 1 : -1;
                return 0;
              });
            }

            return list;
          },
        },

        methods: {
          async loadData() {
            this.stokList = await api.getStok();
            this.kategoriList = await api.getKategori();
            this.upbjjList = await api.getUPBJJ();
          },

          tambahStok() {
            this.stokList.push({ ...this.form });

            iziToast.success({
              title: "Berhasil",
              message: "Data stok berhasil ditambahkan",
            });

            this.resetForm();
          },

          resetForm() {
            this.form = {
              kode: "",
              judul: "",
              kategori: "",
              upbjj: "",
              lokasiRak: "",
              qty: 0,
              safety: 0,
              harga: 0,
              catatanHTML: "",
            };
          },

          resetFilter() {
            this.filter = {
              kategori: "",
              upbjj: "",
              reOrder: false,
            };
          },

          editQty(kode) {
            this.editingKode = kode;
          },

          finishEdit() {
            this.editingKode = null;
          },

          toggleSort(key) {
            if (this.sortKey === key) {
              this.sortAsc = !this.sortAsc; // toggle arah sort
            } else {
              this.sortKey = key;
              this.sortAsc = true;
            }
          },

          konfirmasiHapus(kode) {
            iziToast.question({
              timeout: 20000,
              close: true,
              overlay: true,
              displayMode: "once",
              title: "Konfirmasi",
              message: "Apakah Anda yakin ingin menghapus data bahan ajar ini?",
              position: "center",
              buttons: [
                [
                  "<button>Ya</button>",
                  (instance, toast) => {
                    this.hapusStok(kode);
                    instance.hide(
                      { transitionOut: "fadeOut" },
                      toast,
                      "button"
                    );
                  },
                ],
                [
                  "<button>Tidak</button>",
                  function (instance, toast) {
                    instance.hide(
                      { transitionOut: "fadeOut" },
                      toast,
                      "button"
                    );
                  },
                ],
              ],
            });
          },

          hapusStok(kode) {
            this.stokList = this.stokList.filter((item) => item.kode !== kode);

            iziToast.success({
              title: "Berhasil",
              message: "Data bahan ajar berhasil dihapus",
            });
          },
        },

        async created() {
          await this.loadData();
        },
      });
    });
});
