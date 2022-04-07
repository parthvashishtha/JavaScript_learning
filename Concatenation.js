const name1 = "Parth Sharma"
const age = 19

// Concatenation

console.log('My name is ' + name1 + ' and  My age is ' + age)

const hello = `My name is ${name1} and my age is ${age}`;

console.log(hello)

// Length of a string

const rand = "Randonautica"

console.log(rand.length)

/* new keyword meaning - It basically used for invoking the constructor
 and creating a new instance every time for e.g when we have to take the 
 fname and last name in any login process,every time it creates a new instance
  . It also takes the responsibility for this keyword to change it's pointing
  from global variable to the assigned object*/

//   Arrays- Variable that hold multiple values

const number = new Array(1,2,3,4,5); // Using constructor
console.log(number);

const mixed = ['1','2','3','Parth','Coding'] //It can have variable of different datatype
console.log(mixed);

console.log(mixed[1]); // Used to acces the arfay element
mixed[5]= 'papaya'; // Used the element at the given index

console.log(mixed);

mixed.push('Name') // It will push the value at the end

mixed.unshift('Dualipa') // It will push the value at the beginning

mixed.pop();


console.log(mixed);
console.log(mixed.indexOf('Parth'));

