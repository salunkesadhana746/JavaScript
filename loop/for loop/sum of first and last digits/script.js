//wap to find sum of first and last digits of a numbers

let num = 1236;
let ld = num % 10;//6
let fs = 0;

// 1236>0:true; 123>0:true; 12>0:true; 1>0:true; 0>0:false
while(num > 0){
    //fs = 1236 % 10 = 6
    //fs = 123 % 10 = 3
    //fs = 12 % 10 = 2
    //fs = 1 % 10 = 1
    fs = num % 10;
    // num = 1236 / 10 = 123
    // num = 123 / 10 = 12
    // num = 12 / 10 = 1
    // num = 1 / 10 = 0
    num = Math.floor(num / 10);
}
let sum = fs + ld;
document.write("Sum of first and last digits = "+sum);