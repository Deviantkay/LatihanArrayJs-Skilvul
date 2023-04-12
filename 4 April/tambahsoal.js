function hitungNilaiTotal(arr) {
  let total = 0;
  let selainAngka = [];

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      selainAngka.push(arr[i]);
    } else {
      total += Number(arr[i]);
    }
  }
  if(total===0){
    return `Tidak terdapat angka pada array ini. silahkan input array lain!. \n- array yang di input: [${arr}]`;
  }else{
    return total;
  }
}

// contoh penggunaan
console.log(hitungNilaiTotal([1, 2, 3]));
console.log(hitungNilaiTotal(["a", 1, "b", 2, "c", 3]));
console.log(hitungNilaiTotal(["tidak", "ada", "angka"]));
console.log(hitungNilaiTotal(["tugas", 2, "bagian", "pertambahan", "jumlah", "angka", 3, 4, 5]));
