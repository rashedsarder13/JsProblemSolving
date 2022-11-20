function frontThreeChar(str) {
    // if (str.length >= 3) {
    //     let lastThree = str.substring(str.length - 3);
    //     let rest = str.substring(0, str.length - 3);
    //     return lastThree + rest;
    // }
    // return false;
    if (str.length > 1) {
        return str.slice(-3) + str.slice(0, -3);
    }
    return str;
}

console.log(frontThreeChar("MdRashed"));