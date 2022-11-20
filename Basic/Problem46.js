function multipleFunction(num1, num2) {
    if (!((num1 % 11 == 0 || num1 % 7 == 0) && (num2 % 11 == 0 || num2 % 7 == 0))) {
        return (num1 % 11 == 0 || num2 % 11 == 0 || num1 % 7 == 0 || num2 % 7 == 0);
    }
    return false;
}

console.log(multipleFunction(33, 45));
console.log(multipleFunction(30, 49));
console.log(multipleFunction(30, 40));