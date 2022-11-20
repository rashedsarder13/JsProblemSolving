function arrOperation(arr) {
    if (arr.indexOf(1) == -1 && arr.indexOf(3) == -1) {
        return true;
    } else {
        return false;
    }
}
console.log(arrOperation([1, 2]));
console.log(arrOperation([2, 3]));
console.log(arrOperation([3, 4]));
console.log(arrOperation([4, 5]));