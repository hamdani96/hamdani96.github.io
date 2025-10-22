// Ambil elemen penting dari DOM
const form = document.querySelector(".form-create");
const input = document.querySelector(".form-control");
const errorMessage = document.querySelector(".error-message");
const todoListContainer = document.querySelector("ul");

// Event saat form disubmit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    // ambil value input dan mengambaikan spasi di awal dan di akhir
    const taskText = input.value.trim();
                
    // validasi input kosong
    if (taskText === "") {
        errorMessage.style.display = "block";
        return;
    }

    // sembunyikan error kalau input valid
    errorMessage.style.display = "none";

    // buat elemen li baru
    const li = document.createElement("li");
    li.classList.add("todo-list");

    // buat checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // buat span untuk teks tugas
    const span = document.createElement("span");
    span.classList.add("title-check");
    span.textContent = taskText;

    // buat tombol hapus
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn-delete");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    // fungsi untuk menandai tugas selesai
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            span.style.textDecoration = "line-through";
            span.style.color = "#aaa";
        } else {
            span.style.textDecoration = "none";
            span.style.color = "black";
        }
    });

    // muncul alert ketika btn delete di klik
    deleteBtn.addEventListener("click", function () {
        const yakin = confirm("Apakah kamu yakin ingin menghapus tugas ini?");

        if (yakin) {
            li.remove();
        }
    });

    // gabungkan elemen ke dalam li
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // tambahkan ke daftar ul
    todoListContainer.appendChild(li);

    // reset input
    input.value = "";
});
