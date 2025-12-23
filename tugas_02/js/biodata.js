function ubahNama() {
  const input = document.getElementById("inputNama").value.trim();
  if (input === "") {
    showNotification("Nama tidak boleh kosong!", "error");
    return;
  }

  document.getElementById("nama").textContent = input;
}

function gantiProdi() {
  const prodiBaru = document.getElementById("pilihProdi").value;
  if (prodiBaru === "") {
    showNotification("Silakan pilih program studi!", "error");
    return;
  }

  document.getElementById("prodi").textContent = prodiBaru;
}

function simpanBiodata() {
  const nama = document.getElementById("inputNama").value.trim();
  const prodi = document.getElementById("pilihProdi").value;

  if (nama === "" || prodi === "") {
    showNotification(
      "Lengkapi nama dan program studi terlebih dahulu!",
      "error"
    );
    return;
  }

  localStorage.setItem("nama", nama);
  localStorage.setItem("prodi", prodi);
  localStorage.setItem("foto", document.getElementById("fotoProfil").src);

  showNotification("Biodata berhasil disimpan!", "success");
}

function toggleBiodata() {
  const biodata = document.getElementById("biodataContent");
  biodata.style.display =
    biodata.style.display === "none" ? "block" : "none";
}

function uploadFoto() {
  const file = document.getElementById("inputFoto").files[0];
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    showNotification("File harus berupa gambar!", "error");
    return;
  }

  const reader = new FileReader();
  reader.onload = e => {
    document.getElementById("fotoProfil").src = e.target.result;
  };
  reader.readAsDataURL(file);
}

document.addEventListener("DOMContentLoaded", () => {
  const nama = localStorage.getItem("nama");
  const prodi = localStorage.getItem("prodi");
  const foto = localStorage.getItem("foto");

  if (nama) document.getElementById("nama").textContent = nama;
  if (prodi) document.getElementById("prodi").textContent = prodi;
  if (foto) document.getElementById("fotoProfil").src = foto;
});
