//wap to find sum of all digits of a numbers.

let num = 123;
let sum = 0;

while(num > 0)//123>0:true,12>0:true,1>0:true,0>0:false
{
	let id = num % 10;// 123 % 10 = 3; 12%10=2; 1%10=1
	sum = sum + id;// 0+3=3; 3+2=5; 5+1=6
	num = Math.floor(num / 10);//123/10=12; 12/10=1; 1/10=0
}

document.write("Sum of all digits = "+sum);