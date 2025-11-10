// auth
const formLogin = document.querySelector("#form-login");

if (formLogin) {
  formLogin.addEventListener("submit", function (e) {
    e.preventDefault();

    var dataPengguna = [
      {
        id: 1,
        nama: "Rina Wulandari",
        email: "rina@ut.ac.id",
        password: "rina123",
        role: "UPBJJ-UT",
        lokasi: "UPBJJ Jakarta",
      },
      {
        id: 2,
        nama: "Agus Pranoto",
        email: "agus@ut.ac.id",
        password: "agus123",
        role: "UPBJJ-UT",
        lokasi: "UPBJJ Makassar",
      },
      {
        id: 3,
        nama: "Siti Marlina",
        email: "siti@ut.ac.id",
        password: "siti123",
        role: "Puslaba",
        lokasi: "Pusat",
      },
      {
        id: 4,
        nama: "Doni Setiawan",
        email: "doni@ut.ac.id",
        password: "doni123",
        role: "Fakultas",
        lokasi: "FISIP",
      },
      {
        id: 5,
        nama: "Admin SITTA",
        email: "admin@ut.ac.id",
        password: "admin123",
        role: "Administrator",
        lokasi: "Pusat",
      },
    ];

    // var emailValue = "dani@gmail.com";
    // var passwordValue = "dani123";

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // cari user berdasarkan email
    var user = dataPengguna.find(function (u) {
      return u.email === email;
    });

    if (!user) {
      // email tidak ditemukan
      iziToast.error({
        title: "Error",
        message: "Email tidak terdaftar!",
        position: "topRight",
      });
    } else if (user.password !== password) {
      // password salah
      iziToast.error({
        title: "Error",
        message: "Password yang Anda masukkan salah!",
        position: "topRight",
      });
    } else {
      // login berhasil
      iziToast.success({
        title: "Success",
        message: `Login berhasil! Selamat datang, ${user.nama}`,
        position: "topRight",
      });

      // simpan data user di localStorage
      localStorage.setItem("userLogin", JSON.stringify(user));

      setTimeout(function () {
        window.location.href = "dashboard.html";
      }, 1000);
    }
  });
}

// get user login for localstorage
var userLogin = localStorage.getItem("userLogin");

if (userLogin) {
  var user = JSON.parse(userLogin);
  document.getElementById("show-name").textContent = user.nama;
  document.getElementById("show-email").textContent = user.email;

  // greeting
  const greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    const now = new Date();
    const hour = now.getHours();

    let greeting;

    if (hour < 12) {
      greeting = "Pagi";
    } else if (hour < 15) {
      greeting = "Siang";
    } else if (hour < 18) {
      greeting = "Sore";
    } else {
      greeting = "Malam";
    }

    greetingElement.textContent = `Selamat ${greeting} ${user.nama}, hope you’re doing well!`;
  }
}

// Logout function
const logoutBtn = document.querySelector(".logout-btn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("userLogin");

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  });
}

// Dropdown Sidebar
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdown = document.querySelector(".dropdown");

if (dropdown) {
  dropdownToggle.addEventListener("click", () => {
    dropdown.classList.toggle("open");
  });
}

// Tracking
var dataTracking = {
  2023001234: {
    nomorDO: "2023001234",
    nama: "Rina Wulandari",
    status: "Dalam Perjalanan",
    ekspedisi: "JNE",
    tanggalKirim: "2025-08-25",
    paket: "0JKT01",
    total: "Rp 180.000",
    perjalanan: [
      {
        waktu: "2025-08-25 10:12:20",
        keterangan:
          "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka",
      },
      {
        waktu: "2025-08-25 14:07:56",
        keterangan: "Tiba di Hub: TANGERANG SELATAN",
      },
      {
        waktu: "2025-08-25 10:12:20",
        keterangan: "Diteruskan ke Kantor Jakarta Selatan",
      },
    ],
  },
  2023005678: {
    nomorDO: "2023001234",
    nama: "Agus Pranoto",
    status: "Dikirim",
    ekspedisi: "Pos Indonesia",
    tanggalKirim: "2025-08-25",
    paket: "0UPBJJBDG",
    total: "Rp 220.000",
    perjalanan: [
      {
        waktu: "2025-08-25 10:12:20",
        keterangan:
          "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka",
      },
      {
        waktu: "2025-08-25 14:07:56",
        keterangan: "Tiba di Hub: TANGERANG SELATAN",
      },
      {
        waktu: "2025-08-25 16:30:10",
        keterangan: "Diteruskan ke Kantor Kota Bandung",
      },
      {
        waktu: "2025-08-26 12:15:33",
        keterangan: "Tiba di Hub: Kota BANDUNG",
      },
      {
        waktu: "2025-08-26 15:06:12",
        keterangan: "Proses antar ke Cimahi",
      },
      {
        waktu: "2025-08-26 20:00:00",
        keterangan: "Selesai Antar. Penerima: Agus Pranoto",
      },
    ],
  },
};

// fungsi untuk melacak paket
var trackBtn = document.getElementById("track");

if (trackBtn) {
  var informationTracking = document.getElementById("information-tracking");
  var informationTimeline = document.getElementById("information-timeline");

  informationTimeline.style.display = "none";
  informationTracking.style.display = "none";

  trackBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const billing = document.getElementById("billing").value.trim();
    const data = dataTracking[billing];

    if (!billing) {
      iziToast.error({
        title: "Error",
        message: "Mohon masukkan No.DO/Billing!",
        position: "topRight",
      });
      return;
    }

    if (data) {
      informationTracking.style.display = "block";
      informationTimeline.style.display = "block";

      document.getElementById("student-name").textContent = data.nama;
      document.getElementById("status").textContent = data.status;
      document.getElementById(
        "numberDo"
      ).textContent = `No Delivery Order : ${data.nomorDO}`;
      document.getElementById("shipping-date").textContent = data.tanggalKirim;
      document.getElementById("expedition").textContent = data.ekspedisi;
      document.getElementById("package").textContent = data.paket;
      document.getElementById("total").textContent = data.total;

      // timeline
      const timeline = document.getElementById("timeline");
      timeline.innerHTML = "";

      var dataTimeline = "";
      data.perjalanan.forEach((item) => {
        dataTimeline += `
                <div class="timeline-item">
                        <div class="timeline-content">
                            <div class="timeline-text">
                                <p><strong>${item.keterangan}</strong></p>
                            </div>
                            <div class="timeline-date">${item.waktu}</div>
                        </div>
                    </div>
                `;
      });

      timeline.innerHTML = dataTimeline;
    } else {
      iziToast.error({
        title: "Error",
        message: "No.DO/Billing tidak ditemukan!",
        position: "topRight",
      });
    }
  });
}
