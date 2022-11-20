function addTwoDigitOfANumber(num) {
    return ((Math.floor(num / 10)) + (num % 10));
}
console.log(addTwoDigitOfANumber(99));