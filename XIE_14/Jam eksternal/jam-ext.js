function tampilkanJam() {

  let sekarang = new Date();

  let hariAngka = sekarang.getDay();
  let tanggal = sekarang.getDate();
  let bulanAngka = sekarang.getMonth();
  let tahun = sekarang.getFullYear();

  let jam = sekarang.getHours();
  let menit = sekarang.getMinutes();
  let detik = sekarang.getSeconds();

  //format 2 digit

  if (jam < 10) jam = "0" + jam;
  if (menit < 10) menit = "0" + menit;
  if (detik < 10) detik = "0" + detik;

  // nama hari
  
  let hari;
  switch(hariAngka) {
    case 0: hari="Minggu"; break;
    case 1: hari="Senin"; break;
    case 2: hari="Selasa"; break;
    case 3: hari="Rabu"; break;
    case 4: hari="Kamis"; break;
    case 5: hari="Jumat"; break;
    case 6: hari="Sabtu"; break;
  }

  // nama bulan
  let bulan;
  switch(bulanAngka) {
    case 0: bulan="Januari"; break;
    case 1: bulan="Februari"; break;
    case 2: bulan="Maret"; break;
    case 3: bulan="April"; break;
    case 4: bulan="Mei"; break;
    case 5: bulan="Juni"; break;
    case 6: bulan="Juli"; break;
    case 7: bulan="Agustus"; break;
    case 8: bulan="September"; break;
    case 9: bulan="Oktober"; break;
    case 10: bulan="November"; break;
    case 11: bulan="Desember"; break;
  }

  // Daftar pasaran Jawa
  let pasaran = ["Wage","Kliwon","Legi","Pahing","Pon"];

  // Hitung jumlah hari sejak 1 Januari 1970
let epoch = new Date(1970, 0, 1);
let selisihHari = Math.floor((sekarang - epoch) / (1000 * 60 * 60 * 24));

let indeksPasaran = selisihHari % 5;

  // tampilkan tanggal
  document.getElementById("tanggal").innerHTML =
    hari + " " + pasaran[indeksPasaran] + ", " + tanggal + " " + bulan + " " + tahun;

  // tampilkan jam
  document.getElementById("jam").innerHTML =
    jam + "<span class='kedip'>:</span>" +
    menit + "<span class='kedip'>:</span>" +
    detik;

  // versi modern (template lateral)

    // document.getElementById("jam").innerHTML = 
    // ${jam}<span class='kedip'>:</span>${menit}<span class='kedip'>:</span>${detik};

    
} // end function 

// jalankan setiap 1 detik
setInterval(tampilkanJam, 1000);

// jalankan pertama kali
tampilkanJam();