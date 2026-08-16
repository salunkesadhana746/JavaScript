// wap to check number is palindrom or not.

let num = 123; 
let original = num;
let reverse = 0;

while (num > 0) 
{
    reverse = reverse * 10 + num % 10;
    num = Math.floor(num / 10);
}

if (original == reverse) 
{
    console.log("This number is a palindrom.");
} 
else 
{
    console.log("This number is not a palindrom.");
}