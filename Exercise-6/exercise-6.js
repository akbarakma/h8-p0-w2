/* SOAL 1 */
console.log('Tugas 1')
var loop1 = 2;
var loop2 = 20;

console.log('Looping pertama: ')
while(loop1 <= 20){
    console.log(loop1 + '- I love coding!');
    loop1+=2;
}

console.log('Looping kedua: ')
while(loop2 >= 2){
    console.log(loop2 + '- I will become fullstack developer!');
    loop2-=2;
}

/*SOAL 2 */
console.log('Tugas 2')
console.log('Looping pertama:');
for(var i = 1; i<=20; i++){
    console.log(i + '- I love coding!')
}

console.log('Looping kedua:')
for(var i = 20; i>=1; i--){
    console.log(i + '- I will become fullstack developer!')
}

/*SOAL 3 */
console.log('Tugas 3')
console.log('Ganjil Genap')
for(var i = 1 ; i <= 100 ; i++){
    if(i % 2 === 0){
        console.log('Genap');
    }
    else{
        console.log('Ganjil');
    }
}
console.log('Pertambahan counter 2')
for(var i = 1 ; i <= 100 ; i+=2){
    if(i % 3 === 0){
        console.log(i + ' kelipatan 3')
    }
}
console.log('Pertambahan counter 5')
for(var i = 1 ; i <= 100 ; i+=5){
    if(i % 6 === 0){
        console.log(i + ' kelipatan 6')
    }
}
console.log('Pertambahan counter 9')
for(var i = 1 ; i <= 100 ; i+=9){
    if(i % 10 === 0){
        console.log(i + ' kelipatan 10')
    }
}
