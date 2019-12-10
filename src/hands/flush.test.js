import flushValidator from './flush';
import parseStringHand from '../handParser';

test('Test that flush recognizes when a hand is NOT a flush.', () => {
    expect(flushValidator(parseStringHand('AS 2H 3H 5D 7C'))).toBe(false);
})

test('Test identification of flush.', () => {
    expect(flushValidator(parseStringHand('AS 2S 3S 5S 7S'))).toBe(true);
});