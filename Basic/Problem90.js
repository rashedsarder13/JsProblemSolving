function kthGreatestNum(arr, k) {
    let sortedItems = arr.sort(function (a, b) { return a - b });
    return sortedItems.reverse()[k];
}

console.log(kthGreatestNum([15, 5, 9, 1, 3, 2, 7, 0], 2));