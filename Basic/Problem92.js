function consecutiveSub(arr) {
    let r = -1;
    for (let index = 0; index < arr.length; index++) {
        let n = Math.abs(arr[index] - arr[index + 1]);
        if (n > r) {
            r = n;
        }
    }
    return r;
}
console.log(consecutiveSub([1, 2, 3, 8, 9]));