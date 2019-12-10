"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(hand) {
  var rankCounts = Object.values(hand.rankCounts);

  for (var _i = 0, _rankCounts = rankCounts; _i < _rankCounts.length; _i++) {
    var count = _rankCounts[_i];

    if (count === 2) {
      return true;
    }
  }

  return false;
}