"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(hand) {
  var ranks = [hand[0].rank, hand[1].rank, hand[2].rank, hand[3].rank, hand[4].rank].sort();
  return ranks[0] + 4 === ranks[4];
}