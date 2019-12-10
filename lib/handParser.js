"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.SUIT_MAP = exports.RANK_MAP = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SUIT_CLUBS = 'CLUBS';
var SUIT_DIAMONDS = 'DIAMONDS';
var SUIT_HEARTS = 'HEARTS';
var SUIT_SPADES = 'SPADES';
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
exports.RANK_MAP = RANK_MAP;
var SUIT_MAP = {
  'C': SUIT_CLUBS,
  'D': SUIT_DIAMONDS,
  'H': SUIT_HEARTS,
  'S': SUIT_SPADES
};
exports.SUIT_MAP = SUIT_MAP;

function _default(stringHandRepresentation) {
  var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var stringCardsArray = stringHandRepresentation.split(" ");
  var hand = {
    cards: [],
    highCard: null,
    rankCounts: {},
    suitCounts: {}
  };
  stringCardsArray.forEach(function (stringCardRepresentation) {
    var rank = RANK_MAP[stringCardRepresentation.charAt(0)];
    var suit = SUIT_MAP[stringCardRepresentation.charAt(1)];

    var card = _defineProperty({
      rank: rank,
      suit: suit
    }, "suit", suit);

    hand.cards.push(card);

    if (undefined == hand.rankCounts[rank]) {
      hand.rankCounts[rank] = 0;
    }

    if (undefined == hand.suitCounts[suit]) {
      hand.suitCounts[suit] = 0;
    }

    hand.rankCounts[rank]++;
    hand.suitCounts[suit]++;

    if (null === hand.highCard || rank > hand.highCard.rank) {
      hand.highCard = card;
    }
  });

  if (debug) {
    console.log(hand);
  }

  return hand;
}