// https://www.hackerrank.com/challenges/staircase

function repeatStr(num, str) {
  let newStr = "";
  for (let i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
}

const staircase = (n) => {
  for (let i = 1; i <= n; i++) {
    const space = n - i; // 3
    const hash = i; // 1
    const spaceStr = repeatStr(space, " "); // "   "
    const hashStr = repeatStr(hash, "#");
    console.log(spaceStr + hashStr);
  }
};

const n = 4;
staircase(n);
