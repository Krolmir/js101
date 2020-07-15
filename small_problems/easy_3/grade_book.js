// Write a function that determines the mean of the thress scores.
// The function will return the letter value based on a scoring condition

// 90 <= grades === A
// 80 <= grades < 90 === B etc
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'

function getGrade(num1, num2, num3) {
  let average = calculateAverage(num1, num2, num3);
  console.log(average);
  if ((average >= 90) && (average <= 100)){
    return 'A';
  } else if ((average >= 80) && (average < 90)) {
    return 'B';
  } else if ((average >= 70) && (average < 80)) {
    return 'C';
  } else if ((average >= 60) && (average < 70)) {
    return 'D';
  } else if (average < 60) {
    return 'F';
  }
}

function calculateAverage(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

// Examples:
console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"