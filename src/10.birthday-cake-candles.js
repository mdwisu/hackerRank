// https://www.hackerrank.com/challenges/birthday-cake-candles
function birthdayCakeCandles(candless) {
  let max = 0;
  for (let i = 0; i < candless.length; i++) {
    if (candless[i] > max) {
      max = candless[i];
    }
  }
  let count = 0;
  for (let i = 0; i < candless.length; i++) {
    if (candless[i] === max) {
      count++;
    }
  }
  console.log(count);
}

birthdayCakeCandles([3, 2, 1, 3]);
