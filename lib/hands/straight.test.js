"use strict";

var _hands = _interopRequireDefault(require("../hands"));

var _straight = _interopRequireDefault(require("./straight"));

var _handParser = require("../handParser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Test that straight hand parser recognizes when a hand is NOT a straight.', function () {
  expect((0, _straight["default"])((0, _handParser.parseStringHand)(_hands["default"].highCard))).toBe(false);
});
test('Test identification of straight.', function () {
  expect((0, _straight["default"])((0, _handParser.parseStringHand)(_hands["default"].straight))).toBe(true);
});