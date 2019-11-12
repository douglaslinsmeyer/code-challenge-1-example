"use strict";

export default function(hand) {
    const rankCounts = Object.values(hand.rankCounts);
    if (rankCounts.length > 3) {
        return false;
    }
    
    for (const rankCount of rankCounts) {
        if (rankCount >= 3) {
            return true;
        }
    }

    return false;
}