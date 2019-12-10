import straightValidator from './straight';
import parseStringHand from '../handParser';

test('Test that straight hand parser recognizes when a hand is NOT a straight.', () => {
    expect(straightValidator(parseStringHand('2H 3D 8S TC AS'))).toBe(false);
    expect(straightValidator(parseStringHand('2H 3D 8S TC 6S'))).toBe(false);
});

test('Test identification of straight.', () => {
    expect(straightValidator(parseStringHand('2H 3H 4H 5H 6H'))).toBe(true);
    expect(straightValidator(parseStringHand('2H 3C 4H 5S 6D'))).toBe(true);
});