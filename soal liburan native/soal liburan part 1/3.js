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
  var jumlah = cars.length;
  hasil = []
  var a = 0;
  var b = 0;
  var c = 0;
  var d = 0;
  for(var i = 0 ; i < jumlah ; i ++){
    if(cars[i] === 'A'){
      a ++;
    }
    if(cars[i] === 'B'){
      b ++;
    }
    if(cars[i] === 'C'){
      c ++;
    }
    if(cars[i] === 'D'){
      d ++;
    }
  }
  a = (a / jumlah)*100;
  b = (b / jumlah)*100;
  c = (c / jumlah)*100;
  d = (d / jumlah)*100;
  hasil.push(['A'],[a]);
  hasil.push(['B'],[b]);
  hasil.push(['C'],[c]);
  hasil.push(['D'],[d]);

  for(var i = 0 ; i < hasil.length ; i++){
    for(var j = 0 ; j < hasil.length - i - 1 ; j ++){
      if(hasil[j][1] < hasil[j+1][1]){
        var sementara = hasil[j]
        hasil[j] = hasil[j+1]
        hasil[j+1] = sementara;
      }
    }
  }


  return hasil;
};

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