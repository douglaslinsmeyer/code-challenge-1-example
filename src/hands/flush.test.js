import hands from '../hands';
import flushValidator from './flush';
import { parseStringHand } from '../handParser';

test('Test that flush recognizes when a hand is NOT a flush.', () => {
    expect(flushValidator(parseStringHand(hands.highCard))).toBe(false);
})

test('Test identification of flush.', () => {
    expect(flushValidator(parseStringHand(hands.flush))).toBe(true);
});