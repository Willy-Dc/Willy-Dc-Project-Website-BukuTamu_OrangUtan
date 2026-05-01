<?php
include 'koneksi.php';

// Ambil data dari form
$nama      = $_POST['nama'];
$hp        = $_POST['hp'];
$instansi  = $_POST['instansi'];
$alamat    = $_POST['alamat'];
$keperluan = $_POST['keperluan'];

// Query simpan
$query = "INSERT INTO kunjungan 
(nama, hp, instansi, alamat, keperluan)
VALUES 
('$nama','$hp','$instansi','$alamat','$keperluan')";

// Eksekusi
if (mysqli_query($conn, $query)) {
    echo "<script>
            alert('Data berhasil disimpan!');
            window.location='kunjungan.html';
          </script>";
} else {
    echo "Gagal: " . mysqli_error($conn);
}
?>