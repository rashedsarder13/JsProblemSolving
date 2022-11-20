function convertTime(number) {
    if (number >= 60) {
        return Math.floor(number / 60) + " " + "hour" + " " + (number % 60) + " " + "minute";
    }
    else {
        return number + " " + "minute";
    }
}

console.log(convertTime(450));
console.log(convertTime(36));