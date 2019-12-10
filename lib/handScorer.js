"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.HAND_SCORES = void 0;

var _flush = _interopRequireDefault(require("./hands/flush"));

var _straightFlush = _interopRequireDefault(require("./hands/straight-flush"));

var _fourOfAKind = _interopRequireDefault(require("./hands/four-of-a-kind"));

var _fullHouse = _interopRequireDefault(require("./hands/full-house"));

var _straight = _interopRequireDefault(require("./hands/straight"));

var _threeOfAKind = _interopRequireDefault(require("./hands/three-of-a-kind"));

var _twoPair = _interopRequireDefault(require("./hands/two-pair"));

var _onePair = _interopRequireDefault(require("./hands/one-pair"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HAND_SCORES = {
  STRAIGHT_FLUSH: 100,
  FOUR_OF_A_KIND: 90,
  FULL_HOUSE: 80,
  FLUSH: 70,
  STRAIGHT: 60,
  THREE_OF_A_KIND: 50,
  TWO_PAIR: 40,
  ONE_PAIR: 30
};
exports.HAND_SCORES = HAND_SCORES;

function _default(hand) {
  var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if ((0, _straightFlush["default"])(hand)) {
    if (debug) {
      console.log('Straight flush.');
    }

    return HAND_SCORES.STRAIGHT_FLUSH + hand.highCard.rank;
  }

  if ((0, _fourOfAKind["default"])(hand)) {
    if (debug) {
      console.log('Four of a kind.');
    }

    return HAND_SCORES.FOUR_OF_A_KIND + hand.highCard.rank;
  }

  if ((0, _fullHouse["default"])(hand)) {
    if (debug) {
      console.log('Full house.');
    }

    return HAND_SCORES.FULL_HOUSE + hand.highCard.rank;
  }

  if ((0, _flush["default"])(hand)) {
    if (debug) {
      console.log('Flush.');
    }

    return HAND_SCORES.FLUSH + hand.highCard.rank;
  }

  if ((0, _straight["default"])(hand)) {
    if (debug) {
      console.log('Straight.');
    }

    return HAND_SCORES.STRAIGHT + hand.highCard.rank;
  }

  if ((0, _threeOfAKind["default"])(hand)) {
    if (debug) {
      console.log('Three of a kind.');
    }

    return HAND_SCORES.THREE_OF_A_KIND + hand.highCard.rank;
  }

  if ((0, _twoPair["default"])(hand)) {
    if (debug) {
      console.log('Two pair.');
    }

    return HAND_SCORES.TWO_PAIR + hand.highCard.rank;
  }

  if ((0, _onePair["default"])(hand)) {
    if (debug) {
      console.log('One pair.');
    }

    return HAND_SCORES.ONE_PAIR + hand.highCard.rank;
  }

  return hand.highCard.rank;
}