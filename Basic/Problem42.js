// Q.Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.  Go to the editor
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31
function checkNumbers(n1, n2, n3) {
    if (n1 < n2 && n2 < n3) {
        return "Strict Mode";
    }
    else if (n2 < n3) {
        return "Soft Mode";
    }
    else {
        return "Undefined";
    }
}
console.log(checkNumbers(10, 15, 31));
console.log(checkNumbers(24, 22, 31));
console.log(checkNumbers(22, 22, 31));
console.log(checkNumbers(22, 22, 15));