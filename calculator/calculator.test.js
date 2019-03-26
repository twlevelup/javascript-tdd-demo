const { add } = require('./calculator');

describe('valid additions', () => {
	test('should return 2 when passed 1,1', () => {
		expect(add(1, 1)).toEqual(2);
	});
});
