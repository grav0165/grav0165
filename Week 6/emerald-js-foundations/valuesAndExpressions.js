// 1. DECLARE a variable
let myBirthday;

console.log('my birthday is: ', myBirthday);

// 2. ASSIGN a value to a variable
myBirthday = '10-24-1985';

// 3. DECLARE a variable AND ASSIGN it a value on the same line

let myBrothersBirthday = '03-25-1987';

// Primitive Data Types used in JS

// string 
// number 
// boolean 
// BigInt (larger numbers)
// undefined 
// null 
// symbol


// Reference data types 

// objects (arrays are considered an object)
// functions 


// DATA TYPES!
// Checking the data type of a variable's value:
// typeof

console.log('typeof true', typeof true);
console.log('typeof "dog"', typeof 'dog');
console.log('typeof [1, 2, 3]', typeof [1, 2, 3]);

// How will JS evalutate these expressions?

console.log('five minutes the string ten', 5 - '10'); // undefined

console.log('five multiplied by the string of ten', 5 * '10'); // 50

console.log('number five plus string ten', 5+'10'); // 15

// Type coercion: "JS coerces the type of a value to make things work together."
// In most cases, it will change strings to numbers. However in the case of expressions
// using the '+' it will change numbers to strings. 

// Javascript will attempt to make sense of data types even if different types. 
// addition means something similar in strings as with numbers, so it will attempt to concatentation
// the string together rather than make a number addition. So a '+' will combine statements, rather 
// that add to numbers together.

console.log('hello' + 'world');

// Expressions!

// What's an expression? Here's an example:

5 + 55 - 10
// This will evaluate to 50

// Expressions are questions that Javascript can answer!
// Javascript does this by EVALUATE expressions. The answer
// will be a VALUE.

// Example!

// Declare 3 variables and assign each a value
let day = '09';
let year = '1999';
let month = '04';

// Creat an expression that the computer will evaluate
// Goal: '04-09-1999'

let sisterBirthday = month + '-' + day + '-' + year;
// '04'
// 1. '04' + '-' + day + '-' + year
// 2. '04-' + day + '-' + year
// 3. '04-' + '09' + '-' + year
// 4. '04-09' + '-' + year
// 5. '04-09-' + year
// 6. '04-09-1999'

console.log('sistersBirthday is:', sisterBirthday);

// here's that expression again using string interpolation

sisterBirthday = `${month}-${day}-${year}`;    

// console.log(`sistersBirthday is: ${month}-${day}-${year}`);

// Most bugs in code will be evaluation coming out as something not expected. 
