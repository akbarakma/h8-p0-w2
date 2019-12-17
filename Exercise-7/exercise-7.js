/*ROW 1 */
console.log('Tugas 1')
var row1 = 5;
for(var i = 1 ; i <= row1 ; i++){
    console.log('*');
}

//ROW 2
console.log('Tugas 2')
var row2 = 5;
var bintang = '';
for(var i = 1 ; i <= row2 ; i++){
    for(var j = 0 ; j <= row2 ; j++){
        bintang += '*';
    }
    console.log(bintang);
    bintang = '';
}

//ROW 3
console.log('Tugas 3');
var row3 = 5;
var bintang = '';
for (var i = 1 ; i <= row3 ; i++){
    for(var j = 1 ; j <= i ; j++){
        bintang += '*'
    }
    console.log(bintang);
    bintang = '';
}