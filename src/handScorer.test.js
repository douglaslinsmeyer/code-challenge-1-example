import handScorer, {HAND_SCORES } from './handScorer';
import handParser, { RANK_MAP } from './handParser';

test('Test scoring', () => {
    expect(handScorer(handParser('3D 3H 7C 2D AS'))).toBe(HAND_SCORES.ONE_PAIR + RANK_MAP.A);
    expect(handScorer(handParser('3D 3H 3C 2D AS'))).toBe(HAND_SCORES.THREE_OF_A_KIND + RANK_MAP.A);
});