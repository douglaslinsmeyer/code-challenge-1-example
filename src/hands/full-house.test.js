import fullHouseValidator from './full-house';
import parseStringHand from '../handParser';

test('Full House: Negative Identification', () => {
    expect(fullHouseValidator(parseStringHand('3D 3H 7C 2D AS'))).toBe(false);
});

test('Full House: Positive Identification', () => {
    expect(fullHouseValidator(parseStringHand('3D 2S 2D 3H 2C'))).toBe(true);
    expect(fullHouseValidator(parseStringHand('2S 2D 3D 3H 2C'))).toBe(true);
    expect(fullHouseValidator(parseStringHand('2S 2D 2C 3D 3H'))).toBe(true);
});