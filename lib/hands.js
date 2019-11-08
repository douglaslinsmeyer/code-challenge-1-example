"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _highCard$onePair$two;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (_highCard$onePair$two = {
  highCard: 'QS 2H 5D 3S 7S',
  onePair: 'QS 2D 2H 4S 5S',
  twoPair: 'QS 2D 2H 4S 4H',
  threeOfAKind: '2S 2D 2H 4S QH',
  straight: '2H 3S 4S 5C 6D',
  flush: '2H 5H 6H TH QH AH',
  fullHouse: '2S 2D 2H 4S 4H'
}, _defineProperty(_highCard$onePair$two, "fullHouse", '2S 2D 2H 2C 4H'), _defineProperty(_highCard$onePair$two, "straightFlush", '2H 3H 4H 5H 6H'), _defineProperty(_highCard$onePair$two, "royalFlush", 'TH JH QH KH AH'), _highCard$onePair$two);

exports["default"] = _default;