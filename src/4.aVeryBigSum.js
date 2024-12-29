// https://www.hackerrank.com/challenges/a-very-big-sum
// membuat array
const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(ar) {
  // membuat variabel total
  let total = 0;
  // melakukan perulangan dari array yang di kirim, dan menambahkan total dengan nilai array
  for (let i = 0; i < ar.length; i++) {
    total += ar[i];
  }
  return total;
}

console.log(aVeryBigSum(ar));
