function twiceCheck(arr) {
    return (arr[0] === 30 && arr[1] === 30) || (arr[0] === 40 && arr[1] === 40);
}
console.log(twiceCheck([30, 30]));
console.log(twiceCheck([40, 40]));
console.log(twiceCheck([40, 50]));