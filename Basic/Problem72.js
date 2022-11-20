function searchNum(intArray) {
    if (intArray.length >= 3) {
        if (intArray[0] === intArray[intArray.length - 1]) {
            return true;
        }
        return false;
    }
    return false;
}

console.log(searchNum([5, 4, 5]));
console.log(searchNum([5, 4, 0]));
console.log(searchNum([1, 2, 3, 4]));