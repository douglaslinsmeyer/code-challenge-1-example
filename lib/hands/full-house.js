"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(hand) {
  var rankCounts = Object.values(hand.rankCounts);

  if (rankCounts.length !== 2) {
    return false;
  }

  if (rankCounts[0] === 2 || rankCounts[0] === 3) {
    return true;
  }

  return false;
}