// every click new and random color in body background by color code
// default color should be - #ffffff
// button text content should be change on every click and become color code.


const btn = document.getElementById("btn");

document.body.style.backgroundColor = "#ffffff";

btn.addEventListener("click", () => {

    const num = Math.floor(Math.random() * 16777216);

    const string = num.toString(16);

    const color = "#" + string;

    document.body.style.backgroundColor = color;

    btn.textContent = color;

    console.log(color);

});           