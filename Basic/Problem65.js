function lastStringCheck(str) {
    if (str.length >= 6) {
        if (str.substring(str.length - 6, str.length) === "Script") {
            return true;
        }
        return false;
    }
    else {
        return false;
    }
}
console.log(lastStringCheck("JavatyuiScript"));
console.log(lastStringCheck("JaScriptt"));
console.log(lastStringCheck("Java"));