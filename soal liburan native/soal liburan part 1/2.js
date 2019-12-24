/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  yang paling cepat sampai ke tujuan, berdasarkan laju dan kecepatan sampai di 
  tujuan.

  [INPUT]
  cars = [['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]]
  info: ['PLAT NOMOR', 'SPEED', 'CURRENT POSITION']
  totalKM = 450

  [PROCESS]
  butuh waktu = jarak tersisa / kecepatan
  cars ke - 0 = butuh waktu 2,5 jam
  cars ke - 1 = butuh waktu 2,25 jam
  cars ke - 2 = butuh waktu 2.35 jam
  cars ke - 3 = butuh waktu 0.3 jam

  [OUTPUT]
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function winner (cars, totalKM) {
  hasil = [];
  waktu = [];
  jarak = [];
  for(var i = 0 ; i < cars.length ; i++){
    jarak[i] = totalKM - cars[i][2];
    waktu[i] = jarak[i] / cars[i][1];
    hasil.push([cars[i][0] , waktu[i]]);
  }

  for(var i = 0 ; i < hasil.length ; i++){
    for(var j = 0 ; j < hasil.length - i - 1 ; j ++){
      if(hasil[j][1] > hasil[j+1][1]){
        var sementara = hasil[j]
        hasil[j] = hasil[j+1]
        hasil[j+1] = sementara;
      }
    }
  }
  
  for(var i = 0 ; i < hasil.length ; i ++){
    hasil[i] = hasil[i][0];
  }

  return hasil;


};

console.log(winner([['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]], 450));
/*
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]
*/