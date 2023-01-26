function getLargestEvenNumber(arr) {
    let largestEven = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i] > largestEven) {
            largestEven = arr[i];
        }
    }
    return largestEven;
}
let numbers = [2, 4, 5, 7, 8, 11, 13, 15, 20];
console.log(getLargestEvenNumber(numbers));
