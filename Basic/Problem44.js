// Q.Write a JavaScript program to check from three given integers that whether a number is greater 
// than or equal to 20 and less than one of the others.

function checkNumber(x, y, z) {
    return (x >= 20 && (x < y || x < z)) ||
        (y >= 20 && (y < x || y < z)) ||
        (z >= 20 && (z < y || z < x));
}

console.log(checkNumber(1, 25, 34));
console.log(checkNumber(20, 1, 34));
console.log(checkNumber(29, 26, 1));
console.log(checkNumber(29, 2, 1));
console.log(checkNumber(2, 2, 1));