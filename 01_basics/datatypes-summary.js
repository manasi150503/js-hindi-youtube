// Primitive 

//const { useInsertionEffect } = require("react");

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100
const scoreVslue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



 // Reference (non-primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Manasi",
    age: 22,
}
 
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = 'manasimundedotcom'

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "manasi@gmail.com",

console.log(userOne.email);
console.log(userTwo.email);
