function sameDevisor(arr, devisor) {
    if (arr.length >= 2) {
        return (arr[0] % devisor === 0 && arr[1] % devisor === 0) || (arr[0] % devisor !== 0 && arr[1] % devisor !== 0);
    }
    return false;
}

console.log(sameDevisor([10, 15], 5))
console.log(sameDevisor([10, 18], 6))