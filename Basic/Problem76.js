function FandLArr(arr) {
    let resArr = [];
    if (arr.length >= 1) {
        resArr.push(arr[0], arr[arr.length - 1]);
        return resArr;
    }
    return false;
}
console.log(FandLArr([1, 2, 3, 4]));
console.log(FandLArr([1]));