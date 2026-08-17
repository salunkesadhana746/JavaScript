//wap to check number is magic or not.

let num = 123;
let sum = 0;
let mul = 1;

while(num > 0){
    let digit = num % 10;
    sum += digit;
    mul *= digit;
    num = Math.floor(num / 10);
}

if(sum == mul){
    console.log("This number is magic.");
}
else{
    console.log("This number is not magic.");
}