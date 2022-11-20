function copyChar(str) {
    if (str.length % 2 === 0) {
        let s = str.substring(0, str.length / 2);
        return s;
    }
    return str;
}

console.log(copyChar("JavaScript"));