function findLongest(arr) {
    var max = arr[0].length;
    arr.map(v => max = Math.max(max, v.length));
    result = arr.filter(v => v.length == max);
    return result.toString();
}

console.log(findLongest(["a", "ab", "This is the  string", "j", "ll", "oo"]))