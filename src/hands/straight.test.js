import hands from '../hands';
import straightValidator from './straight';
import { parseStringHand } from '../handParser';

test('Test that straight hand parser recognizes when a hand is NOT a straight.', () => {
    expect(straightValidator(parseStringHand(hands.highCard))).toBe(false);
});

test('Test identification of straight.', () => {
    expect(straightValidator(parseStringHand(hands.straight))).toBe(true);
});