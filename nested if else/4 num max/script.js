//wap to max find from 3 variable using else if ladder.

let a = 40;
let b = 30;
let c = 50;
let d = 90;

if(a > b){
    if(a > c){
        if(a > d){
            console.log("a is max");
        }
        else{
            console.log("d is max");
        }
    }
    else{
        if(c > d){
            console.log("c is max");
        }
        else{
            console.log("d is max");
        }
    }
}
else{
    if(b > c){
        if(b > d){
            console.log("b is max");
        }
        else{
            console.log("d is max");
        }
    }
    else{
        if(c > d){
            console.log("c is max");
        }
        else{
            console.log("d is max");
        }
    }
}