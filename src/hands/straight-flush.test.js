import straightFlushValidator from './straight-flush';
import parseStringHand from '../handParser';

test('Test identifies a non straight-flush.', () => {
    expect(straightFlushValidator(parseStringHand('2H 3H 4H 5H 7H'))).toBe(false);
})

test('Test identification of a straight-flush.', () => {
    expect(straightFlushValidator(parseStringHand('2H 3H 4H 5H 6H'))).toBe(true);
});