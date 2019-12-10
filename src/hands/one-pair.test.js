import onePairValidator from './one-pair';
import parseStringHand from '../handParser';

test('One Pair: Negative Identification', () => {
    expect(onePairValidator(parseStringHand('3D 5H 7C 2D AS'))).toBe(false);
});

test('One Pair: Positive Identification', () => {
    expect(onePairValidator(parseStringHand('3D 3H 2S AD 6S'))).toBe(true);
    expect(onePairValidator(parseStringHand('3D 2S AD 3H 6S'))).toBe(true);
    expect(onePairValidator(parseStringHand('3D 2S AD 6S 3H'))).toBe(true);
});