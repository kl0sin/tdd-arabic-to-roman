const arabicToRome = require('./arabit-to-rome');

describe('Arabic to Rome', function() {
    it('has tests', function() {
        expect(arabicToRome).toBeDefined();
    });

    it('should return error message for 0', function() {
        expect(arabicToRome(0)).toBe('There is no 0 number in Roman numerals');
    });

    it('should return error message for to big number', function() {
        expect(arabicToRome(4000)).toBe('The biggest number in Roman numerals is 3999');
    });

    [
        {value: 1, result: 'I'},
        {value: 2, result: 'II'},
        {value: 3, result: 'III'},
        {value: 4, result: 'IV'},
        {value: 5, result: 'V'},
        {value: 6, result: 'VI'},
        {value: 7, result: 'VII'},
        {value: 8, result: 'VIII'},
        {value: 9, result: 'IX'},
        {value: 10, result: 'X'}
    ].forEach(function (testCase) {
        it('should return ' + testCase.result + ' for ' + testCase.value + ' on input', function() {
            expect(arabicToRome(testCase.value)).toBe(testCase.result);
        });
    });
});
