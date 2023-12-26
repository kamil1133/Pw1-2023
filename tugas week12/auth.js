// buat fungsi
// ambil nilai username
// ambil nilai password
// kita cek apakah username dan password benar dengan yang kita tentukan nilainya
// jika benar berikan alert berhasi login dan arahkan ke file index
// jika password dan username kosong
// maka berikan alert password dan username kosong
// jika password dan username salah
// tampilkan username dan password salah
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "Fathi" && password == "student-nf23") {
        alert('Anda Berhasil Login');
        window.location="index.html"
        return false;
    }
    else if (username == "" || password=="") {
    alert("username / password tidak boleh koosong")
    return false;
    }
    else{
        alert("username / password yang anda inputkan salah")
    }
}