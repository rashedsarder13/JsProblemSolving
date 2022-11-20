function numberOfDigit(arrOfName) {
    let result = 0;
    if (arrOfName.length === 3) {
        for (let i = 0; i < arrOfName.length; i++) {
            result = result + arrOfName[i];
        }
        return result;
    }
    return false;
}
console.log(numberOfDigit([5, 6, 3]));