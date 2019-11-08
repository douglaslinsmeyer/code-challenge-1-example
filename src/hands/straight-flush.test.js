import hands from '../hands';
import straightFlushValidator from './straight-flush';
import { parseStringHand } from '../handParser';

test('Test identifies a non straight-flush.', () => {
    expect(straightFlushValidator(parseStringHand(hands.highCard))).toBe(false);
})

test('Test identification of a straight-flush.', () => {
    expect(straightFlushValidator(parseStringHand(hands.straightFlush))).toBe(true);
});