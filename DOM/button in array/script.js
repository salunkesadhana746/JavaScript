// button -> press -> body bg change
// every click -> random color 
//by using array

let colors = ["red", "blue", "green", "yellow", "pink", "purple", "orange", "skyblue"];

let btn = document.getElementById("btn");

btn.addEventListener("click", function () {

let randomIndex = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[randomIndex];

});
