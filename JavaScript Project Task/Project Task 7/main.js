//My age
let myAge = 20;

//Variable named let earlyYears equal to 2
let earlyYears = 2;

earlyYears = 10.5*earlyYears;

//Substracts 2 from myAge to calculate laterYears
let laterYears = myAge - 2;

//Multiplies laterYears by 4 to calculate the age in dog years
laterYears = 4*laterYears;

//To show earlyYears and laterYears
console.log(`earlyYears: ${earlyYears}`);
console.log(`laterYears: ${laterYears}`);

//Adds earlyYears and laterYears to calculate myAgeInDogYears
let myAgeInDogYears = earlyYears + laterYears;

//Changes myName to lower case using .toLowerCase()
let myName = "Hiba".toLowerCase(); 

//Shows the name, the age in human years and the age in dog years using string interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);