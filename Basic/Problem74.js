function allMax(arr) {
    let maxNum = arr[0] > arr[2] ? arr[0] : arr[2];
    arr[0] = maxNum;
    arr[1] = maxNum;
    arr[2] = maxNum;
    return arr;
}

console.log(allMax([10, 20, 30]));
console.log(allMax([70, 50, 40]));