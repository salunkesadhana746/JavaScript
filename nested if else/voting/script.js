//wap to check eligible for vote using nested if else

const age = 19;

if(age > 18){

    if(age > 100){
        console.log("You are too old, you cannot vote. !");
    }
    else{
        console.log("you are eligible for vote !");
    }
}
else{

    if(age == 0){
        console.log("Invalid age !");
    }
    else{
        console.log("you are not eligible for vote !");
    }
}