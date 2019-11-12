"use strict";

var _fourOfAKind = _interopRequireDefault(require("./four-of-a-kind"));

var _handParser = require("../handParser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Test that four-of-a-kind recognizes when a hand is NOT a four-of-a-kind.', function () {
  expect((0, _fourOfAKind["default"])((0, _handParser.parseStringHand)('2H 4H 8D 6C AS'))).toBe(false);
});
test('Test identification of four-of-a-kind.', function () {
  expect((0, _fourOfAKind["default"])((0, _handParser.parseStringHand)('3H 2H 2D 2S 2C'))).toBe(true);
  expect((0, _fourOfAKind["default"])((0, _handParser.parseStringHand)('2H 3H 2D 2S 2C'))).toBe(true);
  expect((0, _fourOfAKind["default"])((0, _handParser.parseStringHand)('2H 2D 3H 2S 2C'))).toBe(true);
  expect((0, _fourOfAKind["default"])((0, _handParser.parseStringHand)('2H 2D 2S 3H 2C'))).toBe(true);
  expect((0, _fourOfAKind["default"])((0, _handParser.parseStringHand)('2H 2D 2S 2C 3H'))).toBe(true);
});