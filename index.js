function calcArray(Array1, Array2) {
  return new Array();
}
const Array1 = [15, 30, 45, 60];
const Array2 = [5, 6, 3, 10];
const result = [];

for (let i = 0; i < Array1.length; i++) {
  result.push(Array1[i] / Array2[i]);
}

//for (let i = 0; i < Array2.length; i++) {
//}

//let result = [
//Array1[0] / Array2[0],
// Array1[1] / Array2[1],
//Array1[2] / Array2[2],
//];
console.log(result);
