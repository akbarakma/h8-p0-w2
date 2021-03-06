/*
------------
LOST NUMBERS
------------
PROBLEM
=======
	lostNumbers adalah sebuah function yang akan menerima tiga parameter.
	Tiga parameter tersebut adalah tiga angka yang berbeda.
	Function akan mengembalikan setiap angka diantara angka pada tiga parameter tersebut, dari nilai parameter terkecil ke parameter terbesar
	kecuali angka yang di input pada parameter
Contoh:
	first = 6, second = 1, third = 3
	terbesar adalah 6, terkecil adalah 1,
	maka function mengembalikan urutan angka secara berurutan seperti:
	2, 4, 5

Jika tidak ada angka yang ditampilkan, maka output "Tidak ada angka sama sekali".

RULES
=====
- Wajib menggunakan pseudocode sebelum memulai kode
*/

//Pseudocode
/**
	read angka = [first, second, third]
	read terbesar
	read terkecil
	read tengah
	read hasil = []
	cari terbesar menggunakan if else
	cari terkecil menggunakan if else
	cari nilai tengah menggunakan loop angka[i] yang tidak sama dengan terbesar dan terkecil
	loop dari terkecil + 1 sampai terbesar - 1 (push i ke hasil jika tidak sama dengan tengah)
	if(hasil === 0){
		return 'tidak ada angka'
	}
	else{
		return hasil
	}
	



 */

function lostNumbers(first, second, third) {
	var angka = [first , second , third];
	var terbesar;
	var terkecil;
	var tengah;
	var hasil = [];
	//cari terbesar
	if(angka[0] > angka[1] && angka[0] > angka [2]){
		terbesar = angka[0];
	}else if(angka[1] > angka[0] && angka[1] > angka[2]){
		terbesar = angka[1];
	}
	else{
		terbesar = angka[2];
	}
	//cari terkecil
	if(angka[0] < angka[1] && angka[0] < angka [2]){
		terkecil = angka[0];
	}else if(angka[1] < angka[0] && angka[1] < angka[2]){
		terkecil = angka[1];
	}
	else{
		terkecil = angka[2];
	}
	//cari angka tengah
	for(var i = 0 ; i < angka.length ; i ++){
		if(angka[i] !== terbesar && angka[i] !== terkecil){
			tengah = angka[i];
		}
	}
	//push 
	for(var i = terkecil + 1 ; i < terbesar ; i ++){
		if(i !== tengah){
			hasil.push(i);
		}
	}
	if(hasil.length === 0){
		return 'Tidak ada angka sama sekali';
	}
	else{
		return hasil;
	}


}

console.log(lostNumbers(1, 3, 5));
// // 2, 4

console.log(lostNumbers(4, 6, 2));
// // 3, 5

console.log(lostNumbers(100, 108, 105));
// // 101, 102, 103, 104, 106, 107

console.log(lostNumbers(6, 5, 3));
// // 4

console.log(lostNumbers(3, 1, 2));
// Tidak ada angka sama sekali

console.log(lostNumbers(1, 1, 1));
// Tidak ada angka sama sekali
