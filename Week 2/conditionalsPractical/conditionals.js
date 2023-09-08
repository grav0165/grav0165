let seatsInCar = 7;
let passengers = 5;
let infants = 1;
let infantSeats = 1;
let fullTank = true;

// check that there's enough room for everyone
if( seatsInCar >= passengers && infantSeats >= infants) {
  console.log('Ready for the road trip');
  if( fullTank === true) {
    console.log( 'Ready to hit the highway');
  } // end fulltank
  else {
    console.log('must gas up before on interstate')
  } // end not enough gas
} // enough enough seats
else {
  console.log('Not ready. Check car, passengers, and equipment')
} // end not enough seats

