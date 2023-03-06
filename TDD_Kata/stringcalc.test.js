const stringCalc = require('./stringCalc');

test('empty should return 0', () => {
    expect(stringCalc('')).toBe(0);
  });

  test('"1" should return 1', () => {
    expect(stringCalc('1')).toBe(1);
  });

  test('"1,2" should return 3', () => {
    expect(stringCalc('1, 2')).toBe(3);
  });

  test('"1,2,7,99, 24" should return 133', () => {
    expect(stringCalc('1,2,7,99, 24')).toBe(133);
  });

  test('"1\n2" should return 3', () => {
    expect(stringCalc('1\n2')).toBe(3);
  });

  test('"1\n2, 3" should return 6', () => {
    expect(stringCalc('1\n2, 3')).toBe(6);
  });
