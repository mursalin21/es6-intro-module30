//different ways of dealing with not given parameters (can also work with strings, method is the same)
function add(num1, num2 = 0) {
    if (num2 == undefined) {
        num2 = 0;
    }
    num2 = num2 || 0;

    return num1 + num2;
}

console.log(add(57));