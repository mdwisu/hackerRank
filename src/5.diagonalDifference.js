// https://www.hackerrank.com/challenges/diagonal-difference

// different diagonal
// membuat array 2 dimensi
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
// menambahkan array 2 dimensi
function diagonalDifference(arr) {
  // membuat variabel sum1 dan sum2
  let sum1 = 0;
  let sum2 = 0;
  // melakukan perulangan dari array yang di kirim
  for (let i = 0; i < arr.length; i++) {
    // mengambil nilai array [1,1] [2,2] [3,3] = 1 5 9
    console.log(arr[i][i]);
    sum1 += arr[i][i];
    // mengambil nilai array [1,3-0-1] [2,3-1-1] [3,3-2-1] = [1,2] [2,1] [3,0] = 3 5 9
    console.log(arr[i][arr.length - i - 1]);
    sum2 += arr[i][arr.length - i - 1];
  }
  // mengembalikan selisih sum1 dan sum2
  const difference = sum1 - sum2;
  return difference < 0 ? -difference : difference;
}

diagonalDifference(arr);
