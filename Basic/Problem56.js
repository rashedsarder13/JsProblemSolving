function commaSeparatedNumberToString(bigNum, smallNum) {
    let result = Math.round(bigNum / smallNum).toString().split("");
    let gString = "";
    for (var i = result.length - 3; i > 0; i -= 3) {
        result.splice(i, 0, ",");
    };
    return result;
}

console.log(commaSeparatedNumberToString(1000, 6));