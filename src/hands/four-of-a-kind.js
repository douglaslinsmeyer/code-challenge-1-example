"use strict";

export default function(cards) {
    cards.sort();
    
    return (cards[0].rank === cards[3].rank || cards[1].rank === cards[4].rank);
}