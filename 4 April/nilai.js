// fungsi untuk melakukan konversi nilai
function konversiNilai(nilai) {
  if (isNaN(nilai)) { // pencegahan error untuk input yang bukan angka
    return "Input harus berupa angka!";
  } else if (nilai < 0 || nilai > 100) { // pencegahan error untuk input di luar range
    return "Input harus berada di antara 0-100!";
  } else if (nilai >= 90 && nilai <= 100) {
    return "A";
  } else if (nilai >= 80 && nilai <= 89) {
    return "B";
  } else if (nilai >= 70 && nilai <= 79) {
    return "C";
  } else {
    return "D";
  }
}

console.log(konversiNilai(85));
console.log(konversiNilai("tidak valid"));
console.log(konversiNilai(-10));
console.log(konversiNilai(110));
console.log(konversiNilai(75));
console.log(konversiNilai(95));
console.log(konversiNilai(25));