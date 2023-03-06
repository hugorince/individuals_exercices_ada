const gregorian = require('./gregorian');

test('400 should return true', () => {
    expect(gregorian(400)).toBe(true);
});

test('1700 should return false', () => {
    expect(gregorian(1700)).toBe(false);
});

test('1800 should return false', () => {
    expect(gregorian(1800)).toBe(false);
});

test('1900 should return false', () => {
    expect(gregorian(1900)).toBe(false);
});

test('2008 should return true', () => {
    expect(gregorian(2008)).toBe(true);
});

test('2012 should return false', () => {
    expect(gregorian(2012)).toBe(true);
});
