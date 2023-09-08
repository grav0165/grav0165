// Attempting an algorithm which solves a problem

// There is a box with with items. The items have a name and an awesomeLevel.
// The task is to get all items with awesomeLevel above 7.

// let box = [item, item, ...]
// let item = {
//     name: "",
//     awesomeLevel: '',
// }


// Step 1: Come Up with a Data Model (in this case, our box of items
// is an array of objects.)

// Step 2: Come up with some example data

let animals = [
    {
        name:'cat',
        awesomeLevel: 10,
    }, 
    {
        name: 'dog',
        awesomeLevel: 8,
    }, 
    {
        name: 'guinea pig',
        awesomeLevel: 2,
    },
    {
        name: 'rat',
        awesomeLevel: 6,
    },
    {
        name: 'fish',
        awesomeLevel: 4,
    }
];

// At this point look at how you would solve it from a human standpoint 
// (not thinking about code).

// Grab the Box
// Look through the items
// check each item, see if awesome > 7
// Take item aside if so 

// These above are the algorithm, a set of instructions to follow

// Pseudo code
// It may not run, but it will look like code

/*
Multi-line comment!

Let's write some pseudo code!

* make a function that takes in a box of items as an argument
    * Declare a new variable
        * Assign it a value of an empty array
    * Loop through the box of items
        * If the item 's awesomeLevel > 7
            * Push the item to our new array
        * Else:
            * Nothing I guess?
    * Return the new array
*/

// INPUT :
    // array of objects, where each object has a name
    // and awesomeLevel property
// OUTPUT : 
    // array of zero or more objects, where each object's
    // awesomeLevel property is above 7


function findAwesomeItems(items) {
    let awesomeItems = [];
    for (let item of items) {
        console.log('item is:', item);
        if(item.awesomeLevel > 7) {
            awesomeItems.push(item);
        }
    }
    return awesomeItems;
}

// Document our expecttations of house the function 
// should work

console.log('Expect an array containing cat and dog objects', findAwesomeItems(animals))

