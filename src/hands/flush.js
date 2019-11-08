"use strict";

export default function(hand) {
    if (
        hand[0].suit !== hand[1].suit 
        || hand[0].suit !== hand[2].suit
        || hand[0].suit !== hand[3].suit
        || hand[0].suit !== hand[4].suit
    ) {
        return false;
    }

    return true;
}