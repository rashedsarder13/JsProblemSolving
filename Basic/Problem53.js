// function abCheck(str) {
//     let i = str.indexOf('a');
//     if (str.split("")[i + 4] == 'b') {
//         return true;
//     }
//     return false;
// }

// console.log(abCheck("Chainsbreak"));

function ab_Check(str) {
    return (/a...b/).test(str) || (/b...a/).test(str);
}

console.log(ab_Check("Chainsbreak"));
console.log(ab_Check("pane borrowed"));
console.log(ab_Check("abCheck"));