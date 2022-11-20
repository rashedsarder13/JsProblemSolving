function countVowel(str) {
    // let s = str.toLowerCase().split("");
    // let c = 0;
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
    //         c += 1;
    //     }
    // }
    // return c;

    return str.replace(/[^aeiou]/g, "").length;
}

console.log(countVowel('Fausal'));