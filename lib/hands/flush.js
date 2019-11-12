"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(hand) {
  if (hand.cards[0].suit !== hand.cards[1].suit || hand.cards[0].suit !== hand.cards[2].suit || hand.cards[0].suit !== hand.cards[3].suit || hand.cards[0].suit !== hand.cards[4].suit) {
    return false;
  }

  return true;
}