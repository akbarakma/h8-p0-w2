var tanggal = 010; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
//cari lagi kenapa kalo tanggal lebih dari 10 ditambah 0 dibelakang jadi kekurang 2 / kalo tahun nggak.
var bulan = 012; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1945; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var salah = ''; //variabel jika input tidak valid, nanti diganti



switch(bulan){
    case 1:
        bulan = 'Januari';
    break;
    case 2:
        bulan = 'Februari';
    break;
    case 3:
        bulan = 'Maret';
    break;
    case 4:
        bulan = 'April';
    break;
    case 5:
        bulan = 'Mei';
    break;
    case 6:
        bulan = 'Juni';
    break;
    case 7:
        bulan = 'Juli';
    break;
    case 8:
        bulan = 'Agustus';
    break;
    case 9:
        bulan = 'September';
    break;
    case 10:
        bulan = 'Oktober';
    break;
    case 11:
        bulan = 'November';
    break;
    case 12:
        bulan = 'Desember';
    break;
    default:
        salah = 'Input tidak valid.';
}

if (tanggal < 1 || tanggal > 31){
    salah = 'Input tidak Valid'
}

if (tahun < 1900 || tahun > 2200){
    salah = 'Input tidak Valid'
}

//check input valid atau tidak
if(salah === ''){
    console.log(`${tanggal} ${bulan} ${tahun}`);
}
else{
    console.log(salah);
}

