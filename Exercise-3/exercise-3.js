var nama = 'aef';
var peran = 'Ksatria';

if(nama == ''){
  console.log('Nama harus diisi!')
}

else if(peran === 'Ksatria'){
  console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
  console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`)
}

else if(peran === 'Tabib'){
  console.log(`Halo Tabib ${nama}, kamu dapat menyerang dengan senjatamu!`)
}

else if(peran === 'Penyihir'){
  console.log(`Halo Penyihir ${nama}, kamu dapat menyerang dengan senjatamu!`)
}

else{
  console.log(`Halo ${nama}, pilih peranmu untuk memulai game!`)
}