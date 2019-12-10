import twoPairValidator from './two-pair';
import parseStringHand from '../handParser';

test('Two Pair: Negative Identification', () => {
    expect(twoPairValidator(parseStringHand('3D 3H 7C 2D AS'))).toBe(false);
});

test('Two Pair: Positive Identification', () => {
    expect(twoPairValidator(parseStringHand('3D 3H 2S AD 2S'))).toBe(true);
    expect(twoPairValidator(parseStringHand('3D 3S AD AH 2S'))).toBe(true);
    expect(twoPairValidator(parseStringHand('3D AD 5H AS 3S'))).toBe(true);
});