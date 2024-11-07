let a = 1111;
let b = 1001;

console.log (`a value ${a}, b value ${b} `);

a = a^b;
b = b^a;
a = a^b;

console.log (`a value ${a}, b value ${b} `);

