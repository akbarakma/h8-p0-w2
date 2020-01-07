/**
Partial Check
-----------
Implementasikan function `partialCheck` untuk menghitung ada berapa kali string yang perlu dicari
terdapat di dalam `str` berdasarkan `partial` yang dicari.
Contoh 1:
input:
  str: 'abcdabcdabc'
  partial: 'abc' ==> berarti mencari partial "abc"
output: found 3 times
Contoh 2:
input:
  str: 'abbccdab'
  partial: 'd' ==> berarti mencari partial "d"
output: found 1 time
Contoh 2:
input:
  str: 'foggycloud'
  partial: 'foggly' ==> berarti mencari partial "foggly"
output: not found
RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX
*/
/*
PSEUDOCODE
temukan length partial
read hasil = 0
LOOP for (i = 0 ; i <= str.length - partial.length i ++){
  read check = 0;
    LOOP for(var j = 0 ; j < partial.length ; j ++)
      IF(strLC[i+j] == partial[j]){
        check ++;
      END IF
    END LOOP
    IF(check === partial.length)
      hasil ++;
    END IF
END LOOP
display hasil

*/



function partialCheck(str, partial) {
  var hasil = 0;
  strLC = str.toLowerCase();
  for(var i = 0 ; i <= str.length - partial.length ; i ++){
    var check = 0;
    for(var j = 0 ; j < partial.length ; j ++){
      if(strLC[i+j] == partial[j]){
        check ++;
      }
    }
    if(check === partial.length){
      hasil ++;
    }
  }
  if(hasil > 0 ){
    return `found ${hasil} times`;
  }else{
    return 'not found';
  }


}
console.log(partialCheck('abcdcabdabc', 'abc')); // found 2 times
console.log(partialCheck('zachariah', 'ach')); // found 1 time
console.log(partialCheck('accHghebchg', 'chg')); // found 2 times
console.log(partialCheck('asjekfogiy', 'foy')); // not found