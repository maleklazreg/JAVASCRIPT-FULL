//  Problem 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
console.log(randomCar)
console.log(otherRandomCar)

//output:
// Tesla
// Mercedes

//Explanation
//We take the first car ("Tesla") and put it in randomCar, then we skip the first car and take the second ("Mercedes") and put it in otherRandomCar.


//----------------------------------------------------------------


//  Problem 2

const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
console.log(otherName);
console.log(employeeName);

//Output:
//Elon
//ReferenceError: employeeName is not defined

//Explanation
//employeeName is changed to otherName, so we can use otherName, but employeeName does not exist anymore in this scope.


//----------------------------------------------------------------


//Problem 3

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
console.log(password);
console.log(hashedPassword);

//Output:
//12345
//undefined


//Explanation
//password exists alone and is "12345", but person does not have a password, so hashedPassword is undefined.


//----------------------------------------------------------------


//Problem 4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
console.log(first === second);
console.log(first === third);

//Output:
false
true

//Explanation
//first is 2, second is 5, third is also 2. First is not equal to second (false), but first is equal to third (true).


//----------------------------------------------------------------


//Problem 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//Output:
//[1, 5, 1, 8, 3, 3]
//1
//5

//Explanation
//key is "value", secondKey is [1,5,1,8,3,3], secondKey[0] is 1, and willThisWork takes the second number, which is 5.


//----------------------------------------------------------------


//Problem 6

var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);
//Output:


// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3
// name and index after loop is Ringo:4

//Explanation:
//var does not have a block scope, so name and index keep their last values after the loop, which are "Ringo" and 4.


//----------------------------------------------------------------


//Problem 7

function actuallyPrintingNames() {
  for (let index = 0; index < names.length; index++) {
    let name = names[index];
    console.log(name + ' was found at index ' + index);
  }
  console.log('name and index after loop is ' + name + ':' + index);
}

//Output:
//ReferenceError: name is not defined

//Explanation
//let has block scope, so name and index only exist inside the loop, but outside they do not exist, so there is an error.


//----------------------------------------------------------------


//Problem 8

const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.log(name + ' was found at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);

//Output:
// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3

//Explanation
//let and const only exist inside the loop, so no error happens. name is created fresh each time inside the loop.

//Problem 9

const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
    composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) 
console.log(planet === planetCopy)

//Output:
//true
//false

//Explanation
//planetCopy is a new object, but it still points to the same composition array. So composition[0] is the same in both (true), but planetCopy is not the same object as planet (false).


