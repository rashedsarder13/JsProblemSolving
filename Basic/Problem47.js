function checkNumber(p, q, r) {
    if (r < p || r > q) {
        return false;
    }
    else {
        if (r >= p && r <= q) {
            return true;
        }
        else {
            return false;
        }
    }
}

console.log(checkNumber(40, 4000, 45));
console.log(checkNumber(40, 4000, 35));