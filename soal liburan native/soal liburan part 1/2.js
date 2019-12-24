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

  var swapped;
    do {
        swapped = false;
        for (var i=0; i < hasil.length-1; i++) {
            if (hasil[i][1] > hasil[i+1][1]) {
                var temp = hasil[i];
                hasil[i] = hasil[i+1];
                hasil[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped === true);
  
  for(var i = 0 ; i < hasil.length ; i ++){
    hasil[i] = hasil[i][0];
  }

  return hasil;


};

console.log(winner([['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]], 450));
/*
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]
*/