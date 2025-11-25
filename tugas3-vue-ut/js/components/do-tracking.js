Vue.component("do-tracking", function (resolve) {
  fetch("./templates/do-tracking.html")
    .then((res) => res.text())
    .then((html) => {
      resolve({
        template: html,

        data() {
          return {
            paket: [],
            pengirimanList: [],
            DOList: [],
            form: {
              noDO: "DO2025-0003",
              nim: "",
              nama: "",
              ekspedisi: "",
              paket: "",
              totalHarga: 0,
              tanggalKirim: "",
            },
            selectedPaket: null,
            filterCari: "",
            debouncedFilter: "",
            cariDO: "",
            hasilTracking: null,
            loading: true,
            _timer: null,
            showModalProgress: false,
          };
        },

        mounted() {
          this.loadData();
        },

        methods: {
             formatTanggal(datetime) {
        const date = new Date(datetime);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // bulan 01-12
        const day = String(date.getDate()).padStart(2, '0');         // tanggal 01-31
        const hours = String(date.getHours()).padStart(2, '0');      // 00-23
        const minutes = String(date.getMinutes()).padStart(2, '0');  // 00-59
        const seconds = String(date.getSeconds()).padStart(2, '0');  // 00-59
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },
          async loadData() {
            this.loading = true;
            this.paket = await api.getPaket();
            this.pengirimanList = await api.getPengiriman();
            this.DOList = await api.getTracking();
            this.loading = false;
          },

          updateHarga() {
            this.selectedPaket = this.paket.find(
              (p) => p.kode === this.form.paket
            );
            this.form.totalHarga = this.selectedPaket
              ? this.selectedPaket.harga
              : 0;
          },

          simpanDO() {
            const dataBaru = {
              noDO: this.form.noDO,
              nim: this.form.nim,
              nama: this.form.nama,
              ekspedisi: this.form.ekspedisi,
              paket: this.form.paket,
              tanggalKirim: this.form.tanggalKirim,
              total: this.form.totalHarga,
            };

            this.DOList.push(dataBaru);

            iziToast.success({
              title: "OK",
              message: "Delivery Order berhasil disimpan!",
            });

            // Reset form
            this.form = {
              noDO: "DO2025-" + String(this.DOList.length + 1).padStart(4, "0"),
              nim: "",
              nama: "",
              ekspedisi: "",
              paket: "",
              totalHarga: 0,
              tanggalKirim: "",
            };

            this.form.noDO =
              "DO2025-" + String(this.DOList.length + 1).padStart(4, "0");
          },

          cariTracking() {
            this.hasilTracking =
              this.DOList.find((x) => x.noDO === this.cariDO) || null;
          },

          // Debounce filter input
          onFilterChange() {
            clearTimeout(this._timer);
            this._timer = setTimeout(() => {
              this.debouncedFilter = this.filterCari;
            }, 300);
          },

           tambahProgress(progress) {
        this.hasilTracking.perjalanan.push({
            waktu: this.formatTanggal(new Date()), // pakai format baru
            keterangan: progress.keterangan
        });
        this.showModalProgress = false;
    }
        },

        computed: {
          filteredDO() {
            return this.DOList.filter((item) =>
              item.noDO.includes(this.debouncedFilter)
            );
          },
        },

        watch: {
          filterCari() {
            this.onFilterChange();
          },
        },
      });
    });
});
