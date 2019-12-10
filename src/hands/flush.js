"use strict";

export default function(hand) {
    return (Object.keys(hand.suitCounts).length === 1);
}