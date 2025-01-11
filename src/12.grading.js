// https://www.hackerrank.com/challenges/grading

// grade 0 to 100
// grade < 40 failure

// if grade < 38, no rounding
// if grade >= 38, round to the next multiple of 5
// if the difference between the rounded grade and the original grade is less than 3, the original grade is returned

function manualMathTrunc(number) {
  return number - (number % 1);
}

function manualMathCeil(number) {
  if (number % 1 === 0) {
    // Jika bilangan sudah bulat, langsung kembalikan nilainya
    return number;
  } else if (number > 0) {
    // Jika bilangan positif dan memiliki bagian desimal
    return manualMathTrunc(number) + 1;
  } else {
    // Jika bilangan negatif
    return manualMathTrunc(number);
  }
}

function manualCeil5(number) {
  // Membulatkan angka ke atas ke kelipatan tertentu
  if (number % 5 === 0) {
    return number; // Jika sudah kelipatan, langsung kembalikan angkanya
  } else {
    return manualMathCeil(number / 5) * 5;
  }
}

function gradingStudents(grades) {
  let result = []; // Buat array untuk menyimpan hasil
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      result.push(grades[i]); // Tambahkan nilai asli ke hasil
    } else {
      const rounded = manualCeil5(grades[i]);
      if (rounded - grades[i] < 3) {
        result.push(rounded); // Tambahkan nilai yang sudah dibulatkan
      } else {
        result.push(grades[i]); // Tambahkan nilai asli jika tidak dibulatkan
      }
    }
  }
  return result; // Kembalikan array hasil
}

gradingStudents([73, 67, 38, 33]);
