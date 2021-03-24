document.getElementById("testing").innerHTML = "Ini Dari Javascript";

var name = "Dedi Setiawan";
var semester = 8;
var isFreelance = true;
var haven = ["mobil", "motor"];//array
var family = {
    nama: "Anisa Nurul Hakim",
    gender: "Perempuan",
    jabatan: "Istri"
}//object
var bigFamily = [{
    nama: "Anisa Nurul Hakim",
    gender: "Perempuan",
    jabatan: "Istri"
}, {
    nama: "Ahmed Huffadzulhaqq",
    gender: "Laki-laki",
    jabatan: "Anak"
}
];//object of array
var tanggal = new Date();
console.log(typeof name, typeof semester, typeof isFreelance);
console.log(haven);
console.log(family);
console.log(bigFamily);
console.log(bigFamily[1].nama);
console.log(tanggal);