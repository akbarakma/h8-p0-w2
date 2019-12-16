/*ROW 1 */
console.log('Tugas 1')
var row1 = 5;
for(var i = 0 ; i <= row1 ; i++){
    console.log('*');
}

//ROW 2
console.log('Tugas 2')
var row2 = 5;
var bintang = '';
for(var i = 0 ; i <= row2 ; i++){
    for(var j = 0 ; j <= row2 ; j++){
        bintang += '*';
    }
    console.log(bintang);
    bintang = '\n';
}