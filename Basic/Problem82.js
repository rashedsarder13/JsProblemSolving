function withOutCarry(n1, n2) {
    var result = 0,
        x = 1;
    while (n1 > 0 && n2 > 0) {
        result += x * ((n1 + n2) % 10);
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
        x *= 10;
    }
    return result;
}
console.log(withOutCarry(222, 911));
console.log(withOutCarry(200, 900));
