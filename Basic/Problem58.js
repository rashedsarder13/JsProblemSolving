function copyThreeChar(str) {
    if (str.length >= 3) {
        let s = str.substring(str.length - 3);
        return s.repeat(4);
    }
    return false;
}

console.log(copyThreeChar("1234"));