function swapArrSameCheck(arra1, arra2) {
    for (var i = 0; i < arra1.length; i++) {
        for (var j = i; j < arra1.length; j++) {
            var result = true,
                temp = arra1[i];
            arra1[i] = arra1[j];
            arra1[j] = temp;
            for (var k = 0; k < arra1.length; k++) {
                if (arra1[k] !== arra2[k]) {
                    result = false;
                    break;
                }
            }
            if (result) {
                return true;
            }
            arra1[j] = arra1[i];
            arra1[i] = temp;
        }
    }
    return false;
}