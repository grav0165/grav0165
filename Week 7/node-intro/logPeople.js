// Can have a variable in the file which is not exported
const magicNumber = 27;


// Function that takes in an array of people and 
// loops through those people and logs out each person
function logPeople(peopleArray) {
    for(person of peopleArray) {
        console.log('Person is: ', person);
        console.log('and the magic number is: ', magicNumber)
    }
}

function emptyFunction() {};

// module.exports = logPeople;

// Functions can go inside of objects
// In this case, the property values are functions!
module.exports = {
    logPeople: logPeople,
    emptyfunction: emptyFunction,
}