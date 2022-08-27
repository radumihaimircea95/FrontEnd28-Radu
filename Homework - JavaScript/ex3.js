const number = parseInt(prompt("Enter the number of terms: "));
let n1 = 0,
  n2 = 1,
  urmatorulNumar;

console.log("Fibonacci:");

for (let i = 1; i <= number; i++) {
  console.log(n1);
  urmatorulNumar = n1 + n2;
  n1 = n2;
  n2 = urmatorulNumar;
}
