"use strict";

var _hands = _interopRequireDefault(require("../hands"));

var _straightFlush = _interopRequireDefault(require("./straight-flush"));

var _handParser = require("../handParser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Test identifies a non straight-flush.', function () {
  expect((0, _straightFlush["default"])((0, _handParser.parseStringHand)(_hands["default"].highCard))).toBe(false);
});
test('Test identification of a straight-flush.', function () {
  expect((0, _straightFlush["default"])((0, _handParser.parseStringHand)(_hands["default"].straightFlush))).toBe(true);
});