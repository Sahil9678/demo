import sum from './sum.js';

describe("test for sum function", () => {
    test("add 2+ 2 to equal 4", () => {
        expect(sum(2,2)).toBe(4);
    });


    test("add -2 - 4 to equal -6", () => {
        expect(sum(-2,-4)).toBe(-6);
    })
})

