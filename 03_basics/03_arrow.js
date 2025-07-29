const user = {
    username: "manasi",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome towebsite`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "manasi"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "manasi"
//     console.log(this.username);
// }

const chai = () => {
    let username = "manasi"
    console.log(this);
}


// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addTwo = (num1 , num2) =>  num1 + num2

// const addTwo = (num1 , num2) =>  ( num1 + num2 )

const addTwo = (num1 , num2) => ({ username: "manasi" })



console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()