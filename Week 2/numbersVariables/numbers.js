console.log('js');

let motorcycles = 9;
let cars = 0;
let vehicles = motorcycles + cars;

console.log('bikes:', motorcycles);
console.log('cars:', cars);
console.log('total vehicles:', vehicles);

console.log('had to put the soft tail in the garage');
// decrement motorcycles
motorcycles--;
console.log('bikes:', motorcycles);
console.log('cars:', cars);
vehicles = motorcycles + cars;
console.log('total vehicles:', vehicles);

console.log('missed the bike so I bought 2 lambos');
cars += 2;
console.log('bikes:', motorcycles);
console.log('cars:', cars);
vehicles = motorcycles + cars;
console.log('total vehicles:', vehicles);

console.log('wanted a Jetta, so I got one');
cars++;
console.log('bikes:', motorcycles);
console.log('cars:', cars);
vehicles = motorcycles + cars;
console.log('total vehicles:', vehicles);

console.log('sold 3 bikes');
motorcycles -= 3;
console.log('bikes:', motorcycles);
console.log('cars:', cars);
vehicles = motorcycles + cars;
console.log('total vehicles:', vehicles);

console.log('got the soft tail back from garage, is now souped up!');
motorcycles++;
console.log('bikes:', motorcycles);
console.log('cars:', cars);
vehicles = motorcycles + cars;
console.log('total vehicles:', vehicles);
