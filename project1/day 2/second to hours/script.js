// second to hours

let second = 3665;

let hour = Math.floor(second / 3600);

let minute = Math.floor((second % 3600) / 60);

second = Math.floor((second % 3600) % 60);

console.log(hour +":"+ minute +":"+ second); 