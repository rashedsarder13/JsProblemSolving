// 41. Write a JavaScript program to check three given numbers, if the three numbers are same return 30 
// otherwise return 20 and if two numbers are same return 40.
function numberMatchingCheck(n1, n2, n3) {
    if (n1 == n2 && n2 == n3) {
        return 30;
    }
    else if (n1 == n2 || n1 == n3 || n2 == n3) {
        return 40;
    }
    else {
        return 20;
    }
}

console.log(numberMatchingCheck(8, 7, 18));
console.log(numberMatchingCheck(8, 8, 18));
console.log(numberMatchingCheck(8, 8, 8));