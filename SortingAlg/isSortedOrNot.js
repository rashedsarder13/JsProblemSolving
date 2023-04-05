const isSortedOrNot = arr => {
    if (arr.length <= 1) return 0;
    const direction = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
        if ((arr[i] - arr[i - 1]) * direction < 0) return 0;
    }
    return Math.sign(direction);
};
console.log(isSortedOrNot([0, 1, 2, 2]));
console.log(isSortedOrNot([4, 3, 2]));
console.log(isSortedOrNot([4, 3, 5]));
console.log(isSortedOrNot([4]));
