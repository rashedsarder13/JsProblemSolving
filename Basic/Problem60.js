function removeChar(str) {
    if (str.length > 1) {
        return str.substring(1, str.length - 1);
    }
    return false;
}
console.log(removeChar("Sarder"));