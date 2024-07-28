//Kelvin temperature set to 293
const kelvin = 293;

//Convert Kelvin to Celsius by substracting 273
const celsius = kelvin - 273;

//Convert Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//Round down the Fahrenheit temperature using .floor()
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//Convert Celsius to Newton
const newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${newton} degrees Newton.`); 

