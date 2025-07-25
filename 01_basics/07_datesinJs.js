// Dates

let myDate = new Date()
//console.log(myDate.toString())
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleString())
//console.log(typeof myDate);

//let myCreatedDate = new Date(2025, 6, 25)
//let myCreatedDate = new Date(2025, 6, 25, 5, 3)
//let myCreatedDate = new Date("2025-01-14")
let myCreatedDate = new Date("1-14-2025")
console.log(myCreatedDate.toLocaleString());

let myTimestamp = Date.now()

// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// '${newDate.getDay()} and the time'

newDate.toLocaleString('dafault' , {
    weekday: "long"
})