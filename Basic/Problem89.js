function expressionCheck(x, y, z) {
    if (x + y === z) {
        return "x+y=z";
    }
    else if (x - y === z) {
        return "x-y=z";
    }
    else if (x * y === z) {
        return "x*y=z";
    }
    else if (x / y === z) {
        return "x/y=z";
    }
    else {
        return false;
    }
}

console.log(expressionCheck(10, 20, 30))
console.log(expressionCheck(20, 10, 10))
console.log(expressionCheck(20, 10, 200))
console.log(expressionCheck(20, 10, 2))