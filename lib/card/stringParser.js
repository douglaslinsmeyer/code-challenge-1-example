"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handParser = handParser;
exports.cardParser = cardParser;
var SUIT_CLUBS = 'Clubs';
var SUIT_DIAMONDS = 'Diamonds';
var SUIT_HEARTS = 'Hearts';
var SUIT_SPADES = 'Spades';
var RANK_TWO = 2;
var RANK_THREE = 3;
var RANK_FOUR = 4;
var RANK_FIVE = 5;
var RANK_SIX = 6;
var RANK_SEVEN = 7;
var RANK_EIGHT = 8;
var RANK_NINE = 9;
var RANK_TEN = 10;
var RANK_JACK = 11;
var RANK_QUEEN = 12;
var RANK_KING = 13;
var RANK_ACE = 14;
var RANK_MAP = {
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
  'A': RANK_ACE
};
var SUIT_MAP = {
  'C': SUIT_CLUBS,
  'D': SUIT_DIAMONDS,
  'H': SUIT_HEARTS,
  'S': SUIT_SPADES
};

function handParser(stringHandRepresentation) {
  var cards = stringHandRepresentation.split(" ");
  return cards.map(cardParser);
}

function cardParser(stringCardRepresentation) {
  return {
    rank: RANK_MAP[stringCardRepresentation.charAt(0)],
    suit: SUIT_MAP[stringCardRepresentation.charAt(1)]
  };
}