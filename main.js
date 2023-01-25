// I am 29 years old
var myAge = 29;

// The first two years of a dog’s life count as 10.5 dog years each.

var earlyYears = 2;

earlyYears *= 10.5; 

// Since we already accounted for the first two years

laterYears = myAge - 2;

// The number of dog years accounted for by your later years.
laterYears *= 4;

// My age in dog years
var myAgeInDogYears = earlyYears + laterYears;

// My name in lower case
var myName = 'KELSEY'.toLowerCase();

// My name, age in human and dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
