const numbers = [23, 65, 99, 21, 34];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 99, 65);
console.log(max);

//using spread operator
const maxInArray = Math.max(...numbers);
console.log(maxInArray);


//reference: even though a number is pushed in the numbers array, number2 also gets it through reference.
const number2 = numbers;
numbers.push(55);
console.log(number2);

//to bypass the reference limitation, you need to create a new array.
const number3 = [...numbers];
numbers.push(65);
console.log(number3);

//spread operator and a new number
const number4 = [...numbers, 88];
console.log(number4);