import threeOfAKindValidator from './three-of-a-kind';
import parseStringHand from '../handParser';

test('Three of a kind: Negative Identification', () => {
    expect(threeOfAKindValidator(parseStringHand('3D 3H 7C 2D AS'))).toBe(false);
});

test('Three of a kind: Positive Identification', () => {
    expect(threeOfAKindValidator(parseStringHand('3D 3H 3S AD 2S'))).toBe(true);
    expect(threeOfAKindValidator(parseStringHand('3D 3S AD 3H 2S'))).toBe(true);
    expect(threeOfAKindValidator(parseStringHand('3D AD 3H 2S 3S'))).toBe(true);
});