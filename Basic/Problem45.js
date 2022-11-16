//45. Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.
function check45(n1, n2) {
    if (n1 == 15 || n2 == 15 || n1 + n2 == 15 || Math.abs(n1 - n2) == 15) {
        return true;
    }
    return false;
}
console.log(check45(15, 12));
console.log(check45(12, 15));
console.log(check45(13, 2));
console.log(check45(17, 2));
console.log(check45(23, 8));
console.log(check45(15, 25));
console.log(check45(2, 8));
