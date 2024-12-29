// https://www.hackerrank.com/challenges/compare-the-triplets

const a = [4, 2, 4];
const b = [1, 1, 2];

function compareTriplets(a, b) {
  // membuat variabel alice dan bob
  let alice = 0;
  let bob = 0;
  // melakukan perulangan dari array yang di kirim
  for (let i = 0; i < a.length; i++) {
    // jika a[i] > b[i] maka alice bertambah 1
    // jika a[i] < b[i] maka bob bertambah 1
    if (a[i] > b[i]) {
      alice += 1;
    } else if (a[i] < b[i]) {
      bob += 1;
    }
  }
  // mengembalikan nilai alice dan bob
  return [alice, bob];
}

console.log(compareTriplets(a, b));
