// https://www.hackerrank.com/challenges/simple-array-sum
function simpleArraySum(ar) {
  // membuat variabel total
  let total = 0;
  // melakukan perulangan dari array yang di kirim, dan menambahkan total dengan nilai array
  for (let i = 0; i < ar.length; i++) {
    total += ar[i];
  }
  return total;
}

console.log(simpleArraySum([1, 2, 3, 4, 10]));
