//wap to find sum of 1 to n using do..while loop.

let n = 23;
let i = 1;
let sum = 0;

do{
    sum = sum + i;
    i++;
}
while(i <= n);

document.write("sum of n = "+sum);
