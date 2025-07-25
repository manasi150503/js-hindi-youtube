// singleton 
// object literals 

// Object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Manasi",
    "full name" : "Manasi Munde",
    [mySym]: "mykey1",
    age: 23,
    location: "Pune" ,
    email: "manasi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "manasi@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "manasi@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log('Hello JS user ,${this.name}');
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());