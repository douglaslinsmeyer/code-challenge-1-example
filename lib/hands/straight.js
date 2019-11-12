"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(hand) {
  var ranks = [hand.cards[0].rank, hand.cards[1].rank, hand.cards[2].rank, hand.cards[3].rank, hand.cards[4].rank].sort();
  return hand.cards[0].rank + 4 === ranks[4];
}