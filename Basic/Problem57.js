function copyString(str, numOfCopy) {
    if (numOfCopy < 0)
        return false;
    else
        return str.repeat(numOfCopy);
}
console.log(copyString("abc", 3));