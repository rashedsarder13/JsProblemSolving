function convertString(str) {
    let up = 0, low = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toUpperCase() === str[i]) {
            up = up + 1;
        }
        else if (str[i].toLowerCase() === str[i]) {
            low = low + 1;
        }
    }
    if (up > low) {
        return str.toUpperCase();
    }
    else {
        return str.toLowerCase();
    }
}

console.log(convertString("Write"));
console.log(convertString("PHp"));