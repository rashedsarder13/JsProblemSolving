function consecutiveAdd(arr) {
    let r = -1;
    for (let index = 0; index < arr.length; index++) {
        let n = arr[index] + arr[index + 1];
        if (n > r) {
            r = n;
        }
    }
    return r;
}
console.log(consecutiveAdd([1, 2, 3, 14, 5]));