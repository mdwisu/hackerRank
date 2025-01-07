// https://www.hackerrank.com/challenges/mini-max-sum
function getMinFromArr(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
function getMaxFromArr(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function totalSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function miniMaxSum(arr) {
  let min = getMinFromArr(arr);
  let max = getMaxFromArr(arr);
  let minSum = totalSum(arr) - max;
  let maxSum = totalSum(arr) - min;
  console.log(minSum + " " + maxSum);
}

let arr = [1, 3, 5, 7, 9];
arr = [5, 5, 5, 5, 5];
miniMaxSum(arr);
