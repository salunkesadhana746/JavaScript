//find sum of even number from 1 to n.

let n = 10;
let sum = 0;

// 1 <= 10:true; 2 <= 10:true;  3<=10:true; 4<=10:true; 5<=10:true; 6<=10:true; 7<=10:true; 8<=10:true; 9<=10:true; 10<=10:true; 11<=10:false; 
for(let i=1; i <= n; i++){
    // 1%2==0:false; 2%2==0:true; 3%2==0:false; 4%2==0:true; 5%2==0:false; 6%2==0:true; 7%2==0:false; 8%2==0:true; 9%2==0:false; 10%2==0:true;
    if(i % 2 == 0){ 
        // sum = 0 + 2 = 2;
        // sum = 2 + 4 = 6;
        // sum = 6 + 6 = 12;
        // sum = 12 + 8 = 20;
        // sum = 20 + 10 = 30;
        sum = sum + i;
    }
}

document.write("sum of even num = "+sum);