function checkSameDigit(p, q, r) {
    return (p % 10 === q % 10) ||
        (p % 10 === r % 10) ||
        (q % 10 === r % 10);

}

console.log(checkSameDigit(1, 12, 123));
console.log(checkSameDigit(22, 32, 42));
console.log(checkSameDigit(102, 302, 2));
console.log(checkSameDigit(20, 22, 45));