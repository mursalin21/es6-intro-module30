const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);
console.log(sum);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(4, 12, 3);
console.log(result);


//const fiveTimes = (num) => num * 5;

//Another way to write function with only one parameter

const fiveTimes = num => num * 5; //No need to give bracket.
console.log(fiveTimes(17));

//with no parameter

const getName = () => 'Brandon Smith';
console.log(getName());

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}

console.log(doMath(12, 5));


document.getElementById('my-btn').addEventListener(event => {
    //Write your function here
});