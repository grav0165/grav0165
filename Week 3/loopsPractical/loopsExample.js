console.log('loops');

let index = 0;
const max = 10;

// while loop
while ( index < max ) {
    console.log('in the while loop, index: ', index);
    index++;
} // end while
console.log( 'index after while loop: ', index);

// for loop
for (let i=0; i<max; i++){
  console.log('in for loop, i:', i)
} // end for


let hand = ['Q', '3', 'J', '9', '6', 'K', 'A'];

for (let i = 0; i<hand.length; i++) {
    console.log('for loop', hand[i]);
    if(hand[i] === '9') {
        console.log('Match!!');
    }
} //end for

//for in
for (i in hand) {
    console.log('for in loop', hand[i]);
    if(hand[i] === '9') {
        console.log('match!!!!!!!')
    }
}

//for of
for(card of hand) {
    console.log('for of loop', card);
    if(card === '9') {
        console.log('match!');
    }
}