function charCheck(str) {
    // if (str.length > 0 && str.charAt(0) === "P" || str.charAt(str.length - 1) === "P") {
    //     return str.substring(1, str.length - 1)
    // }
    // return str;
    let start_pos = 0;
    let end_pos = str.length;
    if (str.length > 0 && str.charAt(0) == 'P') {
        start_pos = 1;
    }
    if (str.length > 1 && str.charAt(str.length - 1) == 'P') {
        end_pos--;
    }

    return str.substring(start_pos, end_pos);
}

console.log(charCheck("Php"))
console.log(charCheck("Python"))
console.log(charCheck("Java"))