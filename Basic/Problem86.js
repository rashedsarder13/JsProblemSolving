function angleCheck(angle) {
    if (angle < 90) {
        return 'Acute Angle';
    }
    else if (angle == 90) {
        return 'Right Angle';
    }
    else if (angle > 90 && angle < 180) {
        return 'Obtuse Angle';
    }
    else if (angle == 180) {
        return 'Straight Angle';
    }
}

console.log(angleCheck(120))