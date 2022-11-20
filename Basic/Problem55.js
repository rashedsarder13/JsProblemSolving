function replaceEqual(str) {
    return str.replace(/[^p]/g, "").length === str.replace(/[^t]/g, "").length;
}

console.log(replaceEqual("poptott"));