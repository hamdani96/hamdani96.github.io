window.api = {
    jsonPath: '/tugas3-vue-ut//data/dataBahanAjar.json',

    async getAllData() {
        const response = await fetch(this.jsonPath);
        if (!response.ok) throw new Error('Gagal memuat data JSON');
        return await response.json();
    },

    async getStok() {
        const data = await this.getAllData();
        return data.stok || [];
    },

    async getTracking() {
        const data = await this.getAllData();
        return data.tracking || [];
    },

    async getPaket() {
        const data = await this.getAllData();
        return data.paket || [];
    },

    async getKategori() {
        const data = await this.getAllData();
        return data.kategoriList || [];
    },

    async getUPBJJ() {
        const data = await this.getAllData();
        return data.upbjjList || [];
    },

    async getPengiriman() {
        const data = await this.getAllData();
        return data.pengirimanList || [];
    }
};
