//compute the sum of the elements of an array and display it in the console
const array = [2, 3, 5, 7, 5, 3];
let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log(sum);

//compute the maximum of the elements of an array and display it in the console

const max = Math.max(...array);
console.log(max);

//compute how many times a certain element appears in an array
let a = [2, 3, 5, 7, 5, 3];

let map = a.reduce(function (obj, b) {
  obj[b] = ++obj[b] || 1;
  return obj;
}, {});

console.log(map);
