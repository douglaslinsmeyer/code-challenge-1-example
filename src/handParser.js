"use strict";

const SUIT_CLUBS = 'CLUBS';
const SUIT_DIAMONDS = 'DIAMONDS';
const SUIT_HEARTS = 'HEARTS';
const SUIT_SPADES = 'SPADES';

const RANK_TWO = 2;
const RANK_THREE = 3;
const RANK_FOUR = 4;
const RANK_FIVE = 5;
const RANK_SIX = 6;
const RANK_SEVEN = 7;
const RANK_EIGHT = 8;
const RANK_NINE = 9;
const RANK_TEN = 10;
const RANK_JACK = 11;
const RANK_QUEEN = 12;
const RANK_KING = 13;
const RANK_ACE = 14;

const RANK_MAP = {
    '2': RANK_TWO,
    '3': RANK_THREE,
    '4': RANK_FOUR,
    '5': RANK_FIVE,
    '6': RANK_SIX,
    '7': RANK_SEVEN,
    '8': RANK_EIGHT,
    '9': RANK_NINE,
    'T': RANK_TEN,
    'J': RANK_JACK,
    'Q': RANK_QUEEN,
    'K': RANK_KING,
    'A': RANK_ACE,
};

const SUIT_MAP = {
    'C': SUIT_CLUBS,
    'D': SUIT_DIAMONDS,
    'H': SUIT_HEARTS,
    'S': SUIT_SPADES,
};

export function parseStringCard(stringCardRepresentation) {
    return {
        rank: RANK_MAP[stringCardRepresentation.charAt(0)],
        suit: SUIT_MAP[stringCardRepresentation.charAt(1)]
    }
}

export function parseStringHand(stringHandRepresentation) {
    const cards = stringHandRepresentation.split(" ");
    
    return cards.map(parseStringCard);
}