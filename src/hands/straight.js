"use strict";

export default function(hand) {
    const rankCounts = Object.values(hand.rankCounts);
    const ranks = [hand.cards[0].rank, hand.cards[1].rank, hand.cards[2].rank, hand.cards[3].rank, hand.cards[4].rank].sort();

    return (hand.cards[0].rank + 4 === ranks[4] && rankCounts.length === 5);
}