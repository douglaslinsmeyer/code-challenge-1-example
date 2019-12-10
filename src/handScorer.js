import flushValidator from './hands/flush';
import straightFlushValidator from './hands/straight-flush';
import fourOfAKindValidator from './hands/four-of-a-kind';
import fullHouseValidator from './hands/full-house';
import straightValidator from './hands/straight';
import threeOfAKindValidator from './hands/three-of-a-kind';
import twoPairsValidator from './hands/two-pair';
import onePairValidator from './hands/one-pair';

export const HAND_SCORES = {
    STRAIGHT_FLUSH: 100,
    FOUR_OF_A_KIND: 90,
    FULL_HOUSE: 80,
    FLUSH: 70,
    STRAIGHT: 60,
    THREE_OF_A_KIND: 50,
    TWO_PAIR: 40,
    ONE_PAIR: 30,
}

export default function(hand, debug = false) {
    if (straightFlushValidator(hand)) {

        if (debug) {
            console.log('Straight flush.');
        }

        return HAND_SCORES.STRAIGHT_FLUSH + hand.highCard.rank;
    }

    if (fourOfAKindValidator(hand)) {

        if (debug) {
            console.log('Four of a kind.');
        }

        return HAND_SCORES.FOUR_OF_A_KIND + hand.highCard.rank;
    }

    if (fullHouseValidator(hand)) {

        if (debug) {
            console.log('Full house.');
        }

        return HAND_SCORES.FULL_HOUSE + hand.highCard.rank;
    }

    if (flushValidator(hand)) {

        if (debug) {
            console.log('Flush.');
        }

        return HAND_SCORES.FLUSH + hand.highCard.rank;
    }

    if (straightValidator(hand)) {

        if (debug) {
            console.log('Straight.');
        }

        return HAND_SCORES.STRAIGHT + hand.highCard.rank;
    }

    if (threeOfAKindValidator(hand)) {

        if (debug) {
            console.log('Three of a kind.');
        }

        return HAND_SCORES.THREE_OF_A_KIND + hand.highCard.rank;
    }

    if (twoPairsValidator(hand)) {

        if (debug) {
            console.log('Two pair.');
        }

        return HAND_SCORES.TWO_PAIR + hand.highCard.rank;
    }

    if (onePairValidator(hand)) {

        if (debug) {
            console.log('One pair.');
        }

        return HAND_SCORES.ONE_PAIR + hand.highCard.rank;
    }
    
    return hand.highCard.rank;
}