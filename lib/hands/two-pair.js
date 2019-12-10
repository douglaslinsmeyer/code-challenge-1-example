"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(hand) {
  var rankCounts = Object.values(hand.rankCounts);
  var pairCount = 0;

  for (var _i = 0, _rankCounts = rankCounts; _i < _rankCounts.length; _i++) {
    var count = _rankCounts[_i];

    if (count === 3 || count === 4) {
      return false;
    }

    if (count === 2) {
      pairCount++;
    }

    if (pairCount === 2) {
      return true;
    }
  }

  return false;
}