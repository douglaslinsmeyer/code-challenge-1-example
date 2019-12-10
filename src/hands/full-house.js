"use strict";

export default function(hand) {
    const rankCounts = Object.values(hand.rankCounts);
    if (rankCounts.length !== 2) {
        return false;
    }

    if (rankCounts[0] === 2 || rankCounts[0] === 3) {
        return true;
    }

    return false;
}