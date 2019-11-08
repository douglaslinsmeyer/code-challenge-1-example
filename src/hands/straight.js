"use strict";

export default function(hand) {
    const ranks = [hand[0].rank, hand[1].rank, hand[2].rank, hand[3].rank, hand[4].rank].sort();

    return (ranks[0] + 4 === ranks[4]);
}