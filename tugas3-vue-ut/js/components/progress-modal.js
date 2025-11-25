Vue.component('progress-modal', function(resolve) {
    fetch('./templates/progress-modal.html')
        .then(res => res.text())
        .then(html => {
            resolve({
                template: html,
                props: ['show'],
                data() {
                    return {
                        keterangan: ''
                    };
                },
                methods: {
                    simpan() {
                        if (!this.keterangan) {
                            iziToast.warning({ title: 'Peringatan', message: 'Keterangan harus diisi' });
                            return;
                        }
                        this.$emit('save', {
                            waktu: new Date().toLocaleString(),
                            keterangan: this.keterangan
                        });
                        this.keterangan = '';
                    },
                    tutup() {
                        this.$emit('close');
                        this.keterangan = '';
                    }
                }
            });
        });
});
