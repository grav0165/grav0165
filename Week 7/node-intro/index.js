/// Import my people variable from people.js

// Take whatever is exported from the './people' file
// and assign it to a variable named 'arrayOfPeople'
let people = require('./people');
let functionsObject = require('./logPeople');
let cat = require('./cat');

functionsObject.logPeople(people);
console.log(cat.name)

// console.log('arrayOfPeople is: ', arrayOfPeople);