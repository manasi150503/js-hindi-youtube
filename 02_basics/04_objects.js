const tinderUser = new Object()
const tinder = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     full name: {
//         userfullname:{
//             firstname: "manasi",
//             lastname: "choudhary"
//         }
//     }
// }

//console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}
const obj4 = {5 : "a" , 6 : "b"}

// const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2, obj4)

//console.log = {...obj1, ...obj2}
// console.log(obj3);


// const users = [
//     {
//         id:1,
//         email: "m@gmail.com"
//     },
//     {
//         id:1,
//         email: "m@gmail.com"
//     },
//     {
//         id:1,
//         email: "m@gmail.com"
//     },
// ]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.enteries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "manasi"
}

// course.courseInstructor

const {courseInstructor : instructor} = course

//console.log(courseInstructor);
console.log(instructor);

// {
//     "name: "manasi"
//     "coursename" :  "js in hindi",
//     "price" : "free"
// }

[
    {},
    {},
    {},
]

