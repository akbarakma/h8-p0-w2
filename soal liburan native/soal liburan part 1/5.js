/*
  PALINDROME CHANGER

  Palindrome changer adalah sebuah fungsi untuk mengubah semua isi
  array of numbers menjadi angka palindrome. Palindrome adalah sebuah kata atau angka
  yang sama nilainya ketika dibalik.

  EXAMPLE:
  console.log(palindromeChanger([102, 12, 47]))
  // [ 111, 22, 55]
*/
function palindromeChanger(numbers) {
  hasil = [];
  for(var i = 0 ; i < numbers.length ; i ++){
    do {
      var numString = numbers[i].toString();
      var numBalik = '';
      for(var j = numString.length - 1 ; j >= 0 ; j--){
        numBalik += numString[j];
      }
      numbers[i] ++
    }while (numString != numBalik);

    hasil[i] = numString;
  }
  
return hasil;

}

console.log(palindromeChanger([117, 9, 20, 30, 42]))
// [ 121, 9, 22, 33, 44 ]
