function searchNum(intArray) {
    if (intArray.length >= 1) {
        if (intArray[0] === 1 || intArray[intArray.length - 1] === 1) {
            return true;
        }
        return false;
    }
    return false;
}

console.log(searchNum([1, 2, 3, 4]));
console.log(searchNum([5, 4, 3, 2, 1]));
console.log(searchNum([5, 4, 9, 6, 1, 3]));