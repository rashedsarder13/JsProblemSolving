function FandLArr(arr) {
    if (arr.indexOf(1) != -1 || arr.indexOf(3) != -1) {
        return true
    }
    return false;
}
console.log(FandLArr([1, 2]));
console.log(FandLArr([2, 3]));
console.log(FandLArr([2, 4]));