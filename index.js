// ini hanya Untuk tulisan di dalam ID jika ingin  tahu maka lihat id di html
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

// melakukan konversi antar tipe data 


let konvert = "12";
let konvert1 = 12;

konvert = parseInt("12");

let sum = konvert + konvert1;

document.getElementById("ini7").innerHTML = sum ; 

// tipe data Array 

let names = [];

names.push("La Ode Ridho Fahreza");
names.push("Ridho");
names.push("reza");
names.push("Affa");
names[1] = "ridho"; //untuk mengubah indeks dalam array
delete names[3]; //untuk mengubah indeks dalam Array
var arraylength = names.length;

console.log(arraylength); //untuk melihat panjang array

document.getElementById("ini8").innerHTML= names;

let names1 = [12,15,121,1213,131211];

document.getElementById("ini9").innerHTML = names1;

// tipe data objek

const names2 = {}

names2["name"] = "Ridho"; 
names2["age"] = "20 years old";
names2["hobby"] = "chess";
// cara lama
console.log(names2);

const names3 = {
    name : "Ridho",
    age : "20 years old",
    hobby : "chess"
};
console.log(`name: ${names3.name}`);
console.log(`age: ${names3.age}`);
console.log(`Hobby: ${names3.hobby}`)
console.log(names3);

// if dan else expresion 

const ujian = 90;
const kehadiran = 90;
let hasil1;

if(ujian>=90 && kehadiran >=90){
    hasil1 = "A";
}else if(ujian>=75 && kehadiran >=75){
    hasil1 = "C";
}else{
    hasil = "F";
}

document.getElementById("ini10").innerHTML= hasil1;

// alert di gunakan untuk memberi peringatan berupa popup di text
// Contoh 

// alert("ini adalah teks belajar javascript")

// promt di gunakan untuk membuat nama anda masuk di alert 
// contoh 

// const myname = prompt("what is your name");
// alert(`hello ${myname}`);

// konfirm di gunakan apakah anda ingin masuk atau tidak 

// const konfirmasi= confirm("apakah anda ingin belajar");
// if (konfirmasi){
//     const myname = prompt("what is your name");
//     alert(`Hello ${myname}`);
// }else{
//     alert("thanks for reading");
// }

// undifined
// adalah variabel yang datanya belum di definisikan 
// hal ini menjadi membingungkan karena sama seperti error
// contoh 

let definisi = "Ridho";

if (definisi === undefined){
    console.log("tak terdefinisi");
}else{
    console.log("terdefinisi");
}

// null adalah representasi data kosong atau data yang akan di tambahkan nanti 
let nilainull= null;

if (nilainull === undefined){
    console.log("nilai tak terdefinisi");
}else if (nilainull === null){
    console.log("nilai kosong");
}else {
    console.log("nilai ada");
}

// Switch statement di mulai eksekusinya dengan case dan di akhiri dengan break
// Contoh
 
const nilaiswitch = "A";

switch(nilaiswitch){
    case "A" : 
        console.log("ini adalah Nilai A");
        break;
    case "B" : 
        console.log("ini adalah Nilai B");
        break;
    case "C" : 
        console.log("ini adalah Nilai C");
        break;
    case "D" : 
        console.log("ini adalah Nilai D");
        break;
    default :
        console.log("ini adalah default");
};
// ternary operator
// Sama dengan properti If Else tapi ini hanya untuk 2 percabangan saja 

const nilaiku = 60;
const ucapan = nilai >= 75 ? "selamat Anda Lulus" : "Silahkan coba lagi";

document.getElementById("ini10").innerHTML = ucapan;
// nullish coalessing Operator 
// hampir sama dengan ternary operator tetapi nullish operator khusus untuk kondisi yang bernilai 
// null dan undifined

let parameter; 
 let data = parameter ?? "Nilai Default"; 

 console.log(data);

//  Optional chaining 
// untuk mengetahui undifined dari error 

const person = {
    addres : {
        country : "Indonesia"
    }
}

let country = person?.addres?.country;

console.log(country);

// Operator logika non boolean 
// sistemnya sama seperti if else 
const person1 = {
    firstname : "La Ode",
    lastname : " Ridho Fahreza"
};

const namaku = person1.firstname || person1.lastname;

console.log(namaku);

// for loop
// akan selalu berulang jika kondisi terpenuhi 

for (let counter =0;counter <=10; counter++){
    document.writeln(`<p> ini adalah perulangan ke ${counter} </p>`);
}