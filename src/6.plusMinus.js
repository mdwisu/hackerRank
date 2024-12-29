// https://www.hackerrank.com/challenges/plus-minus

export function plusMinus(arr) {
  const n = arr.length;
  let positive = 0;
  let negative = 0;
  let zero = 0;
  // hitung jumlah positif, negatif, dan nol
  for (let i = 0; i < n; i++) {
    positive += arr[i] > 0 ? 1 : 0;
    negative += arr[i] < 0 ? 1 : 0;
    zero += arr[i] === 0 ? 1 : 0;
  }
  const positiveRate = positive / n;
  const negativeRate = negative / n;
  const zeroRate = zero / n;
  console.log(positiveRate.toFixed(6));
  console.log(negativeRate.toFixed(6));
  console.log(zeroRate.toFixed(6));
  // Print each proportion to six decimal places manually
  // console.log((Math.round(positiveRate * 1000000) / 1000000).toString().padEnd(8, '0'));
  // console.log((Math.round(negativeRate * 1000000) / 1000000).toString().padEnd(8, '0'));
  // console.log((Math.round(zeroRate * 1000000) / 1000000).toString().padEnd(8, '0'));
}
const arr = [1, 0, -1, 100, 200, -500, 300, 1, 4, 0, 0];
console.log(plusMinus(arr));
