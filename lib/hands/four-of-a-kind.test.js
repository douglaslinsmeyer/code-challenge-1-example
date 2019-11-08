"use strict";

var _hands = _interopRequireDefault(require("../hands"));

var _flush = _interopRequireDefault(require("./flush"));

var _handParser = require("../handParser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Test that flush recognizes when a hand is NOT a flush.', function () {
  expect((0, _flush["default"])((0, _handParser.parseStringHand)(_hands["default"].highCard))).toBe(false);
});
test('Test identification of flush.', function () {
  expect((0, _flush["default"])((0, _handParser.parseStringHand)(_hands["default"].flush))).toBe(true);
});