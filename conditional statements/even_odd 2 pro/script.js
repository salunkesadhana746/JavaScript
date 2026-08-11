// wap to check number is even or odd using if..else stastment without using %

let num = 12;

//if((num & 1) == 0){
 //   console.log("number is even !");
//}
//else{
//    console.log("number is odd !");
//}

if (Math.floor(num / 2) * 2 == num) 
    {
    console.log(num + " is Even Number !");
    } 
    else 
    {
    console.log(num + " is Odd Number !");
    }