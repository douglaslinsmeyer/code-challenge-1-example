"use strict";

var _twoPair = _interopRequireDefault(require("./two-pair"));

var _handParser = _interopRequireDefault(require("../handParser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Two Pair: Negative Identification', function () {
  expect((0, _twoPair["default"])((0, _handParser["default"])('3D 3H 7C 2D AS'))).toBe(false);
});
test('Two Pair: Positive Identification', function () {
  expect((0, _twoPair["default"])((0, _handParser["default"])('3D 3H 2S AD 2S'))).toBe(true);
  expect((0, _twoPair["default"])((0, _handParser["default"])('3D 3S AD AH 2S'))).toBe(true);
  expect((0, _twoPair["default"])((0, _handParser["default"])('3D AD 5H AS 3S'))).toBe(true);
});