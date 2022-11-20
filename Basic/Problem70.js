function rotateArray(intArray) {
    if (intArray.length > 0) {
        let fIndex = intArray[0];
        for (let i = 0; i < intArray.length; i++) {
            intArray[i] = intArray[i + 1];
        }
        intArray[intArray.length - 1] = fIndex;
        return intArray;
    }
}
console.log(rotateArray([1, 2, 3, 4]));