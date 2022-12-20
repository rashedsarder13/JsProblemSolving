function check_common_element(arra1, arra2) {
    for (let i = 0; i < arra1.length; i++) {
        if (arra2.includes(arra1[i]))
            return true;
    }
    return false;
}
console.log(check_common_element([1, 2, 3], [3, 4, 5]));
console.log(check_common_element([1, 2, 3], [5, 6, 7]));