function newArray(arr1, arr2) {
    let resArr = [];
    if (arr1.length === 3 && arr2.length === 3) {
        resArr.push(arr1[1], arr2[1]);
        return resArr;
    }
    return false;
}

console.log(newArray([1, 2, 3], [4, 5, 6]));