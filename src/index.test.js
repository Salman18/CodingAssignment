const stringToNumber = require('../src/index');

test('Conversion from String to number',() => {
	expect(stringToNumber("42")).toBe(42)
	expect(stringToNumber("42a")).toBe(42)
	expect(stringToNumber("42a35")).toBe(42)
	expect(stringToNumber("abc42")).toBe(0)
	expect(stringToNumber("-42")).toBe(-42)
})