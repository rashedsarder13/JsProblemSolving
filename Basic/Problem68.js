function getString(str, n) {
    if (str.length >= n)
        return str.substring(0, n) + str.substring(str.length - n)
    return false;
}

console.log(getString("abcdefgh", 2));
console.log(getString("abcdefgh", 3));
console.log(getString("ab", 3));