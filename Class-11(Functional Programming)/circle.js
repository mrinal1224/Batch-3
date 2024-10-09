// write three functions
// Each function should calculate different data
// 1. Areas - [] New Array
// 2. Circumference -[]  New Array
// 3.Diamters = []  New Array
// You cannot mutate the original array

// Area

let myRadius = [1, 2, 3, 4, 5, 4];

function calculateArea(r) {
  return 3.14 * r * r;
}

function calculateCircumference(r) {
  return 2 * 3.14 * r;
}

function calculateDiameter(r) {
  return 2 * r;
}

function calculateData(raidus, cb) {
  let data = [];

  for (let i = 0; i < raidus.length; i++) {
    data.push(cb(raidus[i]));
  }
  return data;
}

let finalAreas = calculateData(myRadius, calculateArea);
let finalDiameter = calculateData(myRadius, calculateDiameter);
let finalCircumference = calculateData(myRadius, calculateCircumference);
console.log(finalAreas);
console.log(finalDiameter);
console.log(finalCircumference);

// Diameter

// Circumference
