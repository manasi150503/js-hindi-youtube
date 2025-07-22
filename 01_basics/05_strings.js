const name = "manasi"
const repoCount = 50

// console.log(name + repoCount + "Value"); not used now 

console.log('Hello my name is ${name} and my repo count is $ {repoCount}');

const gameName = new String( 'manasi-ee')

console.log (gameName[0]);
console.log(gameName.___proto___);


// console.log(gameName.Length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(-0, 4)
console.log(newString);

const anotherString = gameName.slice (-8, 4)
console.log(anotherString)

const newStringOne = " manasi "
console.log(newStringOne);
console.log(newString.trim());

const url = "https://manasi.com/manasi%20munde"

console.log(url.replace('%20' , '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));