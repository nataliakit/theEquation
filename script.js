function equation() {
    let a = document.querySelector('.squareEquation__firstNumber').value;
    let b = document.querySelector('.squareEquation__secondNumber').value;
    let c = document.querySelector('.squareEquation__thirdNumber').value;

    if (a === 0) {
        return false;
    }

    let result = [];
    let Dis = b * b - 4 * a * c;
    document.getElementById('answer').value = Dis;

    if (Dis > 0) {
        result.push((-b + Math.sqrt(Dis)) / (2 * a));
        result.push((-b - Math.sqrt(Dis)) / (2 * a));

    } else if (Dis === 0) {
        result = (-b / (2 * a));
    }else if (Dis < 0) {
        return false;
    }
    return result;
}
