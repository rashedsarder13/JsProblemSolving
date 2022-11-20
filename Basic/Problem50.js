function capitalizedWord(str) {
    let r = str.split(" ");
    for (let i = 0; i < r.length; i++) {
        r[i] = r[i].charAt(0).toUpperCase() + r[i].slice(1);
    }
    return r.join(" ");
}

console.log(capitalizedWord("nature never did bitray the heart that loved her"));