let x = 20;
let y = 30;

console.log(`Before swap: x = ${x}, y = ${y}`);

let z = x;
x = y;
y = z;

console.log(`After swap: x = ${x}, y = ${y}`);