"use strict";

export default function(hand) {
    const rankCounts = Object.values(hand.rankCounts);

    if (rankCounts.length > 2) {
        return false;
    }

    if (rankCounts[0] === 1 || rankCounts[0] === 4) {
        return true;
    }

    return false;
}