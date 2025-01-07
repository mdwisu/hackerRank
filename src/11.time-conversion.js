// https://www.hackerrank.com/challenges/time-conversion
// diberikan waktu 12 jam format AM atau PM
// harus diubah menjadi 24 jam format
// contoh: 07:05:45 PM -> 19:05:45

function timeConversion(s) {
  const ampm = s.slice(-2);
  let [hour, minute, second] = s.slice(0, -2).split(":");
  if (ampm === "PM" && hour !== "12") {
    hour = (parseInt(hour) + 12).toString();
  }
  if (ampm === "AM" && hour === "12") {
    hour = "00";
  }
  return `${hour}:${minute}:${second}`;
}

timeConversion("07:05:45PM"); // 19:05:45
timeConversion("12:05:45AM"); // 12:05:45
