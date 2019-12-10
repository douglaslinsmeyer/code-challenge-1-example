"use strict";

export default function(hand) {
    const rankCounts = Object.values(hand.rankCounts);
    let pairCount = 0;
    for (const count of rankCounts) {
        if (count === 3 || count === 4) {
            return false;
        }

        if (count === 2) {
            pairCount++;
        }

        if (pairCount === 2) {
            return true;
        }
    }

    return false;
}