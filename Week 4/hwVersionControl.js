// SOAL 1 (Array 100 nilai random 1-50)
let nilai = [];
let isiNilai = () => {
  if (nilai.length === 0) {
    for (let i = 0; i < 100; i++) {
      nilai.push(Math.floor(Math.random() * 50) + 1);
    }
  }
  return nilai;
};

console.log('Array Random 100 Index: ', isiNilai());

// let nilai = [
//   7, 13, 15, 12, 49, 18, 10, 11, 40, 19, 24, 2, 13, 30, 9, 47, 40, 26, 38, 26,
//   41, 33, 39, 33, 2, 15, 40, 4, 14, 35, 23, 46, 12, 21, 39, 18, 7, 20, 20, 14,
//   41, 13, 14, 30, 12, 13, 38, 9, 36, 15, 8, 6, 43, 14, 34, 39, 40, 46, 43, 39,
//   32, 25, 4, 19, 14, 49, 31, 3, 45, 44, 27, 32, 3, 42, 9, 34, 39, 20, 28, 48,
//   37, 11, 12, 45, 42, 1, 20, 50, 17, 49, 2, 37, 11, 5, 4, 45, 1, 4, 5, 1,
// ];

//SOAL 2 Pecahlah menjadi 2 array berdasarkan index yakni array index genap dan index ganjil
let arrayIndexGenap = () => {
  let arrayIndexGenap = [];
  for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
      let nilaiArray = nilai[i];
      arrayIndexGenap.push(nilaiArray);
    }
  }
  return arrayIndexGenap;
};
console.log('Array Index Genap: ', arrayIndexGenap());

let arrayIndexGanjil = () => {
  let arrayIndexGanjil = [];
  for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
      let nilaiArray = nilai[i];
      arrayIndexGanjil.push(nilaiArray);
    }
  }
  return arrayIndexGanjil;
};
console.log('Array Index Ganjil: ', arrayIndexGanjil());

//SOAL 3 Gunakan 2 array yang telah dibuat untuk mendapatkan MIN, MAX, TOTAL, RATA-RATA
const minArray = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  let arrayMin = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < arrayMin) {
      arrayMin = array[i];
    }
  }
  return arrayMin;
};
console.log('Min array Genap', minArray(arrayIndexGenap()));
console.log('Min array Ganjil', minArray(arrayIndexGanjil()));

const maxArray = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  let arrayMax = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > arrayMax) {
      arrayMax = array[i];
    }
  }
  return arrayMax;
};
console.log('Max array Genap', maxArray(arrayIndexGenap()));
console.log('Max array Ganjil', maxArray(arrayIndexGanjil()));

const totalArray = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length - 1; i++) {
    sum += array[i] + array[i + 1];
  }

  return sum;
};
console.log('Total array Genap', totalArray(arrayIndexGenap()));
console.log('Total array Ganjil', totalArray(arrayIndexGanjil()));

const averageArray = (array) => {
  return totalArray(array) / array.length;
};
console.log('Rata - rata array Genap', averageArray(arrayIndexGenap()));
console.log('Rata - rata array Ganjil', averageArray(arrayIndexGanjil()));

// SOAL 4  Bandingkan kedua buah array, contoh
// - Min lebih besar array genap
// - Max lebih besar array ganjil
// - Total memiliki nilai sama antara array genap dan ganjil
// - Rata rata lebih besar array ganjil

const compareMin = () => {
  const minGenap = minArray(arrayIndexGenap());
  const minGanjil = minArray(arrayIndexGanjil());

  if (minGanjil > minGenap) {
    console.log('Min lebih besar pada array ganjil');
  } else if (minGanjil === minGenap) {
    console.log('Min memiliki nilai sama antara array genap dan ganjil');
  } else {
    console.log('Min lebih besar pada array genap');
  }
};
compareMin();

const compareMax = () => {
  const maxGenap = maxArray(arrayIndexGenap());
  const maxGanjil = maxArray(arrayIndexGanjil());

  if (maxGanjil > maxGenap) {
    console.log('Max lebih besar pada array ganjil');
  } else if (maxGanjil === maxGenap) {
    console.log('Max memiliki nilai sama antara array genap dan ganjil');
  } else {
    console.log('Max lebih besar pada array genap');
  }
};
compareMax();

const compareTotal = () => {
  const totalGenap = totalArray(arrayIndexGenap());
  const totalGanjil = totalArray(arrayIndexGanjil());

  if (totalGanjil > totalGenap) {
    console.log('Total lebih besar pada array ganjil');
  } else if (totalGanjil === totalGenap) {
    console.log('total memiliki nilai sama antara array genap dan ganjil');
  } else {
    console.log('Total lebih besar pada array genap');
  }
};
compareTotal();

const compareAvg = () => {
  const AvgGenap = averageArray(arrayIndexGenap());
  const AvgGanjil = averageArray(arrayIndexGanjil());

  if (AvgGanjil > AvgGenap) {
    console.log('Rata - Rata lebih besar pada array ganjil');
  } else if (AvgGanjil === AvgGenap) {
    console.log(
      'Rata - Rata memiliki nilai sama antara array genap dan ganjil'
    );
  } else {
    console.log('Rata - Rata lebih besar pada array genap');
  }
};
compareAvg();
