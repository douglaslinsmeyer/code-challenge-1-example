"use strict";

export default function(hand) {
    const rankCounts = Object.values(hand.rankCounts);
    for (const count of rankCounts) {
        if (count === 2) {
            return true;
        }
    }

    return false;
}