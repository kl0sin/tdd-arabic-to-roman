module.exports = function arabicToRome(number) {
    if (number === 0) {
        return ('There is no 0 number in Roman numerals');
    } else if (number > 3999) {
        return ('The biggest number in Roman numerals is 3999');
    } else {
        const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
        let result = '';
        for (let i = 0; i <= decimal.length; i++) {
            while (number % decimal[i] < number) {
                result += roman[i];
                number -= decimal[i];
            }
        }
        return result;
    }
}