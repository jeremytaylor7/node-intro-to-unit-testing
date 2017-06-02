const fizzBuzzer = require('../fizzBuzzer.js');
const should = require('chai').should();

describe('fizz buzzer', function () {
    it('input should return fizz or buzz if multiple of 3 or 5',
        function () {
            const normalCases = [
                { a: 3, expected: 'fizz' },
                { a: 5, expected: 'buzz' },
                { a: 15, expected: 'fizz-buzz' },
                { a: 30, expected: 'fizz-buzz' }
            ];
            normalCases.forEach(function (input) {
                const answer = fizzBuzzer(input.a);
                answer.should.equal(input.expected);
            })
        }
    )
})
describe('fizz buzzer edge cases', function () {
    it('should throw error if input is not an integer',
        function () {
            const edgeCases = [
                { a: 'hello' },
                { a: 'fizz' }
            ]
            edgeCases.forEach(function (input) {
                const answer = fizzBuzzer(input.a);
                answer.should.throw(Error);
            })
        }
    )
})