function add(num1, num2) {
    return num1 + num2;
}

console.log(add(15, 17));

// document.getElementById('my-button').onclick = function handleEvent(){
//     return xyz;
// }


const add2 = function add2(num1, num2) {
    return num1 + num2;
}

console.log(add2(5, 7));


//anonymous function that has no name
const add3 = function (num1, num2) {
    return num1 + num2;
}

console.log(add3(5, 7));


//arrow function

const add4 = (num1, num2) => num1 + num2;
console.log(add4(5, 7));