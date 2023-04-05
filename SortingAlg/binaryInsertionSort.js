function binaryInsertionSort(array) {
  const totalLength = array.length
  for (let i = 1; i < totalLength; i += 1) {
    const key = array[i]
    const indexPosition = binarySearch(array, key, 0, i - 1)
    array.splice(i, 1)
    array.splice(indexPosition, 0, key)
  }
  return array
}
arr = [3, 1, 8, 9, 5]
console.log("Original Array: " + arr)
result = binaryInsertionSort(arr)
console.log("Sorted Array: " + result)
arr = [2, 4, 1, 7, 6, 9, 5]
console.log("Original Array: " + arr)
result = binaryInsertionSort(arr)
console.log("Sorted Array: " + result) 