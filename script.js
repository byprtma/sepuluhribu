onload = () => {
  document.body.classList.remove("container");
};

// JavaScript untuk menampilkan gambar setelah tombol ditekan
document.getElementById("myButton").onclick = function() {
    var img = document.getElementById("myImage");
    var button = document.getElementById("myButton");
    var lanjutan = document.getElementById("lanjutan");

    img.style.display = "block"; // Menampilkan gambar
    button.style.display = "none"; // Menyembunyikan tombol setelah diklik

    setTimeout(function() {
        lanjutan.style.display = "block"; // Menampilkan konten lanjutan
    }, 1500); // 2000 milidetik = 2 detik
};
