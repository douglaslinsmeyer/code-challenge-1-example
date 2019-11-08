import fourOfAKindValidator from './four-of-a-kind';
import { parseStringHand } from '../handParser';

test('Test that four-of-a-kind recognizes when a hand is NOT a four-of-a-kind.', () => {
    expect(fourOfAKindValidator(parseStringHand('2H 4H 8D 6C AS'))).toBe(false);
})

test('Test identification of four-of-a-kind.', () => {
    expect(fourOfAKindValidator(parseStringHand('3H 2H 2D 2S 2C'))).toBe(true);
    expect(fourOfAKindValidator(parseStringHand('2H 3H 2D 2S 2C'))).toBe(true);
    expect(fourOfAKindValidator(parseStringHand('2H 2D 3H 2S 2C'))).toBe(true);
    expect(fourOfAKindValidator(parseStringHand('2H 2D 2S 3H 2C'))).toBe(true);
    expect(fourOfAKindValidator(parseStringHand('2H 2D 2S 2C 3H'))).toBe(true);
});