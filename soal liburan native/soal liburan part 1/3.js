/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  menghitung persentase jumlah pemudik kendaraan.

  [INPUT]
  cars = ['B', 'D', 'B', 'B', 'A', 'C', 'D']

  [PROCESS]
  cars plat - B ada 4/7
  cars plat - D ada 2/7
  cars plat - A ada 1/7
  cars plat - C ada 1/7

  [OUTPUT]
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function mostCarsByState (cars) {
  var tampung = [];
  for(var i = 0 ; i < cars.length ; i ++){
    var check = true;
    for(var j = 0 ; j < tampung.length ; j ++){
      if(cars[i] === tampung[j]){
        check = false;
      }
    }
    if(check){
      tampung.push(cars[i]);
    }
  }

  var hasil = [];
  for(var i = 0 ; i < tampung.length ; i ++){
    var temp = 0;
    for(var j = 0 ; j < cars.length ; j++){
      if(tampung[i] === cars[j]){
        temp ++;
      }
    }
    var rata = (temp / cars.length) * 100;
    hasil.push(tampung[i]);
    hasil.push(rata);
    
  }

  return hasil;

}

console.log(mostCarsByState(['B', 'D', 'B', 'B', 'A', 'C', 'D']));
/*
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]
*/