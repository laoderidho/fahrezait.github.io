// ini hanya Untuk tulisan di dalam ID jika ingin  tahu maka lihat id du html
document.getElementById("ini").innerHTML="Ini adalah Ridho";

// untype javascript bisa mengubah variabel di mana variabel yang baru yang akan di input 
// karena var sudah tidak valid lagi maka ada let

let x = 1234;
    x =" String";

    document.getElementById("ini2").innerHTML=(x);

// const dalam javascript adalah suatu variabel yang tidak bisa di ganti / tidak bisa untype
// karena variabel const adalah tetap dan error jika variabel nya di ganti 
// contoh 

const v = 1234;
    //   v = "String"; di comment karena error jika tidak percaya maka uncoment aja

      document.writeln(v);

// tanda tambah di perlukan untuk membuat penambahan string untuk tipe data  string 

document.getElementById("ini3").innerHTML="Ini adalah Ridho" + " " + "fahreza";

document.writeln("<br><br><br>")
// Operator Aritmatika 

let segitiga = 1/2*3*3;
 

document.writeln("luas segitiga berikut adalah" +" "+ segitiga+"<br>");

// operasi augmented

let hitung = 12;

hitung+= 10;

document.writeln("hasil hitung 12+ 10 =" + hitung +"<br>"); //ini adalah hasil hitung sama seperti 
// hitung = 10+2;

// operator unary adalah operator yang menggunaka penambahan angka 
// contoh 

let result = +1;

    result ++;

    document.getElementById("ini4").innerHTML="hasil dari unary berikut adalah" + " "+ result;

// operasi perbandingan 

let hitung1 = 12 =="12";

    document.writeln(hitung1); //berniai true / benar jika perbandingan nilai memang sama 

let hitung2 = 12==="12";

    document.writeln(hitung2); //bernilai false karena tipe data tidak sama. 
    // berbeda dengan yang tadi jika simbol = ada 3 kali maka lebih spesifik tipe datanya 

// Operator Logika adalah operator perbandingan menggunakan logika matematika 
// ada yang di namakan && (and), || (or/ atau), ! (negasi atau tidak sama dengan)
// operator tersebut akan bernilai seperti coding di bawah ini 

const nilaiujian = 70;
const nilaiabsensi = 80;

const lulusujian = nilaiujian >=70;
const lulusabsensi = nilaiabsensi >=70;

const hasil = lulusujian && lulusabsensi;

    document.getElementById("ini5").innerHTML= "jika bernilai true maka lulus kali ini "+hasil;
    // hasil tersebut true jika lulus ujian dan lulus absensi bernilai true 
    // jika salah satu hasil bernilai false maka nilai berifat false 

    const nilaiuji = 30;
    const nilaiabsen = 80;
    
    const lulusuji = nilaiuji >=70;
    const lulusabsen = nilaiabsen >=70;
    
    const hitung3 = lulusuji || lulusabsen;
    document.getElementById("ini6").innerHTML= "jika bernilai true maka lulus kali ini "+hitung3;

    // hasil tersebut bernilai true karena salah satu dari elemen tersbut bernilai true 
    // jika hasil tersebut dua duanya false maka hasilnya false 

    const aku1 = 30;
    const aku2 = 50;

    const saya1= aku1 != aku2;

    document.writeln(saya1);

    // bernilai true jika nilai saling false satu sama lain 

// console adalah suatu debug atau hasil dari program anda tanpa mengganggu user 
// hasil dari console akan muncul jika kita mengklik inspeksi dalam web browser kita

console.log("Hello word");
console.info("Hello Ridho");
console.warn("ini peringatan"); //untuk pengingat
console.error("ini error"); //jika untuk hal errror

// string template menggunakan tanda backtip `` dalam kodenya untuk menambahkan variabel
// sama seperti tanda + untuk menambahkan string tapi ini lebih memakan sedikit waktu 
// contoh 

const namadepan= "La Ode";
const namatengah= "Ridho";
const namabelakang ="Fahreza";
const nilai = 80;
const namalengkap = `"Nama Lengkap = " ${namadepan} ${namatengah} ${namabelakang} Nilai ${nilai>70}`;

console.log(namalengkap);

const pre = `saya adalah Ridho
mahasiswa di Unai
Dan kerja Sebagai It`; //hanya berlaku jika memakai tanda backtip (``) jika memakai tanda kutip 2 ("")
// maka tidak bisa

document.getElementById("inipre").innerHTML= pre;


