function maximalSub(arr) {
    let r = 0;
    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                let dif = Math.abs(arr[i] - arr[j])
                if (r < dif) {
                    r = Math.max(r, dif);
                }
            }
        }
    }
    return r;
}
console.log(maximalSub([1, 2, 3, 18, 9]));