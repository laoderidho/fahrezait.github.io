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

// while loop

let counter1 = 0;

while(counter1<=3){
    document.writeln(`<p> Ini adalah perulangan ke  ${counter1}</p>`);
    counter1++;
}

// do while loop 
// adalah suatu looping yang eksekusinya akan di jalankan atau di ulangi jika kondisinya true 
// maka bisa di ulang jika false maka tidak bisa di ulang

let counter2 = 8;
    do{
        console.log(`"Ini adalah perulangan ke " ${counter2}`)
        counter2++;
    }while(counter2<=20);

// modulus adalah sisa bagi 
// contoh 

let aku3 = 14%3; //=2 di karenakan 14 adalah hasil dari 3 kali 4 dan mempunyai sisa bagi 2

console.log(aku3);
// break sama sistemnya dengan do while

let counter3 = 1;

while (true){
    console.log(`Ini adalah perulangan ke ${counter3}`);
    counter3++;
    if(counter3>10){
        break;
    }
}

//continue

for(let counter4=1; counter4<=20; counter4++){
    if(counter4%2==0){
        continue; //artinya kondisi yang if(counter4%2==0) tidak di outputkan
    }
    document.writeln(`<p>Ini adalah bilangan ganjil ${counter4}</p>`)
}

//with statemen     
/* merupakan fitur yang di gunakan untuk menurunkan sebuah scope data
   dengan menggunakan with statemen kita bisa  mengakses property dalam sebuah 
   data tanpa harus menyebut datanya*/

   const person2 = {
    names4 : "La Ode",
    names5 : "Ridho",
    names6 : "Fahreza",
   }

   with(person2){
    console.log(names4);
    console.log(names5);
    console.log(names6);
   }
//Tidak di rekomendasikan 


/* function 
adalah blok program yang akan berjalan saat kita panggil
di bahasa program lain ini bisa di sebut dengan method 
bisa di panggil function dengan menggunakan nama function lalu di ikuti dengan kurung ()*/
// contoh

function myFunction(){
    for(let i=0; i<=30; i++){
        if (i%3==0 && i%5==0){
            document.writeln("Fizzbuzz");
        }else if(i%3==0){
            document.writeln("fizz");
        }else if(i%5==0){
            document.writeln("buzz");
        }else{
            document.writeln(i);
        }
       
    }
}

// myFunction();


/* function parameter 
kita bisa mengirim informasi ke function yang ingin kita panggil 
untuk melakukan hal tersebut kita perlu menambahkan paramater atau argument di function 
yang sudah kita buat
parameter di tempatkan di dalam kurung () deklarasi method
parameter bisa lebih dari 1 jika lebih dari 1 harus di pisahkan oleh tanda koma*/
// contoh 

function myFunction1(firstName, lastName /*ini adalah parameter*/  ){ 
    console.log(`Hello ${firstName} ${lastName}`);
}

myFunction1("Ridho", "Fahreza");

/*function return value*/

function sayHello(names7, names8){
    const say =`hello ${names7} ${names8}`;
    return say;
}

const result1 = sayHello("Ridho" ,"Fahreza")
console.log(result1);

// function return value lebih dari 1 
function getFinalScore(value){
    if(value>90){
        return "A";
    }else if (value>=80){
        return "B";
    }else if (value>=70){
        return "C";
    }else if (value>=60){
        return "D";
    }else if (value>=50){
        return "E";
    }else{
        return "F";
    }
}
const result2 = getFinalScore(80);
console.log(`nilai anda adalah ${result2}`);

// for in dan for of

let tele = ["Tingkiwingki","Dipsi","Lala","Po"];

		let nomor = ["2","6","7","12"];

		// for in
		for (let x /* adalah variabel yang berisi indeks */ in tele) {
		  console.log(x);
		};

		// for of
		for (let  x /* adalah variabel yang berisi isi array */ of tele) {
		  console.log(x);
		};

		// for in
		for (let y in nomor) {
		  console.log(y);
		};

		// for of
		for (let y of nomor) {
		  console.log(y);
		};
// menghentikan eksekusi dengan value 

function isContains(array, searchValue){
    for (const element of array){
        console.log(`iterasi elemen ${element}`)
        if (element ===searchValue){
            return true; //akan di hentikan jika nilai ini benar
        }
    }
    return false
}

const array = [1,2,3,4,5,6,7,8,9];
const search = 5;
const found =  isContains(array, search);
console.log(found);

/* optional parameter 
    secara default parameter di function itu optional 
    artinya kita tidak wajib mengisi value nya ketika memanggil function
    jika tidak ada value yang kita kirim ke parameter ketika memanggil function maka secara
    otomatis parameter tersebut bernilai undifined*/

//contoh 

function sayHello1(firstname, lastname="Not avaliable" /*default parameter */ , middlename){
    console.log(firstname);
    console.log(lastname);
    console.log(middlename);
}

sayHello1("Eko");

//aritmatika singkat

function myFunction2(){
    let u = 7;
    u *= 5; //aritmatikanya sama dengan u = u * 5 atau bisa di bilang 7 x 5
    return u;
};

const mtk = myFunction2();

console.log(mtk);

// rest parameter 

function sum3(name, ...data){
    let total = 0;
    for (const item of data){
        total +=item;
    }
    console.log(`total ${name} is ${total}`);
}

sum3('aing', 2,3,4,5);

//function sebagai value 
/* function tidak hanya bisa di gunakan sebagai kode dari program yang di eksekusi 
tapi bisa juga di gunakan sebagai value 
artinya function bisa di simpan di variabel, bisa juga dikirim melalui parameter ke 
function lainnya*/
//contoh 

function fahreza12(names9){
    console.log(`hello ${names9}`);
}

let say1 = fahreza12;

fahreza12("Ridho");

say1("fahreza");
//function di parameter

function giveMeName(callback){
    callback("Ridho");
}

giveMeName(fahreza12);
giveMeName(say1);

/* anonymous function
kita juga bisa membuat function tanpa nama function atau istilahnya adalah anonymous function
kita bisa buat anonymous function dalam sebuah variabel atau bisa juga kita buat 
ketika mengisi parameter */
//contoh

let say = function(name){ //function tersebut tidak memiliki nama karena di deklarasikan adalah namanya
    console.log(`hello ${name}`);
}

say ("eko");

//anonymous function di parameter
giveMeName(function(name){
    console.log(`Hello ${name}`);
});

//function di dalam function 

/* tidak ada batasan di mana kita bisa membuat function 
termasuk jika kita ingin membuat function di dalam sebuah function kita bisa melakukannya 
function yang terdapat di dalam kita sebuah function 
inner function hanya bisa di akses di tempat kita membuat function nya tidak bisa di akses di laur 
functionnya */

//contoh

function outer(){
    function inner(){
        console.log("Inner");
    }

    inner() //harus di deklarasikan di dalam function jika tidak maka error;
}

outer();

//scope 

/* scope merupakan area akses dari sebuah data
ada 2 jenis scope ,global scope, dan lokal scope
setiap kita membuat function maka kita akan membuat local scope untuk function tersebut
data di global scope bisa di akses dari local scope namun data di local scope hanya bisa
di akses di local scope  */

//global scope
let counter = 0;

//global scope
function hitMe(){
    //local scope tida bisa di akses / di panggil di luar function
    counter ++;
}

hitMe();
hitMe();

console.log(counter);

//rekursif function 

//kode factorial loop

function factorial(value){
    let result = 1; 
    for (let i =1; i<=value; i++){
        result *=i;
    }
    return result;
}

console.log(factorial(7));
console.log(1*2 *3 *4 *5 *6 *7);

//kode factorial recursive

function factorialRecursive(value){
    if (value==1){
        return 1;
    }else {
        return value * factorialRecursive(value-1);
    }
}

console.log(factorialRecursive(10));
factorialRecursive(5);

